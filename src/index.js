import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/var.styl';

(async function App() {
  console.log('Hola');
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
