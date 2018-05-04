"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const W = require("./ffi");
let w = W;
const derp = w.cwrap('entropyToSeed', 'null', ['number']);
const i = new Uint8Array([0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef]);
var nDataBytes = i.length / i.BYTES_PER_ELEMENT;
var ptr = w._malloc(nDataBytes);
var dataHeap = new Uint8Array(w.HEAPU8.buffer, ptr, nDataBytes);
dataHeap.set(new Uint8Array(i.buffer));
console.log(derp(i));
var result = new Uint8Array(dataHeap.buffer, dataHeap.byteOffset, i.length);
console.log(result);
w._free(dataHeap.byteOffset);
//# sourceMappingURL=word256-ffi.js.map