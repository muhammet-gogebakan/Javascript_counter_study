//JS
let arttir=document.querySelector("#arttir")
let azalt=document.querySelector("#azalt")
let p_var=document.querySelector("p")

p_var.innerHTML=localStorage.getItem("counter") ? localStorage.getItem("counter") : 100

let sayac=localStorage.getItem("counter") ? 
    parseInt(localStorage.getItem("counter")) : 
    parseInt(p_var.innerHTML)

arttir.onclick=function (event){
    this.id=="arttir" ? sayac++ : sayac--
    p_var.innerHTML=sayac
    localStorage.setItem("counter", sayac)
}

azalt.onclick=function (event){
    this.id=="arttir" ? sayac++ : sayac--
    p_var.innerHTML=sayac
    localStorage.setItem("counter", sayac)
}
