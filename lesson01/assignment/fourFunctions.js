// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.getElementById("function-1")

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be manipulated
    let data = [120, 270, 35]

    const inputField = document.querySelector('#function-1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // TODO
    const ret = data.map( x =>  x % userNumber);

    // TODO
    document.querySelector('#function-1 .output').innerHTML = ret.toString();

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.getElementById('function-2')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be manipulated
    let data = [120, 270, 35]

    const inputField = document.querySelector('#function-2 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // TODO
    const ret = data.filter( x =>  x > userNumber);

    if (data.length == 0) 
    {
      // TODO
      document.querySelector('#function-2 .output').innerHTML = "List had no values greater than user input";
    }
    else 
    {
      // TODO
      document.querySelector('#function-2 .output').innerHTML = ret.toString();
    }


    // Clear the form field so the user can try again
    inputField.value = ''
  })
})