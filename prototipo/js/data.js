// Mock Data System - Jerárquico

// Categorías con estructura de árbol (Flat List con parentId)
// Si parentId es null, es categoría raíz.
const CATEGORIES = [
    // --- RAÍZ ---
    { id: 'carnes', name: 'Carnes', parentId: null, icon: 'ph-hamburger' },
    { id: 'viandas', name: 'Viandas y Granos', parentId: null, icon: 'ph-plant' },
    { id: 'aseo', name: 'Aseo Personal', parentId: null, icon: 'ph-shower' },
    { id: 'bebidas', name: 'Bebidas', parentId: null, icon: 'ph-beer-bottle' },
    { id: 'lacteos', name: 'Lácteos', parentId: null, icon: 'ph-cheese' },
    { id: 'enlatados', name: 'Enlatados', parentId: null, icon: 'ph-can' },
    { id: 'panaderia', name: 'Panadería', parentId: null, icon: 'ph-bread' },
    { id: 'limpieza', name: 'Limpieza Hogar', parentId: null, icon: 'ph-sparkle' },
    { id: 'snacks', name: 'Snacks', parentId: null, icon: 'ph-popcorn' },
    { id: 'congelados', name: 'Congelados', parentId: null, icon: 'ph-snowflake' },

    // --- Subcategorías CARNES ---
    { id: 'pollo', name: 'Pollo', parentId: 'carnes' },
    { id: 'res', name: 'Res', parentId: 'carnes' },
    { id: 'cerdo', name: 'Cerdo', parentId: 'carnes' },
    { id: 'pescado', name: 'Pescado y Mariscos', parentId: 'carnes' },
    { id: 'procesados', name: 'Procesados y Embutidos', parentId: 'carnes' },

    // --- Subcategorías VIANDAS ---
    { id: 'tuberculos', name: 'Tubérculos y Raíces', parentId: 'viandas' },
    { id: 'platanos', name: 'Plátanos', parentId: 'viandas' },
    { id: 'granos', name: 'Granos y Cereales', parentId: 'viandas' },
    { id: 'vegetales-frescos', name: 'Vegetales Frescos', parentId: 'viandas' },

    // --- Subcategorías ASEO ---
    { id: 'jabones', name: 'Jabones', parentId: 'aseo' },
    { id: 'cabello', name: 'Cuidado del Cabello', parentId: 'aseo' },
    { id: 'dental', name: 'Higiene Dental', parentId: 'aseo' },
    { id: 'femenina', name: 'Higiene Femenina', parentId: 'aseo' },
    { id: 'cuerpo', name: 'Cuidado Corporal', parentId: 'aseo' },

    // --- Subcategorías BEBIDAS ---
    { id: 'refrescos', name: 'Refrescos', parentId: 'bebidas' },
    { id: 'jugos', name: 'Jugos', parentId: 'bebidas' },
    { id: 'aguas', name: 'Aguas', parentId: 'bebidas' },
    { id: 'cervezas', name: 'Cervezas', parentId: 'bebidas' },
    { id: 'otros-bebidas', name: 'Energizantes y Café', parentId: 'bebidas' },

    // --- Subcategorías LACTEOS ---
    { id: 'leche', name: 'Leche', parentId: 'lacteos' },
    { id: 'yogurt', name: 'Yogurt', parentId: 'lacteos' },
    { id: 'quesos', name: 'Quesos', parentId: 'lacteos' },
    { id: 'mantequilla', name: 'Mantequilla y Cremas', parentId: 'lacteos' },
    { id: 'postres-lacteos', name: 'Postres Lácteos', parentId: 'lacteos' },

    // --- Subcategorías ENLATADOS ---
    { id: 'conservas-vegetales', name: 'Conservas Vegetales', parentId: 'enlatados' },
    { id: 'salsas', name: 'Salsas', parentId: 'enlatados' },
    { id: 'conservas-carne', name: 'Conservas de Carne/Pescado', parentId: 'enlatados' },
    { id: 'frutas-almibar', name: 'Frutas en Almíbar', parentId: 'enlatados' },

    // --- Subcategorías PANADERIA ---
    { id: 'pan', name: 'Pan Fresco', parentId: 'panaderia' },
    { id: 'galletas', name: 'Galletas', parentId: 'panaderia' },
    { id: 'reposteria', name: 'Repostería', parentId: 'panaderia' },
    { id: 'ingredientes-pan', name: 'Ingredientes Repostería', parentId: 'panaderia' },

    // --- Subcategorías LIMPIEZA ---
    { id: 'ropa', name: 'Cuidado de Ropa', parentId: 'limpieza' },
    { id: 'superficies', name: 'Limpieza Superficies', parentId: 'limpieza' },
    { id: 'bano-cocina', name: 'Baño y Cocina', parentId: 'limpieza' },
    { id: 'utiles-limpieza', name: 'Útiles de Limpieza', parentId: 'limpieza' },

    // --- Subcategorías SNACKS ---
    { id: 'frituras', name: 'Frituras y Chips', parentId: 'snacks' },
    { id: 'frutos-secos', name: 'Frutos Secos', parentId: 'snacks' },
    { id: 'chocolates', name: 'Chocolates', parentId: 'snacks' },
    { id: 'dulces-varios', name: 'Golosinas Varias', parentId: 'snacks' },

    // --- Subcategorías CONGELADOS ---
    { id: 'veg-congelados', name: 'Vegetales Congelados', parentId: 'congelados' },
    { id: 'fruta-congelada', name: 'Frutas Congeladas', parentId: 'congelados' },
    { id: 'vianda-congelada', name: 'Viandas Congeladas', parentId: 'congelados' },
    { id: 'preparados', name: 'Comidas Preparadas', parentId: 'congelados' },
    { id: 'helados', name: 'Helados', parentId: 'congelados' },
];

