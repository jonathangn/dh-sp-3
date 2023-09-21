
export const CARS = [
    {
        quantity: '',
        product: '',
    }
]

export const BUYS = [
    {
        date: '',
        address: '',
        user: '',
    }
]

export const ADDRESSS = [
    {
        street: '',
        number: '',
        city: '',
        state: '',
        country: '',
    }
]

export const USERS = [
    {
        userName: '',
        password: '',
        name: '',
        lastname: '',
        email: '',
        rol: '',
    }
]

export const IMAGE = [
    {
        title: '',
        urlImg: '',
    }
]

export const CATEGORIES = [
    {
        id: 1,
        title: 'Cervezas',
        name: 'Cerveza',
        description: 'Bebida alcohólica, no destilada, de sabor amargo, que se fabrica con granos de cebada germinados u otros cereales cuyo almidón se fermenta en agua con levadura y se aromatiza a menudo con lúpulo, entre otras plantas',
        urlImg: 'https://i.postimg.cc/26wjszp0/Frame-16.png',
        updated: '10 / 11 / 2000',
    },
    {
        id: 2,
        title: 'Vinos',
        name: 'Vino',
        description: 'bebida alcohólica procedente de la fermentación del zumo de uva, la cual se produce gracias a la acción de las levaduras. El nombre vino procede del latín vinum , que se cree que procede del griego oinos e incluso del sánscrito vêna',
        urlImg: 'https://i.postimg.cc/rmQchQWb/Frame-15.png',
        updated: '10 / 11 / 2000',
    },
    {
        id: 3,
        title: 'Energizantes',
        name: 'Energizante',
        description: 'bebida alcohólica procedente de la fermentación del zumo de uva, la cual se produce gracias a la acción de las levaduras. El nombre vino procede del latín vinum , que se cree que procede del griego oinos e incluso del sánscrito vêna',
        urlImg: 'https://i.postimg.cc/C5X3ttKv/Frame-17.png',
        updated: '10 / 11 / 2000',
    },
    {
        id: 4,
        title: 'Wiskeys',
        name: 'Wiskey',
        description: 'Bebidas sin alcohol que contienen sustancias estimulantes y ofrecen al consumidor disminuir la sensación de fatiga y agotamiento, además de aumentar la habilidad mental y proporcionar un incremento de la resistencia física',
        urlImg: 'https://i.postimg.cc/L6h4WKxV/Frame-4.png',
        updated: '10 / 11 / 2000',
    },
    {
        id: 5,
        title: 'Tequilas',
        name: 'Tequila',
        description: 'bebida alcohólica procedente de la fermentación del zumo de uva, la cual se produce gracias a la acción de las levaduras. El nombre vino procede del latín vinum , que se cree que procede del griego oinos e incluso del sánscrito vêna',
        urlImg: 'https://i.postimg.cc/xdG9m0d9/Frame-5.png',
        updated: '10 / 11 / 2000',
    },
    {
        id: 6,
        title: 'Vodkas',
        name: 'Vodka',
        description: 'bebida alcohólica procedente de la fermentación del zumo de uva, la cual se produce gracias a la acción de las levaduras. El nombre vino procede del latín vinum , que se cree que procede del griego oinos e incluso del sánscrito vêna',
        urlImg: 'https://i.postimg.cc/QMD3hRJw/Frame-3.png',
        updated: '10 / 11 / 2000',
    },
    {
        id: 7,
        title: 'Gaseosas',
        name: 'Gaseosa',
        description: 'bebida alcohólica procedente de la fermentación del zumo de uva, la cual se produce gracias a la acción de las levaduras. El nombre vino procede del latín vinum , que se cree que procede del griego oinos e incluso del sánscrito vêna',
        urlImg: 'https://i.postimg.cc/TPkQPbXm/Frame-18.png',
        updated: '10 / 11 / 2000',
    },
    {
        id: 8,
        title: 'Fernets',
        name: 'Fernet',
        description: 'bebida alcohólica procedente de la fermentación del zumo de uva, la cual se produce gracias a la acción de las levaduras. El nombre vino procede del latín vinum , que se cree que procede del griego oinos e incluso del sánscrito vêna',
        urlImg: 'https://i.postimg.cc/2yNWjj3h/Frame-19.png',
        updated: '10 / 11 / 2000',
    },
    {
        id: 9,
        title: 'Aguardientes',
        name: 'Aguardiente',
        description: 'bebida alcohólica procedente de la fermentación del zumo de uva, la cual se produce gracias a la acción de las levaduras. El nombre vino procede del latín vinum , que se cree que procede del griego oinos e incluso del sánscrito vêna',
        urlImg: 'https://i.postimg.cc/mZ7MX96w/Frame-20.png',
        updated: '10 / 11 / 2000',
    },
]

