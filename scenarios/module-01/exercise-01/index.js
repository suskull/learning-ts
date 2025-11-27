function calculateTotal(items) {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

const cart = [
    { name: 'Apple', price: 1.5, quantity: 2 },
    { name: 'Banana', price: 0.5, quantity: 5 },
    { name: 'Orange', price: '2', quantity: 1 }, // Bug: price is a string!
];

console.log('Total:', calculateTotal(cart));
