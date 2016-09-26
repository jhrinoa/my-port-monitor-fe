import { Routes, RouterModule } from '@angular/router';

import { ConnectedClientsComponent } from './connected-clients.component';
import { AppComponent } from './app.component';

// import { LoginComponent } from './login/index';
// import { HomeComponent } from './home/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: 'server/:ipAddress',
        component: ConnectedClientsComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);