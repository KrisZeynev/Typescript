export enum PropertyType {
  "Apartment" = "Apartment",
  "House" = "House",
  "LandPlot" = "LandPlot",
}

export interface BaseProperty {
  id: number;
  address: string;
  areaSqM: number;
  type: PropertyType;
}

export interface Client {
  name: string;
  phone: string;
}

export interface ContainsId {
  id: number;
}