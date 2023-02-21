function seccionactiva(scroll, variable = "wheel") {
    ventanawidth = window.innerWidth;
    let resultado = scroll / ventanawidth;
    switch (resultado) {
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



function seccionactiva(scroll, variable = "wheel") {
	ventanawidth = window.innerWidth;
	let resultado = scroll / ventanawidth;
	if (resultado < 0.5) {
		if (variable == "wheel" || variable == "boton")	scrollContainer.scrollLeft = scroll;
		botonactivo(btn_inicio,true,false);
		auxiliar_scroll = ventanawidth * 0;
	} else if (resultado >= 0.5 && resultado < 1.5) {
		if (variable == "wheel" || variable == "boton")	scrollContainer.scrollLeft = scroll;
		botonactivo(btn_datos,false,false);
		auxiliar_scroll = ventanawidth * 1;
	} else if (resultado >= 1.5 && resultado < 2.5) {
		if (variable == "wheel" || variable == "boton")	scrollContainer.scrollLeft = scroll;
		botonactivo(btn_experiencia,false,false);
		auxiliar_scroll = ventanawidth * 2;
	} else if (resultado >= 2.5 && resultado < 3.5) {
		if (variable == "wheel" || variable == "boton")	scrollContainer.scrollLeft = scroll;
		botonactivo(btn_educacion,false,false);
		auxiliar_scroll = ventanawidth * 3;
	} else if (resultado >= 3.5) {
		if (variable == "wheel" || variable == "boton")	scrollContainer.scrollLeft = scroll;
		botonactivo(btn_contacto, false, true);
		auxiliar_scroll = ventanawidth * 4;
	}
}