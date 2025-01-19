document.querySelectorAll('.faq h3').forEach(function (question) {
    question.addEventListener('click', function () {
        var faq = question.parentElement;
        faq.classList.toggle('active'); // Toggle visibility of the answer
    });
});
