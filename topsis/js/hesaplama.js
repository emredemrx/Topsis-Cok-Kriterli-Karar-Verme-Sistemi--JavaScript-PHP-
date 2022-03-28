
function hesapla(gelendegerArray, gelenKeyArray, faydaMaliyet,kriterArray,alternatifArray) {
    var Agirlikdegerleri = [];
    var Agirlikdegerleri = AgirlikdegerGetir();
    var mergearray = [];
    const tablearea = document.getElementById("tablearea");
    document.getElementById("tablearea").innerHTML = "";
    let icerik = "";
    let baslik  = "";
    var alternatifAdeti = gelendegerArray.length;

    valKeyMerge(alternatifAdeti, gelenKeyArray, gelendegerArray, mergearray);

    var criteria_karekok = [];
    criteria_karekok = karekokDegeri(mergearray); //her kriter için payda karekök hesaplaması
    let tableolusturma = new CreateTable(AlternatifSayisi, kriterSayisi);
    
    var Normalizasyondegerler = [];
    var normalizeAndKey = [];
    Normalizasyondegerler = normalizasyon(criteria_karekok, mergearray); //normalizasyon degerleri
    normalizeAndKey = merge(alternatifAdeti, gelenKeyArray, Normalizasyondegerler); //normalizasyon ve key degerleri
    //----------Tablosu olşturuyor
    tableOlus(tableolusturma, baslik, kriterArray, icerik, normalizeAndKey, alternatifArray, tablearea,"Normalize edilmiş karar matrisi");
    //----------
    

    var AgirlikliNormK_Matrisidegerleri = [];
    AgirlikliNormK_Matrisidegerleri = agirlikliNormalKmatrisi(Agirlikdegerleri, normalizeAndKey); //agirlikli normalize karar matrisi degerleri
    var AgirliklinormalizeAndKey = []; //normalizasyon ve key degerleri
    AgirliklinormalizeAndKey = merge(alternatifAdeti, gelenKeyArray, AgirlikliNormK_Matrisidegerleri);
    //----------Tablosu olşturuyor
    tableOlus(tableolusturma, baslik, kriterArray, icerik, AgirliklinormalizeAndKey, alternatifArray, tablearea,"2.Ağırliklı normalize edilmiş karar matrisi");
    //----------


    //3 En iyi En kötü değerlerin bulunması
    var pozitifNegatifIdealcözüm = [];
    pozitifNegatifIdealcözüm = pozitifNegatifIdeal(AgirliklinormalizeAndKey, faydaMaliyet);
    //----------Tablosu olşturuyor
    // Üstekiler gibi global foksiyonda yapmadım. bu tablo oluşumlarında ekstra işlemler olduğu için ilk etapta bu şekilde yaptım.
    icerikBasligi = tableolusturma.IcerikBasligi("3.Pozitif ve negatif ideal çözümlerin bulunması");
    baslik = tableolusturma.tableBaslik(kriterArray);
    let w = tableolusturma.eniyideger(pozitifNegatifIdealcözüm["eniyidegerler"]);
    let r = tableolusturma.enkotudeger(pozitifNegatifIdealcözüm["enkotudegerler"]);
    tablearea.innerHTML += "<div class='table-responsive'>"+ icerikBasligi + baslik + w + r+"</div>";


    //4.Pozitif ve negatif ideal çözümlerin bulunması
    var { SiPozitif, SiNegatif } = SiPozitifNegatifHesaplama(AgirliklinormalizeAndKey, pozitifNegatifIdealcözüm);
    //----------Tablosu olşturuyor
    icerikBasligi = tableolusturma.IcerikBasligi("4.Pozitif ve negatif ideal çözümlerin bulunması");
    baslik = tableolusturma.SiTableBaslik(alternatifArray);
    let SiP = tableolusturma.SiPozitif(SiPozitif);
    let SiN = tableolusturma.SiNegatif(SiNegatif);
    tablearea.innerHTML += "<div class='table-responsive'>"+icerikBasligi + baslik + SiP + SiN+"</div>";


    //5 İdeal çözüme olan göreli yakınlığın hesaplanması
    let goreliyakinlik = GoreliYakinlikHesapla(SiNegatif, SiPozitif);
    //----------Tablosu olşturuyor
    icerikBasligi = tableolusturma.IcerikBasligi("5.İdeal çözüme olan göreli yakınlığın hesaplanması");
    baslik = tableolusturma.SiTableBaslik(alternatifArray);
    let goreli = tableolusturma.GoreliYakinlik(goreliyakinlik);
    tablearea.innerHTML += "<div class='table-responsive'>"+icerikBasligi + baslik + goreli+"</div>";


    //6 Sırala
    let sortAndMerge = new SortAndMerge(AlternatifSayisi, kriterSayisi);
    let gorelimerge = sortAndMerge.GoreliKeyNameSort(goreliyakinlik);
    goreliyakinlik.sort(function (a, b) { return b - a; });
    let GoreliSirali = sortAndMerge.GoreliSort(goreliyakinlik, gorelimerge,alternatifArray);
    //----------Tablosu olşturuyor
    icerikBasligi = tableolusturma.IcerikBasligi("6.Sırala");
    baslik = tableolusturma.GoreliBaslik(GoreliSirali,alternatifArray);
    let goreliSiraliIcerik =  tableolusturma.GoreliYakinlik(goreliyakinlik);
    tablearea.innerHTML += "<div class='table-responsive'>"+icerikBasligi + baslik + goreliSiraliIcerik+"</div>";
    
}

