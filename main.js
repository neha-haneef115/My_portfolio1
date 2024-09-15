// Attach event listeners to all buttons with class 'btn1', 'btn2', 'btn3'
document.querySelectorAll('.btn1, .btn2, .btn3').forEach(button => {
    button.addEventListener('click', function() {
        // Get the current project div (parent element of the button)
        const currentProjectDiv = this.parentElement;

        // Find all project divs
        const allProjects = document.querySelectorAll('.pro > div');

        // Collapse all project divs except the current one
        allProjects.forEach(project => {
            if (project === currentProjectDiv) {
                // Toggle the expanded state of the clicked project
                project.classList.toggle('expanded');
            } else {
                // Ensure other project divs are collapsed
                project.classList.remove('expanded');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.pro div');

    projects.forEach(project => {
        const video = project.querySelector('video');
        const playIcon = project.querySelector('.bx-play-circle');

        playIcon.addEventListener('click', function() {
            if (video.paused) {
                // Play the video and expand it
                video.play();
                video.classList.add('expanded');
                playIcon.classList.add('expanded'); // Add the expanded class to the icon
                playIcon.style.opacity = '0'; // Hide the play icon after clicking
                video.controls = true; // Show video controls
            } else {
                // Pause the video and revert its size
                video.pause();
                video.classList.remove('expanded');
                playIcon.classList.remove('expanded'); // Remove the expanded class from the icon
                playIcon.style.opacity = '1'; // Show the play icon again
                video.controls = false; // Hide video controls
            }
        });

        // Ensure that video exits expanded mode when clicked outside
        video.addEventListener('click', function() {
            if (!video.paused) {
                video.pause();
                video.classList.remove('expanded');
                playIcon.classList.remove('expanded'); // Remove the expanded class from the icon
                playIcon.style.opacity = '1'; // Show the play icon again
                video.controls = false; // Hide video controls
            }
        });
    });
});
