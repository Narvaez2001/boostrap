document.addEventListener("DOMContentLoaded", function () {
    // Espera a que el documento se cargue completamente

    // Inicializa el carrusel
    var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
        interval: 2000, // Cambia de imagen cada 2 segundos (2000 ms)
    });
});

// Array de noticias
const noticias = [
    "Avance en la inteligencia artificial: Un equipo de investigación en IA ha desarrollado un algoritmo de aprendizaje profundo que ha demostrado ser altamente efectivo en la detección temprana de enfermedades cardíacas a partir de imágenes médicas. Este avance tiene el potencial de mejorar significativamente el diagnóstico y el tratamiento de afecciones cardíacas, lo que podría salvar vidas en todo el mundo. Un equipo de investigadores en inteligencia artificial (IA) ha logrado un importante avance en la detección temprana de enfermedades cardíacas utilizando algoritmos de aprendizaje profundo. Estos algoritmos se entrenaron en un gran conjunto de datos de imágenes médicas que incluía imágenes de ecocardiogramas, resonancias magnéticas cardíacas y otras pruebas médicas relacionadas con el corazón.",
    "Ciberataque a gran escala: Un sofisticado grupo de ciberdelincuentes ha lanzado un ataque a gran escala contra infraestructuras críticas en varios países. El ataque paralizó brevemente los servicios esenciales, como la energía y el suministro de agua. Este incidente resalta la importancia de fortalecer la ciberseguridad en infraestructuras críticas. El ciberataque a gran escala fue llevado a cabo por un grupo de ciberdelincuentes altamente sofisticado. Utilizaron diversas técnicas y herramientas avanzadas para comprometer sistemas de infraestructuras críticas en múltiples países. El ataque tenía como objetivo paralizar brevemente servicios esenciales que dependen de la tecnología y la conectividad en estos países.",
    "Tesla y la conduccion autonoma: Tesla ha anunciado importantes avances en su tecnología de conducción autónoma, incluida la capacidad de navegación autónoma en carreteras sin intervención del conductor. La noticia ha generado un debate sobre la seguridad y la regulación de los vehículos autónomos en las carreteras. Tesla ha estado desarrollando su tecnología de conducción autónoma durante varios años y ha anunciado avances significativos en este campo. Una de las últimas actualizaciones incluye la capacidad de navegación autónoma en carreteras sin requerir la intervención activa del conductor. Esto significa que los vehículos Tesla equipados con esta tecnología pueden realizar maniobras de conducción, adelantamientos y cambios de carril de manera autónoma en situaciones de carretera específicas.",
    "Ruptura en la cadena de suministros de chips: La escasez global de chips semiconductores continúa afectando a múltiples industrias, desde la automotriz hasta la electrónica de consumo. Las empresas se enfrentan a retrasos en la producción y pérdidas financieras debido a la falta de suministro de componentes esenciales. La escasez global de chips semiconductores es el resultado de una serie de factores, incluida una demanda creciente de productos electrónicos, interrupciones en la producción debido a la pandemia de COVID-19 y problemas en la cadena de suministro. Los chips semiconductores son componentes esenciales en una amplia gama de dispositivos, desde automóviles hasta teléfonos móviles y electrodomésticos. La industria automotriz ha sido una de las más afectadas por esta escasez.",
    "Desarrollo de la computacion cuantica: La carrera por la supremacía cuántica continúa con IBM, Google y otras empresas importantes en la vanguardia de la investigación. La computación cuántica promete resolver problemas complejos en minutos en lugar de años, lo que podría revolucionar campos como la criptografía y la investigación científica. la computación cuántica que implica la realización de cálculos que serían prácticamente imposibles o extremadamente lentos de realizar en las computadoras clásicas más potentes. Varias empresas líderes, incluyendo IBM y Google, están compitiendo en la carrera por alcanzar la supremacía cuántica. La idea es que las computadoras cuánticas podrían resolver problemas complejos en un tiempo que sería impensable para las computadoras tradicionales.",
];

// Función para mostrar una noticia aleatoria
function mostrarNoticiaAleatoria() {
    const noticiasContainer = document.getElementById("noticias-container");
    const noticiaAleatoria = noticias[Math.floor(Math.random() * noticias.length)];

    // Elemento de párrafo para la noticia
    const p = document.createElement("p");
    p.textContent = noticiaAleatoria;

    // Agregar la noticia al contenedor
    noticiasContainer.innerHTML = "";
    noticiasContainer.appendChild(p);
}

// Mostrar una noticia aleatoria al cargar la página
mostrarNoticiaAleatoria();

// Evento de clic para mostrar una nueva noticia aleatoria
document.addEventListener("click", mostrarNoticiaAleatoria);
