var input = document.getElementById("randomWord");
resetBtn.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("reset-btn").click();
  }
});