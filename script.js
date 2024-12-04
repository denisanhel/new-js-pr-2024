function addPair() {
            const input = document.getElementById('pair-input').value.trim();
            const parts = input.split('=');

            if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) {
                alert('Неправрльний формат введення');
                return;
            }

    const name = parts[0].trim();
    const value = parts[1].trim();
    const list = document.getElementById('pair-list');
    const option = document.createElement('option');
    option.text = `${name}=${value}`;
    option.value = JSON.stringify({ name, value });
    list.add(option);
    document.getElementById('pair-input').value = '';
}

function sortList(type) {
    const list = document.getElementById('pair-list');
    const items = Array.from(list.options);
    items.sort(function(a, b) {
        if (type === 'name') {
            return a.text.split('=')[0].localeCompare(b.text.split('=')[0]);
        } else {
            return a.text.split('=')[1].localeCompare(b.text.split('=')[1]);
        }
    });
    items.forEach(function(item) {
        list.add(item);
    });
}


function deletePairs() {
    const list = document.getElementById('pair-list');
    for (let i = list.selectedIndex; i >= 0; i--) {
        list.remove(i);
    }
}
