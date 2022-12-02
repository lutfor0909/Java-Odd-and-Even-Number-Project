//  User Input
let userInput = prompt('Enter your Odd Number');

// String to Intiger Convert

userInput = parseInt(userInput);

// odd and even number condition

if (userInput % 2 ==0)
{
    alert('This inputed Number ' + userInput + ' is Even Number'); // concatinaion
}
else
{
    alert('This inputed Number ' + userInput + ' is Odd Number');//Concatination
}