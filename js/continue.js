// localStorage.removeItem('continueProgress');

document.addEventListener('DOMContentLoaded', function () {
    // Initialize continueProgress in localStorage if it doesn't exist
    if (localStorage.getItem('continueProgress') === null) {
        localStorage.setItem('continueProgress', '1');
    }

    // Retrieve continueProgress value from localStorage
    let continueProgress = parseInt(localStorage.getItem('continueProgress'));

    console.log(continueProgress);

    // Create a unique key for each page using window.location.pathname
    const pageKey = `continueClicked_${window.location.pathname}`;

    // Function to handle #continue clicks
    function handleContinueClick() {
        // Check if #continue on this page was already clicked
        if (localStorage.getItem(pageKey) !== 'true') {
            // Increment continueProgress
            let continueProgress = parseInt(localStorage.getItem('continueProgress'));
            if (continueProgress < 3) {
                continueProgress++;
                localStorage.setItem('continueProgress', continueProgress);
            }

            // Mark this page as clicked
            localStorage.setItem(pageKey, 'true');
        }

        // Change background color and redirect
        document.body.style.backgroundColor = 'var(--green-dark)';

        var mainHeader = document.getElementById("main-header");
        if (mainHeader) {
            mainHeader.style.backgroundColor = 'var(--green-medium)';
        }

        setTimeout(function () {
            // Reset background colors
            document.body.style.backgroundColor = '';
            if (mainHeader) {
                mainHeader.style.backgroundColor = '';
            }

            // Redirect to the next page (assuming correctContinue is defined)
            window.location.href = "../continue/rocks" + continueProgress + ".html";
        }, 700);
    }

    // Attach the click event listener to the #continue button
    const continueButton = document.getElementById('continue');
    if (continueButton) {
        continueButton.addEventListener('click', handleContinueClick);
    }

    // You can use this to check the current value of continueProgress
    console.log('Continue progress:', localStorage.getItem('continueProgress'));
});