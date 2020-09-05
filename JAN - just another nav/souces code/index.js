// 鼠标点击
$(".nav a").on("click", function () {
  var position = $(this).parent().position();   // 获取li相对于ul的偏移量
  var width = $(this).parent().width();
  $(".nav .slide1").css({
    opacity: 1,
    left: +position.left,
    width: width
  })
})

// 鼠标指针悬停
$(".nav a").on("mouseover", function () {
  var position = $(this).parent().position();
  var width = $(this).parent().width();
  $(".nav .slide2").css({
    opacity: 1,
    left: +position.left,
    width: width
  });
});

// 鼠标移除
$(".nav a").on("mouseout", function () {
  $(".nav .slide2").css({ opacity: 0 });
});

// 初始停留在第一个元素
window.onload = function(){
  var currentWidth = $(".nav").find("li:nth-of-type(1) a").parent("li").width();
  console.log(currentWidth)
  var current = $("li:nth-of-type(1) a").position();
  $(".nav .slide1").css({ left: +current.left, width: currentWidth });
}