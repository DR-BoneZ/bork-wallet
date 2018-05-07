#include <stdlib.h>
#include <string.h>
#include "word256.h"
#include "sha2.h"
#include "bip39.h"

void entropyToSeed(word256 entropy) {
    SHA256_CTX context;
    uint8_t digest[SHA256_DIGEST_LENGTH];
    SHA256_Init(&context);
	SHA256_Update(&context, (uint8_t*)(entropy + 16), 16);
	SHA256_Final(digest, &context);
    shl256(entropy, 4);
    entropy[31] += digest[0] >> 4;
}

char** seedToMneumonic (word256 seed) {
    word256 buf;
    word256 mask;
    word256 _seed;
    memcpy(_seed, seed, 32);
    shl256(mask, 256);
    mask[31] = 255;
    mask[30] = 7;
    int idx;
    char** mneumonic = malloc(sizeof(char*) * 12);
    for (int i = 0; i < 12; i++) {
        and256(_seed, mask, buf);
        idx = (buf[30] << 8) + buf[31];
        mneumonic[i] = (char*) mneumonics[idx];
        shr256(_seed, 11);
    }
    return mneumonic;
}
