Object.prototype.slice = [].slice;
Math.DEGREE = Math.PI / 180;

function createGradient(ctx, ...colors) {
	return function(gradientStyle, ...args) {
		let grad = ctx[`create${gradientStyle}Gradient`](...args);
		let inc = 1 / (colors.length - 1);
		colors.forEach((color, i) => grad.addColorStop((i * inc).toString(), color));
		return grad;
	};
}
