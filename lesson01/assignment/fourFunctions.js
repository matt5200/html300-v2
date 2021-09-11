// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the funcion-1 form, and handle its submit event
  const exampleForm = document.getElementById("function-1")

  // Add event listner to submit event
  exampleForm.addEventListener('onclick', function(event){
    
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be manipulated
    let data = [120, 270, 35]

    // Get user input and parse for int
    const inputField = document.querySelector('#function-1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Perform a mod of each number with user input in data array and return resulting array
    const ret = data.map( x =>  x % userNumber);

    // Set inner html text to manipulated array
    document.querySelector('#function-1 .output').innerHTML = ret.toString();

    // Console log the manipualted array
    console.log(`Template literals make things so easy! Here is the result of the prior calculation ${ret}`);

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the funcion-2 form, and handle its submit event
  const exampleForm = document.getElementById('function-2')

  exampleForm.addEventListener('submit', function(event){

    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be manipulated
    let data = [120, 270, 35]

    // Get user input and parse for int
    const inputField = document.querySelector('#function-2 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Remove all values in array if they are less than user input
    const ret = data.filter( x =>  x > userNumber);

    // If array is empty set inner HTML to message, else set to array
    if (data.length == 0) 
    {
      document.querySelector('#function-2 .output').innerHTML = "List had no values greater than user input";
    }
    else 
    {
      document.querySelector('#function-2 .output').innerHTML = ret.toString();
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the function-3 form, and handle its submit event
  const exampleForm = document.getElementById('function-3')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be manipulated
    let data = [120, 270, 35]

    const inputField = document.querySelector('#function-3 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Return array with each summed with user input
    const ret = data.map( x =>  x + userInput*1);

    // Set inner html to array
    document.querySelector('#function-3 .output').innerHTML = ret;

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.getElementById('function-4')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be manipulated
    let data = [4, 12, 14]

    const inputField = document.querySelector('#function-4 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Sum all values in array and multiply by user input
    const ret = data.reduce((prev, next) => prev + next)*userNumber;

    // Set inner html to array
    document.querySelector('#function-4 .output').innerHTML = ret;

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})
