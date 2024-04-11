// JavaScript for password.html

// Function to generate a password with the option for Symbols, Letters, and Numbers
function generatePassword() {
    var length = parseInt(document.getElementById("length").value);
    var useSymbols = document.getElementById("symbols").checked;
    var useNumbers = document.getElementById("numbers").checked;
    var useLetters = document.getElementById("letters").checked;

    var charset = "";
    var password = "";

    if (useSymbols) {
      charset += "!@#$%&? ";
    }
    if (useNumbers) {
      charset += "0123456789";
    }
    if (useLetters) {
      charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById("password").value = password;
}

// Functions to open and close the burger menu
function openMenu() {
    document.getElementById("Menu").style.width = "100%";
}

function closeMenu() {
    document.getElementById("Menu").style.width = "0%";
}

// Function to copy the generated password to clipboard via a button
function clipboard() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("Tooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

// part of tooltip, not really sure what it does
function outFunc() {
    var tooltip = document.getElementById("Tooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

// Function to display the sliders value in a span
function slider() {
    var slider = document.getElementById("length");
    var output = document.getElementById("value");
    output.innerHTML = slider.value;
    document.getElementById("value").value = this.value;
}

// Calls the slider function on load to display the value
document.addEventListener("DOMContentLoaded", function() {
  var slider = document.getElementById("length");
  var output = document.getElementById("value");
  output.innerHTML = slider.value;
  document.getElementById("value").value = this.value;
});
