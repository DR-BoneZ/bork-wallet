#include <stdint.h>

struct word256 {
    uint64_t w0;
    uint64_t w1;
    uint64_t w2;
    uint64_t w3;
};

typedef struct word256 word256;

void shl256(word256*, uint32_t);

void shr256(word256*, uint32_t);

void add256(word256, word256, word256*);

void sub256(word256, word256, word256*);

void and256(word256, word256, word256*);

void or256(word256, word256, word256*);
