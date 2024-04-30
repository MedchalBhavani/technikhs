  document.addEventListener("DOMContentLoaded", function() {
    const openbtn = document.getElementById("openbtn");
    const home = document.querySelector(".home");
    const formcontainer = document.querySelector(".formcontainer");
    const formclose = document.querySelector(".formclose");
    const signup = document.getElementById("signup"); // Removed the dot (#) as getElementById doesn't need it
    
    const login = document.getElementById("login");

    
    openbtn.addEventListener("click", function() {
        home.classList.add("show");
    });

    formclose.addEventListener("click", function() {
        home.classList.remove("show");
    });

    signup.addEventListener("click", function(e) { // Changed arrow function to regular function for consistency
        e.preventDefault();
        formcontainer.classList.add("active");
    });

    login.addEventListener("click", function(e) { // Changed arrow function to regular function for consistency
        e.preventDefault();
        formcontainer.classList.remove("active");
    });
}); 




