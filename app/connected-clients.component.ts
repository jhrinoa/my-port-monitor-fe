import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ConnectedClient } from './model/index';
import { Observable } from 'rxjs/Observable';
import { ClientsService } from './clients.service';
import { ServerNode } from './model/index';


@Component({
    moduleId: module.id,
    selector: 'connected-clients',
    templateUrl: 'connected-clients.component.html'
})
export class ConnectedClientsComponent implements OnInit {
    connectedLists: ConnectedClient[];
    // connectedLists: Observable<ConnectedClient[]>;
    serverIpAddr: string;

    constructor(        
        private clientsService: ClientsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.serverIpAddr = params['ipAddress'];

            this.clientsService.getClients(this.serverIpAddr)
                .then(cl => this.connectedLists = cl);
        });
    }
}