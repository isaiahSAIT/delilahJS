/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const fullDayRate = 35; 
const halfDayRate = 20; 
let dailyRate = fullDayRate; 
const dayElements = document.querySelectorAll('.day-selector li'); 
const fullDayButton = document.getElementById('full'); 
const halfDayButton = document.getElementById('half'); 
const clearButton = document.getElementById('clear-button'); 
const calculatedCostElement = document.getElementById('calculated-cost');
let selectedDays = new Set(); 
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayElements.forEach(function(day) {
    day.addEventListener('click', function() {
        toggleDay(day);
    });
});

function toggleDay(day) {
    if (day.classList.contains('clicked')) {
        day.classList.remove('clicked');
        selectedDays.delete(day.id);
    } else {
        day.classList.add('clicked');
        selectedDays.add(day.id);
    }
    calculateCost();
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click', function() {
    clearDays();
});
function clearDays() {
    dayElements.forEach(function(day) {
        day.classList.remove('clicked');
    });
    selectedDays.clear();
    calculateCost();
}
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
fullDayButton.addEventListener('click', function() {
    changeRate(fullDayRate, fullDayButton, halfDayButton);
});
halfDayButton.addEventListener('click', function() {
    changeRate(halfDayRate, halfDayButton, fullDayButton);
});

function changeRate(rate, buttonToAdd, buttonToRemove) {
    dailyRate = rate;
    buttonToAdd.classList.add('clicked');
    buttonToRemove.classList.remove('clicked');
    calculateCost();
}
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
    const totalCost = selectedDays.size * dailyRate;
    calculatedCostElement.innerHTML = totalCost;
}