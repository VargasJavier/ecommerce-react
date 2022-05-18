const dataProducts = [
  {
    id: 1,
    name: "Camiseta de Perú",
    stock: 5,
    category: {
      id: 1,
      name: "CONMEBOL",
    },
    brand: "Marathon",
    color: "white",
    description: "Camiseta edición limitada para el mundial Qatar 2022",
    price: 199.99,
    rating: 5,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail: "https://90mas.com/wp-content/uploads/2021/05/Home-11.png",
  },
  {
    id: 2,
    name: "Camiseta de México",
    stock: 5,
    category: {
      id: 2,
      name: "CONCACAF",
    },
    brand: "Adidas",
    color: "green-900",
    description: "Camiseta edición limitada para el mundial Qatar 2022",
    price: 209.99,
    rating: 5,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail:
      "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2016/03/04/14571096200119.jpg",
  },
  {
    id: 3,
    name: "Camiseta de Argentina",
    stock: 5,
    category: {
      id: 1,
      name: "CONMEBOL",
    },
    brand: "Adidas",
    color: "white",
    description: "Camiseta edición limitada para el mundial Qatar 2022",
    price: 299.99,
    rating: 5,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail:
      "https://home.ripley.com.pe/Attachment/WOP_2/2020200667252/2020200667252_2.jpg",
  },
  {
    id: 4,
    name: "Camiseta de Chile",
    stock: 5,
    category: {
      id: 1,
      name: "CONMEBOL",
    },
    brand: "Adidas",
    color: "red-700",
    description: "Camiseta edición limitada para las Eliminatorias Qatar 2022",
    price: 169.99,
    rating: 4,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail: "https://waalvy.com/wp-content/uploads/2020/10/6373581_1.jpg",
  },
  {
    id: 5,
    name: "Camiseta de Colombia",
    stock: 5,
    category: {
      id: 1,
      name: "CONMEBOL",
    },
    brand: "Adidas",
    color: "yellow-400",
    description: "Camiseta edición limitada para el mundial Qatar 2022",
    price: 169.99,
    rating: 5,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail:
      "https://assets-es.imgfoot.com/media/cache/800x800/colombia-home-2014.jpg",
  },
  {
    id: 6,
    name: "Camiseta de Uruguay",
    stock: 5,
    category: {
      id: 1,
      name: "CONMEBOL",
    },
    brand: "Puma",
    color: "sky-400",
    description: "Camiseta edición limitada para el mundial Qatar 2022",
    price: 169.99,
    rating: 5,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail:
      "https://todosobrecamisetas.com/wp-content/uploads/camisetas-puma-uruguay-2021-17.jpg",
  },
  {
    id: 7,
    name: "Camiseta de Brasil",
    stock: 5,
    category: {
      id: 1,
      name: "CONMEBOL",
    },
    brand: "Nike",
    color: "yellow-400",
    description: "Camiseta edición limitada para el mundial Qatar 2022",
    price: 199.99,
    rating: 5,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail:
      "https://www.webtuti.com/wp-content/uploads/2020/06/camiseta-brasil-2020.jpg",
  },
  {
    id: 8,
    name: "Camiseta de Paraguay",
    stock: 5,
    category: {
      id: 1,
      name: "CONMEBOL",
    },
    brand: "Adidas",
    color: "white",
    description: "Camiseta edición limitada para el mundial Qatar 2022",
    price: 199.99,
    rating: 5,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail:
      "https://todosobrecamisetas.com/wp-content/uploads/camiseta-paraguay-adidas-2018-1.jpg",
  },
  {
    id: 9,
    name: "Camiseta de Canadá",
    stock: 5,
    category: {
      id: 2,
      name: "CONCACAF",
    },
    brand: "Nike",
    color: "red-900",
    description: "Camiseta edición limitada para el mundial Qatar 2022",
    price: 209.99,
    rating: 5,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail:
      "https://todosobrecamisetas.com/wp-content/uploads/canada-2020-nike-kits-2.jpg",
  },
  {
    id: 10,
    name: "Camiseta de USA",
    stock: 5,
    category: {
      id: 2,
      name: "CONCACAF",
    },
    brand: "Nike",
    color: "white",
    description: "Camiseta edición limitada para el mundial Qatar 2022",
    price: 209.99,
    rating: 5,
    reviews: [
      {
        id: 1,
        username: "Javier Vargas",
        text: "Me pareció un buen producto, me pareció genial y no tardó nada",
        rating: 5,
      },
    ],
    thumbnail:
      "https://i.pinimg.com/originals/a3/f5/64/a3f56471ddedaae1339395a8d7baeab7.jpg",
  },
];

export default dataProducts;
