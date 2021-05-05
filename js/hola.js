const numbers=[3,4,5,6,7,8,]
let pares =[]
let impares=[]


for(const number of numbers ){
    let random = Math.round(Math.random() *10+1)
    const result = numbers * random
    
    

    console.log("${number} x ${random} = ${resulr}");
    if(result % 2 ==0){
        pares.push(result)
    }else{
        impares.push(result)
    }
}
console.log(pares);  
console.log(impares);
const letras = ["A","E","T","K","Y","U","Ñ","K","L","S"]

const dni = prompt("introduzca tu DNI ")
if(dni.length==8 && parseInt(dni)>0){
    let letra = dni%23
    console.log(letra);
    console.log("tu dni completa es ${dni}${letras[letra]}");
}
const palabra = prompt("introduce una palabra")
let consonantes=0
let vocale=0

const colors = ["azul","amarillo","rojo","verde","rosa"]
const color = prompt("intruduce un color")
   const person ={
   name: "juan",
    age: 26, 
    sons: ["laura","diego","rosa","tomas","josue"] 
}
console.log(person.sons);
for(const son of person.sons){
    console.log(son);
}
function saludar(){
console.log("hola");
}
const saludar =() => console.log("hola");
saludar()
saludar()
saludar()
saludar()
class Persona {
    constructor(nombre,apellido,edad,){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.datos = "me llamo ${nombre}${apellido} y tengo ${edad}años"
    }
    saludar(){
        return "hola,me llamo ${this.nombre} y tengo ${this.edad} años "
    }
    
    
}
const juan = new Persona("juan","gracias", 25)
const marta = new Persona("marta","gracias", 25)

console.log(juan);

console.log(juan.saludar());
const form = document.getElementById("form")
const input = document.getElementById("input")
const button = document.getElementById("button")
const gallery =document.getElementById("gallery")

gallery.addEventListener("click", (e) =>{
   e.target.classList.add("red");
})

button.addEventListener("click", (e)=>{
   console.log(e.target);
})



input.addEventListener("keyup", (a) => {
    console.log(a)
    console.log(input.value);
   console.log(event);
})
addEventListener("click", (e) => {
   console.log(e);    
})
window.alert("no pasa ")
alert("no pasar")

const days =["lucas","daniel","josue", "diego","maria","piero","marta","daniel","josue","lucas","daniel","josue", "lucas","daniel","josue","lucas","daniel","josue"]

const title = document.getElementById("title")

const dayslist = document.getElementById("dayslist")

const selectdays = document.getElementById("daysselect")

const itemlist = document.createElement("LI")
itemlist.textContent="lucas"

dayslist.appendChild(itemlist)

title.innerHTML = "DOM - <span>crear e insertar elementos</span>"

const fragmet = document.createDocumentFragment()

for (const day of days){
    dayslist.innerHTML += "<li>josue</li>"
      const itemlist = document.createElement("LI")
     itemlist.textContent="day"
     fragmet.appendChild(itemlist)
}
for (const day of days ){
const itemlist = document.createElement("LI")
itemlist.textContent= day
fragmet.appendChild(itemlist)

}

for(const day of days){
    const selectitem = document.createElement("OPTION")
    selectitem.setAttribute("value",day.toLocaleLowerCase())
    selectitem.textContent = day
    fragmet.appendChild(selectitem)


}

dayslist.appendChild(fragmet)
selectdays.appendChild(fragmet)

const parent = document.getElementById("parent")

console.log(parent.parentElement.parentElement.parentElement);


console.log(parent.childNodes);


console.log(parent.children);

const list = document.getElementById("list")
const newElement = document.createElement("li")
newElement.textContent = "piero y josue son amigos"

list.appendChild(newElement)

list.insertBefore(newElement, list.children[1]);

list.insertAdjacentElement("beforebegin",newElement)

alert("hola")

const button = document.getElementById("button") 

