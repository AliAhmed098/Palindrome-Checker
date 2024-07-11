function checkPalindrome() {
    var userInput = document.getElementById('userInput').value.trim().toLowerCase();

    if (userInput === '') {
        alert('Please enter a word or phrase.');
        return;
    }

    var reversedInput = userInput.split('').reverse().join('');

    if (userInput === reversedInput) {
        document.getElementById('result').textContent = `"${userInput}" is a palindrome!`;
    } else {
        document.getElementById('result').textContent = `"${userInput}" is not a palindrome.`;
    }
}
