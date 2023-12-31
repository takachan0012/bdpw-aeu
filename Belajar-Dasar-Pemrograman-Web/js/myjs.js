function dropdown() {
    document.getElementById("mydropdown").classList.toggle("show");
}

window.onclick = event => {
    if (!event.target.matches(".dropbutton")) {
        let dropdown = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdown.length; i++) {
            let openDropDown = dropdown[i];
            if (openDropDown.classList.contains("show")) {
                openDropDown.classList.remove("show");
            }
        }
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});