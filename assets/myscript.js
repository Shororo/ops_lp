$(function(){




  $(function(){
    $('#subImg li').on('click',function(){
        //mainに切り替えるimgのsrc取得
        img = $(this).children('img').attr('src');
        //currentクラス付け替え
        $('#subImg li').removeClass('current');
        $(this).parent().addClass('current');
        //fadeOutできたらsrc変更してfadeIn
        $('#mainImg img').fadeOut(300, function() {
            $('#mainImg img').attr('src', img).on('load', function() {
                 $(this).fadeIn();
            })
       })
    });
});




//ヘッダー
//windowサイズが変化するごとにjQueryの動作を変更する判定
var timer = false;
var currentWidth = window.innerWidth;
$(window).resize(function() {
 if (currentWidth == window.innerWidth) {
        // ウインドウ横幅が変わっていないため処理をキャンセル。
        // safariでリロードされる現象を防ぐ
        return;
      }else if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        location.reload();
      }, 200);
    });

	//現在の画面サイズ
  var winW = $(window).width();
  //判定基準にしたい画面サイズ
  var devW = 1023;
  
  if (winW <= devW) {
    //720px以下の時の処理  
    $(document).on('click',function(e) {
     if(!$(e.target).closest('.navigation').length) {
     // ターゲット要素の外側をクリックした時の操作
     $(".nav-mobile").slideUp();
     $(".nav-cover").slideUp();
   } else {
     // ターゲット要素をクリックした時の操作
     $(".nav-mobile").slideToggle();
     $(".nav-cover").slideToggle();
   }
 });
	//スマホ用navここまで


  //スムーススクロール
    $(document).ready(function(){
  //URLのハッシュ値を取得
  var urlHash = location.hash;
  //ハッシュ値があればページ内スクロール
  if(urlHash) {
    //スクロールを0に戻す
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      //ロード時の処理を待ち、時間差でスクロール実行
      scrollToAnker(urlHash) ;
    }, 100);
  }
  //a要素をクリックしたら
    //notの中身はスクロールさせたくないaタグのidを打ち込んでね(classでも化)
  $('a[href^="#"]:not(#slide01, #slide02)').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    $(".nav-mobile").slideUp();
    $(".nav-cover").slideUp();
    var target = $(hash);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, 500);
  }
});

	
} else {
  //720pxより大きい時の処理
  
  	//navをheaderの中に入れる
  	$("nav").insertAfter(".nav-pc");

  }


  //スムーススクロール
    $(document).ready(function(){
  //URLのハッシュ値を取得
  var urlHash = location.hash;
  //ハッシュ値があればページ内スクロール
  if(urlHash) {
    //スクロールを0に戻す
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      //ロード時の処理を待ち、時間差でスクロール実行
      scrollToAnker(urlHash) ;
    }, 100);
  }
  //a要素をクリックしたら
  //notの中身はスクロールさせたくないaタグのidを打ち込んでね(classでも化)
  $('a[href^="#"]:not(#slide01, #slide02)').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, 500);
  }
});

  });