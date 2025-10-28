// Scroll reveal animation
function revealSections() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        }
    });
}

// Smooth scroll to next section when clicking scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const firstSection = document.querySelector('.section');
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Form submission handler
function handleReservation(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.guests || !data.date || !data.time) {
        alert('Por favor completa todos los campos obligatorios.');
        return;
    }
    
    // Format date for display
    const dateObj = new Date(data.date);
    const formattedDate = dateObj.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Format time for display
    const timeObj = new Date(`2000-01-01T${data.time}`);
    const formattedTime = timeObj.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Show confirmation message
    alert(`¡Gracias ${data.name}!\n\nTu reserva ha sido recibida:\n• ${data.guests} ${data.guests === '1' ? 'comensal' : 'comensales'}\n• ${formattedDate}\n• ${formattedTime}\n\nTe contactaremos pronto para confirmar tu reserva.`);
    
    // Reset form
    event.target.reset();
    
    // Optional: Log reservation data (for development)
    console.log('Nueva reserva:', {
        nombre: data.name,
        email: data.email,
        telefono: data.phone,
        comensales: data.guests,
        fecha: data.date,
        hora: data.time,
        comentarios: data.message || 'Sin comentarios'
    });
}

// Merchandise add to cart handler
function handleAddToCart(productName) {
    alert(`${productName} agregado al carrito`);
}

// Set minimum date to today
function setMinDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const minDate = `${yyyy}-${mm}-${dd}`;
    
    document.getElementById('date').min = minDate;
}

// Smooth scroll to top function (optional utility)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add smooth scroll behavior to entire document
function initSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Enhanced scroll reveal with staggered animations
function enhancedRevealSections() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (sectionTop < windowHeight - revealPoint && !section.classList.contains('visible')) {
            // Add a slight delay for staggered effect
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 100);
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setMinDate();
    initSmoothScroll();
    revealSections(); // Initial check for sections in viewport
});

// Event listeners
window.addEventListener('scroll', enhancedRevealSections);
window.addEventListener('load', revealSections);