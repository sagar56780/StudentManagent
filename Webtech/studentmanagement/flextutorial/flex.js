// Wait for the DOM content to be loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    // Get the input element with the name "name"
    var nameInput =  document.getElementsByName("name")[0];
    var ageInput=    document.getElementsByName("age")[0];
    var cityInput=   document.getElementsByName("city")[0];

    // Add an event listener to the form submission
    document.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
         localStorage.setItem("name",nameInput.value);
         localStorage.setItem("age",ageInput.value);
         localStorage.setItem("city",cityInput.value);
         alert("name=" +localStorage.getItem("name")+" age="+localStorage.getItem("age")+" city="+localStorage.getItem("city"));
    });
});

