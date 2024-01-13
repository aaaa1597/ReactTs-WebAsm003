export function helloif(argnum1, argnum2, setter) {
	WebAssembly.instantiateStreaming(fetch("wasm/hello.wasm")).then(
	(obj) => {
		const ret1 = obj.instance.exports._Z3addii(argnum1, argnum2);
		console.log('retretret=', ret1);
		setter(ret1);
		const ret2 = obj.instance.exports._Z3subii(argnum1, argnum2);
		console.log('retretret=', ret2);
	}
  );
	return 100;
}
