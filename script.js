


    
 let point;

 let cp;


let p=0;

let c=0;






function game(com, plr){

    if(plr=='R' && com== 'P'){

        return point=0 ,cp = 1;
         console.log("You LOSE")
    }
    
    else if (plr=='R' && com== 'S'){

         return point=1 ,cp = 0;
         console.log("You Win")
    }
    else if (plr=='R' && com=='R'){
        return point=0 ,cp = 0;
        console.log("Tie...")
}


else if (plr=='P' && com== 'R'){
    return point=1 ,cp = 0;
    console.log("You WIN")
}

else if (plr=='P' && com== 'S'){

    return point=0 ,cp = 1;
    console.log("You Lose")
}
else if (plr=='P' && com=='P'){
    return point=0 ,cp = 0;
    console.log("Tie...")
}

else if (plr=='S' && com== 'R'){
    return point=0 ,cp = 1;
     console.log("You LOSE")
}

else if (plr=='S' && com== 'P'){
    return point=1 ,cp = 0;
    console.log("You WIN")
}
else if (plr=='S' && com=='S'){
    return point=0 ,cp = 0;
    console.log("Tie...")
}
}



for(i=1;i<=5;i++){
    
    console.log(`Round ${i}`)
    
    let plr =  prompt("Enter your choice (Rock- R, paper- P , Scisor- S");

    let com= Math.floor(Math.random()*10) ;


    if (com<=3){
  
        com= 'R';
       
   }
   else if (com<=6){
        com= 'P';
   
   }
   else if (com<=10){
        com='S';
   }
   
   if (plr=='r' || plr=='R'){
   plr='R';
   }
   
   else if(plr=='p' || plr=='P')
   {
       plr='P';
   }
   
   else if(plr=='s' || plr=='S')
   {
       plr='S';
   }
   else{
   
       alert("wrong input")
   }
   

 

    game(com,plr)
    p= p+point;
    c= c+cp;

    console.log(`your point:${point}`);
    console.log(`computer point:${cp}`);

    
    
}

console.log(`Total point= ${p}`);
console.log(`Total point= ${c}`);
if(p >c){
    console.log("CONGRATULATIONS YOU WIN " );
} else if(c==p){
    console.log("TIE");
}

else{
    console.log("SHIT.. YOU LOSE");
}
