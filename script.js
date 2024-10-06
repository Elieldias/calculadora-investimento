function calculateInvestiment(){
    
    var principal= parseFloat( document.getElementById('principal').value);
    
    var interestrate= parseFloat(document.getElementById('interest').value);
    var years=parseFloat(document.getElementById('years').value);
    var futurevalue=principal*Math.pow(1 +(interestrate / 100), years);
    var resultElement=document.getElementById('result');
    var resultElement=documet.getElementById('result');
resultElement.textContent=`Valor futuro do investimento:R$ ${ futurevalue.toFixed(2)}`;
}