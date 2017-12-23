$(document).ready(
  $(function(){
    //初期値の文字色
    var d_color = 'lightgrey';
    //通常入力時の文字色
    var f_color = '#000000';
    $("#mail").val("");
    $("#name").val("お名前").css("color","#bfbfbf");
    $("#name").focus(function(){
      $("#name").val("");
    });
    $("#name").blur(function(){
      $("#name").val("お名前").css("color","#bfbfbf");
    });

    $('.red').hide();

    //チェックボックス
    $("input[type='checkbox']").click(function(){
      if ($("#check").prop('checked')) {
        $("#mail").prop("disabled",false);
        $("#mail").val("info@example.com").css("color","#bfbfbf");
        $("#mail").focus(function(){
          $(this).val("");
        });
        $("#mail").blur(function(){
          $(this).val("info@example.com").css("color","#bfbfbf");
        });
        //$("#mail").val("お名前").css("color","#bfbfbf");
      }else{
        $("#mail").prop('disabled',true);
        $("#mail").val("");
      }
    });

    //resetボタンを押したときの動作
    $("input[type='reset']").click(function(){
      $("#name").val("お名前").css("color","#bfbfbf");
      $("#mail").prop('disabled',true);
      $("#mail").val("");
      $('.red').hide();
      $('#name,#tel,#mail').css('border','1px solid #999');
    });


    //submitボタンを押したときの動作
    $("input[type='submit']").click(function(){
      //各エラー有無の判断フラグ
      let errorFlg = false;
      //名前の値の取得
      //電話番号の値を取得
      let inputedNum = $('#tel').val();
      //メールアドレスの値を取得
      let inputedMail = $('#mail').val();
      if($('#name').val("")) {
        $('#name').css("border","1px solid red");
        $('#red1').fadeIn("slow");
        $('#errorName').text("名前を入力してください");
        errorFlg = true;
      }

      if(inputedNum=="") {
        $('#tel').css("border","1px solid red");
        $('#red2').fadeIn("slow");
        $('#errorTel').text("電話番号を入力してください");
        errorFlg = true;
      }else if (!inputedNum.match(/^[0-9]{10,11}$/)) {
        $("#tel").css("border","1px solid red");
        $('#red2').fadeIn("slow");
        $("#errorTel").text("電話番号の形式が間違っております");
        errorFlg = true;
      }

      if ($('#check').prop('checked')) {
        if(inputedMail=="") {
          //$('#mail').css("border","1px solid red");
          $('#red3').fadeIn("slow");
          $('#errorMail').text("メールアドレスを入力してください");
          errorFlg = true;
        }else if (!inputedMail.match(/^[[0-9a-zA-Z_.-]+@[0-9a-zA-Z_.-]+$]/)) {
          $('#mail').css("border","1px solid red");
          $('#red3').fadeIn("slow");
          $("#errorMail").text("メールアドレスの形式が間違っております");
          errorFlg = true;
        }
      }
      //各項目のエラー有無
      if (errorFlg == false) {
        return true;
      }else{return false;}
    });




  })
);
