let h1=document.querySelector("h1");
h1.innerHTML="hello <b>baccho<b>";
let chessboard=document.querySelector(".chessBox");
let firstrow=`<div class="box"></div>`.repeat(8);
let secrow=`<div class="boxrev"></div>`.repeat(8);
let completerow=(firstrow+secrow).repeat(4);

chessboard.innerHTML=completerow;

