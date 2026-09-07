const button = document.getElementById('greetButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Your sample workspace is ready to build on!';
});
