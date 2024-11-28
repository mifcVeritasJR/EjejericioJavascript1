document.getElementById('areaForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
});

function calcularArea() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
        mostrarError();
        return;
    }

    const area = base * altura;
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('d-none');
    resultadoDiv.textContent = `El área del rectángulo es: ${area} unidades cuadradas.`;
}

function mostrarError() {
    const baseInput = document.getElementById('base');
    const alturaInput = document.getElementById('altura');
    
    baseInput.classList.add('is-invalid');
    alturaInput.classList.add('is-invalid');
    
    setTimeout(() => {
        baseInput.classList.remove('is-invalid');
        alturaInput.classList.remove('is-invalid');
    }, 3000);
}

