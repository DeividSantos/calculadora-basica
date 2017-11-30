function calcular(){
    var operacao = document.getElementById('operacao').value;
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var resultado = 0;

    //Forçando o tipo de variável
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if(Number.isNaN(numero1)){
      alert('Favor digitar um numero válido para a operação {numero1}');
      return false;
    }

    if(Number.isNaN(numero2)){
      alert('Favor digitar um numero válido para a operação {numero2}');
      return false;
    }

    switch (operacao) {
      case '1':// subtração
        resultado = (numero1 - numero2);
        break;
      case '2':// adição
        resultado = (numero1 + numero2);
        break;

      case '3':// multiplicação
        resultado = (numero1 * numero2);
        break;

      case '4':// divisão
        resultado = (numero1 / numero2);
        break;

      default:
        alert('Selecione uma opção!')
        return false;
    }

    document.getElementById('resultado').value = resultado;    
}
