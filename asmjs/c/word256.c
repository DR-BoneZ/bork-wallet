#include <string.h>
#include "word256.h"

void shl256(word256 word, uint32_t by) {
    word256 out;
    int shlb = by % 8;
    int shlB = by / 8;
    int shrb = 8 - shlb;
    for (int i = 0; i < WORD256_BYTES; i++) {
        if (i < shlB) {
            out[WORD256_BYTES-1-i] = 0;
        } else if (i == shlB) {
            out[WORD256_BYTES-1-i] = word[WORD256_BYTES-1] << shlb;
        } else {
            out[WORD256_BYTES-1-i] = (word[WORD256_BYTES-1-i+shlB] << shlb) + (word[WORD256_BYTES-i+shlB] >> shrb);
        }
    }
    memcpy(word, out, sizeof(word256));
}

void shr256(word256 word, uint32_t by) {
    word256 out;
    int shrb = by % 8;
    int shrB = by / 8;
    int shlb = 8 - shrb;
    for (int i = 0; i < WORD256_BYTES; i++) {
        if (i < shrB) {
            out[i] = 0;
        } else if (i == shrB) {
            out[i] = word[0] >> shrb;
        } else {
            out[i] = (word[i-shrB] >> shrb) + (word[i-shrB-1] << shlb);
        }
    }
    memcpy(word, out, sizeof(word256));
}

void add256(word256 in1, word256 in2, word256 out) {
    int carry = 0;
    for (int i = 0; i < WORD256_BYTES; i++) {
        out[i] = in1[i] + in2[i] + carry;
        carry = out[i] < in1[i] + in2[i];
    }
}

void sub256(word256 in1, word256 in2, word256 out) {
    int carry = 0;
    for (int i = 0; i < WORD256_BYTES; i++) {
        out[i] = in1[i] - in2[i] - carry;
        carry = out[i] > in1[i] - in2[i];
    }
}

void and256(word256 in1, word256 in2, word256 out) {
    for (int i = 0; i < WORD256_BYTES; i++) {
        out[i] = in1[i] & in2[i];
    }
}

void or256(word256 in1, word256 in2, word256 out) {
    for (int i = 0; i < WORD256_BYTES; i++) {
        out[i] = in1[i] | in2[i];
    }
}
