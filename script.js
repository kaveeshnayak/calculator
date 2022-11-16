let displayValue="0"
let firstvalue=''
let secondvalue=''
let symbol=''
let temp=''
let operator=''
let allSymbols=["+", "-", "×", "%", "±", "C", "=", "÷"]
let btnValueIsSymbol=false
//populateDisplay()

document.getElementById("clear").addEventListener("click", function(e){
firstvalue=""
secondvalue=""
btnValueIsSymbol=false
displayValue="0"
populateDisplay()
})
document.getElementById("sign").addEventListener("click", function(e){
   if(btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="-"
      }
      else{
      displayValue = (displayValue)*(-1)
      
      }
      secondvalue=displayValue
   }
   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="-"
      }
      else{
      displayValue = (displayValue)*(-1)
      
      }
      firstvalue=displayValue
   }
populateDisplay()
})
document.getElementById("percent").addEventListener("click", function(e){
   if(btnValueIsSymbol==true){  
      if(firstvalue && btnValueIsSymbol){
         
         calculate()
         populateDisplay()
         symbol="%"
      }}
      else{btnValueIsSymbol=true  
      if(firstvalue && btnValueIsSymbol){
         symbol="%"
         calculate()
         populateDisplay()
      }}
   
})
document.getElementById("divide").addEventListener("click", function(e){
   if(btnValueIsSymbol==true){  
   if(firstvalue && btnValueIsSymbol){
      
      calculate()
      populateDisplay()
      symbol="÷"
   }}
   else{btnValueIsSymbol=true  
   if(firstvalue && btnValueIsSymbol){
      symbol="÷"
      calculate()
      populateDisplay()
   }}

})
document.getElementById("mul").addEventListener("click", function(e){
   if(btnValueIsSymbol==true){  
      if(firstvalue && btnValueIsSymbol){
         
         calculate()
         populateDisplay()
         symbol="×"
      }}
      else{
   btnValueIsSymbol=true  
   if(firstvalue && btnValueIsSymbol){
      symbol="×"
      calculate()
      populateDisplay()
   }}
  
})
document.getElementById("subtract").addEventListener("click", function(e){
   if(btnValueIsSymbol==true){  
      if(firstvalue && btnValueIsSymbol){
         
         calculate()
         populateDisplay()
         symbol="-"
      }}
      else{
   btnValueIsSymbol=true  
   if(firstvalue && btnValueIsSymbol){
      symbol="-"
      calculate()
      populateDisplay()
   }}
   
})
document.getElementById("add").addEventListener("click", function(e){
   if(btnValueIsSymbol==true){  
      if(firstvalue && btnValueIsSymbol){
         
         calculate()
         populateDisplay()
         symbol="+"
      }}
      else{
   btnValueIsSymbol=true  
   if(firstvalue && btnValueIsSymbol){
      symbol="+"
      calculate()
      populateDisplay()
   }}

})
document.getElementById("equals").addEventListener("click", function(e){
if(firstvalue=="" && btnValueIsSymbol==false && secondvalue==""){
   null
}
if(firstvalue!="" && btnValueIsSymbol==false && secondvalue==null){
   null
}
if(firstvalue!="" && btnValueIsSymbol==true && secondvalue==null){
   null
}
if(firstvalue!="" && btnValueIsSymbol==true && secondvalue!=null){
   calculate()
}
})





