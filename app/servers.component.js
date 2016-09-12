"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ServersComponent = (function () {
    function ServersComponent() {
    }
    ServersComponent.prototype.ngOnInit = function () {
        this.servers = [
            {
                ipAddress: '10.5.5.125',
                hostName: null,
                port: 8443
            },
            {
                ipAddress: '10.5.5.126',
                hostName: null,
                port: 9444
            }
        ];
    };
    ServersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-servers',
            templateUrl: 'servers.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ServersComponent);
    return ServersComponent;
}());
exports.ServersComponent = ServersComponent;
//# sourceMappingURL=servers.component.js.map