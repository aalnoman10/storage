const addToCart = () => {
    const inpField = document.getElementById("product-name");
    const inpQuantity = document.getElementById("product-Quantity");
    const inpFieldValue = inpField.value;
    const inpQuantityValue = inpQuantity.value;

    // console.log(inpFieldValue, inpQuantityValue);
    inpField.value = '';
    inpQuantity.value = '';
    shoppingDisplay(inpFieldValue, inpQuantityValue);
    saveProductToLocalStorage(inpFieldValue, inpQuantityValue);
}

const shoppingDisplay = (Field, Quantity) => {
    const shoppingDisplayContainer = document.getElementById("shopping-display");
    const li = document.createElement("li");
    li.innerHTML = `<strong>${Field}</strong> : ${Quantity}`;
    shoppingDisplayContainer.appendChild(li);
}

const getCartLocalStorage = () => {
    let cart = {};
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return (cart);
}

const saveProductToLocalStorage = (field, quantity) => {
    const cart = getCartLocalStorage();
    cart[field] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
}

const displayProductFromLS = () => {
    const savedCart = getCartLocalStorage();
    for (const product in savedCart) {
        const quantity = savedCart[product];
        console.log(product, quantity)
        shoppingDisplay(product, quantity)
    }
}

displayProductFromLS();