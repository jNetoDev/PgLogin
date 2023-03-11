
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita que o formulário seja enviado ao servidor

  // verifique se os campos de entrada são válidos
  if (usernameInput.value.trim() === '') {
    alert('Por favor, insira seu nome de usuário.');
    usernameInput.focus();
    return false;
  }

  if (passwordInput.value.trim() === '') {
    alert('Por favor, insira sua senha.');
    passwordInput.focus();
    return false;
  }

  // se os campos são válidos, envie o formulário ao servidor
  form.submit();
});

