/*var i = document.getElementById("i").getAttribute("i");
console.log(i);

document.getElementById("plural").addEventListener("click",function{
    i=i+1
})
document.getElementById("substaction").addEventListener("click",function{
    i=i-1
})*/
// var btnplus = document.querySelector(".plural");
// var btnMoin = document.querySelector(".substaction");
// var qty = document.querySelector(".quantite");
// var total = document.querySelector("#Total");
// var prix = document.querySelector(".prix");
// var btndelete = document.querySelector(".delete");
// var btnlike = document.querySelector(".like");
// var main = document.querySelector("#main");

// btnplus.addEventListener("click", function () {
//   qty.innerText = parseFloat(qty.innerText) + 1;
//   total.innerText = parseFloat(total.innerText) + parseFloat(prix.innerText);
// });

// btnMoin.addEventListener("click", function () {
//   if (parseFloat(qty.innerText) > 0) {
//     (qty.innerText = parseFloat(qty.innerText) - 1),
//       (total.innerText =
//         parseFloat(total.innerText) - parseFloat(prix.innerText));
//   }
// });

// btnlike.addEventListener("click", function () {
//   if (btnlike.style.backgroundColor == "red") {
//     btnlike.style.backgroundColor = "";
//   } else {
//     btnlike.style.backgroundColor = "red";
//   }
// });

// btndelete.addEventListener("click", function () {
//   main.parentNode.removeChild(main);
// });

// var btnplus = document.querySelector("#plus");
// var btnMoin = document.querySelector("#moin");
// var btn1 = document.querySelector("#num1");
// var btn2 = document.querySelector("#num2");
// var btn3 = document.querySelector("#num3");
// var btn4 = document.querySelector("#num4");
// var btn5 = document.querySelector("#num5");
// var btn6 = document.querySelector("#num6");
// var btn7 = document.querySelector("#num7");
// var btn8 = document.querySelector("#num8");
// var btn9 = document.querySelector("#num9");
// var btn0 = document.querySelector("#num0");
// var btnmul = document.querySelector("#mul");
// var btncle = document.querySelector("#c");
// var btndev = document.querySelector("#dev");
// var btnequ = document.querySelector("#equ");
var total = document.querySelector(".screen");
var buttons = document.querySelectorAll(".button");
var isResult = false;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    var btn = e.target.innerText;

    if (total.innerText == "error") {
      total.innerText = "";
    }
    if (btn == "=") {
      try {
        var result = eval(total.innerText);
        total.innerText = result;
        isResult = true;
      } catch (error) {
        total.innerText = "error";
      }
    } else {
      if (btn == "c") {
        total.innerText = "";
      } else {
        if (isResult && !Number.isNaN(parseFloat(btn))) {
          total.innerText = btn;
        } else {
          total.innerText = total.innerText + btn;
        }
        isResult = false;
      }
    }
  });
}

// btnplus.addEventListener("click", function () {
//   total.innerText = total.innerText + btnplus.innerText;
// });
// btnMoin.addEventListener("click", function () {
//   total.innerText = total.innerText + btnMoin.innerText;
// });
// btnmul.addEventListener("click", function () {
//   total.innerText = total.innerText + btnmul.innerText;
// });
// btndev.addEventListener("click", function () {
//   total.innerText = total.innerText + btndev.innerText;
// });
// btn1.addEventListener("click", function () {
//   total.innerText = total.innerText + btn1.innerText;
// });
// btn2.addEventListener("click", function () {
//   total.innerText = total.innerText + btn2.innerText;
// });
// btn3.addEventListener("click", function () {
//   total.innerText = total.innerText + btn3.innerText;
// });
// btn4.addEventListener("click", function () {
//   total.innerText = total.innerText + btn4.innerText;
// });
// btn5.addEventListener("click", function () {
//   total.innerText = total.innerText + btn5.innerText;
// });
// btn6.addEventListener("click", function () {
//   total.innerText = total.innerText + btn6.innerText;
// });
// btn7.addEventListener("click", function () {
//   total.innerText = total.innerText + btn7.innerText;
// });
// btn8.addEventListener("click", function () {
//   total.innerText = total.innerText + btn8.innerText;
// });
// btn9.addEventListener("click", function () {
//   total.innerText = total.innerText + btn9.innerText;
// });
// btn0.addEventListener("click", function () {
//   total.innerText = total.innerText + btn0.innerText;
// });
// btncle.addEventListener("click", function () {
//   total.innerText = "";
// });
// btnequ.addEventListener("click", function () {
//   try {
//     var result = eval(total.innerText);
//     total.innerText = result;
//   } catch (error) {
//     total.innerText = "error";
//   }
// });
