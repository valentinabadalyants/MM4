
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
  $(document).ready(function(){
    $(".p1").click(function(){
      $(".picc1").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p14").click(function(){
      $(".picc14").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p2").click(function(){
      $(".picc2").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p3").click(function(){
      $(".picc3").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p17").click(function(){
      $(".picc17").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p6").click(function(){
      $(".picc6").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p7").click(function(){
      $(".picc7").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p8").click(function(){
      $(".picc8").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p9").click(function(){
      $(".picc9").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p10").click(function(){
      $(".picc10").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p11").click(function(){
      $(".picc11").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p13").click(function(){
      $(".picc13").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p15").click(function(){
      $(".picc15").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p16").click(function(){
      $(".picc16").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p18").click(function(){
      $(".picc18").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p19").click(function(){
      $(".picc19").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p20").click(function(){
      $(".picc20").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p21").click(function(){
      $(".picc21").toggleClass("show");
    });
  });
  $(document).ready(function(){
    $(".p22").click(function(){
      $(".picc22").toggleClass("show");
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
