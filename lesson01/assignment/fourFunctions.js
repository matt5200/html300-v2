// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#four-functions')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be manipulated
    let data = [1, 2, 3]

    const inputField = document.querySelector('#four-functions .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // TODO
    const ret = data.map( x =>  x % userNumber);

    // TODO
    document.querySelector('#four-functions .output').innerHTML = ret.toString();

    // Clear the form field so the user can try again
    inputField.value = ''
  })




})