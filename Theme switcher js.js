let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

themeUserInput.addEventListener("keyup", function(event) {
    let themeUserInputValue = themeUserInput.value;
    if (themeUserInputValue === "Light" && event.key === "Enter") {
        bgContainer.style.backgroundImage = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png)";
        heading.style.color = "#ffffff";
    } else if (themeUserInputValue === "Dark" && event.key === "Enter") {
        bgContainer.style.backgroundImage = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png)";
        heading.style.color = "#014d40";
    } else if (themeUserInputValue !== "Dark" || themeUserInputValue !== "Light" && event.key === "Enter") {
        alert("Enter the valid theme.")
    }
})
/*themeUserInput.addEventListener("keydown",themeChanger())*/