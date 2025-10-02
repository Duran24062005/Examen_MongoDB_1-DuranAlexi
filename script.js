// #######################################
// Examen_MongoDB_1-DuranAlexi
// #######################################


// =======================================
// 1. Creación y uso de la base de datos
// =======================================
use("Anime_Store_DB");


// =======================================
// 2. Creación de la colección products e inserción de los debidos datos
// =======================================
db.products.insertMany(
    [
        {
          "sku": "A001",
          "name": "Figura Luffy Gear 5",
          "category": "Figuras",
          "price": 135000,
          "stock": 5,
          "anime": "One Piece",
          "rating": 4.9,
          "tags": ["coleccionable", "resina"],
          "provider": { "name": "ToeiExpress", "country": "Japón" }
        },
        {
          "sku": "A002",
          "name": "Camiseta Goku Ultra Instinct",
          "category": "Ropa",
          "price": 38000,
          "stock": 12,
          "anime": "Dragon Ball Super",
          "rating": 4.4,
          "tags": ["algodón", "unisex"],
          "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
          "sku": "A003",
          "name": "Taza Tanjiro Kamado",
          "category": "Accesorios",
          "price": 22000,
          "stock": 0,
          "anime": "Demon Slayer",
          "rating": 4.2,
          "tags": ["cerámica", "color"],
          "provider": { "name": "AnimeGear", "country": "México" }
        },
        {
          "sku": "A004",
          "name": "Póster Levi Ackerman",
          "category": "Pósters",
          "price": 15000,
          "stock": 8,
          "anime": "Attack on Titan",
          "rating": 4.5,
          "tags": ["vinilo", "A3"],
          "provider": { "name": "AnimePosters", "country": "EEUU" }
        },
        {
          "sku": "A005",
          "name": "Manga Jujutsu Kaisen Vol. 1",
          "category": "Mangas",
          "price": 28000,
          "stock": 4,
          "anime": "Jujutsu Kaisen",
          "rating": 4.7,
          "tags": ["impreso", "español"],
          "provider": { "name": "ShueishaLatino", "country": "Colombia" }
        },
        {
          "sku": "A006",
          "name": "Llaveros My Hero Academia Pack",
          "category": "Accesorios",
          "price": 30000,
          "stock": 6,
          "anime": "My Hero Academia",
          "rating": 4.3,
          "tags": ["metal", "pack"],
          "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
          "sku": "A007",
          "name": "Figura Gojo Satoru",
          "category": "Figuras",
          "price": 150000,
          "stock": 3,
          "anime": "Jujutsu Kaisen",
          "rating": 4.9,
          "tags": ["edición especial"],
          "provider": { "name": "ToeiExpress", "country": "Japón" }
        },
        {
          "sku": "A008",
          "name": "Camiseta Nezuko Chan",
          "category": "Ropa",
          "price": 36000,
          "stock": 10,
          "anime": "Demon Slayer",
          "rating": 4.6,
          "tags": ["manga", "unisex"],
          "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
          "sku": "A009",
          "name": "Póster Kakashi Hatake",
          "category": "Pósters",
          "price": 18000,
          "stock": 7,
          "anime": "Naruto",
          "rating": 4.4,
          "tags": ["vinilo", "color"],
          "provider": { "name": "AnimePosters", "country": "EEUU" }
        },
        {
          "sku": "A010",
          "name": "Manga One Piece Vol. 100",
          "category": "Mangas",
          "price": 32000,
          "stock": 5,
          "anime": "One Piece",
          "rating": 4.8,
          "tags": ["colección", "impreso"],
          "provider": { "name": "ShueishaLatino", "country": "Colombia" }
        },
        {
          "sku": "A011",
          "name": "Mousepad Anime Variado",
          "category": "Accesorios",
          "price": 25000,
          "stock": 9,
          "anime": "Varios",
          "rating": 4.1,
          "tags": ["gaming", "antideslizante"],
          "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
          "sku": "A012",
          "name": "Camiseta Ichigo Kurosaki",
          "category": "Ropa",
          "price": 40000,
          "stock": 5,
          "anime": "Bleach",
          "rating": 4.5,
          "tags": ["algodón", "edición limitada"],
          "provider": { "name": "AnimeRopa", "country": "Colombia" }
        },
        {
          "sku": "A013",
          "name": "Llavero Doraemon",
          "category": "Accesorios",
          "price": 12000,
          "stock": 2,
          "anime": "Doraemon",
          "rating": 4.0,
          "tags": ["plástico", "azul"],
          "provider": { "name": "JapanImports", "country": "Japón" }
        },
        {
          "sku": "A014",
          "name": "Figura Sailor Moon",
          "category": "Figuras",
          "price": 98000,
          "stock": 4,
          "anime": "Sailor Moon",
          "rating": 4.3,
          "tags": ["clásico", "colección"],
          "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
          "sku": "A015",
          "name": "Manga Death Note Vol. 1",
          "category": "Mangas",
          "price": 27000,
          "stock": 6,
          "anime": "Death Note",
          "rating": 4.9,
          "tags": ["español", "clásico"],
          "provider": { "name": "ShueishaLatino", "country": "Colombia" }
        },
        {
          "sku": "A016",
          "name": "Taza Totoro",
          "category": "Accesorios",
          "price": 25000,
          "stock": 1,
          "anime": "My Neighbor Totoro",
          "rating": 4.7,
          "tags": ["cerámica", "cute"],
          "provider": { "name": "GhibliImports", "country": "Japón" }
        },
        {
          "sku": "A017",
          "name": "Camiseta Tokyo Revengers",
          "category": "Ropa",
          "price": 39000,
          "stock": 8,
          "anime": "Tokyo Revengers",
          "rating": 4.4,
          "tags": ["algodón", "negra"],
          "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
          "sku": "A018",
          "name": "Manga Chainsaw Man Vol. 1",
          "category": "Mangas",
          "price": 30000,
          "stock": 7,
          "anime": "Chainsaw Man",
          "rating": 4.6,
          "tags": ["sangriento", "nuevo"],
          "provider": { "name": "ShueishaLatino", "country": "Japón" }
        },
        {
          "sku": "A025",
          "name": "Camiseta Pikachu Vintage",
          "category": "Ropa",
          "price": 34000,
          "stock": 3,
          "anime": "Pokémon",
          "rating": 4.2,
          "tags": ["retro", "amarilla"],
          "provider": { "name": "AnimeRopa", "country": "Colombia" }
        },
        {
          "sku": "A034",
          "name": "Figura Mikasa Ackerman",
          "category": "Figuras",
          "price": 112000,
          "stock": 9,
          "anime": "Attack on Titan",
          "rating": 4.7,
          "tags": ["colección", "resina"],
          "provider": { "name": "ToeiExpress", "country": "Japón" }
        },
        {
          "sku": "A043",
          "name": "Póster Akatsuki",
          "category": "Pósters",
          "price": 18000,
          "stock": 0,
          "anime": "Naruto",
          "rating": 4.3,
          "tags": ["negro", "vinilo"],
          "provider": { "name": "AnimePosters", "country": "EEUU" }
        }
    ]
);


