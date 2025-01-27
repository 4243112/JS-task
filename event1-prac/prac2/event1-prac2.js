"use strict";

document.querySelectorAll('.quantity').forEach(select => {
    select.addEventListener('change', updateTotal);
});

function updateTotal() {
    let total = 0;

    document.querySelectorAll('tr').forEach(row => {
        const priceElement = row.querySelector('.price');
        const quantityElement = row.querySelector('.quantity');
        
        if (priceElement && quantityElement) {
            const price = parseInt(priceElement.getAttribute('data-price'));
            const quantity = parseInt(quantityElement.value);
            total += price * quantity;
        }
    });

    document.getElementById('total').innerText = total;
}
