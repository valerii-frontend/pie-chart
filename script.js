const values = document.querySelectorAll("input[id*='value']");
const pieScale = document.querySelector("#scale");
const body = document.querySelector("body");
const pie = document.querySelector("#pie");
const legendElements = document.querySelectorAll("#legend li");
const titleBlock = document.querySelector("#title");

// DRAW THE PIE WHEN INPUT CHANGE
values.forEach((input, index) => {
	input.addEventListener("change", function (e) {
		const arr = [...values];
		const list = [...legendElements];
		const percent = arr.map((a) => +a.value).reduce((n, c) => n + c) / 100;
		const allValues = arr.map((el, i) => `--value${i + 1}:${el.value / percent}%`);
		body.style.cssText = allValues.join(";");
		list.forEach((l, i) => {
			l.textContent = `${arr[i].value} ( ${(arr[i].value / percent).toFixed(2)}% )`;
			l.style.cssText = `--color:var(--color${i + 1})`;
		});
	});
});

// SCALE

pieScale.addEventListener("change", function (e) {
	pie.style.cssText = `--pieSize:${this.value * 2.5}rem`;
});

titleBlock.addEventListener("click", function (e) {
	const input = this.querySelector("input");
	const close = this.querySelector("span");
	const titleForm = this.querySelector("div");
	const title = this.querySelector("h1");
	const addValue = () => {
		titleForm.style.display = "none";
		title.textContent = input.value ? input.value : title.textContent;
	};
	input.addEventListener("keydown", function (e) {
		if (e.code === "Enter") addValue();
	});
	titleForm.style.display = "flex";
	if (e.target === close) addValue();
});
