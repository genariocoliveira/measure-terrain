function calc() {
    let ar1 = document.querySelector('.are1').value 
    let ar2 = document.querySelector('.are2').value
    let res = (ar1 * ar2) / 2
    let disp = document.querySelector('.resultado')
    if(ar1.length == '') {
        alert('Informe a Largura')
    } else if(ar2.length == '') {
        alert('Informe o comprimento')
    }
     else if(ar1 <= 0 || ar2 <= 0) {
        alert('Número inválido')
        console.log('Error')
        // disp.style.textTransform = "uppercase"
        disp.innerHTML = `ERROR`
    }
    else{
        disp.style.textTransform = "lowercase"
        disp.innerHTML = `${res} m²`
        console.log('Success')
    }
};

function limpar(){
    let ar1 = document.querySelector('.are1').value = ''
    let ar2 = document.querySelector('.are2').value = ''
    let disp = document.querySelector('.resultado').innerHTML = ''
    if(ar1.length == ''){
        console.log('Input vazio')
    }else{

    }
    console.log('Feito')
}