export const PRODUCTS = [
    {
        _id: 10001,
        product_code: '0001',
        name: "Cerveza Corona Lata",
        brand: "Corona",
        model: "",
        urlImg: 'https://i.postimg.cc/tJCnRWf6/Frame-30.png',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Cervezas',
        description: 'Cerveza tipo Lager Pilsner, clara y brillante, de espuma blanca y consistente. Tiene notas afrutadas, de cuerpo medio, fresca, balanceada y muy fácil de beber. En boca es dulce y recuerda al sabor del cereal. Su amargor es limpio y ligero.',
        creator: '',
        top: true,
        slug: "cerveza-corona-lata",
        quantity: 0
    },
    {
        _id: 10002,
        product_code: '0001',
        name: "Cerveza Budweiser Lata",
        brand: "Budweiser",
        model: "",
        urlImg: 'https://itengoo.com/wp-content/uploads/2020/10/large_a450b3b5-fe97-426a-a313-f7fef829af86.jpg',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Cerveza',
        description: 'Cerveza tipo American Lager, fiel a su receta original de 1876. Además de la malta y el lúpulo, el ingrediente clave es el arroz, que le aporta ese frescor característico y sabor ligero. Consta de un proceso de elaboración de 30 días.',
        creator: '',
        top: false,
        slug: "cerveza-budweiser-lata",
        quantity: 0
    },
    {
        _id: 10003,
        product_code: '0001',
        name: "Cerveza Heineken Lata",
        brand: "Heineken",
        model: "",
        urlImg: 'https://bevgo.com.co/wp-content/uploads/2020/12/8139.jpg',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Cervezas',
        description: 'Cerveza premium de gran tradición y calidad. Cebada malteada, agua, lúpulo y la exclusiva levadura A-Yeast® son los ingredientes 100% naturales que le entregan su distintivo sabor y su inigualable calidad.',
        creator: '',
        top: false,
        slug: 'cerveza-heineken-lata',
        quantity: 0
    },
    {
        _id: 10004,
        product_code: '0001',
        name: "Cerveza Stella Artois Lata",
        brand: "Stella Artois",
        model: "",
        urlImg: 'https://draftmasterspty.com/wp-content/uploads/2021/10/5410228141303.jpg',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Cervezas',
        description: 'Lager de color dorado pálido, muy brillante y con una espuma consistente. Predominan moderadas notas a frutas blancas y de cereal que resaltan levemente sobre el aroma herbal del lúpulo Saaz.',
        creator: '',
        top: false,
        slug: 'cerveza-stella-artois-lata',
        quantity: 0
    },
    {
        _id: 10005,
        product_code: '0001',
        name: "Cerveza Club Colombia Lata",
        brand: "Club Colombia",
        model: "",
        urlImg: 'https://i.postimg.cc/SxLYVbTx/Frame-21.png',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Cervezas',
        description: 'Cervezas elaboradas con cebada malteada y malta caramelo. Ha acompañado a los colombianos desde el año 1962 y ha conseguido varias medallas de oro en el reconocido Monde Selection de Bélgica.',
        creator: '',
        top: true,
        slug: 'cerveza-club-colombia-lata',
        quantity: 0
    },
    {
        _id: 10006,
        product_code: '0001',
        name: "RedBull Energy Lata",
        brand: "RedBull",
        model: "",
        urlImg: 'https://bevgo.com.co/wp-content/uploads/2020/12/773.jpg',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Energizantes',
        description: 'Contiene principalmente agua, azúcar (sacarosa, glucosa), cafeína, así como diferentes vitaminas (niacina, taurina, ácido pantoténico, B6 y B12). Se trata de una bebida funcional, no para quitar la sed, pensada para momentos de alta exigencia física y mental.',
        creator: '',
        top: false,
        slug: 'redbull-energy-lata',
        quantity: 0
    },
    {
        _id: 10007,
        product_code: '0001',
        name: "Monster Energy Lata",
        brand: "Monster",
        model: "",
        urlImg: 'https://i.postimg.cc/cHdrTfdz/Frame-31.png',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Energizantes',
        description: 'Contiene 3 diferentes tipos de azúcares (sacarosa, glucosa, maltodextrina), además de sucralosa como endulzante no calórico. Adicional al azúcar, contiene diferentes estimulantes (ginseng, taurina, cafeína, L-carnitina, vitaminas).',
        creator: '',
        top: true,
        slug: 'monster-energy-lata',
        quantity: 0
    },
    {
        _id: 10008,
        product_code: '0001',
        name: "Rockstar Energy Lata",
        brand: "Rockstar",
        model: "",
        urlImg: 'https://i.postimg.cc/hGpzWbqF/Frame-22-1.png',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Energizantes',
        description: 'Energizantes sin azúcar original de Rockstar, cargada con vitaminas B y formulada con guaraná, taurina y cafeína para ayudarte a seguir adelante y mantenerte concentrado* con un sabor vigorizante.. *> 75 mg de cafeína han demostrado que ayudan a mejorar la atención',
        creator: '',
        top: true,
        slug: 'rockstar-energy-lata',
        quantity: 0
    },
    {
        _id: 10009,
        product_code: '0001',
        name: "Vino Tinto Cabo",
        brand: "Cabo de Hornos",
        model: "",
        urlImg: 'https://i.postimg.cc/cCr15m2F/Frame-32.png',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Vinos',
        description: 'Contiene principalmente agua, azúcar (sacarosa, glucosa), cafeína, así como diferentes vitaminas (niacina, taurina, ácido pantoténico, B6 y B12). Se trata de una bebida funcional, no para quitar la sed, pensada para momentos de alta exigencia física y mental.',
        creator: '',
        top: true,
        slug: 'vino-tinto-cabo',
        quantity: 0
    },
    {
        _id: 100010,
        product_code: '0001',
        name: "Vino Blanco Chardonnay Chenin",
        brand: "Ástica",
        model: "",
        urlImg: 'https://bevgo.com.co/wp-content/uploads/2020/12/3377.jpg',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Vinos',
        description: 'Contiene 3 diferentes tipos de azúcares (sacarosa, glucosa, maltodextrina), además de sucralosa como endulzante no calórico. Adicional al azúcar, contiene diferentes estimulantes (ginseng, taurina, cafeína, L-carnitina, vitaminas).',
        creator: '',
        top: false,
        slug: 'vino-blanco-chardonnay-chenin',
        quantity: 0
    },
    {
        _id: 100011,
        product_code: '0001',
        name: "Vino Rosado Alliwen",
        brand: "Aliwen",
        model: "",
        urlImg: 'https://i.postimg.cc/NGy4DL1G/Frame-23-1.png',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Vinos',
        description: 'Es un vino de atractivo de intenso color rosado – rubí brillante, con aroma a variedad de frutos rojos. En el paladar se destaca por su perfecto balance con el roble, su marcada expresión frutal y su fresca acidez, terminando largo y redondo.',
        creator: '',
        top: true,
        slug: 'vino-rosado-alliwen',
        quantity: 0
    },
    {
        _id: 100012,
        product_code: '0001',
        name: "Six pack Corona",
        brand: "Corona",
        model: "",
        urlImg: 'https://i.postimg.cc/mZJFWzjP/Frame-33.png',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Cervezas',
        description: 'Es un vino de atractivo de intenso color rosado – rubí brillante, con aroma a variedad de frutos rojos. En el paladar se destaca por su perfecto balance con el roble, su marcada expresión frutal y su fresca acidez, terminando largo y redondo.',
        creator: '',
        top: false,
        sale: true,
        slug: 'six-pack-corona',
        quantity: 0
    },
    {
        _id: 100013,
        product_code: '0001',
        name: "Tequila Don Julio 70",
        brand: "Don Julio",
        model: "",
        urlImg: 'https://i.postimg.cc/Wtc3FZYS/Frame-34.png',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Tequilas',
        description: 'Es un vino de atractivo de intenso color rosado – rubí brillante, con aroma a variedad de frutos rojos. En el paladar se destaca por su perfecto balance con el roble, su marcada expresión frutal y su fresca acidez, terminando largo y redondo.',
        creator: '',
        top: false,
        sale: true,
        slug: 'tequila-don-julio',
        quantity: 0
    },
    {
        _id: 100014,
        product_code: '0001',
        name: "Jack Daniels",
        brand: "Jack Daniels",
        model: "",
        urlImg: 'https://i.postimg.cc/1R2vtKsP/Frame-35.png',
        alcohol_content: 5,
        origin: '',
        price: 10,
        category: 'Wiskeys',
        description: 'Es un vino de atractivo de intenso color rosado – rubí brillante, con aroma a variedad de frutos rojos. En el paladar se destaca por su perfecto balance con el roble, su marcada expresión frutal y su fresca acidez, terminando largo y redondo.',
        creator: '',
        top: false,
        sale: true,
        slug: 'jack-daniels',
        quantity: 0
    },
]

