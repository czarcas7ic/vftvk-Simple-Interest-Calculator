function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100
    var amount = parseFloat(principal)+parseFloat(interest)
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+"\<span class='highlightme'>"+principal+"\</span>"+",\<br\>at an interest rate of "+"\<span class='highlightme'>"+rate+"%"+"\</span>"+"\<br\>You will receive an amount of "+"\<span class='highlightme'>"+amount+"\</span>"+",\<br\>in the year "+"\<span class='highlightme'>"+year+"\</span>"+"\<br\>"

}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function validateform() {
    var principal = document.getElementById("principal").value;
    if (principal <=0){
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return false;
    }
    else compute();
}