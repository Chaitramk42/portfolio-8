document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.product-card button');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
});
