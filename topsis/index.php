<?php 
require_once("settings/securityfunction.php");
require_once("settings/pages.php");
if (isset($_REQUEST["pageNumber"])) {
    $sayfakodudegeri = rakamHaricSil(guvenlikKodu($_REQUEST["pageNumber"]));
}else
{
    $sayfakodudegeri = 0;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Topsis Proje</title>
    <link rel="stylesheet" href="css/karaMatrisOlusturma.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/font-Size.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" /></head>
    <script src="./node_modules/alertifyjs/build/alertify.min.js"></script>
    <link rel="stylesheet" href="./node_modules/alertifyjs/build/css/alertify.min.css"/>
<body>

    <header>
        <div class="container">
            <ul class="navList">
                <li class="font22 white-color"><stronng class="yellow-color">Emre</stronng>Demir</li>
                <li class="navbuttons">
                    <ul class="navList2">
                        <a href="?pageNumber=0" rel="noopener noreferrer">
                            <li class="topsis">Topsis</li>
                        </a>
                        <li class="agirlik" onclick='alertify.warning("Bu Özellik Aktif Değildir!! Eklenecek");'>Kriter Ağırlığı</li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>

    <main>
    <?php
        if ((!$sayfakodudegeri) or ($sayfakodudegeri =="") or ($sayfakodudegeri== 0)) {
            include($pageNumber[0]);
        }else{
            include($pageNumber[$sayfakodudegeri]);
        }
    ?>
    </main>
    <section class="container" id="tablearea">
    </section>
    <footer>
        <div class="container">
            <ul class="navList">
                <li class="font10 white-color">© 2022 Tüm hakkları saklıdır.</li>
            </ul>
        </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="js/postDegerleri.js"></script>
    <script src="js/CreateTable.js"></script>
    <script src="js/hesaplama.js"></script>
    <script src="js/SortAndMerge.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
