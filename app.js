// delgetstei ajillah controller
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDomStrings: function () {
      return DOMstrings;
    },
  };
})();

// sanhuutei ajillah controller
// dald ogogdol bogood shuud handah bolomjgui private data
var financeController = (function () {
  // private data
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // private data
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  // private data
  var data = {
    items: {
      inc: [],
      exp: [],
    },

    total: {
      inc: 0,
      exp: 0,
    },
  };

  return {
    addItem: function (type, desc, val) {
      var item, id;
      
          if (data.items[type].length === 0) id = 1;
          
          else {
              id = data.items[type][data.items[type].length - 1].id + 1;
          }

      if (type === "inc") {
        item = new Income(id, desc, value);
      } else {
        item = new Expense(id, desc, val);
      }

      data.items[type].push(item);
      },
      
      seeData: function () {
          return data;
      }
  };
})();

// program holbogch controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1.oruulah ogogdliig delgetsees olj awna
    var input = uiController.getInput();

    // 2.olj awsan ogogdluudee sanhuugiin controllert damjuulj tend hadgalna
    financeController.addItem(input.type, input.description, input.value);

    // 3. olj awsan ogogdluudee web deeree tohiroh hesegt ni gargana
    // 4.toswiig tootsoolno
    // 5.etssiin uldegdel tootsoog delgetsend gargana
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDomStrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      setupEventListeners;
    },
  };
})(uiController, financeController);

appController.init();
