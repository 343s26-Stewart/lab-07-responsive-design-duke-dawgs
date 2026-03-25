const navItems = document.querySelectorAll("nav a");

navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        const text = this.textContent.trim();

        if (text.includes("Dark")) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else if (text.includes("Light")) {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        } else {
            document.body.classList.remove("dark", "light");
        }
    });
});
