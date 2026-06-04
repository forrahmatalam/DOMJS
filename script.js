           // 4 pillers of dom 

           // 1. Selection of an Element

/* let a = document.querySelector("h1")    --  [ let a = document.querySelectorAll("h1") - for multiple h1 select ]
        console.log(a);  */

          

             //if id se select krna hai

       // let a = document.getElementById("box")
       // let a = document.getElementByClassName("box")
           
           // 2. changing HTML

     /* let a = document.querySelector("h1");
     a.innerHTML = "Hello Papaya School" */


                   //or 
   // document.querySelector("h1").innerHTML = "Changed html";




           // 3. Changing Css
      /* let a = document.querySelector("h1");
      a.innerHTML =" Link with html "
      a.style.color = "green" 
      a.style.backgroundColor = "black "     */         //link with css a.style. (as it is)




         // 4. Event Listener
      /* let a = document.querySelector("h1");
     
     a.addEventListener("click" , function(){
        a.innerHTML =" Keyse ho bhai";
        a.style.color ="skyBlue";
     })  */ 

             //  Bulb Problem
            
/* let blb = document.querySelector("#bulb");
let btn = document.querySelector("button");
      let flag = 0;
btn.addEventListener("click", function() {
    if(flag==0){
 blb.style.backgroundColor = "yellow";
    blb.style.boxShadow = "0 0 40px yellow";
    console.log("Clickoed")
    flag = 1
    } else {
        blb.style.backgroundColor = "transparent";
         blb.style.boxShadow = "0 0 40px transparent";
    console.log("off")
    flag = 0 
    }
}); */


         //Use of text content
 /* let a = document.querySelector("h1");
 a.textContent = " <h1> Hello Rahmat <h1>"  //poora as it show krne ke lie 
 a.innerHTML = " <h1> Hello Rahmat <h1> "   //Hello Rahmat hi bs print hoga  */


        //Set time out 




        // set interval

       /*  let root = document.querySelector("#root")
        let a = document.createElement("h1") //isse elemnt create krte hai 
        a.innerHTML ="Hello";
        console.log(a);
        root.appendChild(a) */