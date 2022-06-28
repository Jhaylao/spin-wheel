const spinBtn=document.querySelector(".spin")
const innerCircle=document.querySelector(".inner_circle");
const outerCircle=document.querySelector(".outer_circle")
let defaultDeg= 1800
let click= 0;

let prize="";
const spinHandler=()=>{
    click++
    let extraDeg= Math.floor((Math.random()*360)+1)
    let totalDegree=(defaultDeg*click)+extraDeg
    let priceChecker= Math.floor((totalDegree%360)/40)
    let priceObject={
        0:"JOB",
        1:"Trip to Dubia",
        2:"$10M",
        3:"A slap",
        4:"Something Hooge",
        5:"iPhone 12",
        6:"Ouch, Nothing",
        7:"lost"
    }
    innerCircle.style.transform=`rotate(${totalDegree}deg)`
    prize=priceObject[priceChecker] 
}
spinBtn.addEventListener("click",spinHandler)

const prizeModal=document.querySelector(".modal")
const backdrop=document.querySelector(".backdrop")
const prizeSpan=document.querySelector("#prize")

const resultHandler=()=>{
    prizeModal.classList.toggle("visible")
    backdrop.classList.toggle("visible")
    outerCircle.classList.toggle("invisible")
    const Image=document.querySelector(".pointer").classList.toggle("invisible")   
}

innerCircle.addEventListener("transitionend",()=>{
    prizeSpan.textContent=` ${prize}`
    prizeSpan.style.color="red"
    resultHandler()
})

prizeModal.addEventListener("click",()=>{
   resultHandler()
})
