import { modlar } from "./data.js";

const kokEtiket = document.querySelector("#kok-etiket"); //modülün global değişkeni gibi düşünebiliriz

function UIGoster() {
  modlar.forEach((deger, index) => {

    const  yeniDiv=document.createElement("div")
    yeniDiv.textContent=deger.tr

    //mod görseli oluşturma
    const yeniImg=document.createElement("img")
    yeniImg.src="../img/" + deger.mod + ".jpg"   //.. nokta bir üst dosyaya çıkmak demek nokta sayısına göre değişir

    //mod sesi oluşturma
    const yeniAudio=document.createElement("audio")
    yeniAudio.src="../audio/" + deger.mod + "-sound.mp3"
    yeniAudio.loop=true



    yeniDiv.append(yeniImg)     
    yeniDiv.append(yeniAudio)     


    kokEtiket.append(yeniDiv)


    //events
    yeniDiv.addEventListener("click", ()=> {
        //eğer şarkı çalmıyorsa çalmaya başla

        if(yeniAudio.paused===true){
            yeniAudio.play()
            yeniDiv.classList.add("aktif")
        }
        //eğer şarkı çalıyorsa durdurulsun
        else {
            yeniAudio.pause()
            yeniDiv.classList.remove("aktif")
        }
       
    })

  })
}
export {UIGoster}
