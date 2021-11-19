const calcular = document.getElementById('calcular');


function poupança () {
    const p = document.getElementById('p').value;
    const i = document.getElementById('i').value/100;
    const n = document.getElementById('n').value;
    const nome = "Humberto";
    const resultado = document.getElementById('resultado');

    if (p !== '' && i !== '' && n !== '') {
        //VF = (P*(((1+i)^n-1)/i)) 
        const vf = (100*((Math.pow(1+i,n)-1)/i)).toFixed(2); 
        
        resultado.textContent = `Olá, ${nome}, se você aplicar R$${p} à taxa de júros de ${i*100}% ao mês durante ${n} meses acumulará uma poupança de R$${vf}`;

    }else {
        resultado.textContent = 'Para calcular a poupança , preencha todos os campos.';
    }

}
calcular.addEventListener('click', poupança);
