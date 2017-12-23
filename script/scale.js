//windowの高さを取得
$(document).ready(function(){
    //画面の高さを取得して、変数wHに代入
    var wH = $(window).height();
    //画面の幅を取得して、変数wHに代入
    var ww = $(window).width();
    //#wrapperの高さ
    var wrH = $('#wrapper').height();
    //ヘッダーの高さを取得
    var hh = $('header').height();
    //アーティクルの高さを取得
    var ah = $('article').height();
    //#contentsの高さを取得
    var ch = $('#contents').height();
    //フッターの高さを取得
    var fh = $('footer').height();
    //ヘッダーとアーティクルの高さ
    var hah = hh + ah;
    var fp = wH - 140;
    $('footer').offset();
    $("button").click(function(){
    	var test = $('body').offset();
      console.log(ch);
    })

    //div#exampleの高さを取得を取得して、変数divHに代入
    //var divH = $('div#example').innerHeight();
    //console.log(wH);
    // ボックス要素より画面サイズが大きければ実行
    /*if(wH > divH){
    	// div#examplに高さを加える
    	$('div#example').css('height',wH+'px');
    }*/
});
/*
$(window).load(function(){
  //画面の高さを取得して、変数wHに代入
  var wH = $(window).height();
  console.log(wH);
});
*/
