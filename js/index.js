$("#footer").load("html/footer.html");
$(function () {
  $(".nav ul li ").hover(
    function () {
      $(this).css("color", "orange");
      // over
      console.log($(this));
    },
    function () {
      $(this).css("color", "black");
      // out
    }
  );
});
