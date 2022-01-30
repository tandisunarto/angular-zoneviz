// Security Zone Diagram
// a.k.a. ZoneViz, Rainbow Chart

interface World {
  relationships: EnclaveRelationship;
  enclaves: Enclave;
}

interface EnclaveRelationship {
  // there may be an inherent directionality to the relationship.
  members: [
    { enclaveId: string; enclaveSecurityZoneId: SecurityZoneRef; networkObjectId: string },
    { enclaveId: string; enclaveSecurityZoneId: SecurityZoneRef; networkObjectId: string }
  ];
}

// Enclave (base, agency)
interface Enclave {
  id: EnclaveRef;
  securityZones: EnclaveSecurityZone[];
  networkObjects: NetworkObject[];
}

interface EnclaveRef {
  id: string;
}

// a SecurityZone is a VRF (except for when it isn't)
interface EnclaveSecurityZone {
  id: SecurityZoneRef;
  name: string;
  type: 'Trust' | 'Untrust' | 'DMZ' | 'ControlPlane';

  path: NetworkObjectRef[];
}

interface SecurityZoneRef {
  id: string;
}

interface NetworkObject {
  id: NetworkObjectRef;
  name: string;
  type: 'Router' | 'Switch' | 'Firewall' | 'LoadBalancer' | 'IPS' | 'Tap';
  devices: DeviceRef[];
}

interface DeviceRef {
  tags: number[]; // VLAN
}

interface NetworkObjectRef {
  id: number;
}
