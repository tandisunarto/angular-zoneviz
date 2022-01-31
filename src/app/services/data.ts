import { Observable, of } from "rxjs";

export function getData(): Observable<any> {
  return of(data);
}

export function getEnclaveData(level: number, id: number): Observable<any> {
  return of(data.find(d => d.id === id && d.level === level));
}

const data = [
  {
    id: 1,
    name: 'agency_a',
    description: '(first world)',
    level: 0,
    enclaves: [
      {
        id: 1,
        worldId: 1,
        name: 'agency_a',
        description: 'First enclave',
        type: 'site',
        level: 1,
        securityZones: [
          {
            id: 1,
            enclaveId: 1,
            name: 'nipr',
            description: 'vrf',
            type: 'unsafe',
            vrfId: 1236,
            innerTag: 310,
            f5RouteDomain: 0,
            path: [1, 2, 3],
          },
          {
            id: 2,
            enclaveId: 1,
            name: 'dmz',
            description: '',
            type: 'unsafe',
            vrfId: 1237,
            innerTag: 311,
            f5RouteDomain: 0,
            path: [1, 3],
          },
          {
            id: 3,
            enclaveId: 1,
            name: 'agency_a_cp',
            description: '',
            type: 'unsafe',
            vrfId: 1237,
            innerTag: 311,
            f5RouteDomain: 0,
            path: [2, 3],
          },
          {
            id: 4,
            enclaveId: 1,
            name: 'agency_a_tr',
            description: '',
            type: 'unsafe',
            vrfId: 1237,
            innerTag: 311,
            f5RouteDomain: 0,
            path: [1, 2],
          }
        ],
        networkObjects: [
          {
            id: 1,
            enclaveId: 1,
            name: 'agency-a-fw',
            type: 'Firewall',
            ordinal: 0,
          },
          {
            id: 2,
            enclaveId: 1,
            name: 'F5',
            type: 'Load Balancer',
            ordinal: 1,
          },
          {
            id: 3,
            enclaveId: 1,
            name: 'JRCE',
            type: 'Router',
            ordinal: 2,
          },
        ],
      },
      {
        id: 2,
        worldId: 1,
        name: 'base_a',
        description: 'Second enclave',
        type: 'organization',
        level: 2,
        securityZones: [
          {
            id: 1,
            enclaveId: 2,
            name: 'nipr (lvl 2)',
            description: 'vrf',
            type: 'unsafe',
            vrfId: 1236,
            innerTag: 310,
            f5RouteDomain: 0,
            path: [1, 2, 3],
          },
          {
            id: 2,
            enclaveId: 2,
            name: 'dmz (lvl 2)',
            description: '',
            type: 'unsafe',
            vrfId: 1237,
            innerTag: 311,
            f5RouteDomain: 0,
            path: [1, 3],
          },
          // {
          //   id: 3,
          //   enclaveId: 1,
          //   name: 'agency_a_cp',
          //   description: '',
          //   type: 'unsafe',
          //   vrfId: 1237,
          //   innerTag: 311,
          //   f5RouteDomain: 0,
          //   path: [2, 3],
          // },
          // {
          //   id: 4,
          //   enclaveId: 1,
          //   name: 'agency_a_tr',
          //   description: '',
          //   type: 'unsafe',
          //   vrfId: 1237,
          //   innerTag: 311,
          //   f5RouteDomain: 0,
          //   path: [1, 2, 3],
          // }
        ],
        networkObjects: [
          {
            id: 1,
            enclaveId: 2,
            name: 'base-a-fw',
            type: 'Firewall',
            ordinal: 0,
          },
          {
            id: 2,
            enclaveId: 2,
            name: 'F5',
            type: 'Load Balancer',
            ordinal: 1,
          },
          {
            id: 3,
            enclaveId: 2,
            name: 'JRCE',
            type: 'Router',
            ordinal: 2,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'agency_b',
    description: '(second world)',
    level: 0,
    enclaves: [
      {
        id: 1,
        worldId: 2,
        name: 'agency_b',
        description: 'First enclave',
        type: 'site',
        level: 1,
        securityZones: [
          {
            id: 1,
            enclaveId: 1,
            name: 'nipr',
            description: 'vrf',
            type: 'unsafe',
            vrfId: 1236,
            innerTag: 310,
            f5RouteDomain: 0,
            path: [1, 2, 3],
          },
        ],
        networkObjects: [
          {
            id: 1,
            enclaveId: 1,
            name: 'agency-b-fw',
            type: 'Firewall',
            ordinal: 0,
          },
          {
            id: 2,
            enclaveId: 1,
            name: 'F5',
            type: 'Load Balancer',
            ordinal: 2,
          },
          {
            id: 3,
            enclaveId: 1,
            name: 'JRCE',
            type: 'Router',
            ordinal: 3,
          },
        ],
      },
      {
        id: 2,
        worldId: 2,
        name: 'base_b',
        description: 'Second enclave',
        type: 'organization',
        level: 2,
        securityZones: [
          {
            id: 1,
            enclaveId: 1,
            name: 'nipr-b',
            description: 'vrf',
            type: 'unsafe',
            vrfId: 1236,
            innerTag: 310,
            f5RouteDomain: 0,
            path: [1],
          },
        ],
        networkObjects: [
          {
            id: 1,
            enclaveId: 1,
            name: 'base-b-fw',
            type: 'Firewall',
            ordinal: 0,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'agency_c',
    description: '(second world)',
    level: 0,
    enclaves: [
      {
        id: 1,
        worldId: 1,
        name: 'agency_c',
        description: 'First enclave',
        type: 'site',
        level: 1,
        securityZones: [
          {
            id: 1,
            enclaveId: 1,
            name: 'nipr',
            description: 'vrf',
            type: 'unsafe',
            vrfId: 1236,
            innerTag: 310,
            f5RouteDomain: 0,
            path: [],
          },
        ],
        networkObjects: [],
      }
    ],
  },
  {
    id: 4,
    name: 'agency_d',
    description: '(second world)',
    level: 0,
    enclaves: [
      {
        id: 1,
        worldId: 1,
        name: 'agency_d',
        description: 'First enclave',
        type: 'site',
        level: 1,
        securityZones: [
          {
            id: 1,
            enclaveId: 1,
            name: 'nipr',
            description: 'vrf',
            type: 'unsafe',
            vrfId: 1236,
            innerTag: 310,
            f5RouteDomain: 0,
            path: [],
          },
        ],
        networkObjects: [],
      }
    ],
  },
  {
    id: 5,
    name: 'agency_e',
    description: '(second world)',
    level: 0,
    enclaves: [
      {
        id: 1,
        worldId: 1,
        name: 'agency_e',
        description: 'First enclave',
        type: 'site',
        level: 1,
        securityZones: [
          {
            id: 1,
            enclaveId: 1,
            name: 'nipr',
            description: 'vrf',
            type: 'unsafe',
            vrfId: 1236,
            innerTag: 310,
            f5RouteDomain: 0,
            path: [],
          },
        ],
        networkObjects: [],
      }
    ],
  },
  {
    id: 6,
    name: 'agency_f',
    description: '(second world)',
    level: 0,
    enclaves: [
      {
        id: 1,
        worldId: 1,
        name: 'agency_f',
        description: 'First enclave',
        type: 'site',
        level: 1,
        securityZones: [
          {
            id: 1,
            enclaveId: 1,
            name: 'nipr',
            description: 'vrf',
            type: 'unsafe',
            vrfId: 1236,
            innerTag: 310,
            f5RouteDomain: 0,
            path: [],
          },
        ],
        networkObjects: [],
      }
    ],
  }
];
