// Fonction pour mettre à jour le prix total
function updateTotal() {
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.getAttribute('data-price'));
        total += quantity * price;
    });
    totalPriceElement.textContent = total.toFixed(2);
}

// Ajout des événements pour augmenter/diminuer la quantité
document.querySelectorAll('.cart-item').forEach(item => {
    const quantityElement = item.querySelector('.quantity');
    const itemPriceElement = item.querySelector('.item-price');

    // Bouton pour diminuer la quantité
    item.querySelector('.decrease').addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            itemPriceElement.textContent = (quantity * parseFloat(item.getAttribute('data-price'))).toFixed(2);
            updateTotal();
        }
    });

    // Bouton pour augmenter la quantité
    item.querySelector('.increase').addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        itemPriceElement.textContent = (quantity * parseFloat(item.getAttribute('data-price'))).toFixed(2);
        updateTotal();
    });

    // Bouton pour supprimer l'article du panier
    item.querySelector('.remove').addEventListener('click', () => {
        item.remove();
        updateTotal();
    });

    // Bouton pour aimer l'article
    item.querySelector('.heart').addEventListener('click', (e) => {
        e.target.classList.toggle('liked');
    });
});

// Initialisation du prix total
updateTotal();
