
// это чтобы при нажатии на название появлялась картинрка
  $(document).ready(function(){
    $(".p12").click(function(){
      $(".picc12").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p4").click(function(){
      $(".picc4").toggleClass("show");
    });
  });
// чтобы при нажатии на кнопку назад, экран менялся на главный
$(document).ready(function(){
  $(".back1").click(function(){
    $(".container1").toggleClass("hide");
    $(".container0").toggleClass("hide");
  });
});
$(document).ready(function(){
  $(".back2").click(function(){
    $(".container2").toggleClass("hide");
    $(".container0").toggleClass("hide");
  });
});
$(document).ready(function(){
  $(".back3").click(function(){
    $(".container3").toggleClass("hide");
    $(".container0").toggleClass("hide");
  });
});
// рисовалька
function setup() {
  createCanvas(1700, 850);
  background(251, 244, 236);
}

function draw() {
  stroke(3, 21, 182);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
// чтобы при нажатии на овал открывалась первая штучка
$(document).ready(function(){
  $(".stroke1").click(function(){
    $(".container0").toggleClass("hide");
    $(".container2").toggleClass("hide");
  });
});
$(document).ready(function(){
  $(".realcl").click(function(){
    $(".container0").toggleClass("hide");
    $(".container3").toggleClass("hide");
  });
});
$(document).ready(function(){
  $(".cloudlast").click(function(){
    $(".container0").toggleClass("hide");
    $(".container1").toggleClass("hide");
  });
});


$(document).ready(function(){
  $(".finish").click(function(){
    $(".finpic").toggleClass("hide");
  });
});
// перетаскивание элементиков
$(function() {
	$(".dr").draggable();
});
// действия на скролл
$(window).scroll(function() {
  var r = $(window).scrollTop() % Math.PI;
  $('.star').css({ transform: 'rotate(' + r + 'rad)' });
  $('.c4').css({ transform: 'rotate(-' + r + 'rad)' });
});
// поялвение элементов при скроле
$(window).scroll(function() {
  var element = $('.textlitlle');
  var position = element.offset().top;
  var windowHeight = $(window).height();
  var scroll = $(window).scrollTop();

  if (scroll > position - windowHeight) {
    element.addClass('fade-in');
  }
});
// анимация для нижней штучки
// $('.re1').css({transform : 'scale('+ $resizerWidth +')'});
// 
// let a = 0.0;
// let s = 0.0;
//
// function setup() {
//   createCanvas(720, 400);
//   stroke(200);
//   rectMode(CENTER);
// }
//
// function draw() {
//
//   a = a + 0.04;
//   s = cos(a) * 2;
//
//   translate(width / 2, height / 2);
//   // scale(s);
//   // // fill(51);
//   // rect(0, 0, 50, 50);
//
//   translate(75, 0);
//   fill(255);
//   scale(s);
//   rect(0, 0, 300, 150);
// }
