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

//-------------------------------------
var id = Number(location.search.split("=")[1]);
console.log(id);

$.get("http://jx.xuzhixiang.top/ap/api/detail.php", { id }, function (data) {
  var detail = data.data;
  var str = "";

  str += `
   <div id="image">
        <div class="big">
          <img src="../${detail.pimg}" alt="" />
          <img src="../img/detail2.jpg" alt="" />
          <img src="../img/detail3.jpg" alt="" />
          <img src="../img/detail4.jpg" alt="" />
        </div>
        <div class="small">
          <p>
            <img src="../${detail.pimg}" alt="" />
          </p>
          <p><img src="../img/detail2.jpg" alt="" /></p>
          <p><img src="../img/detail3.jpg" alt="" /></p>
          <p><img src="../img/detail4.jpg" alt="" /></p>
        </div>
      </div>
      <div class="msg1">
        <p>${detail.pname}</p>
        <p style="color: orangered;">父亲节倾情设计，8折特惠</p>
        <p style="font-size: 10px;">已售 2690 件</p>
      </div>
      <div class="msg2">
        <br />
        <p>
          类 别： 鲜花 编 号：9012440 <br />材 料：
          香槟玫瑰9枝、蓝绣球1枝、向日葵3枝、白色洋桔梗5枝、大叶尤加利5枝！<br />
          包 装：
          蓝色人造纸5张、褐绿色OPP膜书法纸3张、香槟缎带1.5米、灰蓝色罗纹烫金丝带1.5米
          <br />
          花 语： 你如璀璨的星河，于苍穹之中，焕发光芒，闪耀着我的人生。
          <br />附 送： 下单填写留言，即免费赠送精美贺卡！<br />
          配 送：
          限送100多个主要城市的市区及近郊：北京,上海,深圳,广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州
        </p>
        <br />
        <p>
          <span>配送至 ：</span> &nbsp;&nbsp; &nbsp;&nbsp;<span
            style="color: orangered;"
            >请选择</span
          >
        </p>
        <br />
        <br />
        <p>
          <span>说明 </span> &nbsp;&nbsp; &nbsp;&nbsp;<span
            style="color: orangered;"
            >父亲节暨618年中促销，特价8折</span
          >
        </p>
      </div>

      <div class="msg3">
        <p class="market">市场价 : ￥376</p>

        <p style="margin-top: 12px;">
          花礼价： <span style="color: orangered;">￥${detail.pprice}</span>
        </p>

        <p style="background-color: #eee; margin-bottom: 12px;">
          <span style="font-size: 12px;">促销信息：</span
          ><span style="color: orangered;">￥227</span
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style="font-size: 12px;"
            ><i class="iconfont icon-ico"></i>去手机APP购买</span
          >&nbsp;&nbsp;&nbsp;&nbsp;
          <span style="font-size: 12px;"
            ><i class="iconfont icon-ico"></i>去微信购买</span
          >
        </p>
        <a class="cart" href="./cart.html">
          加入购物车
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <a
          class="cart"
          href="./cart.html"
          style="color: white; background-color: orangered;"
        >
          立即购买
        </a>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#" style="font-size: 12px; color: black;">
          <span><i style="color: peru;" class="iconfont icon-xinheart118"></i
            >收藏</span>
        </a>
      </div>
  `;

  $(".box").html(str);
  //-------------------------------
  //选项卡
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
  var userId = JSON.parse(localStorage.getItem("logindata")).id;
  $(".cart").click(function () {
    $.get(
      "http://jx.xuzhixiang.top/ap/api/add-product.php",
      {
        uid: userId,
        pid: detail.pid,
        pnum: 1,
      },
      (data) => {
        console.log(data);
        if (data.msg == "修改成功") {
          alert("已加入购物车");
        }
      }
    );
  });
});
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
