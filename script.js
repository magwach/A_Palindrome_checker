const inputString = document.getElementById("text-input");
const output = document.getElementById("result");
const form = document.getElementById("palindrome-form");
const clear = document.getElementById("clear-btn");

const cleanInputString = (str) => 
    {
        const checker = /[^a-zA-Z0-9]/g;
        return str.replace(checker, "");
    }

const validateInput = (input) => 
    {
        if (input.length >=1)
        {
            const cleanedInput = cleanInputString(input).toLowerCase();
            const reversedInput= cleanedInput.split('').reverse().join('');
        if (cleanedInput === reversedInput)
            {
               return output.innerHTML = `<b>${input}</b> is a palindrome.`;
            }
        
        else
        {
            console.log('true');
            return output.innerHTML = `<b>${input}</b> is not a palindrome.`;
            
        }
                    
        }
        else
        {
            alert("Please input a value");
            return;
        }
        
      }


const submit = (e) =>
    {
        e.preventDefault();
        validateInput(inputString.value);
    }
const clearForm = (e) =>
    {
        e.preventDefault();
        inputString.value = '';
        output.innerText = '';
    }
form.addEventListener('submit', submit);
clear.addEventListener('click', clearForm);
