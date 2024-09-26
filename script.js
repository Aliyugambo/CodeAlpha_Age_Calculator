document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('dob-day').value);
    const month = parseInt(document.getElementById('dob-month').value);
    const year = parseInt(document.getElementById('dob-year').value);

    if (!isValidDate(day, month, year)) {
        document.getElementById('result').innerHTML = 'Invalid Date. Please try again.';
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - year;

    if (
        today.getMonth() + 1 < month || 
        (today.getMonth() + 1 === month && today.getDate() < day)
    ) {
        age--;
    }

    document.getElementById('result').innerHTML = `You are ${age} years old.`;
});

function isValidDate(day, month, year) {
    const dob = new Date(year, month - 1, day);
    return dob.getDate() === day && dob.getMonth() + 1 === month && dob.getFullYear() === year;
}
