const products = [
    { id: 1, price: 200, name: 'Glass' },
    { id: 2, price: 150, name: 'Dish' }
]

class ProductsModel {
    static getAll() {
        return products;
    }

    static create(data) {
        data.id = products.length + 1;
        products.push(data);

        return data;
    }
}

module.exports = ProductsModel;