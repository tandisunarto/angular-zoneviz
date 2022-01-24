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
