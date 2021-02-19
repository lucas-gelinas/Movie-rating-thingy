// Connecting button to the function
document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
  // Taking user input to display appropriate message
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // Checking user input, in order to determine what answer the user is getting
  if (userInput > 17) {
    document.getElementById('answer').innerHTML = 'You are old enough to watch R rated movies on your own.'
  } else if (userInput > 12) {
    document.getElementById('answer').innerHTML = 'You are old enough to watch PG-13 rated movies on your own.'
  } else if (userInput > 5) {
    document.getElementById('answer').innerHTML = 'You are old enough to watch G rated movies on your own.'
  } else {
    document.getElementById('answer').innerHTML = 'You will need to watch movies with someone older than you.'
  }
}
