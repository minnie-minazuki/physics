function toggleDetails(methodId) {
    const details = document.getElementById(methodId);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
