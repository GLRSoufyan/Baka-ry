// Navigatie functie voor detail pagina
function goToDetails(recipeName) {
    window.location.href = `detailpagina.html?recipe=${encodeURIComponent(recipeName)}`;
}

// Navigatie functies voor verschillende pagina's
function goToHome() {
    window.location.href = 'index.html';
}

function goToOverzicht() {
    window.location.href = 'overzicht.html';
}

function goToInsturen() {
    window.location.href = 'instuurpagina.html';
}

// Sidebar interactiviteit
document.addEventListener('DOMContentLoaded', function() {
    // Maak alle sidebar items klikbaar (behalve de actieve)
    const sidebarItems = document.querySelectorAll('.sidebar-content > div:not(.active):not(.brand)');
    
    sidebarItems.forEach(item => {
        if (!item.classList.contains('deer') && item.tagName === 'DIV') {
            item.style.cursor = 'pointer';
            
            // Hover effect
            item.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.style.color = '#d48bb4';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.color = '#222';
                }
            });
        }
    });

    // Smooth scroll naar boven
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Helper functie om recepten te laden op de overzichtpagina
function loadRecipes() {
    const recipesContainer = document.querySelector('.recipes');
    if (!recipesContainer) return;

    const desserts = [
        "Strawberry Tart", "Chocolate Mousse", "Lemon Pie",
        "Vanilla Cupcake", "Carrot Cake", "Apple Crumble",
        "Matcha Roll", "Tiramisu", "Cheesecake",
        "Brownie", "Macaron", "Banana Bread"
    ];

    recipesContainer.innerHTML = desserts.map(name => `
        <div class="recipe">
            <h3>${name}</h3>
            <div class="img-box"></div>
            <button onclick="goToDetails('${name}')">See recept</button>
        </div>
    `).join('');
}

// Laad recepten als we op de overzichtpagina zijn
if (window.location.pathname.includes('overzicht.html')) {
    document.addEventListener('DOMContentLoaded', loadRecipes);
}

// Form validatie voor instuurpagina
function validateRecipeForm(formData) {
    if (!formData.name || formData.name.trim() === '') {
        alert('Vul een receptnaam in!');
        return false;
    }
    
    if (!formData.details || formData.details.trim() === '') {
        alert('Voeg een beschrijving toe!');
        return false;
    }
    
    if (!formData.benodigdheden || formData.benodigdheden.trim() === '') {
        alert('Lijst de benodigdheden op!');
        return false;
    }
    
    if (!formData.recept || formData.recept.trim() === '') {
        alert('Voeg de bereidingswijze toe!');
        return false;
    }
    
    if (!formData.moeilijkheidsgraad || formData.moeilijkheidsgraad < 1 || formData.moeilijkheidsgraad > 5) {
        alert('Kies een moeilijkheidsgraad tussen 1 en 5!');
        return false;
    }
    
    if (!formData.sterren || formData.sterren < 1 || formData.sterren > 5) {
        alert('Geef een beoordeling tussen 1 en 5 sterren!');
        return false;
    }
    
    return true;
}

console.log('Baka-Ry script geladen! 🍰');
console.log('Huidige pagina:', window.location.pathname);