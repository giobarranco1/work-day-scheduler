//made saveButton var to make a function when clicked it will save the users input and the time from the time block
var saveButton = $(".saveBtn");
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    saveButton.on("click", function () {
        //the input of the user will be saved in the var text
        //val() returns the value of the user input
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //text and time from when user inputs text, is saved to their computer 
        localStorage.setItem(time, text);
    })


    var currentTime = moment().hours();

//looping through all the time blocks
//takes the number in hour-block string and sets
//the variable hour to just the number
    $(".time-block").each(function () {
        var hour = $(this).attr("id");
        hour = parseInt(hour.split("-")[1]);
        //compares the current time to past, future & present time-blocks
        //to appropriately color code the blocks
        if (currentTime === hour) {
            $(this).find(".description").addClass("present");
        } else if (currentTime < hour) {
            $(this).find(".description").addClass("past");
        } else {
            $(this).find(".description").addClass("future");
        }

        //getting the value from local Storage and setting it equal
        //to the variale hourID
        var hourID = $(this).attr("id");
        $(hourID.description).val(localStorage.getItem(hourID));
    });
})