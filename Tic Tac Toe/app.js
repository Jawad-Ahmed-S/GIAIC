let boxes = document.querySelectorAll(".btn")
let reset = document.querySelector("#Reset")
let newGame = document.querySelector("#new-game")
let winner = boxes.innerText
let turn0 =true;


function resetGame(){
    for(box of boxes){
        box.innerText = "";
        turn0 =true;
        box.disabled=false;
    }
      document.querySelector("#msg").innerText ="Play the Game";
    document.querySelector(".msg").style.backgroundColor = ' rgb(243, 0, 0)';
}
reset.addEventListener("click",()=>{
    resetGame();
})
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const CompGuess= ()=>{
    let choices= ["X","O"];
    
}
boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        if(turn0 ===true){
            box.innerText = "O";
            turn0=false;
        }
        
        else{

            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true
        checkWinner();
    })
}
)





const checkWinner =()=> {
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        const disable = ()=>{
            for(box of boxes){
                        box.disabled = true;
                    }
                }
        
            let pst1=boxes[pattern[0]].innerText;
            let pst2=boxes[pattern[1]].innerText;
            let pst3=boxes[pattern[2]].innerText;
         
            if(pst1!="" &&pst2!="" &&pst3!="" ){

                if(pst1==pst2 &&pst2==pst3){
                 document.querySelector("#msg").innerText = `${pst1} won the match`;
                 document.querySelector(".msg").style.backgroundColor = "blue";
                 disable();
                 function NEWGame(){
           resetGame();}
        newGame.addEventListener("click",()=>{
            NEWGame();
        })
                }
                }
            }
        }
        // }
        