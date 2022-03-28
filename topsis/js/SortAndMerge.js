class SortAndMerge{
    constructor(alernatifsayisi,kritersayisi){
        this.alernatifsayisi1=alernatifsayisi;
        this.kritersayisi1=kritersayisi;
    }
    GoreliKeyNameSort(goreliyakinlik){
        var gorelimerge = [];
            for (let i = 0; i < goreliyakinlik.length; i++) {
                gorelimerge["A"+(i+1)]= goreliyakinlik[i];
            }
        return gorelimerge;
    }
    GoreliSort(goreliyakinlik,gorelimerge,alter){ // sıralı sonuç için alternatif isimlerini sıralıyoruz 
        var siraliSonuc = [];
        
        for (let i = 0; i < goreliyakinlik.length; i++) {
            for (let j = 1; j <= goreliyakinlik.length; j++) {
                if(goreliyakinlik[i] == gorelimerge["A"+j]   ){
                    
                    siraliSonuc[i] = alter[j-1]; // 

                }
            }
            
        }
        return siraliSonuc;
    }
}