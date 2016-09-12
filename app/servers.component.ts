import { Component, OnInit } from '@angular/core';
import { ServerNode } from './model/index';

@Component({
    moduleId: module.id,
    selector: 'my-servers',
    templateUrl: 'servers.component.html'
})
export class ServersComponent implements OnInit {
    servers: ServerNode[];

    constructor() { }

    ngOnInit() { 
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
    }
}