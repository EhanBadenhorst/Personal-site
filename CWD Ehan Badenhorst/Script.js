document.getElementById("aboutMeBtn").addEventListener("click", function() {
    alert("Hello! I'm a student who loves coding and learning new things.");
});

const hobbiesList = document.getElementById("hobbies");
const listItems = hobbiesList.getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "#e0e0e0";
    });
    listItems[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
    });
}

document.getElementById("welcomeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("nameInput").value;
    alert("Welcome, " + name + "!");
});
