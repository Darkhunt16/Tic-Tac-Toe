let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true;

const winPatterns=[
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

let cnt=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="O";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        cnt+=1;
        checkWinner();
        checkDraw(cnt);
    });
});

const checkDraw=(count)=>{
    if(cnt==9){
        msg.innerHTML= `Game Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    }
}

const checkWinner=()=>{
    for(let pattern of winPatterns) {
        let pos1Val=boxes[pattern[0]].innerHTML;
        let pos2Val=boxes[pattern[1]].innerHTML;
        let pos3Val=boxes[pattern[2]].innerHTML;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner=(winner)=>{
    msg.innerHTML= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    cnt=0;
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
