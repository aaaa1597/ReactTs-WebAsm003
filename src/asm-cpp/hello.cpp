#include <stdio.h>
#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#else
#define EMSCRIPTEN_KEEPALIVE
#endif

extern "C" {
int EMSCRIPTEN_KEEPALIVE add(int a, int b){
  return a + b;
}

int EMSCRIPTEN_KEEPALIVE sub(int a, int b){
  return a - b;
}
} /* extern "C" */