$(function () {
  $(".resign").click(function () {
    //注册
    $.get(
      "http://jx.xuzhixiang.top/ap/api/reg.php",
      {
        username: $(".inp1 input").val(),
        password: $(".inp3 input").val(),
      },
      function (data) {
        if (data.code == 0) {
          alert("用户名已存在");
        }
        if (data.code == 1) {
          alert("注册成功！");
          window.location.href = "login.html";
        }
      }
    );
  });
});
