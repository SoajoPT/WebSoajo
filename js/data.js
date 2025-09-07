// Data structure for all locations and establishments
const freguesiaData = {
    lugares: [
        {
            id: 'aldeia-velha',
            name: 'Soajo',
            category: 'culture',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Aldeia histórica com arquitetura tradicional preservada',
            address: 'Aldeia Velha, Freguesia Rural',
            image: 'https://pixabay.com/get/gb2f3ff3557aced2df9de481b0ea7da4e88aa28ba1c74074f322b332635220e0a063c227a3dc03d083dc1aaf085346b927d6d9a55e7af5051bf73acc1cd0e49ee_1280.jpg',
            capacity: 'População: 150 habitantes',
            contact: 'Tel: +351 234 567 890'
        },
        {
            id: 'vale-verde',
            name: 'Cunhas',
            category: 'activity',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Vale natural ideal para caminhadas e observação da natureza',
            address: 'Vale Verde, Freguesia Rural',
            image: 'https://pixabay.com/get/g7b5c5199550ef5d8b936e8f275b771b46c1e401965ab777f2bbd3b44cb9b43bfebe15c2444df4f4a7596d14d4e437fdb58de78ffae5ee935b33905a536ff1f02_1280.jpg',
            capacity: 'Trilhos: 3 percursos',
            contact: 'Info: turismo@freguesia.pt'
        },
        {
            id: 'quinta-sol',
            name: 'Quinta do Sol',
            category: 'accommodation',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Quinta tradicional convertida em alojamento rural',
            address: 'Quinta do Sol, Freguesia Rural',
            image: 'https://pixabay.com/get/gcf89c432c743d4ca4aea68680bc3f0368272f8fcd5986b021e08584a4d2a1069c2f4bb0310ad69bf703380e2747bf4b0e810ce1f39a761fcd107b66f1f7bc2cb_1280.jpg',
            capacity: 'Capacidade: 12 pessoas',
            contact: 'Tel: +351 234 567 891'
        },
        {
            id: 'serra-alta',
            name: 'Serra Alta',
            category: 'activity',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Ponto mais alto da região com vistas panorâmicas',
            address: 'Serra Alta, Freguesia Rural',
            image: 'https://pixabay.com/get/gd1b2e62467159aeaa692b3583a2811041f15f8c86866d9cd180aa045d280d63293788bc0f73c0f76a4a0385c68defff88767e1d74e66f6b71dca1f44603aff94_1280.jpg',
            capacity: 'Altitude: 450m',
            contact: 'Info: trilhos@freguesia.pt'
        },
        {
            id: 'ribeira-funda',
            name: 'Ribeira Funda',
            category: 'activity',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Ribeira cristalina ideal para pesca e relaxamento',
            address: 'Ribeira Funda, Freguesia Rural',
            image: 'https://pixabay.com/get/g9f1bc352127409bb85f2b753282865f2463a0f9a4a727760087c1e503cccb4c32d75caa11c016b5f8b6df055e6e30965816a1bcef8af54c66cdf527261f49c3f_1280.jpg',
            capacity: 'Extensão: 5km',
            contact: 'Tel: +351 234 567 892'
        },
        {
            id: 'pedra-branca',
            name: 'Pedra Branca',
            category: 'culture',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Formação rochosa com valor geológico e histórico',
            address: 'Pedra Branca, Freguesia Rural',
            image: 'https://pixabay.com/get/g161293affbe6f1dcaf8aedec18b2a0e4e469fb98fa00b86de0fa0ff0e086570a27564276e02fc744d94c3510606c92e9d7345a6841a230d336adc8b7be8a3a8a_1280.jpg',
            capacity: 'Área: 2 hectares',
            contact: 'Info: patrimonio@freguesia.pt'
        }
    ],
    
    accommodation: [
        {
            id: 'hotel-rural-monte',
            name: 'Hotel Rural Monte Verde',
            category: 'accommodation',
            subcategory: 'alojamento',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Hotel rural com spa e vista para a serra',
            address: 'Rua da Serra, 123, Freguesia Rural',
            image: 'https://pixabay.com/get/g0dff54621fab7d0b80c59582c46a84bf920ef4756f11ebfbc9c93d1d7a5973e17a726ee05365c99ba92fa56d13c1e004894842408deeb44bf591c1785c0bd9ad_1280.jpg',
            capacity: 'Quartos: 20',
            contact: 'Tel: +351 234 567 800'
        },
        {
            id: 'Casa da Quelha',
            name: 'Casa da Quelha',
            category: 'accommodation',
            subcategory: 'alojamento',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'A Casa da Quelha está localizada em Soajo, em pleno Parque Nacional Peneda-Gerês. Venha visitar a Casa da Quelha',
            address: 'Lage - Soajo',
            image: 'https://a0.muscache.com/pictures/hosting/Hosting-1181215139930638528/original/2a0bb256-5906-4841-bbea-e5c3351cf147.jpeg',
            capacity: 'Quartos: 1',
            contact: 'Tel: +351 234 567 801',
            link: 'https://www.airbnb.com/rooms/1181215139930638528?locale=pt-PT&currency=EUR&check_in=2025-08-28&check_out=2025-09-02'
        },
        {
            id: 'parque-caravanas',
            name: 'Parque de Caravanas Vale Verde',
            category: 'accommodation',
            subcategory: 'caravanas',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Parque equipado para caravanas com todas as comodidades',
            address: 'Vale Verde, Freguesia Rural',
            image: 'https://pixabay.com/get/gcf89c432c743d4ca4aea68680bc3f0368272f8fcd5986b021e08584a4d2a1069c2f4bb0310ad69bf703380e2747bf4b0e810ce1f39a761fcd107b66f1f7bc2cb_1280.jpg',
            capacity: 'Lugares: 25',
            contact: 'Tel: +351 234 567 802'
        },
        {
            id: 'campismo-serra',
            name: 'Campismo da Serra',
            category: 'accommodation',
            subcategory: 'campismo',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Parque de campismo em plena natureza',
            address: 'Serra Alta, Freguesia Rural',
            image: 'https://pixabay.com/get/g7b5c5199550ef5d8b936e8f275b771b46c1e401965ab777f2bbd3b44cb9b43bfebe15c2444df4f4a7596d14d4e437fdb58de78ffae5ee935b33905a536ff1f02_1280.jpg',
            capacity: 'Lugares: 50',
            contact: 'Tel: +351 234 567 803'
        }
    ],
    
    restaurants: [
        {
            id: 'tasca-do-manel',
            name: 'Tasca do Manel',
            category: 'restaurant',
            subcategory: 'restaurantes',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Tasca tradicional com pratos regionais',
            address: 'Rua Principal, 45, Freguesia Rural',
            image: 'https://pixabay.com/get/geb08e356b97df1e29774376fcc11ebed34a91b9f8ffdaf7ef6ca812aea5ddd50d8c03231ceb5a4dddd94a2ac2fe628425dd443d192be46f0c3e9f94eadfe043c_1280.jpg',
            capacity: 'Lugares: 50',
            contact: 'Tel: +351 234 567 810'
        },
        {
            id: 'restaurante-serra',
            name: 'Restaurante da Serra',
            category: 'restaurant',
            subcategory: 'restaurantes',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Restaurante com especialidades de caça',
            address: 'Serra Alta, Freguesia Rural',
            image: 'https://pixabay.com/get/g2c24ff7eaeece66bd547652c0a0d81e530ca1ed6f81d2da8fc4cce5bffe9fe4f44c2468ceab03ec0638bbca23728312d604c38753fab5b61767c1a1b1c890fc3_1280.jpg',
            capacity: 'Lugares: 80',
            contact: 'Tel: +351 234 567 811'
        },
        {
            id: 'snackbar-central',
            name: 'SnackBar Central',
            category: 'restaurant',
            subcategory: 'snackbar',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'SnackBar com refeições rápidas e lanches',
            address: 'Praça Central, 1, Freguesia Rural',
            image: 'https://pixabay.com/get/g060442eec6c7c20c0069c8bc69d8de6d643d59a030baad9d91dd608126fec0a4352fbb727800ac852c7ff2578c02ba9d49d1c62e3d307037f1a8eccb7ac81a2d_1280.jpg',
            capacity: 'Lugares: 30',
            contact: 'Tel: +351 234 567 812'
        },
        {
            id: 'cafe-central',
            name: 'Café Central',
            category: 'restaurant',
            subcategory: 'cafe',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Café tradicional no centro da freguesia',
            address: 'Rua do Café, 8, Freguesia Rural',
            image: 'https://pixabay.com/get/g060442eec6c7c20c0069c8bc69d8de6d643d59a030baad9d91dd608126fec0a4352fbb727800ac852c7ff2578c02ba9d49d1c62e3d307037f1a8eccb7ac81a2d_1280.jpg',
            capacity: 'Lugares: 25',
            contact: 'Tel: +351 234 567 813'
        },
        {
            id: 'padaria-tradicional',
            name: 'Padaria Tradicional',
            category: 'restaurant',
            subcategory: 'padarias',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Padaria artesanal com pão de lenha',
            address: 'Rua do Forno, 12, Freguesia Rural',
            image: 'https://pixabay.com/get/g060442eec6c7c20c0069c8bc69d8de6d643d59a030baad9d91dd608126fec0a4352fbb727800ac852c7ff2578c02ba9d49d1c62e3d307037f1a8eccb7ac81a2d_1280.jpg',
            capacity: 'Funcionários: 3',
            contact: 'Tel: +351 234 567 814'
        },
        {
            id: 'supermercado-local',
            name: 'Supermercado Local',
            category: 'restaurant',
            subcategory: 'mercearias',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Supermercado com produtos locais e frescos',
            address: 'Largo do Mercado, Freguesia Rural',
            image: 'https://pixabay.com/get/g060442eec6c7c20c0069c8bc69d8de6d643d59a030baad9d91dd608126fec0a4352fbb727800ac852c7ff2578c02ba9d49d1c62e3d307037f1a8eccb7ac81a2d_1280.jpg',
            capacity: 'Área: 200m²',
            contact: 'Tel: +351 234 567 815'
        }
    ],
    
    activities: [
        {
            id: 'trilho-natureza',
            name: 'Trilho da Natureza',
            category: 'activity',
            subcategory: 'actividades-natureza',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Percurso pedestre pela fauna e flora local',
            address: 'Início: Centro de Interpretação',
            image: 'https://pixabay.com/get/g7b5c5199550ef5d8b936e8f275b771b46c1e401965ab777f2bbd3b44cb9b43bfebe15c2444df4f4a7596d14d4e437fdb58de78ffae5ee935b33905a536ff1f02_1280.jpg',
            capacity: 'Duração: 3h',
            contact: 'Info: trilhos@freguesia.pt'
        },
        {
            id: 'centro-hipico',
            name: 'Centro Hípico Rural',
            category: 'activity',
            subcategory: 'actividades-natureza',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Passeios a cavalo pela região',
            address: 'Quinta dos Cavalos, Freguesia Rural',
            image: 'https://pixabay.com/get/gd1b2e62467159aeaa692b3583a2811041f15f8c86866d9cd180aa045d280d63293788bc0f73c0f76a4a0385c68defff88767e1d74e66f6b71dca1f44603aff94_1280.jpg',
            capacity: 'Cavalos: 12',
            contact: 'Tel: +351 234 567 821'
        },
        {
            id: 'restaurante-gastronomia',
            name: 'Experiência Gastronómica',
            category: 'activity',
            subcategory: 'gastronomia',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Workshop de culinária tradicional portuguesa',
            address: 'Quinta Gastronómica, Freguesia Rural',
            image: 'https://pixabay.com/get/geb08e356b97df1e29774376fcc11ebed34a91b9f8ffdaf7ef6ca812aea5ddd50d8c03231ceb5a4dddd94a2ac2fe628425dd443d192be46f0c3e9f94eadfe043c_1280.jpg',
            capacity: 'Grupos: 15 pessoas',
            contact: 'Tel: +351 234 567 822'
        },
        {
            id: 'museu-etnografico',
            name: 'Museu Etnográfico',
            category: 'activity',
            subcategory: 'patrimonio-edificado',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Museu dedicado às tradições locais',
            address: 'Rua do Museu, 8, Freguesia Rural',
            image: 'https://pixabay.com/get/gb2f3ff3557aced2df9de481b0ea7da4e88aa28ba1c74074f322b332635220e0a063c227a3dc03d083dc1aaf085346b927d6d9a55e7af5051bf73acc1cd0e49ee_1280.jpg',
            capacity: 'Visitantes/dia: 100',
            contact: 'Tel: +351 234 567 820'
        },
        {
            id: 'festa-tradicional',
            name: 'Festa da Colheita',
            category: 'activity',
            subcategory: 'festividades',
            coords: [41.87500372977779, -8.264530028893418],
            description: 'Festividade anual com tradições locais',
            address: 'Praça Central, Freguesia Rural',
            image: 'https://pixabay.com/get/gb2f3ff3557aced2df9de481b0ea7da4e88aa28ba1c74074f322b332635220e0a063c227a3dc03d083dc1aaf085346b927d6d9a55e7af5051bf73acc1cd0e49ee_1280.jpg',
            capacity: 'Evento: Setembro',
            contact: 'Info: festas@freguesia.pt'
        }
    ]
};

// Combine all data for easy access
const allLocations = [
    ...freguesiaData.lugares,
    ...freguesiaData.accommodation,
    ...freguesiaData.restaurants,
    ...freguesiaData.activities
];

// Export data for use in other scripts
window.freguesiaData = freguesiaData;
window.allLocations = allLocations;
