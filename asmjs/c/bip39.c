#include <stdlib.h>
#include <stdio.h>
#include "word256.h"
#include "sha2.h"

//#define BYTE_ORDER LITTLE_ENDIAN

int entropyToSeed(word256 entropy) {
    SHA256_CTX context;
    uint8_t digest[SHA256_DIGEST_LENGTH];
    SHA256_Init(&context);
	SHA256_Update(&context, (uint8_t*)(entropy + 2), sizeof(uint64_t)*2);
	SHA256_Final(digest, &context);
    shl256(entropy, 4);
    entropy[31] += digest[0] >> 4;
    return (int)(digest[0] & 0xff);
}