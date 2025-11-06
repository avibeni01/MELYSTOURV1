export enum BeachType {
  PUBLIC = 'publique',
  PRIVATE = 'privée'
}

export enum BeachFacility {
  SHOWERS = 'Douches',
  CHANGING_ROOMS = 'Vestiaires',
  RESTAURANTS = 'Restaurants',
  LIFEGUARD = 'Sauveteurs',
  SPA = 'Spa',
  SHOPS = 'Boutiques',
  FIRST_AID = 'Premiers soins',
  WIFI = 'Wi-Fi',
  BAR = 'Bar'
}

export interface Beach {
  id: number;
  name: string;
  hebrewName: string;
  description: string;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  hours: {
    opening: string;
    closing: string;
    notes: string;
  };
  entranceFee: string;
  facilities: BeachFacility[];
  salinity: {
    level: string;
    properties: string;
  };
  accessibility: {
    wheelchairAccess: boolean;
    parking: string;
    publicTransport: string;
  };
  bestTimeToVisit: string;
  type: BeachType;
}

export interface ReligiousBeach {
  id: number;
  name: string;
  hebrewName: string;
  description: string;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  separationSchedule: {
    men: string;
    women: string;
    notes: string;
  };
  dressCode: string;
  specialFacilities: string[];
  specialRules: string[];
}

export interface SafetyTip {
  id: number;
  title: string;
  description: string;
}

export interface PracticalTip {
  id: number;
  title: string;
  description: string;
}
