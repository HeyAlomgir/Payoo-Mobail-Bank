document.getElementById("Cashout-btn").addEventListener("click",function(){ 
    // 1. get agent number and validate

    const cashoutNumberInput = document.getElementById("Cashout-number");
    const cashoutNumber =cashoutNumberInput.value ;
    console.log(cashoutNumber);
    if(cashoutNumber.length !=11){
        alert("Invalid Agent Number");
        return;
    }

    // get the amount , validate , convert to number

    const cashoutAmountInput = document.getElementById("Cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);


    // 3.get the Current Balance , validate , convert to number

    const balanceElemnet = document.getElementById("balance");
    const balance = balanceElemnet.innerText;

    // 4. Calculat new blance 
     const newBalance = Number(balance)- Number (cashoutAmount);

     if(newBalance < 0){
        alert("Invalid Amount");
        return;
     }

     


    //  5.get the pin and verify

    const cashoutPinInput=document.getElementById("Cashout-pin");
    const pin = cashoutPinInput.value;

    if(pin === "4321"){
        // 5.1 true:: show and verify
        alert("cashout successfull")
        balanceElemnet.innerText = newBalance;
   
    }
    else{
        // 5.2 false:: show an error alert > return
        alert("Invalid pin");
        return;
    }

   
})
