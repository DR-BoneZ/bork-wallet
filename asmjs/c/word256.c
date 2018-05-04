#include <string.h>
#include "word256.h"

void shl256(word256* word, uint32_t by) {
    word256 out;
    if (by <= 64) {
        out.w3 = (word->w3 << by);
        out.w2 = (word->w2 << by) + (word->w3 >> (64 - by));
        out.w1 = (word->w1 << by) + (word->w2 >> (64 - by));
        out.w0 = (word->w0 << by) + (word->w1 >> (64 - by));
    } else if (by <= 128) {
        out.w3 = 0;
        out.w2 = (word->w3 << (by % 64));
        out.w1 = (word->w2 << (by % 64)) + (word->w3 >> (64 - (by % 64)));
        out.w0 = (word->w1 << (by % 64)) + (word->w2 >> (64 - (by % 64)));
    } else if (by <= 192) {
        out.w3 = 0;
        out.w2 = 0;
        out.w1 = (word->w3 << (by % 64));
        out.w0 = (word->w2 << (by % 64)) + (word->w3 >> (64 - (by % 64)));
    } else {
        out.w3 = 0;
        out.w2 = 0;
        out.w1 = 0;
        out.w0 = (word->w3 << (by % 64));
    }
    memcpy(word, &out, sizeof(word256));
}

void shr256(word256* word, uint32_t by) {
    word256 out;
    out.w0 = word->w0 >> by;
    out.w1 = word->w1 >> by;
    out.w2 = word->w2 >> by;
    out.w3 = word->w3 >> by;
    if (by <= 64) {
        out.w0 += word->w0 << (64 - by);
        out.w1 += word->w1 << (64 - by);
        out.w2 += word->w2 << (64 - by);
        out.w3 += word->w3 << (64 - by);
    } else if (by <= 128) {
        out.w0 += word->w1 << (128 - by);
        out.w1 += word->w2 << (128 - by);
        out.w2 += word->w3 << (128 - by);
    } else if (by <= 192) {
        out.w0 += word->w2 << (192 - by);
        out.w1 += word->w3 << (192 - by);
    } else {
        out.w0 += word->w3 << (256 - by);
    }
    memcpy(word, &out, sizeof(word256));
}

void add256(word256 in1, word256 in2, word256* out) {
    out->w0 = in1.w0 + in2.w0;
    out->w1 = in1.w1 + in2.w1 + (in1.w0 + in2.w0 < in1.w0);
    out->w2 = in1.w2 + in2.w2 + (in1.w1 + in2.w1 < in1.w1);
    out->w3 = in1.w3 + in2.w3 + (in1.w2 + in2.w2 < in1.w2);
}

void sub256(word256 in1, word256 in2, word256* out) {
    out->w0 = in1.w0 - in2.w0;
    out->w1 = in1.w1 - in2.w1 - (in1.w0 - in2.w0 > in1.w0);
    out->w2 = in1.w2 - in2.w2 - (in1.w1 - in2.w1 > in1.w1);
    out->w3 = in1.w3 - in2.w3 - (in1.w2 + in2.w2 < in1.w2);
}

void and256(word256 in1, word256 in2, word256* out) {
    out->w0 = in1.w0 & in2.w0;
    out->w1 = in1.w1 & in2.w1;
    out->w2 = in1.w2 & in2.w2;
    out->w3 = in1.w3 & in2.w3;
}

void or256(word256 in1, word256 in2, word256* out) {
    out->w0 = in1.w0 | in2.w0;
    out->w1 = in1.w1 | in2.w1;
    out->w2 = in1.w2 | in2.w2;
    out->w3 = in1.w3 | in2.w3;
}
