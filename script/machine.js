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


//  machin id > hide all > show id

function showOnly (id) {
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("Cashout")

    // shobai ke hide kore dilam
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");

    // id wala element ta ke tumi show korau
    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}
