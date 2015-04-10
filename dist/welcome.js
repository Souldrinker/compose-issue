System.register(['RubaXa/Sortable', 'aurelia-framework'], function (_export) {
  var Sortable, computedFrom, _classCallCheck, _createClass, Welcome, UpperValueConverter;

  return {
    setters: [function (_RubaXaSortable) {
      Sortable = _RubaXaSortable['default'];
    }, function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.sortableTexts = ['Text1', 'Text2'];
        }

        _createClass(Welcome, [{
          key: 'fullName',
          get: function () {
            return '' + this.firstName + ' ' + this.lastName;
          }
        }, {
          key: 'welcome',
          value: function welcome() {
            alert('Welcome, ' + this.fullName + '!');
          }
        }, {
          key: 'attached',
          value: function attached() {
            this.setupSortable();
          }
        }, {
          key: 'setupSortable',
          value: function setupSortable() {
            var _this = this;

            var container = document.getElementById('sortableDiv');
            this.sort = Sortable.create(container, {
              animation: 150,
              onUpdate: function onUpdate(evt) {
                _this.reorder(evt.oldIndex, evt.newIndex);
              }
            });
          }
        }, {
          key: 'reorder',
          value: function reorder(from, to) {
            this.sortableTexts.splice(to, 0, this.sortableTexts.splice(from, 1)[0]);
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs2REFHYSxPQUFPLEVBc0NQLG1CQUFtQjs7Ozs7O3VDQXhDeEIsWUFBWTs7Ozs7Ozs7O0FBRVAsYUFBTztpQkFBUCxPQUFPO2dDQUFQLE9BQU87O2VBQ2xCLE9BQU8sR0FBRyx3Q0FBd0M7ZUFDbEQsU0FBUyxHQUFHLE1BQU07ZUFDbEIsUUFBUSxHQUFHLEtBQUs7ZUFDaEIsYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQzs7O3FCQUp0QixPQUFPOztlQVVOLFlBQUU7QUFDWix3QkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7V0FDN0M7OztpQkFFTSxtQkFBRTtBQUNQLGlCQUFLLGVBQWEsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO1dBQ3JDOzs7aUJBRVMsb0JBQUU7QUFDWCxnQkFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1dBQ3JCOzs7aUJBRWdCLHlCQUFFOzs7QUFDYixnQkFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN6RCxnQkFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtBQUNuQyx1QkFBUyxFQUFFLEdBQUc7QUFDZCxzQkFBUSxFQUFHLGtCQUFDLEdBQUcsRUFBSztBQUNoQixzQkFBSyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7ZUFDNUMsQUFBQzthQUNMLENBQUMsQ0FBQztXQUNOOzs7aUJBRUcsaUJBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQztBQUNoQixnQkFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUN4RTs7O2VBbENXLE9BQU87Ozt5QkFBUCxPQUFPOztBQXNDUCx5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3hCLGdCQUFDLEtBQUssRUFBQztBQUNYLG1CQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDckM7OztlQUhVLG1CQUFtQjs7O3FDQUFuQixtQkFBbUIiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9