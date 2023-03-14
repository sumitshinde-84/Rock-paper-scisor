let choiceCOM;
let choicePLR;



let com;
let plr;

    
 let point;

 let cp;


let p=0;

let c=0;

let space="     ";




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
    
    console.log(`Round ${i} \n`)
    document.write(`Round ${i} `)
    document.write("<br>")
    document.write("<br>")

    // input 
    
     plr =  prompt("Enter your choice (for Rock- R, paper- P , Scisor- S");
     
    

     com = Math.floor(Math.random()*(3-1))+1 ;
// computer random no conversion in right input

    if (com==1){
  
        com= 'R';
       
   }
   else if (com==2){
        com= 'P';
   
   }
   else if (com==3){
        com='S';
   }

//   computer choice

if (com=='R'){
    document.write("computer choosed :ROCK")
    document.write("<br>")
}

else if (com=='P'){
    document.write("computer choosed :PAPER")
    document.write("<br>")
}

else{
    document.write("computer choosed :SCISOR")
    document.write("<br>")
}

   // input insensitivity conversion

   
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

//    player choice

if (plr=='R'){
    document.write("you choosed :ROCK")
    document.write("<br>")
    
}

else if (plr=='P'){
    document.write("you choosed :PAPER")
    document.write("<br>")
   
}

else{
    document.write("you choosed :SCISOR")
    document.write("<br>")
   
}
 

    game(com,plr)
    p= p+point;
    c= c+cp;

    // current round point show

    console.log(`your point: ${point}`);
    document.write(`Your point: ${p}`)
    document.write("<br>")
   
    console.log(`computer point: ${cp}`);
    document.write(`computer point:  ${cp}`)
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<hr>");


    
    
}

 // total point show

console.log("\n")
console.log(` Your Total point= ${p}`);
document.write(`<center><strong><h3>Your Total point:  ${p}</h3></strong>`)

console.log(`Total Computer point= ${c}`);
document.write(`<center><strong><h3>Computer Total point:  ${c}</h3></strong>`)
document.write("<br>");
document.write("<br>");


// final result

if(p >c){
    console.log("CONGRATULATIONS YOU WIN " );
    document.write(`<center><h2>CONGRATULATIONS YOU WIN </h2>`);
} else if(c==p){
    console.log("TIE");
    document.write(`<center><h2>TIE....</h2>`);
}

else{
    console.log("SHIT.. YOU LOSE");
    document.write(`<center><h2>SHIT.. YOU LOSE</h2>`);
}
