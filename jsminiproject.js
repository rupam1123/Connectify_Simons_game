let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let gameseq = [];
let userseq = [];
let level = 0;
let started = false;

let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", () => {
  if (started == false) {
    //Omitted code here
    started = true;
    levelUp();
    //Write your code here
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    //Omitted code here
    btn.classList.remove("flash");
    //Write your code here
  }, 400);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    //Omitted code here
    btn.classList.remove("userflash");
    //Write your code here
  }, 300);
}

function levelUp() {
  //Omitted code here
  //level++;
  //Write your code here
  h3.innerText = `Level = ${level}`;
  // random button choose
  let randInx = Math.floor(Math.random() * 4);
  let randColor = btns[randInx];
  let randbtn = document.querySelector(`.${randColor}`);

  //Omitted code here
  userseq = [];
  gameseq.push(randColor);
  let i = 0;
  //console.log(randbtn);
  const interval = setInterval(() => {
    gameFlash(document.querySelector(`.${gameseq[i]}`));
    i++;
    if (i >= gameseq.length) {
      clearInterval(interval);
    }
  }, 1000);
  //Write your code here
}

function checkAns(idx) {
       // idx=level-1;

  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      //Omitted code here
      setTimeout(levelUp,1000);
      
      //Write your code here
      level++;
    }
   // console.log("correct");
  } else {
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);

    h3.innerHTML = `Game Over ! Your score was <b>${level}</b><br> Press any key to start again`;
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(this);
  let userColor = this.classList[1];
  userseq.push(userColor);
  checkAns(userseq.length-1);
  // console.log(userColor);

  //console.log(gameseq);
  //Omitted code here
  //Write your code hereg
}
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  //Omitted code here
  btn.addEventListener("click", btnPress
    // (e) => {
    // console.log(e.srcElement.classList[1]);
    // const player_resp = e.target.id;
    // userseq.push(e.srcElement.classList[1]);
    // userFlash(e.target);

  // }
  );
  //Write your code here
}

function reset() {
  //Omitted code here
  level=0;
  started=false;
  userseq=[];
  gameseq=[];
  
  //Write your code here
}
