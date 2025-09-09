// Main JavaScript functionality for Map Version 2
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menus first (most important)
    initMobileMenus();
    
    // Initialize map and language components
    initializeMapAndLanguage();
});

// Mobile menu functionality - works independently
function initMobileMenus() {
    console.log('Starting mobile menu initialization...');
    
    const categoryButtons = document.querySelectorAll('.category-icon-btn');
    console.log('Found category buttons:', categoryButtons.length);
    
    const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
    console.log('Found subcategory buttons:', subcategoryButtons.length);
    
    console.log('Mobile menus initialized successfully!');
}

// Initialize map and language components
function initializeMapAndLanguage() {
    // Wait for all classes to be loaded
    setTimeout(() => {
        try {
            if (typeof LanguageManager !== 'undefined') {
                window.languageManager = new LanguageManager();
                console.log('Language manager initialized');
            }
            
            // Check if map container exists and Leaflet is loaded
            const mapContainer = document.getElementById('map');
            if (mapContainer && typeof L !== 'undefined' && typeof InteractiveMap !== 'undefined') {
                window.mapInstance = new InteractiveMap();
                window.mapInstance.addMarkerStyles();
                console.log('Map initialized successfully');
            } else {
                console.error('Map initialization failed - missing requirements:', {
                    mapContainer: !!mapContainer,
                    leafletLoaded: typeof L !== 'undefined',
                    interactiveMapClass: typeof InteractiveMap !== 'undefined'
                });
            }
        } catch (error) {
            console.error('Error initializing components:', error);
        }
    }, 200);
}

// Handle external links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.startsWith('http') && !e.target.href.includes(window.location.hostname)) {
        e.target.setAttribute('target', '_blank');
        e.target.setAttribute('rel', 'noopener noreferrer');
    }
});

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
        });
    });
});

// Loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});