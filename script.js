
const total=document.querySelector(".total")
const remaining=document.querySelector(".remaining")

let t=0
let r=50


function track(){
    
    let input=document.querySelector("#input");

    let val=input.value?.length


    t=val
    r-=1

    if (r<0){
        alert("Limit Exceeded")
        t=0
        r=50
        input.value=""
    }
    total.innerHTML="Total Character :"+t
    remaining.innerHTML="Remaining :"+r
}
