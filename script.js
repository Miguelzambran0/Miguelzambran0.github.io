

const mobileMenuButton = document.getElementById('mobile-menu-button'); 
const mobileMenu = document.getElementById('mobile-menu'); 

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
for (const link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

// ========== ENVÍO DE FORMULARIO A WEBHOOK n8n ==========

const N8N_WEBHOOK_URL = 'https://mzambranob.app.n8n.cloud/webhook/877745b8-391a-41ea-ba3b-fb3ab4112175';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = {
      name: form.name.value,
      email: form.email.value,
      tel: form.tel.value,
      message: form.message.value
    };
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert('¡Mensaje enviado correctamente!');
        form.reset();
      } else {
        alert('Hubo un error al enviar el mensaje.');
      }
    } catch (error) {
      alert('No se pudo conectar con el servidor.');
    }
  });
});
