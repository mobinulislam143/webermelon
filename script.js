const slider = document.querySelector('.testomonial-slider');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slidesToShow = 2; // Number of cards shown at a time

function updateSlider(index) {
    const slideWidth = slider.clientWidth / slidesToShow;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider(currentSlide);
    });
});

// Optional: Drag functionality for touch devices
let startX = 0;
let isDragging = false;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});


slider.addEventListener('mouseup', () => {
    isDragging = false;
});

slider.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const diff = startX - e.clientX;
        if (diff > 50) {
            // Move to the next slide
            if (currentSlide < dots.length - 1) {
                currentSlide++;
                updateSlider(currentSlide);
            }
            isDragging = false;
        } else if (diff < -50) {
            // Move to the previous slide
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider(currentSlide);
            }
            isDragging = false;
        }
    }
});

// Responsive adjustment for window resizing
window.addEventListener('resize', () => {
    updateSlider(currentSlide);
});





const skillsList = document.querySelector('.skills-list');

skillsList.addEventListener('animationiteration', () => {
    // Duplicate the list once the animation completes for a seamless loop
    skillsList.appendChild(skillsList.firstElementChild);
});


// JavaScript to ensure continuous scroll by appending items back
const skillsLists = document.querySelector('.skills-list');

// Clone the items and append them for a smoother scroll effect
const cloneItems = skillsLists.innerHTML;
skillsLists.innerHTML += cloneItems;
