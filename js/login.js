function orange(a) {
  a.mouseenter(function () {
    $(this).css({ color: "orange" });
  });
  a.mouseleave(function () {
    $(this).css({ color: "black" });
  });
}
function white(b) {
  b.mouseenter(function () {
    $(this).css({ color: "orange" });
  });
  b.mouseleave(function () {
    $(this).css({ color: "white" });
  });
}
function gray(f) {
  f.mouseenter(function () {
    $(this).css({ color: "orange" });
  });
  f.mouseleave(function () {
    $(this).css({ color: "gray" });
  });
}
white($(".menu ul a"));
orange($(".nav ul li a"));
// ============
//showlist
function showlist(c, d) {
  c.hover(
    function () {
      $(d).show();
      console.log(111);
    },
    function () {
      $(d).hide();
    }
  );
}

showlist($(".nav .ul1 li").eq(1), ".weixin");
showlist($(".nav .ul2 li").eq(3), ".kehufuwu");
showlist($(".nav .ul1 li").eq(2), ".app");
//----------------------------------------------
$(function () {
  $(".log a").click(function () {
    //登录
    $.get(
      "http://jx.xuzhixiang.top/ap/api/login.php",
      {
        username: $(".inp1 input").val(),
        password: $(".inp2 input").val(),
      },
      (data) => {
        console.log(data);
        if (data.code == 0) {
          alert("用户名或密码错误");
        }
        if (data.code == 1) {
          var logindata = {};
          logindata.id = data.data.id;
          logindata.password = data.data.password;
          logindata.username = data.data.username;
          logindata.token = data.data.token;
          console.log(logindata);

          localStorage.setItem("logindata", JSON.stringify(logindata));
          console.log(localStorage.getItem("logindata"));
          window.location = "../index.html";
        }
      }
    );
  });
});
