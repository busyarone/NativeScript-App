"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    // Your TypeScript logic goes here
    function AppComponent() {
        console.log("Hello world");
        console.log({
            type: "Apple",
            color: "Red"
        });
        console.dir({
            type: "Apple",
            color: "Red"
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar title=\"My App\"></ActionBar>\n    <!-- Your UI components go here -->\n    <ActionBar title=\"My Apple\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/apple.jpg\"></Image>\n  ",
        styles: ["\n  @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360); }\n    }\n    Image {\n      animation-name: spin; animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFxQjFDLElBQWEsWUFBWTtJQUN2QixrQ0FBa0M7SUFDbEM7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDVixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNWLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLFlBQVk7SUFuQnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsa05BS1Q7UUFDRCxNQUFNLEVBQUMsQ0FBQyxzUUFTUCxDQUFDO0tBQ0gsQ0FBQzs7R0FDVyxZQUFZLENBYXhCO0FBYlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiPjwvQWN0aW9uQmFyPlxuICAgIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcGxlXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XG4gICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2FwcGxlLmpwZ1wiPjwvSW1hZ2U+XG4gIGAsXG4gIHN0eWxlczpbYFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwKTsgfVxuICAgIH1cbiAgICBJbWFnZSB7XG4gICAgICBhbmltYXRpb24tbmFtZTogc3BpbjsgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGRcIik7XG4gICAgY29uc29sZS5sb2coe1xuICAgICAgdHlwZTogXCJBcHBsZVwiLFxuICAgICAgY29sb3I6IFwiUmVkXCJcbiAgICB9KTtcbiAgICBjb25zb2xlLmRpcih7XG4gICAgICB0eXBlOiBcIkFwcGxlXCIsXG4gICAgICBjb2xvcjogXCJSZWRcIlxuICAgIH0pO1xuICB9XG59XG4iXX0=