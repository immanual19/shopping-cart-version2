const quantityMinusBtn1=document.getElementById("quantityMinus1");
const quantityPlusBtn1=document.getElementById("quantityPlus1");
const quantityMinusBtn2=document.getElementById("quantityMinus2");
const quantityPlusBtn2=document.getElementById("quantityPlus2");

quantityMinusBtn1.addEventListener("click",function(){
    let quantity1=document.getElementById("quantityiPhone").value;
    if(quantity1>0)
    {
        document.getElementById("quantityiPhone").value=quantity1-1;
    }
    else
    {
        document.getElementById("quantityiPhone").value=0;
    }
  
    overallCalculation();
})

quantityPlusBtn1.addEventListener("click",function(){
    let quantity1=document.getElementById("quantityiPhone").value;
    document.getElementById("quantityiPhone").value=parseInt(quantity1)+1;
    overallCalculation();
})

quantityMinusBtn2.addEventListener("click",function(){
    let quantity2=document.getElementById("quantityiPhoneCase").value;
    if(quantity2>0)
    {
        document.getElementById("quantityiPhoneCase").value=quantity2-1;
    }
    else
    {
        document.getElementById("quantityiPhoneCase").value=0;
    }
    overallCalculation();
})

quantityPlusBtn2.addEventListener("click",function(){
    let quantity2=document.getElementById("quantityiPhoneCase").value;
    document.getElementById("quantityiPhoneCase").value=parseInt(quantity2)+1;
    overallCalculation();
})

function overallCalculation()
{
    let quantity1=document.getElementById("quantityiPhone").value;
    let quantity2=document.getElementById("quantityiPhoneCase").value;
    let subtotal=(quantity1*1219)+(quantity2*59);
    let tax=((quantity1*12.19)+(quantity2*5.9));
    document.getElementById("iPhoneUnitPrice").innerText=thousandSeparator(quantity1*1219);
    document.getElementById("iPhoneCaseUnitPrice").innerText=thousandSeparator(quantity2*59);
    document.getElementById("totalWithoutTax").innerText=thousandSeparator(subtotal);
    document.getElementById("totalTax").innerText=thousandSeparator(parseFloat(tax).toFixed(2));
    let total=parseInt(document.getElementById("totalWithoutTax").innerText.replace(",","")) + parseFloat(document.getElementById("totalTax").innerText.replace(",",""));
    document.getElementById("totalWithTax").innerText=thousandSeparator(total);
    

}


const removeItemBtn1=document.getElementById("removeItem1");
const removeItemBtn2=document.getElementById("removeItem2");

removeItemBtn1.addEventListener("click",function(){
    vanishItem("cart1","quantityiPhone");
})
removeItemBtn2.addEventListener("click",function(){
    vanishItem("cart2","quantityiPhoneCase");
})

function vanishItem(id1,id2){
    document.getElementById(id1).style.display="none";
    document.getElementById(id2).value=0;
    overallCalculation();
}

function thousandSeparator(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }