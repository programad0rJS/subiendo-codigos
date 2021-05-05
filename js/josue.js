const form = document.getElementById("form")
const keys = document.getElementById("keys")

form.addEventListener("submit", (e) => {
    e.preventDefault()





sessionStorage.setItem(form.key.value, form.value.value)
 
keys.inmerHTML += "<option>${form.key.value}</option>"

form.reset()

})
keys.addEventListener("change",()=> {
    document.getElementById("infoValue").textContent =
    sessionStorage.getItem(keys[keys.selectedIndex]
    .texxtContent)
})
const smile = document.getElementById("smile")
const dropZone = document.getElementById("drop-zone")


smile.addEventListener("dragend",() =>{
    console.log("Drag End")
})
const fileInput = document.getElementById("file")
const img = document.getElementById("img") 
const text = document.getElementById("text")

fileInput.addEventListener("change",(e) => {
     console.log(e);
    
})
const fileInput = document.getElementById("file")
const progress = document.getElementById("progress")


fileInput.addEventListener("change",(e)=>{
        const file = e.target.files[0]
         const fileReader = new FileReader()
         fileReader.readAsDataURL(file) 
    
         fileReader.addEventListener("progress",(e) =>{
           progress.style.width = Number.parseInt(e.loaded*100/e.total)+ "%"
         })
         fileReader.addEventListener("loadend",()=>{
             progress.style.width = "100%"
         })

          

     })
    





fileInput.addEventListener("change",(e)=>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file) 

    fileReader.addEventListener("progress",(e) =>{
        console.log(e);
    })
    
})
const video = document.getElementById("video")


addEventListener("visibilitychange",(e)=>{
    console.log(document.visibilitychange)
})

const images = document.getElementById("images")
const getImages = () => {
  axios("https://picsum.photos/v2/list?page=3&limit=5")
   .then(res => {
        const fragmet = document.createDocumentFragment()
        res.data.forEach(element => {
           const newImage = document.createElement("img")
           newImage.src = element.download_url
           fragmet.appendChild(newImage)
        })
        images.appendChild(fragmet)
        setObserver()
   })
} 

const callback = (entries) =>{
   entries.forEach(entry=>{
       console.log(entry)
    })
}

const setObserver = () =>{
    const option = {
        threshold:0.5
    }     
   const observer = new IntersectionObserver(callback,
   option)
   observer.observe(images.lastElementChild)

}
getImages()




























