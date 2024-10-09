function calculateInvestiment(){
    
    function calculateInvestiment(){
        let principal= parseFloat(document.getElementById("principal").value);
        let Taxa= parseFloat(document.getElementById("rate").value) /100;
        let Anos= parseFloat(document.getElementById("years").value);
        let Conta= principal*Math.pow(1+Taxa,Anos);
        document.getElementById("result").value = "R$"+ String(Conta.toFixed(2));
    }
}