export const NOSOTROS = [
    {
        name: 'Zoe',
        urlImg: 'https://i.postimg.cc/dVBS7BkN/Rectangle-10-2.png',
        redes: 'https://www.instagram.com/',
        title: "",
    },
    {
        name: 'Grego',
        urlImg: 'https://i.postimg.cc/GmcX1y7F/Rectangle-11.png',
        redes: 'https://www.instagram.com/',
        title: "",
    },
    {
        name: 'Celes',
        urlImg: 'https://i.postimg.cc/ncxkvmty/Rectangle-12.png',
        redes: 'https://www.instagram.com/',
        title: "",
    },
    {
        name: 'Jona',
        urlImg: 'https://i.postimg.cc/ZKYNbxm5/Rectangle-6-1.png',
        redes: 'https://www.instagram.com/',
        title: "",
    },
    {
        name: 'Jime',
        urlImg: 'https://i.postimg.cc/LXMqrzvR/Rectangle-8.png',
        redes: 'https://www.instagram.com/',
        title: "",
    },
    {
        name: 'Andre',
        urlImg: 'https://i.postimg.cc/hjgjCKPt/Rectangle-16.png',
        redes: 'https://www.instagram.com/',
        title: "",
    },
    {
        name: 'Lau',
        urlImg: 'https://i.postimg.cc/g0ycL1qF/Rectangle-14.png',
        redes: 'https://www.instagram.com/',
        title: "",
    },
]


export const assetsHero = [
    {
        name: "Random Name #1",
        ref: "otherx",
        imageUrl: "https://i.postimg.cc/Vvn1Wmff/Frame-24-1.png",
    },
    {
        name: "Random Name #2",
        ref: "beerx",
        imageUrl: "https://i.postimg.cc/QMQpwWf1/Frame-24-3.png",
    },
    {
        name: "Random Name #3",
        ref: "winex",
        imageUrl: "https://i.postimg.cc/7h0Jc51j/Frame-24-4.png",
    },
];

export const assetsAds = [
    {
        name: "Random Name #1",
        ref: "otherx",
        imageUrl: "https://i.postimg.cc/nMbJMzDK/Frame-27-2.png",
    },
    {
        name: "Random Name #2",
        ref: "beerx",
        imageUrl: "https://i.postimg.cc/Z5mWMYMy/Frame-28-1.png",
    },
    {
        name: "Random Name #3",
        ref: "beerx",
        imageUrl: "https://i.postimg.cc/fb2kycTx/Frame-29-1.png",
    },
];