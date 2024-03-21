document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        let maxn = document.getElementById('maxn').value;
        maxn = parseInt(maxn);

        let randomn = Math.random() * maxn;
        randomn = Math.floor(randomn + 1);

        document.getElementById('resultado-valor').innerText = randomn;
        document.querySelector('.resultado').style.display = 'block';
    })
})