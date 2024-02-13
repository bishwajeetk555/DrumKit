
for(let i=0 ; i <document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       
        let innerl=this.innerHTML;
        keySound(innerl);
        addAnimation(innerl);

    });

}



document.addEventListener("keypress",function(event){
    keySound(event.key);
    addAnimation(event.key);
}
);

function keySound(key){
    switch(key){

        case 'w':
            let audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            
            break;


            case 'a':
                let adio=new Audio("sounds/tom-2.mp3");
                adio.play();
            
                break;



                case 's':
                    let aio=new Audio("sounds/tom-3.mp3");
                    aio.play();
            
                    break;


                    case 'd':
                        let ao=new Audio("sounds/tom-1.mp3");
                        ao.play();
            
                        break;


                        case 'j':
                            
                            let udio=new Audio("sounds/crash.mp3");
                            udio.play();
                           
                            break;


                            case 'k':
                                let io=new Audio("sounds/tom-4.mp3");
                                io.play();
                

            
                                break;


                                case 'l':
                                    let aeo=new Audio("sounds/kick-bass.mp3");
                                    aeo.play();
            
                                    break;

                                    default:
                                        break;
                    
                
    
       
    }
}


function addAnimation(ele){
   var selectedbutton= document.querySelector("."+ele);  //here we select the particular button
   selectedbutton.classList.add("pressed");
   setTimeout(function(){
    selectedbutton.classList.remove("pressed");
   },100);
}
 