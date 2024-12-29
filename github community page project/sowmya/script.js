document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline li');
    const container = document.querySelector('.container');
    const yearElement = document.getElementById('year');
    const eventNameElement = document.getElementById('eventName');
    const contentTextElement = document.getElementById('contentText');

    timelineItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            timelineItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');

            // Get the data attributes from the clicked item
            const newBackgroundImage = this.getAttribute('data-image');
            const newEventName = this.getAttribute('data-event');
            const newYear = this.getAttribute('data-year');
            const newDescription = this.getAttribute('data-description');

            // Change the background image of the container
            container.style.backgroundImage = `url(${newBackgroundImage})`;

            // Change the content
            yearElement.textContent = newYear;
            eventNameElement.textContent = newEventName;
            contentTextElement.textContent = newDescription;
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".header .navbar a");
    const navbarHeight = 50; 

    navbarLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        const targetHref = e.target.getAttribute("href");

        if (targetHref.startsWith("#")) {
            e.preventDefault();
            const targetSection = document.querySelector(targetHref);
            if (targetSection) {
                const targetPosition = targetSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        }
    }
});
