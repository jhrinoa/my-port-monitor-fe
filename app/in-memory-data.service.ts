export class InMemoryDataService {
  createDb() {
    let clients = [
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
    ];
    return { clients };
  }
}