// Map functionality with Leaflet
class InteractiveMap {
    constructor() {
        this.map = null;
        this.markers = [];
        this.markerGroup = null;
        this.currentFilter = 'all';
        this.originalMapHeight = null;
        this.init();
    }
    
    refreshMarkersWithNewData() {
        // Reload markers with new language data
        this.loadMarkers();
        console.log('Map refreshed with new language data');
    }
    
    init() {
        this.initMap();
        this.loadMarkers();
        this.initFilters();
    }
    
    initMap() {
        // Initialize Leaflet map centered on Soajo
        this.map = L.map('map').setView([41.8742, -8.2630], 13);
        
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
            className: 'custom-popup',
            offset: [0, -10] // Offset popup slightly above marker
        });
        
        // Apply translations and auto-resize when popup opens
        marker.on('popupopen', (e) => {
            if (window.languageManager) {
                window.languageManager.applyTranslations();
            }
            
            // Auto-resize map to accommodate popup
            setTimeout(() => {
                this.resizeMapForPopup(e.popup);
            }, 200);
        });
        
        // Restore original map size and recenter when popup closes
        marker.on('popupclose', () => {
            this.restoreMapSize();
            // Recenter to show all visible markers after a short delay
            setTimeout(() => {
                this.recenterToVisibleMarkers();
            }, 600); // Wait for resize animation to complete
        });
        
        return marker;
    }
    
    createPopupContent(location) {
        const navigationUrl = this.getNavigationUrl(location.coords);
        const isAirbnb = location.url && location.url.includes('airbnb.com');
        
        let popupHTML = `
            <div class="popup-content">
                <img src="${location.image}" alt="${location.name}" loading="lazy">
                <h3>${location.name}</h3>
                <p><strong data-translate="descricao">Descrição</strong>: ${location.description}</p>
                <p><strong data-translate="morada">Morada</strong>: ${location.address}</p>
                <p><strong>${this.getCapacityLabel(location.category)}</strong>: ${location.capacity}</p>`;
        
        if (isAirbnb && location.rating) {
            popupHTML += `
                <div class="airbnb-details">
                    <p><strong>Avaliação</strong>: ★${location.rating} (${location.reviewCount} avaliações)</p>
                    <p><strong>Anfitrião</strong>: ${location.host}</p>
                    <p><strong>Tipo</strong>: ${location.propertyType}</p>
                </div>
                <div class="popup-airbnb-actions">
                    <a href="${location.url}" target="_blank" class="airbnb-btn">
                        <i class="fas fa-external-link-alt"></i> Ver no Airbnb
                    </a>
                </div>`;
        } else {
            popupHTML += `
                <div class="popup-contact">
                    <p><strong data-translate="contacto">Contacto</strong>: 
                        <a href="${this.getContactLink(location.contact)}" target="_blank">
                            ${location.contact}
                        </a>
                    </p>
                </div>`;
        }
        
        popupHTML += `
                <div class="popup-navigation">
                    <a href="${navigationUrl}" target="_blank" class="navigation-btn">
                        <i class="fas fa-route"></i> <span data-translate="comochegar">Como Chegar</span>
                    </a>
                </div>
            </div>
        `;
        
        return popupHTML;
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
        // Handle "All" button
        const allButton = document.querySelector('[data-filter="all"]');
        if (allButton) {
            allButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.clearActiveStates();
                this.closeAllSubmenus();
                allButton.classList.add('active');
                this.applyFilter('all');
            });
        }

        // Handle category icon buttons
        const categoryButtons = document.querySelectorAll('.category-icon-btn');
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Check if we're on mobile (where subcategories should toggle)
                const isMobile = window.innerWidth <= 768;
                
                if (isMobile) {
                    // On mobile, toggle the submenu
                    const filterGroup = button.closest('.icon-filter-group');
                    const isCurrentlyActive = filterGroup.classList.contains('active');
                    
                    // Close all other submenus
                    this.closeAllSubmenus();
                    
                    if (!isCurrentlyActive) {
                        // Open this submenu
                        filterGroup.classList.add('active');
                    }
                } else {
                    // On desktop, apply filter directly to main category
                    this.clearActiveStates();
                    button.classList.add('active');
                    
                    const category = button.getAttribute('data-category');
                    this.applyFilter(category);
                }
            });
        });

        // Handle subcategory buttons
        const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
        subcategoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.clearActiveStates();
                this.closeAllSubmenus();
                button.classList.add('active');
                
                const category = button.getAttribute('data-filter');
                const subcategory = button.getAttribute('data-subcategory');
                this.applySubcategoryFilter(category, subcategory);
            });
        });
    }

    closeAllSubmenus() {
        const filterGroups = document.querySelectorAll('.icon-filter-group');
        filterGroups.forEach(group => {
            group.classList.remove('active');
        });
    }

    clearActiveStates() {
        const allButtons = document.querySelectorAll('.icon-filter-btn, .subcategory-btn');
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
    
    resizeMapForPopup(popup) {
        try {
            const mapContainer = document.getElementById('map');
            if (!mapContainer) return;
            
            // Store original height if not already stored
            if (!this.originalMapHeight) {
                this.originalMapHeight = mapContainer.style.height || getComputedStyle(mapContainer).height;
            }
            
            // Get popup container
            const popupContainer = popup._container;
            if (!popupContainer) return;
            
            // Calculate current viewport and popup dimensions
            const mapRect = mapContainer.getBoundingClientRect();
            const popupRect = popupContainer.getBoundingClientRect();
            
            // Check if popup extends beyond bottom of current map
            const headerHeight = 80;
            const padding = 40;
            const availableBottom = window.innerHeight - padding;
            
            if (popupRect.bottom > availableBottom) {
                // Calculate how much extra height we need
                const extraHeight = popupRect.bottom - availableBottom + padding;
                const currentHeight = mapRect.height;
                const newHeight = currentHeight + extraHeight;
                
                // Apply new height with smooth transition
                mapContainer.style.transition = 'height 0.5s ease';
                mapContainer.style.height = `${newHeight}px`;
                
                // Invalidate map size after resize
                setTimeout(() => {
                    this.map.invalidateSize();
                }, 100);
                
                console.log(`Map resized from ${currentHeight}px to ${newHeight}px for popup`);
            }
        } catch (error) {
            console.log('Map resize failed, popup still works');
        }
    }
    
    restoreMapSize() {
        try {
            const mapContainer = document.getElementById('map');
            if (!mapContainer || !this.originalMapHeight) return;
            
            // Restore original height with smooth transition
            mapContainer.style.transition = 'height 0.5s ease';
            mapContainer.style.height = this.originalMapHeight;
            
            // Invalidate map size after resize
            setTimeout(() => {
                this.map.invalidateSize();
            }, 100);
            
            console.log('Map size restored to original');
        } catch (error) {
            console.log('Map restore failed, but no major impact');
        }
    }
    
    recenterToVisibleMarkers() {
        try {
            // Get all currently visible markers
            const visibleMarkers = [];
            this.markers.forEach(({ marker, location }) => {
                if (this.markerGroup.hasLayer(marker)) {
                    visibleMarkers.push(marker);
                }
            });
            
            // Center map on visible markers
            this.centerMapOnMarkers(visibleMarkers);
            console.log('Map recentered to show all visible markers');
        } catch (error) {
            console.log('Recenter failed, but no major impact');
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

// Simple mobile menu functionality (works without map)
function initMobileMenus() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const filterGroup = button.closest('.filter-group');
            const isActive = filterGroup.classList.contains('active');
            
            // Close all menus first
            document.querySelectorAll('.filter-group').forEach(group => {
                group.classList.remove('active');
            });
            
            // Toggle this menu
            if (!isActive) {
                filterGroup.classList.add('active');
            }
            
            console.log('Menu toggled for:', button.textContent);
        });
    });
    
    // Handle subcategory clicks
    const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
    subcategoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Subcategory clicked:', button.textContent);
            
            // Close all menus
            document.querySelectorAll('.filter-group').forEach(group => {
                group.classList.remove('active');
            });
        });
    });
}

// Initialize mobile menus immediately
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenus();
    console.log('Mobile menus initialized');
});

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        try {
            window.interactiveMap = new InteractiveMap();
            window.interactiveMap.addMarkerStyles();
            console.log('Map initialized successfully');
        } catch (error) {
            console.log('Map initialization failed, but menus should still work');
        }
    }
});
