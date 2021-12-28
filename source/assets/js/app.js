// Использовать строгий режим
"use strict";

// Выполнить после загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  // Предотвратить нежелательные анимации во время загрузки страницы
  function preventAnimationsBeforeLoad() {
    document.body.classList.remove("beforeLoad");
  }
  preventAnimationsBeforeLoad();
});
