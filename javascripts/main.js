
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
    $(".container1").toggleClass("hide");
    $(".container0").toggleClass("hide");
  });
});
// рисовалька
function setup() {
  createCanvas(1220, 550);
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
  $(".cloudlast").click(function(){
    $(".container0").toggleClass("hide");
    $(".container1").toggleClass("hide");
  });
});
// $(document).ready(function(){
//   $(".cloudlast").click(function(){
//     $(".container0").toggleClass("hide");
//     $(".container2").toggleClass("hide");
//   });
// });
