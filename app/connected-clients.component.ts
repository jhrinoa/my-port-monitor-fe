import { Component, OnInit, Input } from '@angular/core';
import { ConnectedClient } from './model/index';

@Component({
    moduleId: module.id,
    selector: 'connected-clients',
    templateUrl: 'connected-clients.component.html'
})
export class ConnectedClientsComponent implements OnInit {
    @Input() selectedServer;
    connectedLists: ConnectedClient[];

    constructor() { }

    ngOnInit() {
        // console.log('selectedServer ip: ' + this.selectedServer.ipAddress);
        this.connectedLists = [
            {
                ipAddress: '1.1.1.1',
                hostName: 'test host1'
            },
            {
                ipAddress: '2.2.2.2',
                hostName: 'test host2'
            },
            {
                ipAddress: '3.3.3.3',
                hostName: 'test host3'
            }
        ]
    }
}