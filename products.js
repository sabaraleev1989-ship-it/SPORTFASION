// Это твоя база данных. Каждый блок в фигурных скобках { ... } — это один товар.
const products = [
    {
        id: 1,
        category: "Кроссовки",
        title: "Puma Pro-Series Grey",
        newPrice: "6 990",
        oldPrice: "9 990",
        image: "1.png"
    },
    {
        id: 2,
        category: "Футболки",
        title: "Футболка Puma мужская (черная)",
        newPrice: "2 500",
        oldPrice: null, // Если скидки нет, пишем null
        image: "tshirt_black.png"
    },
    {
        id: 3,
        category: "Рюкзаки",
        title: "Рюкзак Puma спортивный",
        newPrice: "4 200",
        oldPrice: null,
        image: "bag.png"
    },
    {
        id: 4,
        category: "Шапки",
        title: "Шапка бини Puma Pink",
        newPrice: "1 500",
        oldPrice: "1 990",
        image: "hat_pink.png"
    }
    // Чтобы добавить новый товар, просто скопируй блок выше, поставь запятую и вставь его ниже.
];
