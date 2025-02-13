//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0ь хоёрдугаар тоглогчийг 1 гэж нэрлэе.
var activePlayer = 0;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог түр хадгалах хувьсагч 
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн хувьсагчид санамсаргүйгээ үүсгэнэ.
var diceNumber = Math.floor(Math.random()*6)+1;
//<div class="player-score" id="score-0">43</div>
//window.document.querySelector('#score-0').textContent = dice;
//console.log('шоо '+dice)
//document.querySelector('#score-1').innerHTML = "<em>Yes</em>";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";


var diceDom = document.querySelector(".dice");
diceDom.style.display="none";
document.querySelector(".btn-roll").addEventListener("click",function (){
    var diceNumber = Math.floor(Math.random()*6)+1;
    diceDom.style.display="block";
    diceDom.src = 'dice-' + diceNumber + '.png';
});
