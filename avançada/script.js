const button = document.querySelector('button');

const addloading = () => {
    button.innerHTML = '<img src="../assets/loading.png" class="loading">';
}

const removeloading = () => {
    button.innerHTML = 'Enviar';
}

const handleSubmit = (event) => {
    event.preventDefault();

    addloading();

    const name = document.querySelector('input[name=name').value;
    const email = document.querySelector('input[name=email').value;

    fetch('https://api.sheetmonkey.io/form/jqiPxTQrC3j5QqRFUF2ka', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
    }).then(() => removeloading());
}

document.querySelector('form').addEventListener('submit', handleSubmit);