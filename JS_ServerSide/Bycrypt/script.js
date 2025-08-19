const button = document.getElementById('btnSubmit');

function generatedHash() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    fetch('/hash', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
            return;
        }

        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('userName').innerText = data.name;
        document.getElementById('userPassword').innerText = data.password;
        document.getElementById('encryptedPassword').innerText = data.hash;
    })
    .catch(err => console.error('Request failed:', err));
}

button.onclick = generatedHash;
