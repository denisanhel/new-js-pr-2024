// ця ф-ція зчитує значення з текстового поля
function addPair() {
            const input = document.getElementById('pair-input').value.trim();
            const parts = input.split('=');

            // тут робиться перевірка чи текст вказано у правильному форматі 'ім'я=значення'
            if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) {
                alert('Неправрльний формат введення');
                return;
            }

    const name = parts[0].trim();
    const value = parts[1].trim()
    // дістаємо елемент select
    const list = document.getElementById('pair-list');
    //створюємо option
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
            // тут сорт відбув за назвою, того вказуємо що сортуємо перше слово
            return a.text.split('=')[0].localeCompare(b.text.split('=')[0]);
        } else {
            // тут сорт відбув за значенням, того вказуємо що сортуємо друге слово
            return a.text.split('=')[1].localeCompare(b.text.split('=')[1]);
        }
    });
    items.forEach(function(item) {
        list.add(item);
    });
}

//ф-ція для видалення вибраного елементу
function deletePairs() {
    const list = document.getElementById('pair-list');
    for (let i = list.selectedIndex; i >= 0; i--) {
        list.remove(i);
    }
}