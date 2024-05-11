var links = document.querySelectorAll(".underConstraction");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        alert("Funkcjonalność w budowie");
    });
});