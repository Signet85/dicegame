
// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагчийг энд зарлах
//Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;

//Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална.
var activePlayer;

//Хоёр тоглогчийн цуцлуулсан оноо
var scores;

//Идэвхтэй тоглогчийн цуглуулж байгаа элжийн оноо
var roundScore;

//Шооны зургийг хайж олоод diceDom хадгалах
var diceDom = document.querySelector(".dice");

//Тоглоомыг эхлүүллээ
initGame();

// Тоглоомыг шинээр эхлүүлэх функц
function initGame(){
    // Тоглоом эхэллэ гэдэг төлөвт оруулна.
isNewGame = true;

    //Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0ь хоёрдугаар тоглогчийг 1 гэж нэрлэе.
activePlayer = 0;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог түр хадгалах хувьсагч 
roundScore = 0;

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
diceDom.style.display="none";

//Тоглогчдын нэрийг буцааж гаргах
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove("winner");
document.querySelector('.player-1-panel').classList.remove("winner");
document.querySelector('.player-0-panel').classList.remove("active");
document.querySelector('.player-1-panel').classList.remove("active");
document.querySelector('.player-0-panel').classList.add("active");

}

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click",function (){
    if(isNewGame === true){

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
        switchToNextPlayer();

    }
}});

// HOLD товчны эвэнт листенер
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нь нэмж өгнө.
    // if(activePlayer === 0){
    //     scores[0] = scores[0] + roundScore;
    // } else{
    //     scores[1] = scores[1] + roundScore;
    // }
    
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //Дэлгэц дээр оноог нь өөрчлөнө
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    //Уг тоглогч хожсон эсэхийг шалгах
    if(scores[activePlayer] >= 100){
        //Тоглоомыг дууссан төлөвт оруулна
        isNewGame=false;
        // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
        document.getElementById("name-" + activePlayer).textContent="Winner";
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    } else {
        switchToNextPlayer();
    }

    //ээлжийн оноог нь 0 болгоно.
    roundScore = 0;
    document.getElementById('current-'+activePlayer).textContent = 0;
    // Тоглогчийн ээлжийг солих.
  

})

//Энэ функц нв тоглогчийн ээлжийг дараачийн ээлжрүү шилжүүлнэ.
function switchToNextPlayer(){
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0 ;
    // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийн 1 болго.
    // үгүй бол идэвхтэй тоглогчийг 0 болго
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); 
    //Ингэж бас бичиж болно хураангуй

         
    // Улаан цэгийг шижлүүлэх
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Шоог түр алга болгоно.
    diceDom.style.display = "none";
}

//Шинэ тоглоом эхлүүлэх товчний эвэнт листенер
document.querySelector('.btn-new').addEventListener('click', initGame);