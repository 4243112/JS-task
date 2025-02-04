"use strict";

document.querySelectorAll('.quantity').forEach(select => {
    select.addEventListener('change', updateTotal);
});

function updateTotal() {
    let total = 0;

    document.querySelectorAll('tr').forEach(row => {
        const priceElement = row.querySelector('.price');
        const quantityElement = row.querySelector('.quantity');
        const itemTotalElement = row.querySelector('.item-total'); // Add this line

        if (priceElement && quantityElement && itemTotalElement) { // Add itemTotalElement check
            const price = parseInt(priceElement.getAttribute('data-price'));
            const quantity = parseInt(quantityElement.value);
            const itemTotal = price * quantity;
            total += itemTotal;

            itemTotalElement.innerText = `${itemTotal}円`; // Set item total
        }
    });

    document.getElementById('total').innerText = `${total}円`;
}
