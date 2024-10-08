function calculateInvestiment(){
    
    var principal= parseFloat( document.getElementById('principal').value);
    
    var interestrate= parseFloat(document.getElementById('interest').value);
    var years=parseInt(document.getElementById('years').value);
    if(isNaN(principal)||isNaN(interestrate) isNaN(years) ){
        document.getElementById('result').textContent="Por Favor,Insira Valores Válidos.";
   return;
    }
    var futurevalue=principal*Math.pow(1 +(interestrate / 100), years);

    

    var resultElement=documet.getElementById('result');
resultElement.textContent=`Valor futuro do investimento:R$ ${ futurevalue.toFixed(2)}`;
}