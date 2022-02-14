const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const btn = document.querySelector(".button");


const errorMessage = document.querySelector(".msg")

const items = document.querySelector(".items");


//const change = document.querySelector('.res');
//change.textContent = 'Hello World';



btn.onclick = (e) => {
  e.preventDefault();  // nao vai recarregar a pagina ao clicar no botao
  
  const emailValue = emailInput.value;
  const  passwordValue = passwordInput.value;
  

  if (emailValue === '' || passwordValue === '') {
    errorMessage.textContent = "Please fill out the fields";
    errorMessage.classList= "error";

   setTimeout(() => {
    errorMessage.textContent = "";
    errorMessage.classList= "";
    }, 3000);
    return;
  }

  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `E-mail: ${emailValue} <br /> Password: ${passwordValue}`;

  items.appendChild(li);

 
 emailInput.value = '';
 passwordInput.value = '';
  
}

//const change = document.querySelector(".res");
//change.textContent = "Hello World";

