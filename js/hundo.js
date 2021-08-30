//Get the value from the UI of the page/Interface
//Start or Controller function(s)
function getValues(){
   //get value from the page/screen
   let startValue = document.getElementById("startValue").value;
   let endValue = document.getElementById("endValue").value;

   //We need to validate our input before using it
   //Convert a string into integer by: parse into integer
   startValue = parseInt(startValue);
   endValue = parseInt(endValue);

   //Checking our users inputs
   if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
      //We call generate Numbers
      let numbers = generateNumbers(startValue, endValue);
      //We call displayNumbers
      displayNumbers(numbers);
   } else{
      alert("Error!! You must enter an integers");
   }
}

//Generate numbers from the start value to the end value
//Logic function(s)
function generateNumbers(sValue, eValue){
   let numbers = [];

   //We want to get all numbers from start to end
   for (let index = sValue; index <= eValue; index++) {
      //This will execute in a loop until index = eValue
      numbers.push(index); //Adding numbers to array
   }
   return numbers;
}

//Display the numbers and mark even numbers bold
//Display or View function(s)
function displayNumbers(numbers){

   let className = "even";
   let templateRows = "";
   for (let index = 0; index < numbers.length; index++) {
      let number = numbers[index];

      //Checking if number is even
      if (number % 2 == 0) {
         className = "even";
      }
      else {
         className = "odd";
      }
      //This does not render correctly inside prism, see the source code.
      templateRows += `<tr><td class="${className}">${number}</td></tr>`;
   }
   document.getElementById("results").innerHTML = templateRows;
}