function valKeyMerge(alternatifAdeti, gelenKeyArray, gelendegerArray, mergearray) {
    for (let i = 0; i < alternatifAdeti; i++) {
        var a = gelenKeyArray[i];
        var b = gelendegerArray[i];
        mergearray[a] = b;
    }
}
function SiPozitifNegatifHesaplama(AgirliklinormalizeAndKey, pozitifNegatifIdealcözüm) {
    var SiPozitif = [], SiNegatif = [];
    var PozitifIdealtoplam = 0, NegatifIdealtoplam = 0;
    for (let a = 1; a <= AlternatifSayisi; a++) {

        for (let i = 0; i < kriterSayisi; i++) {
            PozitifIdealtoplam += Math.pow((AgirliklinormalizeAndKey["k" + (i + 1) + "a" + a] - pozitifNegatifIdealcözüm.eniyidegerler[i]), 2);
            NegatifIdealtoplam += Math.pow((AgirliklinormalizeAndKey["k" + (i + 1) + "a" + a] - pozitifNegatifIdealcözüm.enkotudegerler[i]), 2);
        }
        SiNegatif.push(Math.sqrt(NegatifIdealtoplam));
        SiPozitif.push(Math.sqrt(PozitifIdealtoplam));
        PozitifIdealtoplam = 0; NegatifIdealtoplam = 0;
    };
    return { SiPozitif, SiNegatif };
}
function GoreliYakinlikHesapla(SiNegatif, SiPozitif) {
    let goreliyakinlik = [];
    for (let i = 1; i <= AlternatifSayisi; i++) {
        goreliyakinlik.push(SiNegatif[i - 1] / (SiPozitif[i - 1] + SiNegatif[i - 1]));
    }
    return goreliyakinlik;
}
function pozitifNegatifIdeal(AgirliklinormalizeAndKey,faydaMaliyet) {
    var eniyidegerler = [];
    var enkotudegerler = [];
    for (let i = 1; i <= kriterSayisi; i++) {
        var deger = 0;
        var temporaryArray = [];
        for (let j = 1; j <= AlternatifSayisi; j++) {
            deger = AgirliklinormalizeAndKey["k"+i+"a"+j];
            temporaryArray.push(deger); //kriterlerin alternatiflerini diziye atıyorum 
        }
        // EN İY DEGERDE KRİTER FAYDA(MAX) İSE MAX ALIYORUZ DEĞİLSE MİN
        // EN KÖTÜ DEĞERDE KRİTER FAYDA(MAX) İSE MİN ALIYORUM DEĞİLSE MAX
        //en iyi deger için
        if(faydaMaliyet[i-1] == "max"){
            var eniyi = Math.max.apply(null, temporaryArray);
            //console.log("eniyi if : "+eniyi);
            eniyidegerler.push(eniyi);
        }else{
            var eniyi = Math.min.apply(null, temporaryArray);
            //console.log("eniyi else : "+eniyi);
            eniyidegerler.push(eniyi);
        }
        
        //en kötü deger için
        if(faydaMaliyet[i-1] == "max"){
            var enkotu = Math.min.apply(null, temporaryArray);
            //console.log("enkotu if : "+enkotu);
            enkotudegerler.push(enkotu);
        }else{
            
            var enkotu = Math.max.apply(null, temporaryArray);
            //console.log("enkotu else : "+enkotu);
            enkotudegerler.push(enkotu);
        }
    }
    return {
        eniyidegerler,
        enkotudegerler
    };
}
function agirlikliNormalKmatrisi(Agirlikdegerleri,normalizeAndKey) {
    let AgirlikliNormK_Matrisi = [];
    var agirlikliNormalizeDegerleri = 0;
    for (let i = 1; i <= kriterSayisi; i++) {
        for (let j = 1; j <= AlternatifSayisi; j++) {
            agirlikliNormalizeDegerleri =  normalizeAndKey["k"+i+"a"+j] * Agirlikdegerleri[i-1];
            AgirlikliNormK_Matrisi.push(agirlikliNormalizeDegerleri);
        }
    }
    return AgirlikliNormK_Matrisi;
}
function normalizasyon(criteria_karekok,mergearray) {
    let NormA_Deger = [];
    var karakok_Alternatif_Carpim = 0
    
    for (let i = 1; i <= kriterSayisi; i++) {
        for (let j = 1; j <= AlternatifSayisi; j++) {
            karakok_Alternatif_Carpim =  mergearray["k"+i+"a"+j] / criteria_karekok[i-1];
            NormA_Deger.push(karakok_Alternatif_Carpim);
        }
    }
    return NormA_Deger;
}
function AgirlikdegerGetir() {
    var gelenAgriliklarArray = [];
    for (let AgirlikIndex = 1; AgirlikIndex <=kriterSayisi ; AgirlikIndex++) {
        var agirlik = $("input[data-agirlik= '"+"k"+AgirlikIndex+"agirlik']").val();
        gelenAgriliklarArray.push(parseFloat(agirlik.replace(",", ".")));
    }
    
    return gelenAgriliklarArray;
}
function karekokDegeri(K_Amerge) {
    var karekok = [];
    let multiplied_criteria = [];
    //karakok degeri için değerleri kendileri ile çarpıp array içine atıyoruz
    for (let j = 1; j <= kriterSayisi; j++) {
        var karakokhesap = 0; //degeri sıfırlar diğer kriterderin degerini toplar
        for (let a = 1; a <= AlternatifSayisi; a++) {
            var l = K_Amerge["k"+j+"a"+a];
            karakokhesap  = l*l;
            multiplied_criteria.push(karakokhesap);
        }
        // karakok almak için kriterlerin alternatiflerini kendi ile çarğtıktan sonra topluyoruz
        var total_criteria = 0;
        for (let k = 0; k < multiplied_criteria.length; k++) {
            total_criteria = total_criteria  +  multiplied_criteria[k];
        }
        var g = Math.sqrt(total_criteria);
        karekok.push(g);
        multiplied_criteria = [];
    }
    return karekok;
}
function merge(alternatifAdet,keyArray,valueArray) {
    var producedArray = [];
    for (let i = 0; i < alternatifAdet; i++) {
        var a =keyArray[i];
        var b =valueArray[i];
        producedArray[a]=  b; //key and value merge
    }
    return producedArray;
}