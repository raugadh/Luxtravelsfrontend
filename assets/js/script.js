// Nav dark on Scroll
var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
	if (window.pageYOffset > 100) {
		nav.classList.add("dark-nav");
	} else {
		nav.classList.remove("dark-nav");
	}
});
