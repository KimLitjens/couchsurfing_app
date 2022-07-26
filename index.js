var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? '⭐' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = "review total ".concat(value.toString(), "| last reviewed by ").concat(reviewer, " ").concat(iconDisplay);
    }
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var you = {
    userName: 'Bobby',
    isReturning: true
};
function populateUser(isReturning, userName) {
    if (isReturning && returningUserDisplay) {
        returningUserDisplay.innerHTML = 'back';
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}
populateUser(you.isReturning, you.userName);
