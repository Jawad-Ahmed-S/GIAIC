let buttons = document.querySelectorAll(".btn");
let string = "";
let scr = document.querySelector(".screen");

let func = document.querySelectorAll(".func")
//on off calculator
func.forEach((fBtn) =>{
    fBtn.addEventListener("click",(e)=>{

        if(e.target.innerHTML == "ON"){
            scr.innerHTML = "Calculator is On"
            setInterval(()=>{
                 scr.innerHTML = string
            },2000)
            
               document.querySelectorAll(".btn").forEach(button=>{
                button.disabled = false
               })
        }
        else{
              scr.innerHTML = "";
               document.querySelectorAll(".btn").forEach(button=>{
                button.disabled = true
                 scr.innerHTML = "Cheen tapak dam dam"
            setInterval(()=>{
                 scr.innerHTML = string
            },2000)
               })
        }
    })
})
//operations of calculator
buttons.forEach(button=>{
button.addEventListener("click",(e)=>{
console.log(e.target);
if(e.target.innerHTML == "="){
    string = eval(string)
     scr.innerHTML  = string
}
else if(e.target.innerHTML == "C"){
    string ="" ;
    scr.innerHTML  = string
}
else{
    string += e.target.innerHTML ;
    scr.innerHTML  = string
}

})
})


