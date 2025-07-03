// Este script maneja la lógica para el menú de navegación en dispositivos móviles.

// 1. Obtener los elementos del DOM que necesitamos manipular.
const mobileMenuButton = document.getElementById('mobile-menu-button'); // El botón de hamburguesa
const mobileMenu = document.getElementById('mobile-menu'); // El menú desplegable

// 2. Añadir un "escuchador de eventos" al botón del menú.
//    Esto hará que se ejecute una función cada vez que el usuario haga clic en el botón.
mobileMenuButton.addEventListener('click', () => {
    // La función 'toggle' de classList es muy útil:
    // - Si la clase 'hidden' está presente, la quita.
    // - Si la clase 'hidden' no está, la añade.
    // Esto nos permite mostrar y ocultar el menú con un solo clic.
    mobileMenu.classList.toggle('hidden');
});

// 3. (Opcional pero recomendado) Cerrar el menú móvil cuando se hace clic en un enlace.
//    Esto mejora la experiencia del usuario en móviles.

// Obtener todos los enlaces que están dentro del menú móvil.
const mobileMenuLinks = mobileMenu.getElementsByTagName('a');

// Recorrer cada uno de los enlaces encontrados.
for (const link of mobileMenuLinks) {
    // Añadir un escuchador de eventos a cada enlace.
    link.addEventListener('click', () => {
        // Cuando se hace clic en un enlace, añadimos la clase 'hidden' para ocultar el menú.
        mobileMenu.classList.add('hidden');
    });
}
