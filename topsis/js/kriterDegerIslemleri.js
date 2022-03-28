var kriterler = [];
var kriterMaxMin = [];
document.querySelector('.kriterlerInput').innerHTML ="";
function KriterEkle() {

    var kriterDegeri = document.querySelector('.kriterlerInput').value;
    var seciliMaxMin = document.querySelector('input[name = "check"]:checked').value;

    if (kriterDegeri != "" && seciliMaxMin != "") {
        $('input:radio[value="max"]').prop("checked", true)
        kriterler.push(kriterDegeri);
        kriterMaxMin.push(seciliMaxMin);
        document.querySelector('.kriterlerInput').value="";
        KriterYazdir();
        alertify.success(kriterDegeri +" Adlı Kriter Eklendi ");
    }else{
        alertify.alert('Uyarı', 'Boş Bırakmayınız');
    }
}
function KriterYazdir() {
    var a = "";
    var kriterArrayInput = "";
    var kriterFmArrayInput = "";
    document.getElementById("kriterarea").innerHTML ="";
    for (let i = 0; i < kriterler.length; i++) {
        a += "<div class='col-12 added'><div class='added-data' ><span class='font14' >" + kriterler[i] + " - " + kriterMaxMin[i] + "</span><i class='fas fa-times-square' data-Kmaxmin='" + [i] + "' data-KstandartName='" + kriterler[i] + "' onclick='kriterDelete(" + [i] + ")'></i></div></div>";
    }
    kriterArrayInput = "<input type='text' name ='Kriterler[]' value='"+kriterler+"' style='display:none'>";
    kriterFmArrayInput = "<input type='text' name ='KriterMaxMin[]' value='"+kriterMaxMin+"' style='display:none'>";

    document.getElementById("kdegerler").innerHTML = kriterArrayInput;
    document.getElementById("kfmdegerler").innerHTML = kriterFmArrayInput;
    document.getElementById("kriterarea").innerHTML = a;
}

function kriterDelete(e){

    var silinecek = kriterler[e];
    kriterler.splice([e],1);
    kriterMaxMin.splice([e],1);
    KriterYazdir();   
    alertify.warning(silinecek+" "+"Kriteri Silindi");
}