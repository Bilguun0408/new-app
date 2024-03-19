// delgetstei ajillah controller
var uiController = (function () {})();

// sanhuutei ajillah controller
var financeController = (function () {})();

// program holbogch controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1.oruulah ogogdliig delgetsees olj awna
    console.log("Ð”ÑÐ»Ð³ÑÑ†ÑÑÑ Ó©Ð³Ó©Ð³Ð´Ð»Ó©Ó© Ð°Ð²Ð°Ñ… Ñ…ÑÑÑÐ³");
    // 2.olj awsan ogogdluudee sanhuugiin controllert damjuulj tend hadgalna
    // 3. olj awsan ogogdluudee web deeree tohiroh hesegt ni gargana
    // 4.toswiig tootsoolno
    // 5.etssiin uldegdel tootsoog delgetsend gargana
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
