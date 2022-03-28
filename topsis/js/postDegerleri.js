var alternatifArray;
var kriterArray;
var kriterMaxMinArray;
var kontrol = document.querySelector('.alternatifDiv').innerHTML;
if(kontrol != ""){
    alternatifArray = parcala(document.querySelector('.alternatifDiv').innerHTML);
    kriterArray = parcala(document.querySelector('.kriterDiv').innerHTML);
    kriterMaxMinArray = parcala(document.querySelector('.kriterMaxMinDiv').innerHTML);

    document.querySelector('.KriterSayisi').innerHTML= kriterArray.length;
    document.querySelector('.AlternatifSayisi').innerHTML= alternatifArray.length;
    document.querySelector('.KriterSayisi').attributes('data-Knumber').value=kriterArray.length;
    document.querySelector('.AlternatifSayisi').attributes('data-Anumber').value=alternatifArray.length;
}


function parcala(e){            
    return e.split(",");
}