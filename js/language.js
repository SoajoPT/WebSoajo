// Language switching functionality
class LanguageManager {
    constructor() {
        this.currentLanguage = 'pt';
        this.currentData = null;
        this.translations = {
            pt: {
                // Navigation
                home: 'Home',
                lugares: 'Lugares',
                ondeficar: 'Onde Ficar',
                oquefazer: 'O que Fazer',
                ondecomer: 'Onde Comer',
                mapa: 'Mapa',
                
                // Places
                soajo: 'Soajo',
                cunhas: 'Cunhas', 
                paradela: 'Paradela',
                adrao: 'Adrão',
                vilarsuente: 'Vilar de Suente',
                vilarinhoquartas: 'Vilarinho das Quartas',
                
                // Accommodation
                alojamento: 'Alojamento',
                caravanas: 'Caravanas',
                campismo: 'Campismo',
                
                // Activities
                gastronomia: 'Gastronomia',
                patrimonio: 'Património Edificado',
                actividades: 'Actividades Natureza',
                festividades: 'Festividades',
                
                // Food
                restaurantes: 'Restaurantes',
                snackbar: 'SnackBar',
                cafe: 'Café',
                padarias: 'Padarias',
                mercearias: 'Mercearias',
                
                // Main content
                herotitle: 'Bem-vindos à Nossa Freguesia',
                herosubtitle: 'Descubra a beleza e tradição da nossa terra',
                exploremapa: 'Explorar Mapa',
                
                // About section
                nossafreguesia: 'A Nossa Freguesia',
                abouttext1: 'Situada no coração de Portugal, a nossa freguesia combina a beleza natural com a rica tradição cultural portuguesa. Com paisagens deslumbrantes, gastronomia autêntica e um património histórico preservado, oferecemos uma experiência única aos nossos visitantes.',
                abouttext2: 'Das nossas aldeias pitorescas às quintas tradicionais, cada canto conta uma história de gerações que moldaram esta terra com amor e dedicação.',
                
                // Features
                descobrir: 'Descubra a Nossa Região',
                ondeficartext: 'Hotéis rurais, quintas tradicionais e casas de campo para uma estadia inesquecível.',
                ondecomertext: 'Saboreie a gastronomia local em restaurantes, tascas e mercados tradicionais.',
                oquefazertext: 'Trilhos naturais, atividades culturais e experiências únicas na nossa região.',
                lugarestext: 'Explore as nossas aldeias pitorescas e descubra os tesouros escondidos.',
                
                // Map
                mapainterativo: 'Mapa Interativo',
                mapadescricao: 'Explore os locais, alojamentos, restaurantes e atividades da nossa freguesia.',
                todos: 'Todos',
                
                // Popup content
                descricao: 'Descrição',
                morada: 'Morada',
                contacto: 'Contacto',
                comochegar: 'Como Chegar',
                
                // Footer
                preservando: 'Preservando tradições, abraçando o futuro.',
                linksuteis: 'Links Úteis',
                contactos: 'Contactos',
                sobre: 'Sobre',
                direitos: 'Todos os direitos reservados.'
            },
            en: {
                // Navigation
                home: 'Home',
                lugares: 'Places',
                ondeficar: 'Where to Stay',
                oquefazer: 'What to Do',
                ondecomer: 'Where to Eat',
                mapa: 'Map',
                
                // Places
                soajo: 'Soajo',
                cunhas: 'Cunhas',
                paradela: 'Paradela', 
                adrao: 'Adrão',
                vilarsuente: 'Vilar de Suente',
                vilarinhoquartas: 'Vilarinho das Quartas',
                
                // Accommodation
                alojamento: 'Accommodation',
                caravanas: 'Caravans',
                campismo: 'Camping',
                
                // Activities
                gastronomia: 'Gastronomy',
                patrimonio: 'Built Heritage',
                actividades: 'Nature Activities',
                festividades: 'Festivities',
                
                // Food
                restaurantes: 'Restaurants',
                snackbar: 'Snack Bar',
                cafe: 'Café',
                padarias: 'Bakeries',
                mercearias: 'Grocery Stores',
                
                // Main content
                herotitle: 'Welcome to Our Parish',
                herosubtitle: 'Discover the beauty and tradition of our land',
                exploremapa: 'Explore Map',
                
                // About section
                nossafreguesia: 'Our Parish',
                abouttext1: 'Located in the heart of Portugal, our parish combines natural beauty with rich Portuguese cultural tradition. With stunning landscapes, authentic gastronomy and preserved historical heritage, we offer a unique experience to our visitors.',
                abouttext2: 'From our picturesque villages to traditional farms, every corner tells a story of generations that shaped this land with love and dedication.',
                
                // Features
                descobrir: 'Discover Our Region',
                ondeficartext: 'Rural hotels, traditional farms and country houses for an unforgettable stay.',
                ondecomertext: 'Taste local cuisine in restaurants, taverns and traditional markets.',
                oquefazertext: 'Nature trails, cultural activities and unique experiences in our region.',
                lugarestext: 'Explore our picturesque villages and discover hidden treasures.',
                
                // Map
                mapainterativo: 'Interactive Map',
                mapadescricao: 'Explore the places, accommodations, restaurants and activities of our parish.',
                todos: 'All',
                
                // Popup content
                descricao: 'Description',
                morada: 'Address',
                contacto: 'Contact',
                comochegar: 'Directions',
                
                // Footer
                preservando: 'Preserving traditions, embracing the future.',
                linksuteis: 'Useful Links',
                contactos: 'Contacts',
                sobre: 'About',
                direitos: 'All rights reserved.'
            },
            es: {
                // Navigation
                home: 'Inicio',
                lugares: 'Lugares',
                ondeficar: 'Dónde Alojarse',
                oquefazer: 'Qué Hacer',
                ondecomer: 'Dónde Comer',
                mapa: 'Mapa',
                
                // Places
                soajo: 'Soajo',
                cunhas: 'Cunhas',
                paradela: 'Paradela',
                adrao: 'Adrão',
                vilarsuente: 'Vilar de Suente',
                vilarinhoquartas: 'Vilarinho das Quartas',
                
                // Accommodation
                alojamento: 'Alojamiento',
                caravanas: 'Caravanas',
                campismo: 'Camping',
                
                // Activities
                gastronomia: 'Gastronomía',
                patrimonio: 'Patrimonio Edificado',
                actividades: 'Actividades Naturales',
                festividades: 'Festividades',
                
                // Food
                restaurantes: 'Restaurantes',
                snackbar: 'Snack Bar',
                cafe: 'Café',
                padarias: 'Panaderías',
                mercearias: 'Tiendas de Comestibles',
                
                // Main content
                herotitle: 'Bienvenidos a Nuestra Parroquia',
                herosubtitle: 'Descubre la belleza y tradición de nuestra tierra',
                exploremapa: 'Explorar Mapa',
                
                // About section
                nossafreguesia: 'Nuestra Parroquia',
                abouttext1: 'Situada en el corazón de Portugal, nuestra parroquia combina la belleza natural con la rica tradición cultural portuguesa. Con paisajes impresionantes, gastronomía auténtica y patrimonio histórico preservado, ofrecemos una experiencia única a nuestros visitantes.',
                abouttext2: 'Desde nuestros pueblos pintorescos hasta las granjas tradicionales, cada rincón cuenta una historia de generaciones que moldearon esta tierra con amor y dedicación.',
                
                // Features
                descobrir: 'Descubre Nuestra Región',
                ondeficartext: 'Hoteles rurales, granjas tradicionales y casas de campo para una estancia inolvidable.',
                ondecomertext: 'Saborea la gastronomía local en restaurantes, tabernas y mercados tradicionales.',
                oquefazertext: 'Senderos naturales, actividades culturales y experiencias únicas en nuestra región.',
                lugarestext: 'Explora nuestros pueblos pintorescos y descubre tesoros escondidos.',
                
                // Map
                mapainterativo: 'Mapa Interactivo',
                mapadescricao: 'Explora los lugares, alojamientos, restaurantes y actividades de nuestra parroquia.',
                todos: 'Todos',
                
                // Popup content
                descricao: 'Descripción',
                morada: 'Dirección',
                contacto: 'Contacto',
                comochegar: 'Cómo Llegar',
                
                // Footer
                preservando: 'Preservando tradiciones, abrazando el futuro.',
                linksuteis: 'Enlaces Útiles',
                contactos: 'Contactos',
                sobre: 'Acerca de',
                direitos: 'Todos los derechos reservados.'
            },
            fr: {
                // Navigation
                home: 'Accueil',
                lugares: 'Lieux',
                ondeficar: 'Où Séjourner',
                oquefazer: 'Que Faire',
                ondecomer: 'Où Manger',
                mapa: 'Carte',
                
                // Places
                soajo: 'Soajo',
                cunhas: 'Cunhas',
                paradela: 'Paradela',
                adrao: 'Adrão',
                vilarsuente: 'Vilar de Suente',
                vilarinhoquartas: 'Vilarinho das Quartas',
                
                // Accommodation
                alojamento: 'Hébergement',
                caravanas: 'Caravanes',
                campismo: 'Camping',
                
                // Activities
                gastronomia: 'Gastronomie',
                patrimonio: 'Patrimoine Bâti',
                actividades: 'Activités Nature',
                festividades: 'Festivités',
                
                // Food
                restaurantes: 'Restaurants',
                snackbar: 'Snack Bar',
                cafe: 'Café',
                padarias: 'Boulangeries',
                mercearias: 'Épiceries',
                
                // Main content
                herotitle: 'Bienvenue dans Notre Paroisse',
                herosubtitle: 'Découvrez la beauté et la tradition de notre terre',
                exploremapa: 'Explorer la Carte',
                
                // About section
                nossafreguesia: 'Notre Paroisse',
                abouttext1: 'Située au cœur du Portugal, notre paroisse combine la beauté naturelle avec la riche tradition culturelle portugaise. Avec des paysages époustouflants, une gastronomie authentique et un patrimoine historique préservé, nous offrons une expérience unique à nos visiteurs.',
                abouttext2: 'De nos villages pittoresques aux fermes traditionnelles, chaque coin raconte une histoire de générations qui ont façonné cette terre avec amour et dévouement.',
                
                // Features
                descobrir: 'Découvrez Notre Région',
                ondeficartext: 'Hôtels ruraux, fermes traditionnelles et maisons de campagne pour un séjour inoubliable.',
                ondecomertext: 'Savourez la gastronomie locale dans les restaurants, tavernes et marchés traditionnels.',
                oquefazertext: 'Sentiers naturels, activités culturelles et expériences uniques dans notre région.',
                lugarestext: 'Explorez nos villages pittoresques et découvrez des trésors cachés.',
                
                // Map
                mapainterativo: 'Carte Interactive',
                mapadescricao: 'Explorez les lieux, hébergements, restaurants et activités de notre paroisse.',
                todos: 'Tous',
                
                // Popup content
                descricao: 'Description',
                morada: 'Adresse',
                contacto: 'Contact',
                comochegar: 'Itinéraire',
                
                // Footer
                preservando: 'Préservant les traditions, embrassant l\'avenir.',
                linksuteis: 'Liens Utiles',
                contactos: 'Contacts',
                sobre: 'À Propos',
                direitos: 'Tous droits réservés.'
            }
        };
        
        this.init();
    }
    
