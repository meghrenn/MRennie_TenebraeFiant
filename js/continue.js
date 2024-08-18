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

            window.location.href = "../beginning/origins.html";
        }, 700);
    });
});
