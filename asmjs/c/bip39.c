#include <stdlib.h>
#include <stdio.h>
#include "word256.h"
#include "sha2.h"

//#define BYTE_ORDER LITTLE_ENDIAN

int entropyToSeed(word256* entropy) {
    printf("%d, %d\n", BYTE_ORDER, LITTLE_ENDIAN);
    SHA256_CTX context;
    uint8_t digest[SHA256_DIGEST_LENGTH];
    //entropy->w2 = 0;
    for (int i = 0; i < 16; i++) {
        printf("%2x", ((uint8_t*)(&entropy->w2))[i]);
    }
    printf("\n");
    printf("%llx\n%llx\n", entropy->w2, *(&entropy->w2 + 1));
    SHA256_Init(&context);
	SHA256_Update(&context, (uint8_t*)(entropy + 2), sizeof(uint64_t)*2);
	SHA256_Final(digest, &context);
    printf("%x%x\n", digest[0], digest[1]);
    shl256(entropy, 4);
    entropy->w3 += digest[0] >> 4;
    return (int)(digest[0] & 0xff);
}