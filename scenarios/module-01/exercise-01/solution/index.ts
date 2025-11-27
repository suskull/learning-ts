interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

function calculateTotal(items: CartItem[]): number {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

const cart: CartItem[] = [
    { name: 'Apple', price: 1.5, quantity: 2 },
    { name: 'Banana', price: 0.5, quantity: 5 },
    { name: 'Orange', price: 2, quantity: 1 },
];

console.log('Total:', calculateTotal(cart));
