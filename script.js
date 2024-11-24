// Animación de escritura

const textBeforeName = "¡Hola, soy "; // Texto antes del nombre
const name = "Federico Rosciani"; // El nombre con estilo especial
const textAfterName = "!"; // Texto después del nombre
let index = 0;
let currentText = ""; // Aquí se acumula el texto que se va escribiendo
const typingText = document.getElementById("typing-text");

function typeWriter() {
    if (index < textBeforeName.length) {
        currentText += textBeforeName.charAt(index);
        typingText.innerHTML = currentText; // Escribe el texto hasta el nombre
    } else if (index < textBeforeName.length + name.length) {
        const nameIndex = index - textBeforeName.length;
        typingText.innerHTML = currentText + `<span id="nombre-highlight">${name.slice(0, nameIndex + 1)}</span>`;
    } else if (index < textBeforeName.length + name.length + textAfterName.length) {
        const afterNameIndex = index - textBeforeName.length - name.length;
        typingText.innerHTML = currentText + `<span id="nombre-highlight">${name}</span>` + textAfterName.slice(0, afterNameIndex + 1);
    }

    index++;
    if (index <= textBeforeName.length + name.length + textAfterName.length) {
        setTimeout(typeWriter, 100); // Velocidad de escritura
    }
}

window.onload = function() {
    currentText = "";
    index = 0; // Reiniciar índice
    typingText.innerHTML = ""; // Limpiar el contenido del div
    typeWriter(); // Iniciar la animación
};



const modeToggle = document.getElementById('mode-toggle');
const iconToggle = document.getElementById('icon-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    iconToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '🌞';
});

// Alternar entre los modos día y noche
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Cambia entre modos

    // Cambiar el ícono según el modo
    if (body.classList.contains('dark-mode')) {
        iconToggle.textContent = '🌙'; // Modo noche
    } else {
        iconToggle.textContent = '🌞'; // Modo día
    }
});

// Agregar desplazamiento suave a los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado

        const targetId = this.getAttribute('href').substring(1); // Obtener el ID del destino
        const targetElement = document.getElementById(targetId);

        // Desplazamiento suave hacia la sección
        targetElement.scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave
            block: 'start', // Alinear al inicio del contenedor
        });
    });
});

// Detectar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}


// Seleccionar la sección "Sobre mí"
const aboutMeSection = document.getElementById('sobre-mi');

// Crear un observer que detecta cuándo la sección es visible
// Seleccionar todas las secciones
const sections = document.querySelectorAll('.section');

// Crear un observer que detecta cuándo las secciones son visibles
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Agregar la clase "visible"
            sectionObserver.unobserve(entry.target); // Dejar de observar tras mostrarse
        }
    });
}, { threshold: 0.2 }); // La animación se activa cuando el 20% de la sección es visible

// Iniciar la observación para todas las secciones
sections.forEach(section => sectionObserver.observe(section));



function highlightSkill(skillElement) {
    // Quitar la clase 'highlighted' de todas las tarjetas
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(skill => {
        skill.classList.remove('highlighted');
    });
    // Añadir la clase 'highlighted' solo a la tarjeta clickeada
    skillElement.classList.add('highlighted');
}
 


// Animación mejorada del título "Conocimientos"
document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('knowledge-title');
    const letters = title.textContent.split('');
    title.innerHTML = ''; // Limpiar el contenido original

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '0';
        span.style.transform = 'translateY(30px)';
        span.style.display = 'inline-block';
        span.style.animation = `fadeIn 0.6s ease-out forwards`;
        span.style.animationDelay = `${index * 0.1}s`;
        title.appendChild(span);
    });
});


const body = document.body;
const modesToggle = document.getElementById('mode-toggle');
const iconsToggle = document.getElementById('icon-toggle');

modesToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        body.style.backgroundImage = "url('assets/fondooscuro.png')";
        iconsToggle.textContent = '🌙'; // Ícono modo noche
    } else {
        body.style.backgroundImage = "url('assets/fondo.png')";
        iconsToggle.textContent = '🌞'; // Ícono modo día
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('knowledge-title');
    const letters = title.textContent.split('');
    title.innerHTML = '';

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '0';
        span.style.transform = 'translateY(30px)';
        span.style.display = 'inline-block';
        span.style.animation = `fadeIn 0.6s ease-out forwards`;
        span.style.animationDelay = `${index * 0.1}s`;
        title.appendChild(span);
    });
});

document.getElementById('copy-email-btn').addEventListener('click', function() {
    // Selecciona el texto del email
    const emailText = 'Federicorosciani2003@hotmail.com';
    
    // Crea un elemento de texto oculto
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);

    // Selecciona el texto del elemento
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para móviles

    // Copia el texto al portapapeles
    document.execCommand('copy');

    // Elimina el elemento temporal
    document.body.removeChild(tempInput);

});

