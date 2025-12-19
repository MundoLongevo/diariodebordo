// js/script.js

// Função para salvar e restaurar valores do localStorage
function initLocalStorage() {
  // Busca todos os elementos com atributo 'data-save'
  const savableElements = document.querySelectorAll('[data-save]');
  
  savableElements.forEach(el => {
    const key = el.id || el.name;

    if (!key) {
      console.warn('Elemento com data-save sem ID ou name:', el);
      return;
    }

    // Restaura valor salvo, se existir
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      if (el.type === 'checkbox' || el.type === 'radio') {
        el.checked = savedValue === 'true';
      } else {
        el.value = savedValue;
      }
    }

    // Salva ao alterar
    el.addEventListener('input', () => {
      if (el.type === 'checkbox' || el.type === 'radio') {
        localStorage.setItem(key, el.checked.toString());
      } else {
        localStorage.setItem(key, el.value);
      }
    });
  });
}

// Inicializa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  initLocalStorage();
});