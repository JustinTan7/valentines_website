const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');

yesButton.addEventListener('click', function() {
    window.location.href = 'yesPage.html'
});

noButton.addEventListener('click', function() {
    window.location.href = 'noPage.html'
})