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