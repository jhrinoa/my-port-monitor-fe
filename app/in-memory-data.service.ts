export class InMemoryDataService {
  createDb() {
    let clients = [
        {
            server: '1.1.1.1',
            clients: [
                {
                    ipAddress: '10.1.1.1',
                    hostName: 'test host1'
                },
                {
                    ipAddress: '20.2.2.2',
                    hostName: 'test host2'
                },
                {
                    ipAddress: '30.3.3.3',
                    hostName: 'test host3'
                }
            ]
        },
        {
            server: '2.2.2.2',
            clients: [
                {
                    ipAddress: '100.1.1.1',
                    hostName: 'test host1'
                },
                {
                    ipAddress: '200.2.2.2',
                    hostName: 'test host2'
                },
                {
                    ipAddress: '300.3.3.3',
                    hostName: 'test host3'
                }
            ]
        }
       
    ];
    return { clients };
  }
}