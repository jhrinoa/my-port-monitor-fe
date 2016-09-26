import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';


import { ConnectedClient } from './model/index';

@Injectable()
export class ClientsService {
    constructor(private http: Http) {

    }

    getClients(serverIp: string): Promise<ConnectedClient[]> {
        if (serverIp) {
            return this.http
                .get(`app/clients/?server=${serverIp}`)
                .toPromise()
                .then(response => {
                    if (response.json().data[0]) {
                        return response.json().data[0].clients as ConnectedClient[];
                    } else {
                        return [] as ConnectedClient[];
                    }
                });
        }
    }
}

