System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, TestView;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TestView = _export("TestView", (function () {
        function TestView() {
          _classCallCheck(this, TestView);
        }

        _prototypeProperties(TestView, null, {
          activate: {
            value: function activate(id) {
              this.id = id;
            },
            writable: true,
            configurable: true
          }
        });

        return TestView;
      })());
    }
  };
});