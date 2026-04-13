
let start = document.querySelector('.start');
let lvl = document.querySelector('.lvl');
let seconds = document.querySelector('.seconds');
let input = document.querySelector('.input');
let upcomingWords = document.querySelector('.upcoming-words');
let theword = document.querySelector('.the-word');
let time = document.querySelector('.time span');
let score = document.querySelector('.score .got');
let totel = document.querySelector('.score .total');
let finish = document.querySelector('.finish');
let words = [
    'verbs',
    'analtze',
    'solve',
    'improve',
    'develop',
    'suggest',
    'avoid',
    'manage',
    'increase',
    'nouns',
    'decision',
    'ecperience',
    'edication',
    'environment',
    'technology',
    'opportunity',
    'solution',
    'responsiblity',
    'adjectives',
    'confident',
    'independent',
    'respondible',
    'effective',
    'creative',
    'advanced'
]
 let levl = {
    'Easy':8,
    'normal': 6,
    'hard':4 }



 let divoltlvlname = 'Easy';
 let divoltlvlscand = levl[divoltlvlname]

 lvl.innerHTML = divoltlvlname;
 seconds.innerHTML = divoltlvlscand;
 time.innerHTML = divoltlvlscand;
 totel.innerHTML = words.length;
 

 input.onpaste = function(){
    return false
 }
 start.onclick = function(){
    this.remove();
    input.focus();
    gamewords()
 }
 function gamewords() {
    let redamword = words[Math.floor(Math.random() * words.length)];

    let wordsindex = words.indexOf(redamword);
    words.splice(wordsindex, 1)
    theword.innerHTML = redamword;
    upcomingWords.innerHTML = "";
    //grat upcoingwordsilmant
    for(let i = 0; i < words.length; i++){
        let div = document.createElement('div');
        let text = document.createTextNode(words[i]);
        div.appendChild(text);
        upcomingWords.appendChild(div);

    }
    startspaly()
 }
 function startspaly(){
    time.innerHTML = divoltlvlscand;
    let starts = setInterval(() =>{
 time.innerHTML--; 
 if(time.innerHTML === "0"){
    clearInterval(starts)
 if(theword.innerHTML.toLowerCase() === input.value.toLowerCase()){
    input.value = ""
    score.innerHTML++;
    let win = document.querySelector('.win').play();

    if(words.length > 0){

    gamewords()

    }else{
    let samespan = document.createElement("span");
    samespan.classList = "good";
    let sametext = document.createTextNode('you winer');
    samespan.appendChild(sametext);
    finish.appendChild(samespan);
    
    }
 }else{
    let samespan = document.createElement("span");
    samespan.classList = "bad";
    let sametext = document.createTextNode('you lose');
    samespan.appendChild(sametext);
    finish.appendChild(samespan);
    let los = document.querySelector('.los').play();
 }
 }
    },1000 )
 }
