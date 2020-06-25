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
orange($(".nav ul li a"));
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
showlist($(".nav .ul1 li").eq(1), ".weixin");
showlist($(".nav .ul2 li").eq(3), ".kehufuwu");
showlist($(".nav .ul1 li").eq(2), ".app");
//...........................................................
$(function () {
  var small = $(".box #image .small").find("p");
  var big = $(".box #image .big").find("img");
  $(".box #image .small p ").mouseenter(function () {
    small.attr("class", "");
    big.css("display", "none");
    $(this).attr("class", "active");
    big.eq($(this).index()).css("display", "block");
  });
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
