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

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click",function (){

    // 1-6 хүртэл санамсаргүй нэг тоог гаргаж авна
    var diceNumber = Math.floor(Math.random()*6)+1;

    // Шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.style.display="block";

    //Бусаан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.src = 'dice-' + diceNumber + '.png';

    //Буусан тоо нь нэгээс ялгаатай бол идэвхтэй тоглогчийн тоог нэмэгдүүлнэ, Тоглогчийн ээлжийн оноог өөрчлнө.
    if(diceNumber !==1){
        // 1- с ялгаатай тоо бууоаа.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }   else {
        // 1 буусан бол тоглогчийн ээлжийг энэ хэсэгт сольно

        // Энэ тоглогчийн ээлжин дээр цуглуулсан оноог 0 болгоно.
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0 ;
        // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийн 1 болго.

        // үгүй бол идэвхтэй тоглогчийг 0 болго

        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); 
        //Ингэж бас бичиж болно хураангуй

        // if(activePlayer === 0) {
        //     activePlayer =1;
        // }else{
        //     activePlayer = 0;
        // }
        
        // Улаан цэгийг шижлүүлэх
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //Шоог түр алга болгоно.
        diceDom.style.display = "none";

    }
});
