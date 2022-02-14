list = [] ;
recoding = false ;
function click (cls , name ) {
    audio = new Audio ('sounds/'+name+'.mp3') ;
    audio.play() ;
    if (recoding == true)
    {
        list.push(name);
        document.querySelector(".reco").innerText = "You are recording now! Your actual record is : \n" + list  ;
    }
    cls.classList.add('clickedbutton');
    setTimeout(() => cls.classList.remove('clickedbutton') , 500);
}
function recod (){
    recoding = true ;
    document.querySelector(".reco").innerText = "You are recording now!";
}
function stop (){
    recoding = false ;
    document.querySelector(".reco").innerText = "You are not recording now!";
}
function clear () {
    document.querySelector(".reco").innerText = "You records are deleted!";
    list.clear() ;
}
function clearLast () {
    delete list[list.length - 1];
    document.querySelector(".reco").innerText = "You are recording now! Your actual record is : \n" + list  ;
}
function play () {
    for (let i = 0 ; i < list.length ; i++){
        setTimeout(() => {
            audio = new Audio ('sounds/'+list[i]+'.mp3') ;
            audio.play() ;
        } , 500 * i)
    }
}

rec = document.querySelector(".save");
rec.addEventListener("click" , function () {recod()}) ;

playB = document.querySelector(".play");
playB.addEventListener("click" , function (){play()});

clearB = document.querySelector(".clear");
clearB.addEventListener("click" , function (){clear()});

clearBLast = document.querySelector(".clearLast");
clearBLast.addEventListener("click" , function (){clearLast()});

stopB = document.querySelector(".stop");
stopB.addEventListener("click" , function (){stop()});

tom1 = document.querySelector(".tom1");
tom1.addEventListener("click" , function () {click(tom1 , "tom1")});

tom2 = document.querySelector(".tom2");
tom2.addEventListener("click" , function () {click(tom2 , "tom2")});

tom3 = document.querySelector(".tom3");
tom3.addEventListener("click" , function () {click(tom3 , "tom1")});

tom4 = document.querySelector(".tom4");
tom4.addEventListener("click" , function () {click(tom4 , "tom4")});

crash = document.querySelector(".crash");
crash.addEventListener("click" , function () {click(crash , "crash")});

kick = document.querySelector(".kick");
kick.addEventListener("click" , function () {click(kick , "kick")});

snare = document.querySelector(".snare");
snare.addEventListener("click" , function () {click(snare , "snare")});