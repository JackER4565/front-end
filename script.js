//variables

let btn_inicio = document.querySelector("#btn-inicio");
let btn_datos = document.querySelector("#btn-datos");
let btn_experiencia = document.querySelector("#btn-experiencia");
let btn_educacion = document.querySelector("#btn-educacion");
let btn_contacto = document.querySelector("#btn-contacto");
let auxiliar_scroll = 0;
const scrollContainer = document.querySelector("#secciones");
let ventanawidth = window.innerWidth;
let timerId;
let FlechaLeft = document.querySelector("#FlechaLeft");
let FlechaRight = document.querySelector("#FlechaRight");

//selecciona el boton activo y la flecha
function botonactivo(elemento, flecha1, flecha2) {
	btn_inicio.classList.remove("activo");
	btn_datos.classList.remove("activo");
	btn_experiencia.classList.remove("activo");
	btn_educacion.classList.remove("activo");
	btn_contacto.classList.remove("activo");
	elemento.classList.add("activo");
	FlechaRight.classList.remove("disabledButton");
	FlechaLeft.classList.remove("disabledButton");
	if (flecha1) FlechaLeft.classList.add("disabledButton");
	if (flecha2) FlechaRight.classList.add("disabledButton");
}

//scrollea y selecciona el boton activo
function seccionactiva(scroll, variable = "wheel") {
	ventanawidth = window.innerWidth;
	let resultado = scroll / ventanawidth;
	switch (true) {
		case resultado < 0.5:
			if (variable == "wheel" || variable == "boton")
				scrollContainer.scrollLeft = scroll;
			botonactivo(btn_inicio, true, false);
			auxiliar_scroll = ventanawidth * 0;
			break;
		case resultado >= 0.5 && resultado < 1.5:
			if (variable == "wheel" || variable == "boton")
				scrollContainer.scrollLeft = scroll;
			botonactivo(btn_datos, false, false);
			auxiliar_scroll = ventanawidth * 1;
			break;
		case resultado >= 1.5 && resultado < 2.5:
			if (variable == "wheel" || variable == "boton")
				scrollContainer.scrollLeft = scroll;
			botonactivo(btn_experiencia, false, false);
			auxiliar_scroll = ventanawidth * 2;
			break;
		case resultado >= 2.5 && resultado < 3.5:
			if (variable == "wheel" || variable == "boton")
				scrollContainer.scrollLeft = scroll;
			botonactivo(btn_educacion, false, false);
			auxiliar_scroll = ventanawidth * 3;
			break;
		case resultado >= 3.5:
			if (variable == "wheel" || variable == "boton")
				scrollContainer.scrollLeft = scroll;
			botonactivo(btn_contacto, false, true);
			auxiliar_scroll = ventanawidth * 4;
			break;
	}
}
//funcion para las flechas
function inext(tipo) {
	if (tipo == "+") {
		scrollContainer.scrollLeft += ventanawidth;
	}
	if (tipo == "-") {
		scrollContainer.scrollLeft -= ventanawidth;
	}
}

//event listener para los casos que el wheel no funcione
scrollContainer.addEventListener("scroll", (evt) => {
	if (timerId) {
		clearTimeout(timerId);
	}
	timerId = setTimeout(() => {
		seccionactiva(scrollContainer.scrollLeft, "scroll");
	}, 50);
});

// event listener para la rueda
scrollContainer.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	let deltay = evt.deltaY;
	if (evt.deltaMode === 0) {
		return;
	}
	console.log(isTrackpad ? "Trackpad detected" : "Mousewheel detected");

	ventanawidth = window.innerWidth;

	window.requestAnimationFrame(() => {
		console.log("deltay", deltay);
		if (deltay > 0) {
			auxiliar_scroll += ventanawidth;
			seccionactiva(auxiliar_scroll);
		} else {
			auxiliar_scroll -= ventanawidth;
			seccionactiva(auxiliar_scroll);
		}
	});
});

// event listener para los botones del navbar
document.querySelector(".NavBar").addEventListener("click", (e) => {
	let target = e.target;
	let multiplicador = 0;
	if (target && target.tagName == "BUTTON") {
		target.parentNode.childNodes.forEach((f) => {
			if (f == target) {
				console.log(window.innerWidth * multiplicador);
				seccionactiva(window.innerWidth * multiplicador, "boton");
			}
			if (f.tagName == "BUTTON") multiplicador += 1;
		});
	}
});
