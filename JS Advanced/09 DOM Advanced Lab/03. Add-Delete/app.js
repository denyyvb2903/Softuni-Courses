function deleteByEmail() {
    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput.value.trim();
    const table = document.getElementById("customers");
    const rows = table.getElementsByTagName("tr");
    let rowDeleted = false;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const emailCell = row.getElementsByTagName("td")[1];

        if (emailCell && emailCell.textContent === email) {
            row.insertAdjacentHTML('beforeend', '<td><a href="#" class="delete-link">Delete</a></td>');
            const deleteLink = row.querySelector('.delete-link');
            deleteLink.addEventListener('click', function (event) {
                event.preventDefault();
                row.remove();
                rowDeleted = true;
            });
            break;
        }
    }

    const resultDiv = document.getElementById("result");
    if (rowDeleted) {
        resultDiv.textContent = "Deleted";
    } else {
        resultDiv.textContent = "Not found";
    }
}

const deleteButton = document.querySelector('button');
if (deleteButton) {
    deleteButton.addEventListener('click', deleteByEmail);
}

