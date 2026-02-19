document.getElementById("add-money-btn").addEventListener("click",function(){ 
//   1. bank account get
 const bankAccount = getValueFromInput("add-money-bank");
 if(bankAccount == "Selct bank"){
    alert("Please select bank");
    return;
 }

//  2. get bank accont number
 const accno  = getValueFromInput("add-money-number");
 if(accno.length != 11){
    alert("Invalid number");
    return;
 }
//  3.get ammount
const ammount = getValueFromInput("add-money-amount");
const currentBalance = getBalance();
const newBalance= currentBalance + Number(ammount);
// console.log(newBalance)

const pin = getValueFromInput("add-money-pin");
if(pin == "4321"){
    alert(`Add Money Success from
         ${bankAccount}
          at ${new Date}`);
    setBalance(newBalance);
}else{
    alert("Invalid Pin");
    return;
}
})