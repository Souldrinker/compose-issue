System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, TestView2;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TestView2 = _export("TestView2", (function () {
        function TestView2() {
          _classCallCheck(this, TestView2);
        }

        _prototypeProperties(TestView2, null, {
          activate: {
            value: function activate(id) {
              this.id = id;
            },
            writable: true,
            configurable: true
          }
        });

        return TestView2;
      })());
    }
  };
});