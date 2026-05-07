const btn =document.getElementById("moon")
btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light")
    }
})
if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark")
}
const btns = document.getElementById("menu")
const link = document.getElementById("links")
btns.addEventListener("click",()=>{
    link.classList.toggle("show")
})
const trackbtn = document.getElementById("trackBtn")
trackbtn.addEventListener('click',()=>{
    const value = document.getElementById("trackInput").value 
    document.querySelectorAll(".step").forEach(step=>{
        step.classList.remove("active")
    })
    if(value==="123"){
        activateSteps(1)
    }else if(value==="456"){
        activateSteps(2)
    }else if(value==="789"){
        activateSteps(3)
    }else if(value==="000"){
        activateSteps(4)
    }else{
        alert("invalide tracking Number")
    }
})
function activateSteps(count){
    const steps = document.querySelectorAll(".step")
    for(let i = 0; i < count; i++){
        steps[i].classList.add("active")
    }
}
const startBtn  = document.getElementById("startBtn")
const nextBtn = document.getElementById("nextBtn")
startBtn.addEventListener("click",()=>{
    document.querySelector("#services").scrollIntoView({
        behavior:"smooth"

    })
})
nextBtn.addEventListener("click",()=>{
    document.querySelector("#tracking").scrollIntoView({
        behavior:"smooth"
    })
})
const homeText = document.querySelector(".home-info")
const homeBox = document.querySelector(".home-box")
window.addEventListener("load",()=>{
    homeText.style.opacity = "1"
    homeBox.style.transform = "translateY(0)"
    homeBox.style.opacity = "1"
    homeBox.style.transform = "translateX(0)"
})
const text = "worldwide Shipping Services "
let i =0 
const title = document.getElementById("hero")
title.textContent =""
function typeEffect(){
    if(i < text.length){
        title.textContent += text.charAt(i)
        i++
        setTimeout(typeEffect,50)
    }
}
typeEffect()
const links = document.querySelectorAll(".service-links a")
const services = document.querySelectorAll(".service-main")
const output = document.getElementById("serviceOutput")
const serviceData = {
    "Ocean Freight":"Ocean Freight is best for large cargo and international shipping.",
    "Air Freight":"Air Freight is the fastest method for urgent deliveries.",
    "Road Freight": "Road Freight is flexible and great for local transportation.",
    "Warehousing":"Warehousing provides safe storage for your goods."
}
links.forEach(link =>{
    link.addEventListener("click",(e)=>{
        e.preventDefault()
        const card = link.closest(".service-main")
        const titles = card.querySelector("h2").textContent
        output.textContent = serviceData[titles]
        services.forEach(s=>s.classList.remove("active"))
        card.classList.add("active")
        output.scrollIntoView({behavior:"smooth"})
    })
})
const form = document.getElementById('form')
const error = document.getElementById("error")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById("message").value
    let subject = document.getElementById("subject").value
    if(name===""|| email===""||message===""||subject===""){
        error.textContent = "fill your information"
        error.style.color ="red"
        error.style.marginTop = "10px"
        return
    }
    error.textContent = ""
    form.reset()

})
const forms = document.getElementById("forms")
const msg = document.getElementById("msg")
forms.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("click")
    let email = document.getElementById("emails").value 
    if(email===""){
        msg.textContent = "enter your email"
        msg.style.color = "red"
         return   
    }
    msg.textContent =""
  forms.reset()
   

})
