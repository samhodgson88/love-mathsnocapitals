
// wait for DOM to finish loading before running the game
// Get the button elements and add event listeners (button clicks etc) to them
// let button of buttons is modern version of let i = 0; i < buttons.length; i++)

document.addEventListener("DOMContentLoaded", function(){
 let buttons = document.getElementsByTagName("button");
 for (let button of buttons){
     button.addEventListener("click", function (){
         if (this.getAttribute("data-type")=== "submit") {
             alert("You clicked Submit!");
         }
   });
});
