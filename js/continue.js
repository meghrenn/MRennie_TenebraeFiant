// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById("continue").addEventListener("click", function () {
//         document.body.style.backgroundColor = 'var(--green-dark)';
//                 document.getElementById("main-header").style.backgroundColor = 'var(--green-medium)';
//         setTimeout(function () {
//             document.body.style.backgroundColor = '';
//             document.getElementById("main-header").style.backgroundColor = '';
//             window.location.href = "../beginning/origins.html";
//         }, 700);
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById("continue").addEventListener("click", function () {
//         document.body.style.backgroundColor = 'var(--green-dark)';

//         var mainHeader = document.getElementById("main-header");
//         if (mainHeader) {
//             mainHeader.style.backgroundColor = 'var(--green-medium)';
//         }

//         setTimeout(function () {
//             document.body.style.backgroundColor = '';

//             if (mainHeader) {
//                 mainHeader.style.backgroundColor = '';
//             }

//             window.location.href = "../beginning/origins.html";
//         }, 700);
//     });
// });


// I am coding a website, I want to start off having the following boolean variables set to false and put in local storage in an array named contProgress: architectCont, melioristCont, placeCont, puzzlingCont, taleCont, tunnelCont, failureCont
// I want to retrieve the boolean variables from local storage, check the current page's pageID (stored in the body tag), and set the boolean variable named [pageID] + 'Cont' to true. 



// document.addEventListener('DOMContentLoaded', function () {
//     // var continuePage = {
//     //     "level": "cont-architect",
//     //     "collapse": "cont-architect",
//     //     "unearthed": "cont-meliorist",
//     //     "like-light": "cont-tunnel",
//     //     "logo": "cont-puzzling",
//     //     "fear": "cont-tale",
//     //     "niitsitapi": "cont-place",

//     //     //???
//     //     "failure": "cont-architect",
//     //     "pessimism": "cont-place",
//     //     // tunnel -> evil - light ?
//     // }

//     var currentPage = document.body.getAttribute("data-page-id");
//     var correctContinue = continuePage[currentPage];

//     document.getElementById("continue").addEventListener("click", function () {
//         document.body.style.backgroundColor = 'var(--green-dark)';

//         var mainHeader = document.getElementById("main-header");
//         if (mainHeader) {
//             mainHeader.style.backgroundColor = 'var(--green-medium)';
//         }

//         setTimeout(function () {
//             document.body.style.backgroundColor = '';

//             if (mainHeader) {
//                 mainHeader.style.backgroundColor = '';
//             }

//             window.location.href = "../continue/" + correctContinue + ".html";
//         }, 700);
//     });
// });

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
            continueProgress++;
            localStorage.setItem('continueProgress', continueProgress);

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