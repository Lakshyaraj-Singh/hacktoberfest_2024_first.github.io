let button=document.querySelector(".darkbutton");
const toggleBackground=()=>{
   
      if(button.classList.contains("whitebutton")==false){
        button.classList.toggle("whitebutton")
        document.body.style.backgroundColor = "white";
        button.innerHTML="Dark Mode"
      }
      else{
        button.classList.toggle("whitebutton")
        document.body.style.backgroundColor = "#1f2029";
        button.innerHTML="Light Mode"
      }
      
    

}
button.addEventListener("click",toggleBackground);
