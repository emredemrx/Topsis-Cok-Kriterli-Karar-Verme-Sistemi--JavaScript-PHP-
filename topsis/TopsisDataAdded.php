<link rel="stylesheet" href="css/topsisDataAdded.css">

<div class="container addedContainer">
    <div class="row p-0 m-0">
    
        <div class="col-12 col-md-6 p-4 topsisKriterler topsisDataAdded">
            <div class="row p-0 m-0">
                <div class="col-12 p-0">
                    <p>Kriterler</p>
                    <input type="text" class="kriterlerInput dataInput">
                </div>
                <div class="col-12 mt-2 faydamaliyet">
                    <fieldset>
                        <div class="row p-0">
                            <div class="col-6 col-md-12 col-lg-6 p-1 m-0">
                                <div class="row p-0 m-0">
                                    <div class="col-12 faydaButton">
                                        <span class="radio-text font14">Fayda</span>
                                        <input class='toggle' type="radio" name='check' value='max' checked="checked"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-12 col-lg-6 m-0 p-1">
                                <div class="row p-0 m-0">
                                    <div class="col-12 maliyetButton">
                                        <span class="radio-text font14">Maliyet</span>
                                            <input class='toggle' type="radio" name='check' value='min'/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </fieldset>
                </div>
                <div class="col-12 p-0 mt-2 addCol">
                    <input type="button" onClick="KriterEkle();" class="addBTN KriterEkle" id='KriterEkle' value="Kriter Ekle">
                </div>
                <div class="col-12 p-0 mt-3 ListTitle">
                    <span class="font12">Eklenen Kriterler</span>
                </div>
                <div class="col-12">
                    <div class="row" id="kriterarea">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 p-4 topsisAlternatifler topsisDataAdded">
            <div class="row p-0 m-0">
                <div class="col-12 p-0">
                    <p>Alternatif</p>
                    <input type="text" class="AlternatifInput dataInput">
                </div>
                <div class="col-12 p-0 mt-2 addCol">
                    <input type="button" class="addBTN" onClick="AlternatifEkle();" value="Alternatif Ekle">
                </div>
                <div class="col-12 p-0 mt-3 ListTitle">
                    <span class="font12">Eklenen Alternatifler</span>
                </div>
                <div class="col-12">
                    <div class="row" id="alternatifarea">

                    </div>
                </div>
            </div>
        </div>
        <form action="?pageNumber=1" method="post">
        <div id="kdegerler" style="display:none"></div>
        <div id="kfmdegerler" style="display:none"></div>
        <div id="adegerler" style="display:none"></div>
        <div class="col-12">
            <div class="row">
                <div class="col-12 p-4 mt-2 calculateaddCol">
                    <input type="submit" class="calculateBTN" value="Matris Oluştur">
                </div>
            </div>
        </div>
    </form>
    </div>
</div>
<script src="./js/kriterDegerIslemleri.js"></script>
<script src="./js/alternatifIslemleri.js"></script>