document.getElementById("one").addEventListener("click", function(e){
   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue=="" ){if(displayValue.toString().includes(".")==false){displayValue=""}}
      if (displayValue=="0"){
         displayValue="1"
      }
      else{
      displayValue = displayValue+"1"
      
      }
      if(displayValue.toString().includes(".")==false){
      secondvalue=displayValue}
      else{
         firstvalue=displayValue
      }
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="1"
      }
      else{
      displayValue = displayValue+"1"
      
      }
      firstvalue=displayValue
   }

   
   populateDisplay()
})
document.getElementById("two").addEventListener("click", function(e){
   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue=="" ){displayValue=""}
      if (displayValue=="0"){
         displayValue="2"
      }
      else{
      displayValue = displayValue+"2"
      
      }
      secondvalue=displayValue
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="2"
      }
      else{
      displayValue = displayValue+"2"
      
      }
      firstvalue=displayValue
   }

   populateDisplay()
}
)
document.getElementById("three").addEventListener("click", function(e){

   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue=="" ){displayValue=""}
      if (displayValue=="0"){
         displayValue="3"
      }
      else{
      displayValue = displayValue+"3"
      
      }
      secondvalue=displayValue
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="3"
      }
      else{
      displayValue = displayValue+"3"
      
      }
      firstvalue=displayValue
   }

    populateDisplay()


})
document.getElementById("four").addEventListener("click", function(e){
   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue=="" ){displayValue=""}
      if (displayValue=="0"){
         displayValue="4"
      }
      else{
      displayValue = displayValue+"4"
      
      }
      secondvalue=displayValue
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="4"
      }
      else{
      displayValue = displayValue+"4"
      
      }
      firstvalue=displayValue
   }

   
   populateDisplay()
   
})
document.getElementById("five").addEventListener("click", function(e){
   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue=="" ){displayValue=""}
      if (displayValue=="0"){
         displayValue="5"
      }
      else{
      displayValue = displayValue+"5"
      
      }
      secondvalue=displayValue
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="5"
      }
      else{
      displayValue = displayValue+"5"
      
      }
      firstvalue=displayValue
   }

   
   populateDisplay()

})
document.getElementById("six").addEventListener("click", function(e){
   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue==""){displayValue=""}
      if (displayValue=="0"){
         displayValue="6"
      }
      else{
      displayValue = displayValue+"6"
      
      }
      secondvalue=displayValue
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="6"
      }
      else{
      displayValue = displayValue+"6"
      
      }
      firstvalue=displayValue
   }

   
   populateDisplay()

})
document.getElementById("seven").addEventListener("click", function(e){
   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue=="" ){displayValue=""}
      if (displayValue=="0"){
         displayValue="7"
      }
      else{
      displayValue = displayValue+"7"
      
      }
      secondvalue=displayValue
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="7"
      }
      else{
      displayValue = displayValue+"7"
      
      }
      firstvalue=displayValue
   }

   
   populateDisplay()
})
document.getElementById("eight").addEventListener("click", function(e){
   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue=="" ){displayValue=""}
      if (displayValue=="0"){
         displayValue="8"
      }
      else{
      displayValue = displayValue+"8"
      
      }
      secondvalue=displayValue
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="8"
      }
      else{
      displayValue = displayValue+"8"
      
      }
      firstvalue=displayValue
   }

   
   populateDisplay()
})
document.getElementById("zero").addEventListener("click", function(e){
   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue=="" ){displayValue=""}
      if (displayValue=="0"){
         displayValue="0"
      }
      else{
      displayValue = displayValue+"0"
      
      }
      secondvalue=displayValue
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="0"
      }
      else{
      displayValue = displayValue+"0"
      
      }
      firstvalue=displayValue
   }

   
   populateDisplay()
})
document.getElementById("nine").addEventListener("click", function(e){
   if(btnValueIsSymbol && displayValue!="" && firstvalue!=""){
      if(secondvalue=="" ){displayValue=""}
      if (displayValue=="0"){
         displayValue="9"
      }
      else{
      displayValue = displayValue+"9"
      
      }
      secondvalue=displayValue
   
}


   if(!btnValueIsSymbol){
      if (displayValue=="0"){
         displayValue="9"
      }
      else{
      displayValue = displayValue+"9"
      
      }
      firstvalue=displayValue
   }

   
   populateDisplay()
})

document.getElementById("dot").addEventListener("click", function(e){
if((displayValue.toString()).includes(".")==true){
   null
}else{
         if (displayValue=="0"){
         displayValue="."
      }
      else{
      displayValue = displayValue+"."
      
      }
      
   
}


   
   populateDisplay()
})


let populateDisplay  = function(){
let display=document.getElementById("show")
display.innerText=displayValue;
}

populateDisplay()

let calculate=function(){
   if(secondvalue){
   firstvalue=parseFloat(firstvalue)
   secondvalue=parseFloat(secondvalue)
   let result = ''
   if (symbol == "+"){
      result = firstvalue+secondvalue
      displayValue=result
      firstvalue=result
      secondvalue=''
      populateDisplay() 
   }
   if (symbol == "-"){
      result = firstvalue-secondvalue
      displayValue=result
      firstvalue=result
      secondvalue=''
      populateDisplay() 
   }
   if (symbol == "×"){
      result = firstvalue*secondvalue
      displayValue=result
      firstvalue=result
      secondvalue=''
      populateDisplay() 
   }
   if (symbol == "÷"){
      result = firstvalue/secondvalue
      displayValue=result
      firstvalue=result
      secondvalue=''
      populateDisplay() 
   }
   if (symbol == "%"){
      result = firstvalue%secondvalue
      displayValue=result
      firstvalue=result
      secondvalue=''
      populateDisplay() 
   }

   
}
}
