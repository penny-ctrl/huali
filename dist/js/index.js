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
//-------------------右侧购物车----------------
$(".loadcart").hover(
  function () {
    $(".haha").stop().slideDown();
  },
  function () {
    $(".haha").stop().slideUp();
  }
);
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
var username = JSON.parse(localStorage.getItem("logindata")).username;

$(".nav .ul2 .userhi li").html("Hi~" + username);

//====================

//添加商品信息;
// $.post(
//   "http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",
//   {
//     pimg: "img2/index10.jpg",
//     pname:
//       "韩式系列/亲爱的你--粉佳人玫瑰16枝、白和粉色洋桔梗各5枝、尤加利10枝、浅紫色小菊3枝、深粉色绣球1枝",
//     pprice: 188,
//     pdesc:
//       "Lanvin/浪凡 【FW19】19秋冬 女士休闲运动鞋 FW-SKDLON-NASU-H19【官方授权】",
//     uid: 34532,
//   },
//   (data) => {
//     console.log(data);
//   }
// );

$.get(
  "http://jx.xuzhixiang.top/ap/api/productlist.php",
  {
    uid: 34532,
  },

  (data) => {
    console.log(data.data);
    var str1 = "";
    var str2 = "";
    for (let i = 6; i < 14; i++) {
      str1 += `
        <li>
          <div class="over">
            <img src="${data.data[i].pimg}" alt="" />
          </div>
          
          <p id="cont1" style="font-size: 16px; font-weight: 600;">
            爱情|韩式系列/初心不负
          </p>
          <p id="cont2">￥226</p>
          <p id="cont3" style="color: gray;">已售 7.0 万件</p>
        </li>
      `;
    }
    $(".content #cont").html(str1);
    for (let j = 0; j < 5; j++) {
      str2 += `
      <li>
        <div id="frog">
          <img
            src="${data.data[j].pimg}"
            style="width: 200px; height: 200px;"
            alt=""
          />
        </div>

        <p id="c1">元祖蛋糕·青蛙来了</p>
        <p id="c2">￥198</p>
        <p id="c3">已售24件</p>
      </li>
      `;
    }
    $("#cakelist2").html(str2);

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
  }
);
