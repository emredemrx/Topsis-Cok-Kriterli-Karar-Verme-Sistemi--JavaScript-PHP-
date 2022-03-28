function tableOlus(tableolusturma, baslik, kriterArray, icerik, dizi, alternatifArray, tablearea,title) {
    icerikBasligi = tableolusturma.IcerikBasligi(title);
    baslik = tableolusturma.tableBaslik(kriterArray);
    icerik = tableolusturma.tableicerik(dizi, alternatifArray);
    tablearea.innerHTML += "<div class='table-responsive'>"+icerikBasligi + baslik + icerik+"</div>";
} 

class CreateTable{
    constructor(alernatifsayisi1,kritersayisi1){
        this.alernatifsayisi1=alernatifsayisi1;
        this.kritersayisi1=kritersayisi1;
    }
    IcerikBasligi(e){
        let title = "<h4 class='mt-3'>"+e+"</h4>";
        return title;
    }
    tableBaslik(e){ 
        let ilk = "<table class='table'><thead><tr>";
        var orta ="<th scope='row'>#</th>";
        for (let i = 1; i <= this.kritersayisi1; i++) {
            orta+="<th align='center' scope='col'>"+e[i-1]+"</th>";
        }
        let son = "</tr></thead>";
        return ilk+orta+son;
    }
    tableicerik(e,a){
        let b = "",r ="",s = "",icerik = "";
        for (let i = 1; i <= this.alernatifsayisi1; i++) {
            b = "<tr>";
            r = "<th align='center' scope='col'>" +a[i-1]+ "</th>";
            for (let j = 1; j <= this.kritersayisi1; j++) {
                r += "<td>" + e["k"+j+"a"+i] + "</td>";
            }
            s = "</tr>";
            icerik += b + r + s;
        }
        return icerik+"</table>";
    }
    eniyideger(e){
        let b = "",r ="",s = "",icerik = "";
            b = "<tr>";
            
            r = "<th align='center' scope='col'>A+</th>";
            for (let j = 0; j < e.length; j++) {
                r += "<td>" + e[j] + "</td>";
            }
            s = "</tr>";
            icerik += b + r + s;
        
        return icerik;
    }
    enkotudeger(e){
        let b = "",r ="",s = "",icerik = "";
        b = "<tr>";
        
        r = "<th align='center' scope='col'>A-</th>";
        for (let j = 0; j < e.length; j++) {
            r += "<td>" + e[j] + "</td>";
        }
        s = "</tr>";
        icerik += b + r + s;
    
        return icerik+"</table>";
    }
    SiTableBaslik(e){
        let ilk = "<table class='table'><thead><tr>";
        var orta ="<th scope='row'>#</th>";
        for (let i = 1; i <= this.alernatifsayisi1; i++) {
            orta+="<th align='center' scope='col'>"+e[i-1]+"</th>";
        }
        let son = "</tr></thead>";
        return ilk+orta+son;
    }
    SiPozitif(e){
        let b = "",r ="",s = "",icerik = "";
            b = "<tr>";
            
            r = "<th align='center' scope='col'>Si+</th>";
            for (let j = 0; j < this.alernatifsayisi1; j++) {
                r += "<td>" + e[j] + "</td>";
            }
            s = "</tr>";
            icerik += b + r + s;
        
        return icerik;
    }
    SiNegatif(e){
        let b = "",r ="",s = "",icerik = "";
        b = "<tr>";
        r = "<th align='center' scope='col'>Si-</th>";
        for (let j = 0; j < this.alernatifsayisi1; j++) {
            r += "<td>" + e[j] + "</td>";
        }
        s = "</tr>";
        icerik += b + r + s;
    
        return icerik+"</table>";
    }
    GoreliBaslik(e){
        let ilk = "<table class='table'><thead><tr>";
        var orta ="<th scope='row'>#</th>";
        for (let i = 0; i < this.alernatifsayisi1; i++) {
            orta+="<th align='center' scope='col'>"+e[i]+"</th>";
        }
        let son = "</tr></thead>";
        return ilk+orta+son;
    }
    GoreliYakinlik(e){
        let b = "",r ="",s = "",icerik = "";
        b = "<tr>";
        
        r = "<th align='center' scope='col'>Gi</th>";
        for (let j = 0; j < this.alernatifsayisi1; j++) {
            r += "<td>" + e[j] + "</td>";
        }
        s = "</tr>";
        icerik += b + r + s;
    
        return icerik+"</table>";
    }
}