if(confirm("acepta?")) {
   console.log("el usuario acepto");
}else{
   console.log("el usuario no acepto");
}



let name = prompt("escriba tu nombre completo")
console.log(name)
addEventListener("click" ,(e) => {
   console.log(e)

})


console.table([1,2,3,4,5,6,7,8,9,0])

console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)
location.reload()

location.href = "https://www.udemy.com/"

console.log(button)
console.error("error")

const person = {
   name: "josue",
    age: 30,
    email:"josue@gmail.com"
}

const date = new Date()

console.log(date)
  
button.addEventListener("click",() => {
  setTimeout(saludar,3000)
}) 

const saludar = () => {
  console.log("hola")
}
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
   e.preventDefault()
   sendData(form)
})


const sendData = (data) => {
  let xhr 
  if (window.XMLHttpRequest) xhr = new 
  XMLHttpRequest()
  else xhr = new ActiveXObject
  ("Microsoft.XMLHTTP")
 
}
const button = document.getElementById("button") 

button.addEventListener("click",() =>{
    let xhr 
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest() 
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")
    
    xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    
    xhr.addEventListener("load",(data)=> {
       const dataJSON = JSON.parse(data.target.response)
   
       const list = document.getElementById("list") 
       for (const userInfo of dataJSON ){
           const listItem = document.createElement("LI")
           listItem.textContent = "hola"
           list.appendChild(listItem)
       }
    })
      xhr.send()
})


const button = document.getElementById("button")

button.addEventListener("click", () => {
  const newpost = {
       title: "A new post",
       body: "Lorem ipsum dolor sit amet consectetur adipisicing elir ",
       userId: 1
     

   }
    
   console.log(newpost)
    console.log(JSON.stringify(newpost))
   
  
   

 })



const buttonImg = document.getElementById("button-img") 
const buttonPDF = document.getElementById("button-PDF")


buttonImg.addEventListener("click",()=> {
  fetch("soñar.jpg")
  .then(res => res.blob())
  .then(img=>{
    document.getElementById("img").src = URL.createObjectURL(img)
  })
  })

  buttonImg.addEventListener("click",()=> {
    fetch("soñar.pdf")
    .then(res => res.blob())
    .then(pdf => {
      document.getElementById("pdf").src = URL.createObjectURL(pdf)
    })
    })

const form = document.getElementById("form") 
const button = document.getElementById("submitButton") 

const name = document.getElementById("name")
const email = document.getElementById("email")
const gender = document.getElementById("gender")
const terms = document.getElementById("terms") 



const formIsvalid = {
   name:false,
   email:false,
   gender:false,
   terms:false,

}
form.addEventListener("submit" ,(e) =>{
    e.preventDefault()
     validateForm()
})


name.addEventListener("change",(e)=>{
  if(e.target.value.trim().length>0) formIsvalid.name = true
})

email.addEventListener("change",(e)=>{
  if(e.target.value.trim().length>0) formIsvalid.email = true
})

gender.addEventListener("change",(e) => {
  console.log(e.target.checked)
  if(e.target.checked == true) formIsvalid.gender = true
})

terms.addEventListener("change",(e)=> {
  formIsvalid.terms = e.target.checked
  e.target.checked ? button.removeAttribute("disabled") :
  button.setAttribute("disabled",true)

})
const validateForm = () => {
   const formValues = Object.values(formIsvalid)
   const valid = formValues.findIndex(value => value == false)  
   if(valid == -1) form.submit() 
   else alert("no pasar")
}
const text = document.getElementById("text").textContent
const regEx = /Lorem/gi


console.log(regEx.text(text))
console.log(text.includes("lorem"))
let suma =0;
let cont=0;
while(suma<=50){
   suma+= parseInt(prompt("intoduzca el siquiente el"))
   cont++
}
console.log("el suma total es de :${suma}");
console.log("el suma total es de :${cont}");
