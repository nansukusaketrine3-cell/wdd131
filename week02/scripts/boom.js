const input = document.querySelector('#favchap');
const button = document.querySelector('#addBtn');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

    // 1. Check if input is blank
    if (input.value === '') {
        input.focus();
        return;
    }

    // 2. Create list item
    const li = document.createElement('li');
    li.textContent = input.value;

    // 3. Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // 4. Add event listener (event delegation style)
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
    });

    // 5. Append button to list item
    li.appendChild(deleteButton);

    // 6. Append list item to list
    list.appendChild(li);

    // 7. Clear input field
    input.value = '';

    // 8. Return focus to input
    input.focus();
});