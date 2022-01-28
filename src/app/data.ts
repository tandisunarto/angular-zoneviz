export const data = [
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
        securityZones: [],
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
        worldId: 1,
        name: 'base_a',
        description: 'Second enclave',
        type: 'organization',
        level: 2,
        securityZones: [],
        networkObjects: [],
      },
    ],
  },
];

export const worlds = [
  {
    id: 1,
    name: 'agency_a-new',
    enclaves: [
      {
        id: 1,
        worldId: 1,
        name: 'agency_a_enc',
        description: 'first enclave',
        type: 'site',
        level: 'level-1',
      },
    ],
  },
  {
    id: 2,
    name: 'agency_b',
    enclaves: [
      {
        id: 1,
        worldId: 2,
        name: 'agency_b_enc',
        description: 'second enclave',
        type: 'site',
        level: 'level-1',
      },
    ],
  },
  {
    id: 3,
    name: 'agency_c',
    enclaves: [
      {
        id: 1,
        worldId: 3,
        name: 'agency_b_enc',
        description: 'second enclave',
        type: 'site',
        level: 'level-1',
      },
    ],
  },
  {
    id: 4,
    name: 'agency_d',
    enclaves: [
      {
        id: 1,
        worldId: 4,
        name: 'agency_b_enc',
        description: 'second enclave',
        type: 'site',
        level: 'level-1',
      },
    ],
  },
  {
    id: 5,
    name: 'agency_e',
    enclaves: [
      {
        id: 1,
        worldId: 5,
        name: 'agency_b_enc',
        description: 'second enclave',
        type: 'site',
        level: 'level-1',
      },
    ],
  },
  {
    id: 6,
    name: 'agency_f',
    enclaves: [
      {
        id: 1,
        worldId: 6,
        name: 'agency_b_enc',
        description: 'second enclave',
        type: 'site',
        level: 'level-1',
      },
    ],
  },
];

export const enclaves = [
  {
    id: 1,
    securityZones: [
      {
        id: 1,
        name: 'nipr',
        type: 'Untrust',
        path: [1, 2, 3],
      },
      {
        id: 2,
        name: 'dmz',
        type: 'Untrust',
        path: [1, 3],
      },
      {
        id: 3,
        name: 'cp',
        type: 'Untrust',
        path: [1, 2, 3],
      },
    ],
    networkObjects: [
      {
        id: 1,
        name: 'agency-a-fw',
        type: 'Firewall',
      },
      {
        id: 2,
        name: 'F5',
        type: 'LoadBalancer',
      },
      {
        id: 3,
        name: 'JRCE',
        type: 'Router',
      },
    ],
  },
  {
    id: 2,
    securityZones: [
      {
        id: 1,
        name: 'nipr-01',
        type: 'Untrust',
        path: [1, 2, 3],
      },
      {
        id: 2,
        name: 'dmz-01',
        type: 'Untrust',
        path: [1, 2, 3],
      },
    ],
    networkObjects: [
      {
        id: 1,
        name: 'agency-a-fw-backup',
        type: 'Firewall',
      },
      {
        id: 2,
        name: 'F5-backup',
        type: 'LoadBalancer',
      },
      {
        id: 3,
        name: 'JRCE-backup',
        type: 'Router',
      },
    ],
  },
];
