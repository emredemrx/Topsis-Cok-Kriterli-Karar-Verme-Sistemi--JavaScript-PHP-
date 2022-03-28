<div class="container karaMatrisOlusturma">
    <div class="row">
        <div class="col-12 mt-4 pagetitle">
            <h1 class="kararMtitle">Karar Matrisini Oluşturma</h1>
        </div>
        <div class="col-12 dataNumbers">
            <ul>
                <li><span>Kriter sayısı</span><span class="KriterSayisi" data-Knumber=""></span></li>
                <li><span>Alternatif sayısı</span><span class="AlternatifSayisi" data-Anumber=""></span></li>
            </ul>
        </div>
        <div class="col-12 karardegerleriInput" id="karardegerleriInput">
            <div class="row mt-4 mb-4 jdegerAlmainput" id="jdegerAlmainput">
            </div>
        </div>
        <div class="col-12 mt-4 pagetitle">
            <h1 class="kararMtitle">Karar Matrisi İçin Kriter Ağırlıkları</h1>
        </div>
        <div class="col-12 mb-4 kriteragirliklari">
        </div>
        <!--Eklenecek-->
        <!--<div class="col-12 p-3 calculateaddCol">
            <div class="row justify-content-end">
                <div class="col-3">
                    <input type="button" class="calculateBTN agirlikHesaplama" value="Ağırlık Hesaplama">
                </div>
            </div>
        </div> -->
        <div class="col-12 p-3 mt-2 calculateaddCol">
            <a href='#tablearea'>
                <input type="button" class="calculateBTN karamatrishesap" value="Hesapla">
            </a>
        </div>
    </div>
    <div class="row">
        <?php
            if(isset($_POST['Alter'],$_POST['Kriterler'],$_POST['KriterMaxMin'])){
                $Alter = $_POST['Alter']; 
                $kriter = $_POST['Kriterler'];
                $kriterMaxMin = $_POST['KriterMaxMin']; 
                echo "<div class='alternatifDiv' style='display:none'>";
                    foreach ($Alter as $Alters){echo $Alters;}
                echo "</div>";
                echo "<div class='kriterDiv' style='display:none'>";
                    foreach ($kriter as $kriters){echo $kriters;}
                echo "</div>";
                echo "<div class='kriterMaxMinDiv' style='display:none'>";
                    foreach ($kriterMaxMin as $kriterMaxMins){echo $kriterMaxMins;}
                echo "</div>";
            }
            else{
                header('Location: '."index.php");
            }
        ?>
    </div>
</div>
        