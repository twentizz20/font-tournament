var i = 0;
var list = [
  "firacode",
  "d2coding",
  "hack",
  "jetbrainsmono",
  "ubuntumono",
  "ibmplexmono",
  "anonymouspro",
  "sourcecodepro",
  //   1: { name: "firacode" },
  //   2: { name: "d2coding" },
  //   3: { name: "hack" },
  //   4: { name: "jetbrainsmono" },
  //   5: { name: "ubuntumono" },
  //   6: { name: "ibmplexmono" },
  //   7: { name: "anonymouspro" },
  //   8: { name: "sourcecodepro" },
];

var i = 0;
var j = 0;
var k = 0;

var fontarr8 = [];
while (fontarr8.length < 8) {
  var num = parseInt(Math.random() * 8);
  if (fontarr8.indexOf(num) == -1) {
    fontarr8.push(num);
  }
  console.log(fontarr8);
}

var fontarr4 = [];
// while (fontarr4.length < 4) {
//   var num = parseInt(Math.random() * 4);
//   if (fontarr4.indexOf(num) == -1) {
//     fontarr4.push(num);
//   }
//   console.log(fontarr4);
// }

var fontarr2 = [];
// while (fontarr2.length < 2) {
//   var num = parseInt(Math.random() * 2);
//   if (fontarr2.indexOf(num) == -1) {
//     fontarr2.push(num);
//   }
//   console.log(fontarr2);
// }
//시작버튼 눌렀을 때 실행
function start() {
  $(".startWrapper").hide();
  $(".end").hide();
  $(".tournament").show();
  next();
}
function end() {
  $(".tournament").hide();
  $(".startWrapper").hide();
  $(".end").show();

  i = 0;
  // next();
}
function gotostart() {
  $(".tournament").hide();
  $(".end").hide();
  $(".startWrapper").show();
}

//다음 페이지 구성
function next() {
  //   var fontarr = [];
  //   while (fontarr.length < 8) {
  //     var num = parseInt(Math.random() * 8);
  //     if (fontarr.indexOf(num) == -1) {
  //       fontarr.push(num);
  //     }
  //     console.log(fontarr);
  //   }

  //랜덤+1을 하면 1부터 시작하므로 마지막번호가 없어서 에러가 난다.
  //   document.write(fontarr);
  //   console.log(list[fontarr[0]]);
  //   console.log(list[fontarr[1]]);
  //   console.log(list[fontarr[6]]);
  //   console.log(list[fontarr[7]]);

  // do {

  // } while (i < 9);
  // if (i >= 9) {
  // } else {
  // var a = " " + list[i]["name"];
  // document.getElementById("left").className = list[1]["name"];
  //   $(".fontName").attr("class", list[i]["name"]);
  //   fontarr.pop();
  // i++;
  // alert(i);
  // console.log(
  //   i + (document.getElementById("right").className = list[fontarr[i]])
  // );
  //console.log(list[fontarr[i]]);
  // document.getElementById("left").className = list[fontarr[i]];
  // console.log(list[fontarr[i]]);
  // i = i + 1;
  // document.getElementById("right").className = list[fontarr[i]];
  // console.log(list[fontarr[i]]);
  // i = i + 1;
  //className = list[4]["name"];
  //   $("#right").attr("fontName", list[i]["name"]);
  // i++;
  if (i > 14) {
    end();
  } else if (i > 12) {
    tour2();
  } else if (i > 8) {
    tour4();
  } else {
    tour8();
  }
  console.log(i);

  //break;
  //   $("div").attr("class", list[num]["name"]);
  // }
}
function clickDirection() {}

function tour8() {
  document.getElementById("left").className = list[fontarr8[i]];
  console.log(list[fontarr8[i]]);
  fontarr4.push(fontarr8[i]);
  i = i + 1;
  document.getElementById("right").className = list[fontarr8[i]];
  console.log(list[fontarr8[i]]);
  i = i + 1;
  console.log(fontarr4);
}

function tour4() {
  console.log(fontarr4);
  document.getElementById("left").className = list[fontarr4[j]];
  console.log(list[fontarr4[i]]);
  i = i + 1;
  j = j + 1;
  document.getElementById("right").className = list[fontarr4[j]];
  console.log(list[fontarr4[i]]);
  i = i + 1;
  j = j + 1;
}

function tour2() {
  document.getElementById("left").className = list[fontarr2[k]];
  console.log(list[fontarr2[i]]);
  i = i + 1;
  document.getElementById("right").className = list[fontarr2[k]];
  console.log(list[fontarr2[i]]);
  i = i + 1;
}

//선택 버튼 눌렀을 때 실행
function btnclick() {
  next();
}

function btnclickleft() {
  next();
}

function btnclickright() {
  next();
}

// var result = {
//   firacode: { name: font },
//   d2coding: { name: font },
//   hack: { name: font },
//   jetbarinsmono: { name: font },
//   ubuntumono: { name: font },
//   ibmplexmono: { name: font },
//   sourcecodepro: { name: font },
//   anonymouspro: { name: font },
//   fontName: { name: font },
// };

//랜덤배열생성
//에러 random개수가 length보다 적어서 함수가 안끝나서 무한로딩

// $("cardButtonRight");
