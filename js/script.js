const createProduct = document.querySelector("#createProduct");

createProduct.addEventListener("click", valiu);

function valiu() {

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let inventory = document.getElementById("inventory").value;

    let messageName = document.getElementById("messageName");
    let messagePrice = document.getElementById("messagePrice");
    let messageInventory = document.getElementById("messageInventory");

    if (name === '' || name.length > 25 || price === '' || inventory === '') {

        if (name === '') {
            messageName.innerHTML = `<p>${"Campo requerido"}</p>`;
        } else if (name.length > 25) {
            messageName.innerHTML = `<p>${"Nombre demasiado largo, máximo 25 caracteres"}</p>`;
        }

        if (price === '') {
            messagePrice.innerHTML = `<p>${"Campo requerido"}</p>`;
        }

        if (inventory === '') {
            messageInventory.innerHTML = `<p>${"Campo requerido"}</p>`;
        }
    } else {
        
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: '¡Producto creado!'
        }).then(resultado => {

            messageName.innerHTML = `<p></p>`;
            messagePrice.innerHTML = `<p></p>`;
            messageInventory.innerHTML = `<p></p>`;

        });
    }

}