    init() {
        this.initLanguageSelector();
        this.loadSavedLanguage();
    }
    
    initLanguageSelector() {
        const languageOptions = document.querySelectorAll('.lang-option');
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = option.getAttribute('data-lang');
                this.changeLanguage(selectedLang);
                
                // Update active states
                languageOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Update button text
                const languageBtn = document.querySelector('.language-btn');
                const flags = { pt: 'PT', en: 'EN', es: 'ES', fr: 'FR' };
                languageBtn.innerHTML = `<i class="fas fa-globe"></i> ${flags[selectedLang]}`;
            });
        });
    }
    
    changeLanguage(lang) {
        this.currentLanguage = lang;
        this.translatePage(lang);
        this.loadLanguageData(lang);
        this.saveLanguagePreference(lang);
    }
    
    loadLanguageData(lang) {
        try {
            // Get the data from the already loaded language files
            this.currentData = window[`freguesiaData_${lang}`];
            
            if (this.currentData) {
                // Update allLocations with the new language data
                window.allLocations = [
                    ...this.currentData.accommodation
                ];
                
                // Notify map to reload with new data
                if (window.interactiveMap) {
                    window.interactiveMap.refreshMarkersWithNewData();
                }
                
                console.log(`Language data loaded for: ${lang}`);
            } else {
                console.error(`Language data not found for: ${lang}`);
            }
            
        } catch (error) {
            console.error('Error loading language data:', error);
        }
    }
    
    translatePage(lang) {
        const translations = this.translations[lang];
        
        // Translate elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        // Update document language attribute
        document.documentElement.lang = lang;
    }

    // Public method to apply translations (useful for dynamically created content)
    applyTranslations() {
        this.translatePage(this.currentLanguage);
    }
    
    saveLanguagePreference(lang) {
        localStorage.setItem('freguesia_language', lang);
    }
    
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('freguesia_language') || 'pt';
        
        // Load data for current language
        this.loadLanguageData(savedLang);
        
        if (savedLang !== 'pt') {
            this.changeLanguage(savedLang);
            
            // Update UI to reflect saved language
            const languageOptions = document.querySelectorAll('.lang-option');
            const languageBtn = document.querySelector('.language-btn');
            
            languageOptions.forEach(opt => {
                opt.classList.remove('active');
                if (opt.getAttribute('data-lang') === savedLang) {
                    opt.classList.add('active');
                }
            });
            
            const flags = { pt: 'PT', en: 'EN', es: 'ES', fr: 'FR' };
            languageBtn.innerHTML = `<i class="fas fa-globe"></i> ${flags[savedLang]}`;
        }
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
    console.log('Language manager initialized');
});