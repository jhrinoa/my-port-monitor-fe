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
        // console.log('selectedServer ip: ' + this.selectedServer.ipAddress);
        // this.connectedLists = [
        //     {
        //         ipAddress: '1.1.1.1',
        //         hostName: 'test host1'
        //     },
        //     {
        //         ipAddress: '2.2.2.2',
        //         hostName: 'test host2'
        //     },
        //     {
        //         ipAddress: '3.3.3.3',
        //         hostName: 'test host3'
        //     }
        // ]

        // this.connectedLists = this.clientsService.getClients('10.5.5.125');
        this.clientsService.getClients('1.1.1.1').then(cl => {
            debugger;
            this.connectedLists = cl
        });
    }
}