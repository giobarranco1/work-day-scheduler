//made saveButton var to make a function when clicked it will save the users input and the time from the time block
var saveButton = $(".saveBtn");
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    saveButton.on("click", function () {
        //the input of the user will be saved in the var text
        //val() returns the value of the user input
        var text = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");
        //text and time from user input is saved to their computer 
        localStorage.setItem(time, text);
    })
 })

var currentTime = moment().hours();


$( ".time-block" ).each(function() {
   var hour =  $( this ).attr("id");
   hour = parseInt(hour.split("-")[1]); 
   console.log(hour);
   
   if (currentTime === hour) {
    $(this).find(".description").addClass( "present" );
   } else if (currentTime < hour) {
       $(this).find(".description").addClass("past");
   } else {
    $(this).find(".description").addClass("future");
   }



  });
   
  // Instead, you should rely on implicit iteration:
 // $( "li" ).addClass( "bar" );



 //local storage: storage in user's computer
 //saving the time and text the user inputs into their computer
 //val()- https://api.jquery.com/val/

 //compared times to past, present and future with else/if statements
 //make a time variable that will be compared with the current time
 //past, future, present are classes 
 //appending the classes to div element based on the time comparison -APPEND to classes
 //when user refreshes page, the input is still there using localStorage
 //get the values from localStorage and put it on the page if they saved the input
 //run the fucntion

