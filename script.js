const productos = [
    {
        id: 'lona',
        titulo: 'Lona Impresa, Escenografías y Banderines',
        descripcion: 'Disfruta de tu publicidad impresa a todo color con detalles que resalten. Garantía de calidad y durabilidad.',
        imagen: 'assets/images/productos/page_2_img_4.jpeg'
    },
    {
        id: 'vinil',
        titulo: 'Vinil Impreso y Microperforado',
        descripcion: 'Brillo y colores intensos con excelente adhesivo. Microperforado ideal para publicidad en ventanas sin perder visión.',
        imagen: 'assets/images/productos/page_3_img_2.jpeg'
    },
    {
        id: 'volantes',
        titulo: 'Volantes, Tarjetas e Imanes',
        descripcion: 'Haz que te volteen a ver con volantes a todo color, tarjetas prácticas y imanes conservables.',
        imagen: 'assets/images/productos/page_4_img_3.png'
    },
    {
        id: 'lanyard',
        titulo: 'Lanyard y Gafetes',
        descripcion: 'Lanyard impresos a todo color y gafetes de PVC sublimados con diseños frescos. Tu marca portada con gusto.',
        imagen: 'assets/images/productos/page_5_img_5.jpeg'
    },
    {
        id: 'playeras',
        titulo: 'Playeras Polo',
        descripcion: 'Proyecta identidad y profesionalismo con playeras tipo polo en tela dry fit. Personalizadas con bordado.',
        imagen: 'assets/images/productos/page_6_img_13.jpeg'
    },
    {
        id: 'camisas',
        titulo: 'Camisas de Vestir',
        descripcion: 'Cuando la ocasión exige formalidad. Camisas en colores lisos o rayas con bordado de alta calidad.',
        imagen: 'assets/images/productos/page_7_img_2.jpeg'
    },
    {
        id: 'gorras',
        titulo: 'Gorras Bordadas',
        descripcion: 'Tu marca se porta con orgullo. Gorras de gran calidad que hacen destacar tu logo en cualquier evento.',
        imagen: 'assets/images/productos/page_8_img_7.jpeg'
    },
    {
        id: 'termos',
        titulo: 'Termos Tipo Yeti',
        descripcion: 'Grabado láser o impresión DTF UV a todo color. Acabados premium de gran resistencia.',
        imagen: 'assets/images/productos/page_9_img_3.jpeg'
    },
    {
        id: 'agendas',
        titulo: 'Agendas y Libretas',
        descripcion: 'Pasta rígida plastificada e impresión a todo color. Tu marca escrita todos los días.',
        imagen: 'assets/images/productos/page_10_img_2.jpeg'
    },
    {
        id: 'pines',
        titulo: 'Pines o Botones',
        descripcion: 'Impresos a todo color, ideales para promocionar empresas, campañas o eventos.',
        imagen: 'assets/images/productos/page_11_img_2.jpeg'
    },
    {
        id: 'serigrafia',
        titulo: 'Serigrafía de Alto Impacto',
        descripcion: 'Colores intensos, máxima durabilidad y acabados que venden por ti. ¡Hacemos que te vean!',
        imagen: 'assets/images/productos/page_12_img_5.jpeg'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('productos-container');
    
    productos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.titulo}" class="producto-img" loading="lazy" onerror="this.src='https://via.placeholder.com/300x250/2a2a2a/ffffff?text=SOMA'">
            <div class="producto-info">
                <h3>${prod.titulo}</h3>
                <p>${prod.descripcion}</p>
            </div>
        `;
        container.appendChild(card);
    });

    // Form submission simulation to Google Apps Script
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('formStatus');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Configuración para el Google Apps Script (Webhook)
        // Por ahora, simularemos el éxito
        
        const formData = new FormData(form);

        statusDiv.style.color = 'var(--soma-cyan)';
        statusDiv.textContent = 'Enviando solicitud...';

        // URL de tu Google Apps Script (Webhook)
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzR-vW7EPwUGsCWkahsCCY61itfZv670V6d1A2G7XfPRbXLWrVTN_4Fk4FjmLcIQLqx/exec";

        if (GOOGLE_SCRIPT_URL === "PEGAR_AQUI_LA_URL_DE_GOOGLE") {
            statusDiv.style.color = '#ffde00';
            statusDiv.textContent = 'Falta configurar la URL de Google Sheets en script.js';
            return;
        }

        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            statusDiv.style.color = '#25D366';
            statusDiv.textContent = '¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.';
            form.reset();
        })
        .catch(err => {
            console.error('Error:', err);
            statusDiv.style.color = 'var(--soma-magenta)';
            statusDiv.textContent = 'Hubo un error. Por favor intenta contactarnos por WhatsApp.';
        });
    });
});
