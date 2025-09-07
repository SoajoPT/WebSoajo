// Map functionality with Leaflet
class InteractiveMap {
    constructor() {
        this.map = null;
        this.markers = [];
        this.markerGroup = null;
        this.currentFilter = 'all';
        this.init();
    }
    
    init() {
        this.initMap();
        this.loadMarkers();
        this.initFilters();
    }

    initMap() {
        // Initialize Leaflet map centered on the region
        this.map = L.map('map').setView([41.87500372977779, -8.264530028893418], 13);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(this.map);
        
        // Create marker group for easy management
        this.markerGroup = L.layerGroup().addTo(this.map);
    }
    
    loadMarkers() {
        // Clear existing markers
        this.markerGroup.clearLayers();
        this.markers = [];
        
        // Add markers for all locations
        allLocations.forEach(location => {
            const marker = this.createMarker(location);
            this.markers.push({ marker, location });
            this.markerGroup.addLayer(marker);
        });
    }
    
    createMarker(location) {
        // Define custom icons for different categories
        const icons = {
            accommodation: '🏠',
            restaurant: '🍽️',
            activity: '🥾',
            culture: '🏛️',
            default: '📍'
        };
        
        const icon = icons[location.category] || icons.default;
        
        // Create custom HTML marker
        const customIcon = L.divIcon({
            html: `<div class="custom-marker" data-category="${location.category}">
                     <span class="marker-icon">${icon}</span>
                   </div>`,
            className: 'custom-div-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        // Create marker
        const marker = L.marker(location.coords, { icon: customIcon });
        
        // Create popup content
        const popupContent = this.createPopupContent(location);
        marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
        });
        
        // Apply translations to popup when it opens
        marker.on('popupopen', () => {
            if (window.languageManager) {
                window.languageManager.applyTranslations();
            }
        });
        
        return marker;
    }
    
    createPopupContent(location) {
        const navigationUrl = this.getNavigationUrl(location.coords);
        
        return `
            <div class="popup-content">
                <img src="${location.image}" alt="${location.name}" loading="lazy">
                <h3>${location.name}</h3>
                <p><strong data-translate="descricao">Descrição</strong>: ${location.description}</p>
                <p><strong data-translate="morada">Morada</strong>: ${location.address}</p>
                <p><strong>${this.getCapacityLabel(location.category)}</strong>: ${location.capacity}</p>
                <div class="popup-contact">
                    <p><strong data-translate="contacto">Contacto</strong>: 
                        <a href="${this.getContactLink(location.contact)}" target="_blank">
                            ${location.contact}
                        </a>
                    </p>
                </div>
                <div class="popup-navigation">
                    <a href="${navigationUrl}" target="_blank" class="navigation-btn">
                        <i class="fas fa-route"></i> <span data-translate="comochegar">Como Chegar</span>
                    </a>
                </div>
            </div>
        `;
    }
    
    getCapacityLabel(category) {
        const labels = {
            accommodation: 'Capacidade',
            restaurant: 'Lugares',
            activity: 'Informação',
            culture: 'Detalhes',
            default: 'Informação'
        };
        return labels[category] || labels.default;
    }
    
    getContactLink(contact) {
        if (contact.includes('Tel:')) {
            const phone = contact.replace('Tel: ', '').replace(/\s/g, '');
            return `tel:${phone}`;
        } else if (contact.includes('@')) {
            const email = contact.replace('Info: ', '');
            return `mailto:${email}`;
        }
        return '#';
    }

    getNavigationUrl(coords) {
        const [lat, lng] = coords;
        
        // Detect if user is on mobile and try to open the default map app
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // For mobile devices, try to open the default map app
            // This works on both iOS and Android
            return `https://maps.google.com/maps?q=${lat},${lng}&navigate=yes`;
        } else {
            // For desktop, open Google Maps in browser
            return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        }
    }
    
    initFilters() {
        // Handle "Todos" button
        const allButton = document.querySelector('[data-filter="all"]');
        if (allButton) {
            allButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.clearActiveStates();
                allButton.classList.add('active');
                this.applyFilter('all');
            });
        }

        // Handle category buttons (main categories)
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.clearActiveStates();
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                this.applyFilter(category);
            });
        });

        // Handle subcategory buttons
        const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
        subcategoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.clearActiveStates();
                button.classList.add('active');
                
                const category = button.getAttribute('data-filter');
                const subcategory = button.getAttribute('data-subcategory');
                this.applySubcategoryFilter(category, subcategory);
            });
        });
    }

    clearActiveStates() {
        const allButtons = document.querySelectorAll('.filter-btn');
        allButtons.forEach(btn => btn.classList.remove('active'));
    }
    
    applyFilter(filter) {
        this.currentFilter = filter;
        const visibleMarkers = [];
        
        this.markers.forEach(({ marker, location }) => {
            if (filter === 'all' || location.category === filter) {
                this.markerGroup.addLayer(marker);
                visibleMarkers.push(marker);
            } else {
                this.markerGroup.removeLayer(marker);
            }
        });
        
        // Center map on visible markers
        this.centerMapOnMarkers(visibleMarkers);
    }

    applySubcategoryFilter(category, subcategory) {
        this.currentFilter = `${category}-${subcategory}`;
        const visibleMarkers = [];
        
        this.markers.forEach(({ marker, location }) => {
            if (location.category === category && location.subcategory === subcategory) {
                this.markerGroup.addLayer(marker);
                visibleMarkers.push(marker);
            } else {
                this.markerGroup.removeLayer(marker);
            }
        });
        
        // Center map on visible markers
        this.centerMapOnMarkers(visibleMarkers);
    }
    
    centerMapOnMarkers(markers) {
        if (markers.length === 0) return;
        
        if (markers.length === 1) {
            // If only one marker, center on it
            this.map.setView(markers[0].getLatLng(), 15);
        } else {
            // If multiple markers, fit bounds to show all
            const group = new L.featureGroup(markers);
            this.map.fitBounds(group.getBounds(), {
                padding: [20, 20]
            });
        }
    }
    
    // Method to add custom styles for markers
    addMarkerStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .custom-marker {
                background: white;
                border: 2px solid var(--primary-color);
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .custom-marker:hover {
                transform: scale(1.1);
                box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            }
            
            .marker-icon {
                font-size: 14px;
            }
            
            .custom-div-icon {
                background: transparent;
                border: none;
            }
            
            .leaflet-popup-content {
                margin: 0;
                padding: 0;
            }
            
            .popup-content {
                padding: 0;
            }
            
            .popup-content img {
                margin: 0;
                border-radius: 8px 8px 0 0;
            }
            
            .popup-content h3,
            .popup-content p {
                margin: 0.5rem 1rem;
            }
            
            .popup-contact {
                margin: 1rem;
                padding-top: 0.5rem;
                border-top: 1px solid #eee;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        const interactiveMap = new InteractiveMap();
        interactiveMap.addMarkerStyles();
    }
});
