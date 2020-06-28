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
    },
    function () {
      $(d).hide();
    }
  );
}

showlist($(".nav .ul1 li").eq(1), ".weixin");
showlist($(".nav .ul2 li").eq(3), ".kehufuwu");
showlist($(".nav .ul1 li").eq(2), ".app");
//...........................................................
var userId = JSON.parse(localStorage.getItem("logindata")).id;
$.get(
  "http://jx.xuzhixiang.top/ap/api/cart-list.php",
  {
    id: userId,
  },
  (data) => {
    console.log(data);
    var str = "";
    for (let i = 0; i < data.data.length; i++) {
      str += `
       <li>
        <input class="checkbox" type="checkbox" />
        <img src="../${data.data[i].pimg}" alt="" />
        <span id="msg">[鲜花]一心一意一玫瑰11枝，粉色勿忘我0.3扎</span>
        <p id="price">￥${data.data[i].pprice}</p>
        <span class="minus">-</span><input type="text" class="num" value="${data.data[i].pnum}" /><span class="plus">+</span>
        <span class="del" data-pid="${data.data[i].pid}">删除</span>
      </li>
      `;
    }
    $(".cartlist").html(str);
    //--------------------------

    //删除

    $(".del").click(function () {
      alert("确定要删除吗？");
      $.get(
        "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
        {
          uid: userId,
          pid: $(this).attr("data-pid"),
        },
        (data) => {
          console.log(data);
          if (data.msg == "删除成功") {
            alert("删除成功！");
            window.location.reload();
          }
        }
      );
    });

    var totalPrice = 0;
    var cartdata = data.data;
    var aCks = $(".checkbox");
    //---------------不全选
    for (let i = 0; i < aCks.length; i++) {
      aCks.eq(i).click(function () {
        var count = 0;
        for (let j = 0; j < aCks.length; j++) {
          if (aCks.eq(j).prop("checked")) {
            count++;
          }
        }
        if (count == aCks.length) {
          $("#checkall").prop("checked", true);
        } else {
          $("#checkall").prop("checked", false);
        }
      });
    }
    //----------------------------------
    $("#checkall").click(function () {
      totalPrice = 0;
      if ($("#checkall").prop("checked")) {
        for (let i = 0; i < aCks.length; i++) {
          aCks.eq(i).prop("checked", $("#checkall").prop("checked"));
          totalPrice += cartdata[i].pnum * cartdata[i].pprice;
        }
        $("#totalprice").html("￥" + totalPrice);
      } else {
        totalPrice = 0;
      }
    });
    $(".checkbox").click(function () {
      totalPrice = 0;
      for (let j = 0; j < cartdata.length; j++) {
        console.log(aCks.eq(j).prop("checked"));
        if (aCks.eq(j).prop("checked")) {
          // console.log(data.data[j].pnum);
          totalPrice += cartdata[j].pnum * cartdata[j].pprice;
        }
      }
      console.log(totalPrice);
      $("#totalprice").html("￥" + totalPrice);
    });

    //------------------数量加减-----------------------
    //减
    $(".minus").click(function () {
      var num = Number($(this).next().val());
      if (num > 1) {
        num--;
        // totalPrice -= Number($(this).siblings("#price"))
      } else {
        num = 1;
      }
      $(this).next().val(num);

      //----更新数据

      $.get(
        "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
        {
          uid: userId,
          pid: $(this).siblings(".del").attr("data-pid"),
          pnum: $(this).siblings(".num").val(),
        },
        (data) => {
          console.log(data);
        }
      );
    });
    //加
    $(".plus").click(function () {
      var num = Number($(this).siblings(".num").val());
      num++;
      $(this).siblings(".num").val(num);
      //-----更新
      $.get(
        "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
        {
          uid: userId,
          pid: $(this).siblings(".del").attr("data-pid"),
          pnum: $(this).siblings(".num").val(),
        },
        (data) => {
          console.log(data);
        }
      );
    });
  }
);

//------------------------------
