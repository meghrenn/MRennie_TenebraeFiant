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



var continuePage = {
    "level": "cont-architect",
    "collapse": "cont-architect",
    "unearthed": "cont-meliorist",
    "like-light": "cont-tunnel",
    "logo": "cont-puzzling",
    "fear": "cont-tale",
    "niitsitapi": "cont-place"
    // architect -> failure ?
    // tunnel -> evil - light ?
    // place -> pessimism ?
}
var currentPage = document.body.getAttribute("data-page-id");
var correctContinue = continuePage[currentPage];

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("continue").addEventListener("click", function () {
        document.body.style.backgroundColor = 'var(--green-dark)';

        var mainHeader = document.getElementById("main-header");
        if (mainHeader) {
            mainHeader.style.backgroundColor = 'var(--green-medium)';
        }

        setTimeout(function () {
            document.body.style.backgroundColor = '';

            if (mainHeader) {
                mainHeader.style.backgroundColor = '';
            }

            window.location.href = correctContinue + ".html";
        }, 700);
    });
});

// if groupId === continue
//     look at the boolean variables
// set boolean variable [

// count how many are set to true
// store that number as an integer variable trueConts







