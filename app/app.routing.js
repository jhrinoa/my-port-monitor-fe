"use strict";
var router_1 = require('@angular/router');
// import { LoginComponent } from './login/index';
// import { HomeComponent } from './home/index';
// import { AuthGuard } from './_guards/index';
var appRoutes = [
    // { path: 'login', component: LoginComponent },
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map