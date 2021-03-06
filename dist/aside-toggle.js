System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, BoundViewFactory, ViewSlot, _prototypeProperties, _classCallCheck, AsideToggleTemplateController;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AsideToggleTemplateController = _export("AsideToggleTemplateController", (function () {
        function AsideToggleTemplateController(viewFactory, viewSlot) {
          _classCallCheck(this, AsideToggleTemplateController);

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.showing = false;
        }

        _prototypeProperties(AsideToggleTemplateController, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("aside-toggle").withProperty("value", "valueChanged", "aside-toggle");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot];
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(val) {
              !this.view;
              console.log(this.view);
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              console.log(this);
              this.element.classList.add("aside-toggle");
            },
            writable: true,
            configurable: true
          },
          toggle: {
            value: function toggle() {
              this.aside.toggle();
            },
            writable: true,
            configurable: true
          }
        });

        return AsideToggleTemplateController;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLXRvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSx5Q0FFN0IsNkJBQTZCOzs7QUFGcEMsY0FBUSxzQkFBUixRQUFRO0FBQUUsc0JBQWdCLHNCQUFoQixnQkFBZ0I7QUFBRSxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFFN0IsbUNBQTZCO0FBaUI3QixpQkFqQkEsNkJBQTZCLENBaUI1QixXQUFXLEVBQUUsUUFBUTtnQ0FqQnRCLDZCQUE2Qjs7QUFtQnBDLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxRQUFRLEdBQU0sUUFBUSxDQUFDO0FBQzVCLGNBQUksQ0FBQyxPQUFPLEdBQU8sS0FBSyxDQUFDO1NBRzVCOzs2QkF4QlUsNkJBQTZCO0FBQ2pDLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2IscUJBQU8sUUFBUSxDQUNaLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUNsQyxZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUc1RDs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBRVoscUJBQU8sQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQTthQUVwQzs7Ozs7QUFhSCxzQkFBWTttQkFBQSxzQkFBQyxHQUFHLEVBQUM7QUFDZixBQUFDLGVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNaLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQWlCdkI7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRTtBQUVSLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7YUFFM0M7Ozs7QUFFRCxnQkFBTTttQkFBQSxrQkFBRTtBQUNOLGtCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3JCOzs7Ozs7ZUF4RFUsNkJBQTZCIiwiZmlsZSI6ImFzaWRlLXRvZ2dsZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9