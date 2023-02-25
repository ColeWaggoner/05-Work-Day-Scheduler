$(document).ready(function () {
  var weekdayName = moment().format("dddd");
  var date = moment().format("MMM Do YYYY, h:mm a");
  $("#weekday").text(weekdayName);
  $("#date").text(date);



  for (let i = 0; i < $(".inputBox").length; i++) {
    var hour = moment().format("H");
    if ($(".inputBox").eq(i).data("value") > hour) {
      $(".inputBox").eq(i).addClass("future");
    } 
    
    else if ($(".inputBox").eq(i).data("value") < hour) {
      $(".inputBox").eq(i).addClass("past");
    } 
    
    else if ($(".inputBox").eq(i).data("value") == hour) {
      $(".inputBox").eq(i).addClass("present");
    }
  }

  const inputElements = document.querySelectorAll('.saveInput');
  const saveButtons = document.querySelectorAll('.saveButton');
  const clearBtn = document.querySelector('.clear');
  
  // add event listeners to all buttons
  saveButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      // get the value of the input element
      const inputValue = inputElements[index].value;
      
      // save the value to local storage with a key based on the index of the button
      localStorage.setItem(`savedText${index}`, inputValue);
    });
  });

  inputElements.forEach(function(inputElement, index) {
    const savedValue = localStorage.getItem(`savedText${index}`);
    if (savedValue) {
      inputElement.value = savedValue;
    }
  });

  clearBtn.addEventListener('click', function() {
    // loop through all input elements and clear their values
    inputElements.forEach(function(inputElement, index) {
      inputElement.value = '';
  
      // remove the corresponding value from local storage
      localStorage.removeItem(`savedText${index}`);
    });
});

});
