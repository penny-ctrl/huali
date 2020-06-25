$("#footer").load("html/footer.html");

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
orange($(".menu ul a"));
orange($(".nav ul li"));
white($("#liebiao ul li"));
orange($("#warn li"));
orange($("#warn1 li"));
orange($("#cake #bj li"));
gray($(".adress ul li"));
gray($(".news .zixun .box ul a"));
white($(".right .you li"));

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

showlist($(".nav .ul1 a").eq(1), ".weixin");
showlist($(".nav .ul2 a").eq(4), ".kehufuwu");
showlist($(".nav .ul1 a").eq(2), ".app");
showlist($(".right .you li ").eq(0), ".user");

// ------------------------------------
$(function () {
  //导航列表
  $("#liebiao ul")
    .eq(2)
    .hover(
      function () {
        $(this).css({
          background: "pink",
        });
        $(".navlist").eq(0).show();
      },
      function () {
        $(this).css({
          background: "gray",
          opacity: "0.7",
        });
        $(".navlist").eq(0).hide();
      }
    );
  $("#liebiao ul")
    .eq(3)
    .hover(
      function () {
        $(this).css({
          background: "pink",
        });
        $(".navlist").eq(1).show();
      },
      function () {
        $(this).css({
          background: "gray",
          opacity: "0.7",
        });
        $(".navlist").eq(1).hide();
      }
    );
  $("#liebiao .present").hover(
    function () {
      $(this).css({
        background: "pink",
      });
      $(".navlist").eq(2).show();
    },
    function () {
      $(this).css({
        background: "gray",
        opacity: "0.7",
      });
      $(".navlist").eq(2).hide();
    }
  );

  // 右侧动画
  $(".right .you li").hover(
    function () {
      $(this).children().filter("p").show();
    },
    function () {
      $(this).children().filter("p").hide();
    }
  );
});
//-------------------------------------------------
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
big($(".content #cont li img"));
big($("#cakelist2 li #frog img"));
