<?php 
function rakamHaricSil($deger){
    $islem = preg_replace("/[^0-9]/","",$deger);
    $sonuc = $islem;
    return $sonuc;
}
function guvenlikKodu($deger){
    $bosluksil  = trim($deger);
    $taglarisil = strip_tags($bosluksil);
    // $etkisizyap = htmlspecialchars($taglarisil, ENT_QUOTES,"<h4></h4>");
    $sonuc      = $taglarisil;
    return $sonuc;
}