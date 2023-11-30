

class Password{
    constructor(){
      this.lowerChars="abcdefghijklmnopqrstuvwxyz";
      this. upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      this. nums="1234567890";
      this. symbols="!@#$%^&*";
        this.password=" "
       
  
    }
    funnyPass(){
      let length=document.getElementById("inputLength").value;
      this.password=""
  let arr=["password","1234567","abcdefghi","12131415"]
  this.password=arr[Math.floor(Math.random()*arr.length)]
  return  this.password.substring(0,length)
    }
     weakPass( ){
      let length=document.getElementById("inputLength").value;
      this.password = "";
      console.log(length)
           let i=0
             while(i<=length){
               this.password+=this.lowerChars[Math.floor(Math.random()*this.lowerChars.length)]
       this.password+=this.upperChars[Math.floor(Math.random()*this.upperChars.length)]
       
               i+=2
  

             }
             return this.password.substring(0,length)
         }
     strongPass(){
      let length=document.getElementById("inputLength").value;
      this.password = "";
      console.log("b"+this.password)
      
      console.log("l"+length)
        let i=0
          while(i<=length){
            this.password+=this.lowerChars[Math.floor(Math.random()*this.lowerChars.length)]
    this.password+=this.upperChars[Math.floor(Math.random()*this.upperChars.length)]
    this.password+=this.nums[Math.floor(Math.random()*this.nums.length)]
    
            i+=3
          
  
          }

         console.log(this.password)
         
          return  this.password.substring(0,length)
      }
    superStrongPass(){
       let length=document.getElementById("inputLength").value;
       this.password = "";
        console.log(length)
      let i=0
        while(i<=length){
          this.password+=this.lowerChars[Math.floor(Math.random()*this.lowerChars.length)]
  this.password+=this.upperChars[Math.floor(Math.random()*this.upperChars.length)]
  this.password+=this.nums[Math.floor(Math.random()*this.nums.length)]
  this.password+=this.symbols[Math.floor(Math.random()*this.symbols.length)]
          i+=4
          
        }
        return this.password.substring(0,length)
    }
  
  
  }


var audio =new Audio("click-button-140881.mp3")
let alert1=document.getElementById("myalert1");
let alert2=document.getElementById("myalert2");
// alert.classList.add("none") 
let x=()=>{
 
  audio.play()
   let length=document.getElementById("inputLength")
        let l=length.value;
        console.log("sumit"+l)
    let p=new Password()
    let text=document.getElementById("inputText")
    let radio=document.querySelectorAll(".form-check-input")
    // alert.classList.remove("none") 
  if(radio[0].checked){
    alert1.classList.add("none") 
    alert2.classList.add("none") 
   let pass=p.funnyPass();
   text.value=pass;
  }else if(radio[1].checked){
    alert1.classList.add("none") 
    alert2.classList.add("none") 
    let  pass=p.weakPass();
    text.value=pass;
  }else if(radio[2].checked){
    alert1.classList.add("none") 
    alert2.classList.add("none") 
    let pass=p.strongPass();
    text.value=pass;
  }else if(radio[3].checked){
    alert1.classList.add("none") 
    alert2.classList.add("none") 
    let pass=p.superStrongPass();
    text.value=pass;
  }
  else{
    alert1.classList.remove("none")
  
    setTimeout(()=>{
        alert1.classList.add("none") 
    },2000)
  
  }
  
  }


  submit.addEventListener("click",x)