// Revisión de la correcta inserción de los datos
db.products.find().pretty(); // prettty muestra loultimos datos insertados ademas de formatearlos

// Podemos limpiar la termial con ctrl + l

// =======================================
// 3. Agregar a todos los productos las propiedades:
// - available: true
// - origin: "importado"
// =======================================
db.products.updateMany({}, {$set: {available: true, origin: "importado"}}); // Se usa updateMany para que los modifique a todos y se deja vacio el primer argumento ya que no tenemos parametros
// de busqueda y queremos que los modifiqiue a todos




// =======================================
// 4. Realizar las siguientes actualizaciones
// =======================================


//    - Producto con sku: A034, actualizar stock a 15.
// Primero consultamos cuantos elementos ha con el mismo sku, para saber si usar updateMany
db.products.find({sku: "A034"}).count(); // count() retorna el numero de elementos del cursor
db.products.update({sku: "A034"}, {$set: {"stock": 30}});

//    - Producto con sku: A018, cambiar el country del provider a "Colombia".
db.products.find({sku: "A018"}).count(); // count() retorna el numero de elementos del cursor
db.products.update({sku: "A018"}, {$set: {"provider.country": "Colombia"}}); // Acceder a la matriz incrustada y setearla

//    - Producto con sku: A059, agregar un nuevo tag: "oferta".
db.products.find({sku: "A059"}).count(); // count() retorna el numero de elementos del cursor
db.products.update({sku: "A059"}, {$push: {"tags": "oferta"}});

//    - Producto con sku: A012, agregar dos nuevos tags: "nuevo", "popular".
db.products.find({sku: "A012"}).count(); // count() retorna el numero de elementos del cursor

// En este caso tenemos dos opciones la primera es ejecutar la misma consulta 2 veces cambiado el valor
db.products.update({sku: "A012"}, {$push: {"tags": 'nuevo'}});
db.products.update({sku: "A012"}, {$push: {"tags": 'popular'}});

// O usando las siuguente sentencia
db.products.update(
    {sku: "A012"}, 
    {
        $push: {
            "tags": {
                $each: ['nuevo', 'popular']
            }
        }
    }
);

//    - Producto con sku: A025, agregar los tags "descuento", "outlet".
db.products.find({sku: "A025"}).count(); // count() retorna el numero de elementos del cursor
db.products.update(
    {sku: "A025"}, 
    {
        $push: {
            "tags": {
                $each: ["descuento", "outlet"]
            }
        }
    }
);

//    - Producto llamado "Camiseta Goku Ultra Instinct", cambiar el price a 45000.
db.products.find({name: "Camiseta Goku Ultra Instinct"}).count(); // count() retorna el numero de elementos del cursor
db.products.update({name: "Camiseta Goku Ultra Instinct"}, {$set: {"price": 45000}});








// =======================================
// 5. Renombrar la propiedad origin a import_type.
// =======================================

db.products.updateMany(
    { }, // Consulta para seleccionar todos los documentos
    [{
        $set: { // Crea el campo si no existe
            import_type: "$origin"
        }
    }, {
        $unset: [ "origin" ] // Elimina el campo antiguo
    }]
);





// =======================================
// 6. Cambiar el import_type a "Nacional" para los productos cuyo proveedor esté en Colombia.
// =======================================
db.products.updateMany(
    {
        "provider.country": "Colombia"
    }, // Consulta para seleccionar todos los documentos
    {
        $set: { // Crea el campo si no existe
            import_type: "Nacional"
        }
    }
);




// Desarrollado por Alexi Durán Gómez C.c:  1.067.031.983