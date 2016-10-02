import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ServerNode } from './model/index';

@Component({
    moduleId: module.id,
    selector: 'my-servers',
    templateUrl: 'servers.component.html'
})
export class ServersComponent implements OnInit {
    servers: ServerNode[];
    selectedServer: ServerNode;

    constructor(
        private router: Router
    ) { }

    // getConnectedList(server): ConnectedClient[] {
    //     // make a request with server.ipAddress and server.port
    //     return [
    //         {
    //             ipAddress: '10.5.5.125',
    //             hostName: 'dmjlee1'
    //         },
    //         {
    //             ipAddress: '10.5.5.126',
    //             hostName: 'dmjlee2'
    //         },
    //         {
    //             ipAddress: '10.5.5.127',
    //             hostName: 'dmjlee3'
    //         }
    //     ]
    // }

    onSelect(server: ServerNode) {
        this.selectedServer = server;
        this.router.navigate(['/server', this.selectedServer.ipAddress], { skipLocationChange: true });
    }

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
            },
            {
                ipAddress: 'test',
                hostName: null,
                port: 9445
            }

        ];
    }
}