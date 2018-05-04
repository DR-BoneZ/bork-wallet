#include <stdint.h>

#define WORD256_BYTES 32
typedef uint8_t word256[WORD256_BYTES];

void shl256(word256, uint32_t);

void shr256(word256, uint32_t);

void add256(word256, word256, word256);

void sub256(word256, word256, word256);

void and256(word256, word256, word256);

void or256(word256, word256, word256);
