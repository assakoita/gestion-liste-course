function addItem(name, quantity) {
    items.push({ name, quantity, purchased: false });
    updateList();
}

function togglePurchased(index) {
    items[index].purchased = !items[index].purchased;
    updateList();
}

function saveData() {
    localStorage.setItem('items', JSON.stringify(items));
}

function loadData() {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
        items = JSON.parse(savedItems);
        updateList();
    }
}

window.onload = loadData;







document.getElementById('add-item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('item-name').value;
    const quantity = document.getElementById('item-quantity').value;
    addItem(name, quantity);
    document.getElementById('add-item-form').reset();
});