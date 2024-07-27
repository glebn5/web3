const el = document.querySelector(".pay__link");
const btn = document.querySelector(".pay__btn-copy")

function copytext(el) {
	const temp = document.createElement("textarea");
	temp.value = el.textContent;

	document.body.appendChild(temp);

	temp.select();

	document.execCommand("copy");

	document.body.removeChild(temp);
}

btn.addEventListener("click", () => {
	copytext(el);
})


AOS.init();