// machine id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id, value);
    return value;
}

// machine -> balance
function getBalance(){
    const balanceElemnet = document.getElementById("balance");
    const balance = balanceElemnet.innerText;
    // console.log("current balance", Number(balance))
    return Number(balance)
}

// machine -> set Balance
 function setBalance (value){
    const balanceElemnet = document.getElementById("balance");
    balanceElemnet.innerText=value;
 }
