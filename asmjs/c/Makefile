
EMCC    = emcc
CSOURCE = bip39.c sha2.c word256.c
CHEADER = sha2.h word256.h
OBJECTS = ${CSOURCE:.c=.bc}

all : ffi.js
	cp ffi.js ../ts-ffi/ffi.js

ffi.js : ${OBJECTS}
	${EMCC} ${OBJECTS} -o ffi.js -s EXPORTED_FUNCTIONS='["_getMneumonicPhrase"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'

%.bc : %.c
	${EMCC} $< -o $@

clean :
	- rm ${OBJECTS} ffi.js