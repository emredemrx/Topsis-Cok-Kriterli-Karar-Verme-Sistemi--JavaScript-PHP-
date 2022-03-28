var kriterSayisi = kriterArray.length;
var AlternatifSayisi = alternatifArray.length;

if(alternatifArray != "" && kriterArray !=""){
    kriterSayisi = kriterArray.length;
    AlternatifSayisi = alternatifArray.length;
}
for (let Kindex = 1; Kindex <= kriterSayisi; Kindex++) {
    $(".jdegerAlmainput").append("<div class='col-12 col-md-6 p-2 degerler'><p>Matrisin <strong>"+kriterArray[Kindex-1]+".</strong> Kriteri açısından alternatiflerin değerlerini giriniz</p><ul class='degerul"+Kindex+"'></ul></div>");
    for (let Aindex = 1; Aindex <= AlternatifSayisi; Aindex++) {
        $(".degerul"+Kindex+"").append("<li><label class='alternatifLabel'>"+alternatifArray[Aindex-1]+".Alternatif:</label><input type='text' class='alternatifInput' value='' data-alternatif='k"+Kindex+"a"+Aindex+"' placeholder='"+kriterArray[Kindex-1]+". Kriter "+alternatifArray[Aindex-1]+".Alternatif'></li>");
        
    }
}
for (let index = 1; index <= kriterSayisi; index++) {
    $(".kriteragirliklari").append("<li><label class='KriterAgirlikLabel'>"+index+".Kriter Agirliğı:</label><input type='text' class='KriterAgirlikInput' value='' data-agirlik='k"+index+"agirlik' placeholder='"+kriterArray[index-1]+". Kriter Ağırlığı'></li>");
}

$('body').on('click', '.karamatrishesap', function() {
    var faydaMaliyet = kriterMaxMinArray; // fayda maliyet array araması
    var { gelendegerArray, gelenKeyArray } = tumdegerGetir();
    
    if( gelendegerArray != ""){
        hesapla(gelendegerArray, gelenKeyArray, faydaMaliyet,kriterArray,alternatifArray);
    }else{
        alertify.error("Tüm Değerleri Giriniz");
    }
});

function tumdegerGetir() {
    var gelendegerArray = [];
    var gelenKeyArray = [];
    for (var ki = 1; ki <= kriterSayisi; ki++) {
        for (let Ai = 1; Ai <= AlternatifSayisi; Ai++) {
            var deger = "k" + ki + "a" + Ai;
            var alternatif = $("input[data-alternatif= '" + "k" + ki + "a" + Ai + "']").val();
            if (alternatif != "") {
                gelendegerArray.push(parseFloat(alternatif.replace(",", ".")));
                gelenKeyArray.push(deger);
            }
        }
    }
    return { gelendegerArray, gelenKeyArray };
}
