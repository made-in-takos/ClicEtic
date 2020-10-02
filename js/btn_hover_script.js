var btn_appelle_off = "img/btn_appelle.png";
var btn_appelle_on = "img/btn_appelle_on.png";
var btn_info_off = "img/btn_info.png";
var btn_info_on = "img/btn_info_on.png";
var btn_commande_off = "img/btn_commande_off.png";
var btn_commande_on = "img/btn_commande_on.png";
var btn_articles_off = "img/btn_articles_off.png";
var btn_articles_on = "img/btn_articles_on.png";

var images_appelle = document.querySelector('.btn_appelle_header');
var images_info = document.querySelector('.btn_info_header');
var images_commande = document.querySelector('.btn_commande');
var images_articles = document.querySelector('.btn_articles');

images_appelle.src = btn_appelle_off;
images_appelle.addEventListener('mouseenter', function() {
  images_appelle.src = btn_appelle_on;
});
images_appelle.addEventListener('mouseout', function() {
  images_appelle.src = btn_appelle_off;
});

images_info.src = btn_info_off;
images_info.addEventListener('mouseenter', function() {
  images_info.src = btn_info_on;
});
images_info.addEventListener('mouseout', function() {
  images_info.src = btn_info_off;
});

images_commande.src = btn_commande_off;
images_commande.addEventListener('mouseenter', function() {
  images_commande.src = btn_commande_on;
});
images_commande.addEventListener('mouseout', function() {
  images_commande.src = btn_commande_off;
});

images_articles.src = btn_articles_off;
images_articles.addEventListener('mouseenter', function() {
  images_articles.src = btn_articles_on;
});
images_articles.addEventListener('mouseout', function() {
  images_articles.src = btn_articles_off;
});

/*************************************************************/
/*************************START GIF HOVER*********************/
/*************************************************************/
$(document).ready(function(){
  $("#comment01").hover(
    function(){
      $(this).attr("src", "img/comment01.gif");
    },
    function(){
      $(this).attr("src", "img/comment01_img.png");
    }
  );
  $("#comment02").hover(
    function(){
      $(this).attr("src", "img/comment02.gif");
    },
    function(){
      $(this).attr("src", "img/comment02_img.png");
    }
  );
  $("#comment03").hover(
    function(){
      $(this).attr("src", "img/comment03.gif");
    },
    function(){
      $(this).attr("src", "img/comment03_img.png");
    }
  );
  $("#comment04").hover(
    function(){
      $(this).attr("src", "img/comment04.gif");
    },
    function(){
      $(this).attr("src", "img/comment04_img.png");
    }
  );
  $("#comment05").hover(
    function(){
      $(this).attr("src", "img/comment05.gif");
    },
    function(){
      $(this).attr("src", "img/comment05_img.png");
    }
  );
});
/*************************************************************/
/*************************END GIF HOVER***********************/
/*************************************************************/
