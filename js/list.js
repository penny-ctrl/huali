$("#footer").load("../html/footer.html");
//字体变色
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
orange($(" .nav ul li a"));
white($(".right .you li"));
//............................................................
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
showlist($(".right .you li ").eq(0), ".user");
showlist($(" .nav .ul1 li ").eq(1), ".weixin");
showlist($(" .nav .ul2 li").eq(3), ".kehufuwu");
showlist($(" .nav .ul1 li").eq(2), ".app");
//...........................................................
$(function () {
  //右侧导航栏动画
  $(".right .you li").hover(
    function () {
      $(this).children().filter("p").show();
    },
    function () {
      $(this).children().filter("p").hide();
    }
  );
});
//-----------------------------------------
var username = JSON.parse(localStorage.getItem("logindata")).username;

$(".nav .ul2 .userhi a").html("Hi~" + username);
$.get(
  "http://jx.xuzhixiang.top/ap/api/productlist.php",
  {
    uid: 34532,
  },

  (data) => {
    console.log(data.data);
    var str = "";

    for (let i = 0; i < 20; i++) {
      str += `
      <a style="color:black;" href="./detail.html?id=${data.data[i].pid}">  <li>
        <div id="shopimg">
          <img
            style="width: 290px; height: 300px;"
            src="../${data.data[i].pimg}"
            alt=""
          />
        </div>
        <p id="name">
         ${data.data[i].pname}
        </p>
        <p id="price" style="color: coral; font-size: 14px;">￥${data.data[i].pprice}</p>
      </li>
  </a>
      `;
    }
    $("#shopdata").html(str);
    //放大函数
    function big(e) {
      e.hover(
        function () {
          $(this).css({
            transform: "scale(1.2)",
            transition: "2s",
          });
        },
        function () {
          $(this).css({
            transform: "scale(1)",
            transition: "0.5s",
          });
        }
      );
    }
    big($("#shopimg img"));
  }
);
//====================================
