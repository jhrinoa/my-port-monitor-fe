import { Component, OnInit, Input } from '@angular/core';
import { ConnectedClient } from './model/index';
import { Observable } from 'rxjs/Observable';
import { ClientsService } from './clients.service';

@Component({
    moduleId: module.id,
    selector: 'connected-clients',
    templateUrl: 'connected-clients.component.html'
})
export class ConnectedClientsComponent implements OnInit {
    @Input() selectedServer;
    connectedLists: ConnectedClient[];
    // connectedLists: Observable<ConnectedClient[]>;

    constructor(private clientsService: ClientsService) { }

    ngOnInit() {
        this.clientsService.getClients('2.2.2.2').then(cl => {            
            this.connectedLists = cl;
        });
    }
}