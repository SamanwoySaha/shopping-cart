const phoneUnitPrice = 1219;
const caseUnitPrice = 59;

function changeQuantity(item, addQuantity) {
    let itemQuantityInput = document.getElementById(item + '-quantity');
    let itemQuantity = parseInt(itemQuantityInput.value);
   
    if(addQuantity == true) {
        itemQuantityInput.value = ++itemQuantity;
    }
    else if (addQuantity == false && itemQuantity > 0) {
        itemQuantityInput.value = --itemQuantity;
    }

    const itemPrice = item == 'phone' ? itemQuantity * phoneUnitPrice : itemQuantity * caseUnitPrice;
    document.getElementById(item + '-price').innerText = '$' + itemPrice;
}

function grandTotal(removeItem){
    if(removeItem == 'phone' || removeItem == 'case'){
        document.getElementById(removeItem).style.display = 'none';
    }
    const phonePrice = removeItem == 'phone' ? 0 : document.getElementById('phone-quantity').value * phoneUnitPrice;
    const casePrice = removeItem == 'case' ? 0 : document.getElementById('case-quantity').value * caseUnitPrice;

    let subtotal = phonePrice + casePrice;
    document.getElementById('subtotal').innerText = '$' + subtotal;

    const tax = Math.round(subtotal * 0.05);
    document.getElementById('tax').innerText = '(vat 5%)  $' + tax;

    const total = subtotal + tax;
    document.getElementById('total').innerText = '$' + total;
}