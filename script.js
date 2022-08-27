const values = document.querySelectorAll("input[id*='value']");
const pieScale = document.querySelector("#scale");
const body = document.querySelector("body");
const pie = document.querySelector("#pie");

// DRAW THE PIE WHEN INPUT CHANGE
values.forEach((input, index) => {
	input.addEventListener("change", function (e) {
		const arr = [...values];
		const percent = arr.map((a) => +a.value).reduce((n, c) => n + c) / 100;
		console.log(percent);
		const allValues = arr.map((el, i) => `--value${i + 1}:${el.value / percent}%`);
		body.style.cssText = allValues.join(";");
	});
});

// SCALE

pieScale.addEventListener("change", function (e) {
	pie.style.cssText = `--pieSize:${this.value * 2.5}rem`;
});
