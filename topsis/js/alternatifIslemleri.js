
var Alternatifler = [];
document.querySelector('.AlternatifInput').innerHTML ="";
function AlternatifEkle() {

    var AlternatifDegeri = document.querySelector('.AlternatifInput').value;
    if (AlternatifDegeri != "") {
        Alternatifler.push(AlternatifDegeri);
        alertify.success(AlternatifDegeri +" Adlı Alternatif Eklendi");
        alternatifYazdir();
        
        document.querySelector('.AlternatifInput').value="";
    } else {
        alertify.alert('Uyarı', 'Boş Bırakmayınız');
    }
    
}
function alternatifDelete(e){

    var silinecek = Alternatifler[e];
    Alternatifler.splice([e],1);
    
    alternatifYazdir();   
    alertify.warning(silinecek+" "+"Alternatif Silindi");
}
function alternatifYazdir() {
    var alternatifYaz = "";
    var alternatifYazInput = "";
    document.getElementById("alternatifarea").innerHTML ="";
    for (let i = 0; i < Alternatifler.length; i++) {
        alternatifYaz += "<div class='col-12 added'><div class='added-data' ><span class='font14' >" + Alternatifler[i] + "</span><i class='fas fa-times-square' data-AstandartName='" + Alternatifler[i] + "' onclick='alternatifDelete(" + [i] + ")'></i></div></div>";
    }
    alternatifYazInput = "<input type='text' name ='Alter[]' value='"+Alternatifler+"' style='display:none'>";

    document.getElementById("adegerler").innerHTML = alternatifYazInput;
    document.getElementById("alternatifarea").innerHTML = alternatifYaz;
}
