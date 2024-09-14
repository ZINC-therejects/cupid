// Custom function for linear scrolling with slower speed
function slowLinearScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset; // Corrected scroll calculation
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    function scrollStep() {
        const currentTime = performance.now();
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress never exceeds 1
        const scrollY = startPosition + distance * progress;

        window.scrollTo(0, scrollY);

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

document.getElementById('scrollButton').addEventListener('click', function() {
    const targetSection = document.getElementById('contentSection');
    slowLinearScroll(targetSection, 3000); // 10000ms = 5 seconds for slower linear scroll
});
function goToAboutUs() {
    window.location.href = "aboutus.html"; // Replace with the URL or file path you want
}
function goToNextPage() {
    window.location.href = 'fea.html'; // Replace with your target file or URL
}