const PROVIDERS = [
    { id: 'p1', name: 'Supermercado El Ahorro', location: 'Centro' },
    { id: 'p2', name: 'Bodega La Esquina', location: 'Vedado' },
    { id: 'p3', name: 'Market Express 24', location: 'Playa' }
];

// Product Definition (Catalog) mapped to LEAF categories
const CATALOG = [
    // CARNES (Pollo, Res, Cerdo, Pescado, Procesados)
    { id: 'c1', name: 'Pollo - Pechuga (Libra)', category: 'pollo', offers: [{ providerId: 'p1', price: 280, stock: 30 }, { providerId: 'p2', price: 260, stock: 15 }, { providerId: 'p3', price: 290, stock: 50 }] },
    { id: 'c2', name: 'Pollo - Muslos (Libra)', category: 'pollo', offers: [{ providerId: 'p1', price: 220, stock: 0 }, { providerId: 'p2', price: 210, stock: 25 }, { providerId: 'p3', price: 230, stock: 40 }] },
    { id: 'c3', name: 'Pollo - Alas (Libra)', category: 'pollo', offers: [{ providerId: 'p1', price: 180, stock: 20 }, { providerId: 'p2', price: 170, stock: 30 }] },
    { id: 'c4', name: 'Pollo - Menudillo (Libra)', category: 'pollo', offers: [{ providerId: 'p1', price: 120, stock: 10 }] },
    { id: 'c5', name: 'Res - Picadillo (Libra)', category: 'res', offers: [{ providerId: 'p1', price: 380, stock: 25 }, { providerId: 'p2', price: 360, stock: 20 }, { providerId: 'p3', price: 390, stock: 35 }] },
    { id: 'c6', name: 'Res - Bistec (Libra)', category: 'res', offers: [{ providerId: 'p1', price: 420, stock: 15 }, { providerId: 'p2', price: 400, stock: 18 }, { providerId: 'p3', price: 430, stock: 22 }] },
    { id: 'c7', name: 'Res - Costillas (Libra)', category: 'res', offers: [{ providerId: 'p1', price: 350, stock: 12 }, { providerId: 'p2', price: 340, stock: 16 }] },
    { id: 'c8', name: 'Res - Lengua (Libra)', category: 'res', offers: [{ providerId: 'p1', price: 450, stock: 8 }, { providerId: 'p3', price: 440, stock: 10 }] },
    { id: 'c9', name: 'Cerdo - Chuleta (Libra)', category: 'cerdo', offers: [{ providerId: 'p1', price: 280, stock: 30 }, { providerId: 'p2', price: 270, stock: 25 }, { providerId: 'p3', price: 290, stock: 28 }] },
    { id: 'c10', name: 'Cerdo - Pierna (Libra)', category: 'cerdo', offers: [{ providerId: 'p1', price: 260, stock: 20 }, { providerId: 'p2', price: 250, stock: 22 }] },
    { id: 'c11', name: 'Cerdo - Tocino (Libra)', category: 'cerdo', offers: [{ providerId: 'p1', price: 200, stock: 0 }, { providerId: 'p3', price: 220, stock: 15 }] },
    { id: 'c12', name: 'Pescado - Filete de Tilapia (Libra)', category: 'pescado', offers: [{ providerId: 'p1', price: 320, stock: 18 }, { providerId: 'p2', price: 300, stock: 24 }, { providerId: 'p3', price: 330, stock: 30 }] },
    { id: 'c13', name: 'Pescado - Mojarra (Libra)', category: 'pescado', offers: [{ providerId: 'p1', price: 280, stock: 14 }, { providerId: 'p2', price: 270, stock: 20 }] },
    { id: 'c14', name: 'Pescado - Camarón (Libra)', category: 'pescado', offers: [{ providerId: 'p1', price: 650, stock: 10 }, { providerId: 'p3', price: 620, stock: 12 }] },
    { id: 'c15', name: 'Salchicha - Pollo (Paquete)', category: 'procesados', offers: [{ providerId: 'p1', price: 150, stock: 50 }, { providerId: 'p2', price: 140, stock: 45 }, { providerId: 'p3', price: 160, stock: 60 }] },
    { id: 'c16', name: 'Salchicha - Cerdo (Paquete)', category: 'procesados', offers: [{ providerId: 'p1', price: 180, stock: 40 }, { providerId: 'p2', price: 170, stock: 38 }] },
    { id: 'c17', name: 'Jamón - de Pavo (Libra)', category: 'procesados', offers: [{ providerId: 'p1', price: 380, stock: 0 }, { providerId: 'p3', price: 360, stock: 25 }] },
    { id: 'c18', name: 'Jamón - de Cerdo (Libra)', category: 'procesados', offers: [{ providerId: 'p1', price: 420, stock: 15 }, { providerId: 'p2', price: 400, stock: 18 }] },
    { id: 'c19', name: 'Mortadela (Libra)', category: 'procesados', offers: [{ providerId: 'p1', price: 320, stock: 20 }, { providerId: 'p2', price: 310, stock: 22 }, { providerId: 'p3', price: 330, stock: 28 }] },
    { id: 'c20', name: 'Salami (Libra)', category: 'procesados', offers: [{ providerId: 'p1', price: 480, stock: 12 }, { providerId: 'p2', price: 460, stock: 14 }] },

    // VIANDAS (Tubérculos, Plátanos, Granos, Vegetales)
    { id: 'c21', name: 'Malanga (Libra)', category: 'tuberculos', offers: [{ providerId: 'p1', price: 45, stock: 100 }, { providerId: 'p2', price: 40, stock: 80 }, { providerId: 'p3', price: 50, stock: 120 }] },
    { id: 'c22', name: 'Boniato (Libra)', category: 'tuberculos', offers: [{ providerId: 'p1', price: 35, stock: 90 }, { providerId: 'p2', price: 30, stock: 85 }, { providerId: 'p3', price: 40, stock: 110 }] },
    { id: 'c23', name: 'Yuca (Libra)', category: 'tuberculos', offers: [{ providerId: 'p1', price: 30, stock: 0 }, { providerId: 'p2', price: 25, stock: 70 }, { providerId: 'p3', price: 35, stock: 95 }] },
    { id: 'c24', name: 'Plátano v. (Libra)', category: 'platanos', offers: [{ providerId: 'p1', price: 40, stock: 80 }, { providerId: 'p2', price: 38, stock: 75 }] },
    { id: 'c25', name: 'Plátano m. (Libra)', category: 'platanos', offers: [{ providerId: 'p1', price: 50, stock: 60 }, { providerId: 'p3', price: 55, stock: 85 }] },
    { id: 'c26', name: 'Ñame (Libra)', category: 'tuberculos', offers: [{ providerId: 'p1', price: 55, stock: 45 }, { providerId: 'p2', price: 50, stock: 50 }] },
    { id: 'c27', name: 'Calabaza (Libra)', category: 'vegetales-frescos', offers: [{ providerId: 'p1', price: 25, stock: 0 }, { providerId: 'p3', price: 30, stock: 65 }] },
    { id: 'c28', name: 'Papa (Libra)', category: 'tuberculos', offers: [{ providerId: 'p1', price: 30, stock: 200 }, { providerId: 'p2', price: 28, stock: 180 }, { providerId: 'p3', price: 32, stock: 220 }] },
    { id: 'c29', name: 'Remolacha (Libra)', category: 'vegetales-frescos', offers: [{ providerId: 'p1', price: 40, stock: 55 }, { providerId: 'p2', price: 35, stock: 50 }] },
    { id: 'c30', name: 'Yautía (Libra)', category: 'tuberculos', offers: [{ providerId: 'p1', price: 60, stock: 35 }, { providerId: 'p3', price: 65, stock: 40 }] },
    { id: 'c31', name: 'Frijoles Negros (Libra)', category: 'granos', offers: [{ providerId: 'p1', price: 50, stock: 90 }, { providerId: 'p2', price: 45, stock: 85 }, { providerId: 'p3', price: 55, stock: 100 }] },
    { id: 'c32', name: 'Frijoles Rojos (Libra)', category: 'granos', offers: [{ providerId: 'p1', price: 55, stock: 70 }, { providerId: 'p2', price: 50, stock: 0 }] },
    { id: 'c33', name: 'Garbanzos (Libra)', category: 'granos', offers: [{ providerId: 'p1', price: 70, stock: 60 }, { providerId: 'p3', price: 75, stock: 65 }] },
    { id: 'c34', name: 'Lentejas (Libra)', category: 'granos', offers: [{ providerId: 'p1', price: 60, stock: 80 }, { providerId: 'p2', price: 55, stock: 75 }] },
    { id: 'c35', name: 'Gandules (Libra)', category: 'granos', offers: [{ providerId: 'p1', price: 65, stock: 50 }, { providerId: 'p2', price: 60, stock: 45 }, { providerId: 'p3', price: 70, stock: 55 }] },
    { id: 'c36', name: 'Maíz Tierno (Libra)', category: 'granos', offers: [{ providerId: 'p1', price: 35, stock: 100 }, { providerId: 'p2', price: 30, stock: 90 }] },
    { id: 'c37', name: 'Arroz (Libra)', category: 'granos', offers: [{ providerId: 'p1', price: 25, stock: 300 }, { providerId: 'p2', price: 20, stock: 280 }, { providerId: 'p3', price: 30, stock: 320 }] },
    { id: 'c38', name: 'Quimbombó (Libra)', category: 'vegetales-frescos', offers: [{ providerId: 'p2', price: 45, stock: 40 }, { providerId: 'p3', price: 50, stock: 35 }] },
    { id: 'c39', name: 'Berenjena (Libra)', category: 'vegetales-frescos', offers: [{ providerId: 'p1', price: 40, stock: 65 }, { providerId: 'p3', price: 45, stock: 60 }] },
    { id: 'c40', name: 'Camote (Libra)', category: 'tuberculos', offers: [{ providerId: 'p1', price: 38, stock: 75 }, { providerId: 'p2', price: 35, stock: 70 }] },

    // ASEO (Jabones, Cabello, Dental, Femenina, Cuerpo)
    { id: 'c41', name: 'Jabón Líquido', category: 'jabones', offers: [{ providerId: 'p1', price: 180, stock: 50 }, { providerId: 'p2', price: 170, stock: 45 }] },
    { id: 'c42', name: 'Jabón Barra', category: 'jabones', offers: [{ providerId: 'p1', price: 120, stock: 100 }, { providerId: 'p3', price: 130, stock: 110 }] },
    { id: 'c43', name: 'Jabón Antibacterial', category: 'jabones', offers: [{ providerId: 'p1', price: 220, stock: 0 }, { providerId: 'p2', price: 210, stock: 40 }] },
    { id: 'c44', name: 'Champú Hidratante', category: 'cabello', offers: [{ providerId: 'p1', price: 320, stock: 35 }, { providerId: 'p3', price: 340, stock: 40 }] },
    { id: 'c45', name: 'Champú Anticaspa', category: 'cabello', offers: [{ providerId: 'p1', price: 350, stock: 28 }, { providerId: 'p2', price: 330, stock: 32 }] },
    { id: 'c46', name: 'Champú Niños', category: 'cabello', offers: [{ providerId: 'p1', price: 380, stock: 25 }] },
    { id: 'c47', name: 'Acondicionador', category: 'cabello', offers: [{ providerId: 'p1', price: 340, stock: 30 }] },
    { id: 'c48', name: 'Pasta T. Acción', category: 'dental', offers: [{ providerId: 'p1', price: 150, stock: 80 }, { providerId: 'p2', price: 140, stock: 75 }] },
    { id: 'c49', name: 'Pasta Blanc.', category: 'dental', offers: [{ providerId: 'p1', price: 180, stock: 60 }] },
    { id: 'c50', name: 'Pasta Infantil', category: 'dental', offers: [{ providerId: 'p1', price: 200, stock: 45 }] },
    { id: 'c51', name: 'Cepillo Adulto', category: 'dental', offers: [{ providerId: 'p1', price: 80, stock: 120 }] },
    { id: 'c52', name: 'Cepillo Niño', category: 'dental', offers: [{ providerId: 'p1', price: 90, stock: 60 }] },
    { id: 'c53', name: 'Enjuague Bucal', category: 'dental', offers: [{ providerId: 'p1', price: 250, stock: 40 }] },
    { id: 'c54', name: 'Hilo Dental', category: 'dental', offers: [{ providerId: 'p1', price: 120, stock: 70 }] },
    { id: 'c55', name: 'Toallas Reg.', category: 'femenina', offers: [{ providerId: 'p1', price: 180, stock: 90 }] },
    { id: 'c56', name: 'Toallas Noc.', category: 'femenina', offers: [{ providerId: 'p1', price: 220, stock: 60 }] },
    { id: 'c57', name: 'Tampón', category: 'femenina', offers: [{ providerId: 'p1', price: 280, stock: 50 }] },
    { id: 'c58', name: 'Protector Diario', category: 'femenina', offers: [{ providerId: 'p1', price: 150, stock: 100 }] },
    { id: 'c59', name: 'Desodorante Roll', category: 'cuerpo', offers: [{ providerId: 'p1', price: 280, stock: 45 }] },
    { id: 'c60', name: 'Desodorante Spray', category: 'cuerpo', offers: [{ providerId: 'p1', price: 320, stock: 35 }] },

    // BEBIDAS
    { id: 'c61', name: 'Cola 1L', category: 'refrescos', offers: [{ providerId: 'p1', price: 120, stock: 100 }] },
    { id: 'c62', name: 'Cola 2L', category: 'refrescos', offers: [{ providerId: 'p1', price: 200, stock: 50 }] },
    { id: 'c63', name: 'Naranja 1L', category: 'refrescos', offers: [{ providerId: 'p1', price: 110, stock: 80 }] },
    { id: 'c64', name: 'Limón 1L', category: 'refrescos', offers: [{ providerId: 'p1', price: 110, stock: 70 }] },
    { id: 'c65', name: 'Jugo Naranja 1L', category: 'jugos', offers: [{ providerId: 'p1', price: 180, stock: 40 }] },
    { id: 'c66', name: 'Jugo Manzana 1L', category: 'jugos', offers: [{ providerId: 'p1', price: 160, stock: 30 }] },
    { id: 'c67', name: 'Jugo Uva 1L', category: 'jugos', offers: [{ providerId: 'p1', price: 170, stock: 35 }] },
    { id: 'c68', name: 'Jugo Tomate', category: 'jugos', offers: [{ providerId: 'p1', price: 120, stock: 20 }] },
    { id: 'c69', name: 'Agua 500ml', category: 'aguas', offers: [{ providerId: 'p1', price: 60, stock: 200 }] },
    { id: 'c70', name: 'Agua 1.5L', category: 'aguas', offers: [{ providerId: 'p1', price: 90, stock: 100 }] },
    { id: 'c71', name: 'Agua con Gas', category: 'aguas', offers: [{ providerId: 'p1', price: 110, stock: 50 }] },
    { id: 'c72', name: 'Cerveza Clara', category: 'cervezas', offers: [{ providerId: 'p1', price: 220, stock: 80 }] },
    { id: 'c73', name: 'Cerveza Oscura', category: 'cervezas', offers: [{ providerId: 'p1', price: 240, stock: 60 }] },
    { id: 'c74', name: 'Cerveza Lata', category: 'cervezas', offers: [{ providerId: 'p1', price: 250, stock: 100 }] },
    { id: 'c75', name: 'Isotónica', category: 'otros-bebidas', offers: [{ providerId: 'p1', price: 150, stock: 40 }] },
    { id: 'c76', name: 'Energético', category: 'otros-bebidas', offers: [{ providerId: 'p1', price: 200, stock: 30 }] },
    { id: 'c77', name: 'Té Limón', category: 'otros-bebidas', offers: [{ providerId: 'p1', price: 130, stock: 50 }] },
    { id: 'c78', name: 'Té Durazno', category: 'otros-bebidas', offers: [{ providerId: 'p1', price: 135, stock: 45 }] },
    { id: 'c79', name: 'Café Instant.', category: 'otros-bebidas', offers: [{ providerId: 'p1', price: 450, stock: 20 }] },
    { id: 'c80', name: 'Café Molido', category: 'otros-bebidas', offers: [{ providerId: 'p1', price: 650, stock: 15 }] },

    // LACTEOS
    { id: 'c81', name: 'Leche Entera', category: 'leche', offers: [{ providerId: 'p1', price: 180, stock: 50 }] },
    { id: 'c82', name: 'Leche Descrem.', category: 'leche', offers: [{ providerId: 'p1', price: 180, stock: 40 }] },
    { id: 'c83', name: 'Leche Evaporada', category: 'leche', offers: [{ providerId: 'p1', price: 150, stock: 30 }] },
    { id: 'c84', name: 'Leche Polvo', category: 'leche', offers: [{ providerId: 'p1', price: 380, stock: 20 }] },
    { id: 'c85', name: 'Yogurt Natural', category: 'yogurt', offers: [{ providerId: 'p1', price: 120, stock: 40 }] },
    { id: 'c86', name: 'Yogurt Fresa', category: 'yogurt', offers: [{ providerId: 'p1', price: 130, stock: 35 }] },
    { id: 'c87', name: 'Yogurt Mango', category: 'yogurt', offers: [{ providerId: 'p1', price: 130, stock: 30 }] },
    { id: 'c88', name: 'Yogurt Indiv.', category: 'yogurt', offers: [{ providerId: 'p1', price: 40, stock: 100 }] },
    { id: 'c89', name: 'Queso Cheddar', category: 'quesos', offers: [{ providerId: 'p1', price: 420, stock: 20 }] },
    { id: 'c90', name: 'Queso Mozzarella', category: 'quesos', offers: [{ providerId: 'p1', price: 400, stock: 25 }] },
    { id: 'c91', name: 'Queso Crema', category: 'quesos', offers: [{ providerId: 'p1', price: 180, stock: 30 }] },
    { id: 'c92', name: 'Queso Fresco', category: 'quesos', offers: [{ providerId: 'p1', price: 350, stock: 15 }] },
    { id: 'c93', name: 'Mantequilla c/s', category: 'mantequilla', offers: [{ providerId: 'p1', price: 220, stock: 40 }] },
    { id: 'c94', name: 'Mantequilla s/s', category: 'mantequilla', offers: [{ providerId: 'p1', price: 220, stock: 35 }] },
    { id: 'c95', name: 'Margarina', category: 'mantequilla', offers: [{ providerId: 'p1', price: 180, stock: 50 }] },
    { id: 'c96', name: 'Crema Leche', category: 'mantequilla', offers: [{ providerId: 'p1', price: 150, stock: 25 }] },
    { id: 'c97', name: 'Leche Cond.', category: 'postres-lacteos', offers: [{ providerId: 'p1', price: 200, stock: 40 }] },
    { id: 'c98', name: 'Flan', category: 'postres-lacteos', offers: [{ providerId: 'p1', price: 60, stock: 50 }] },
    { id: 'c99', name: 'Tapioca', category: 'postres-lacteos', offers: [{ providerId: 'p1', price: 70, stock: 30 }] },
    { id: 'c100', name: 'Natilla', category: 'postres-lacteos', offers: [{ providerId: 'p1', price: 50, stock: 35 }] },

    // ENLATADOS
    { id: 'c101', name: 'Frijoles Negros', category: 'conservas-vegetales', offers: [{ providerId: 'p1', price: 120, stock: 50 }] },
    { id: 'c102', name: 'Chícharos', category: 'conservas-vegetales', offers: [{ providerId: 'p1', price: 110, stock: 45 }] },
    { id: 'c103', name: 'Maíz', category: 'conservas-vegetales', offers: [{ providerId: 'p1', price: 100, stock: 40 }] },
    { id: 'c104', name: 'Tomate Trit.', category: 'salsas', offers: [{ providerId: 'p1', price: 130, stock: 30 }] },
    { id: 'c105', name: 'Salsa Tomate', category: 'salsas', offers: [{ providerId: 'p1', price: 150, stock: 35 }] },
    { id: 'c106', name: 'Atún Agua', category: 'conservas-carne', offers: [{ providerId: 'p1', price: 280, stock: 20 }] },
    { id: 'c107', name: 'Atún Aceite', category: 'conservas-carne', offers: [{ providerId: 'p1', price: 300, stock: 15 }] },
    { id: 'c108', name: 'Sardinas', category: 'conservas-carne', offers: [{ providerId: 'p1', price: 220, stock: 25 }] },
    { id: 'c113', name: 'Piña', category: 'frutas-almibar', offers: [{ providerId: 'p1', price: 180, stock: 30 }] },
    { id: 'c114', name: 'Mango', category: 'frutas-almibar', offers: [{ providerId: 'p1', price: 200, stock: 25 }] },

    // PANADERIA
    { id: 'c121', name: 'Pan Mesa', category: 'pan', offers: [{ providerId: 'p1', price: 60, stock: 100 }] },
    { id: 'c126', name: 'Galletas Mant.', category: 'galletas', offers: [{ providerId: 'p1', price: 180, stock: 40 }] },
    { id: 'c133', name: 'Brownie', category: 'reposteria', offers: [{ providerId: 'p1', price: 280, stock: 20 }] },
    { id: 'c137', name: 'Harina', category: 'ingredientes-pan', offers: [{ providerId: 'p1', price: 120, stock: 50 }] },

    // LIMPIEZA
    { id: 'c141', name: 'Detergente Liq.', category: 'ropa', offers: [{ providerId: 'p1', price: 280, stock: 30 }] },
    { id: 'c148', name: 'Limpia Baños', category: 'bano-cocina', offers: [{ providerId: 'p1', price: 220, stock: 25 }] },
    { id: 'c158', name: 'Limpia Pisos', category: 'superficies', offers: [{ providerId: 'p1', price: 240, stock: 20 }] },
    { id: 'c159', name: 'Esponjas', category: 'utiles-limpieza', offers: [{ providerId: 'p1', price: 120, stock: 50 }] },

    // SNACKS
    { id: 'c161', name: 'Papas Clásicas', category: 'frituras', offers: [{ providerId: 'p1', price: 180, stock: 40 }] },
    { id: 'c166', name: 'Pistachos', category: 'frutos-secos', offers: [{ providerId: 'p1', price: 450, stock: 10 }] },
    { id: 'c170', name: 'Chocolatina', category: 'chocolates', offers: [{ providerId: 'p1', price: 150, stock: 60 }] },
    { id: 'c173', name: 'Chicles', category: 'dulces-varios', offers: [{ providerId: 'p1', price: 80, stock: 100 }] },

    // CONGELADOS
    { id: 'c181', name: 'Habichuelas', category: 'veg-congelados', offers: [{ providerId: 'p1', price: 200, stock: 30 }] },
    { id: 'c186', name: 'Fresa', category: 'fruta-congelada', offers: [{ providerId: 'p1', price: 320, stock: 15 }] },
    { id: 'c192', name: 'Hamburguesas', category: 'preparados', offers: [{ providerId: 'p1', price: 400, stock: 20 }] },
    { id: 'c197', name: 'Helado Vainilla', category: 'helados', offers: [{ providerId: 'p1', price: 380, stock: 10 }] }
];
