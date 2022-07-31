function compute()
{
    var mvalue = document.getElementById("mvalue").value;
    var irate = document.getElementById("irate").value;
     var year = document.getElementById("year").value;
    if (mvalue == "") {
        alert("Enter a positive number");
        document.getElementById("mvalue").focus();
        return false;
    }else {
        if (mvalue <= 0) {
            alert("Enter a positive number");
            document.getElementById("mvalue").focus();
            return false;
        }
    }
    var HDB = new Date().getFullYear();
    var future= parseInt(HDB,10) + parseInt(year,10);
    var interest= mvalue * year * irate / 100;
    var result= "If you deposit <mark>" + mvalue + "</mark>,<br> at an interest rate of <mark>" + irate + "</mark>%. <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML=result;
}

function showVal(newVal){ 
    document.getElementById("InterestRate").innerHTML=newVal + '%';
}
        
