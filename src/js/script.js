const dataInicialInput = document.getElementById('data-inicial');
const dataFinalInput = document.getElementById('data-final');
const resultado = document.getElementById('resultado');

const calcularDiferencaDatas = () => {
  const dataInicial = new Date(dataInicialInput.value);
  const dataFinal = new Date(dataFinalInput.value);

  if (!dataInicialInput.value || !dataFinalInput.value) {
    resultado.textContent = '0';
    return;
  }

  const diferencaEmMilissegundos = dataFinal - dataInicial;
  const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  if (isNaN(diferencaEmDias)) {
    resultado.textContent = '0';
  } else {
    resultado.textContent = diferencaEmDias >= 0 ? diferencaEmDias : 'Data final anterior à inicial';
  }
};

dataInicialInput.addEventListener('change', calcularDiferencaDatas);
dataFinalInput.addEventListener('change', calcularDiferencaDatas);


