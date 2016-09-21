
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { ServersComponent } from './servers.component';
import { ConnectedClientsComponent } from './connected-clients.component';
import { routing }        from './app.routing';

// import { AuthGuard } from './_guards/index';
// import { AuthenticationService, UserService } from './_services/index';
// import { LoginComponent } from './login/index';
// import { HomeComponent } from './home/index';

import { ClientsService } from './clients.service';
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ServersComponent,
        ConnectedClientsComponent
        // LoginComponent,
        // HomeComponent
    ],
    providers: [
        // AuthGuard,
        // AuthenticationService,
        // UserService,

        // providers used to create fake backend
        // fakeBackendProvider,
        // MockBackend,
        BaseRequestOptions,
        ClientsService,
        { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        { provide: SEED_DATA, useClass: InMemoryDataService }     // in-mem server data
        
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }