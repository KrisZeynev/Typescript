import { ApplyCommission } from "./decorators";
import { BaseProperty, ContainsId, PropertyType } from "./models";

export abstract class BasePropertyItem implements BaseProperty {
  readonly id: number;
  readonly address: string;
  readonly areaSqM: number;
  readonly type: PropertyType;

  constructor(
    id: number,
    address: string,
    areaSqM: number,
    type: PropertyType
  ) {
    this.id = id;
    this.address = address;
    this.areaSqM = areaSqM;
    this.type = type;
  }

  abstract getAnnualTax(): number;

  abstract getDetails(): string;
}

export class Apartment extends BasePropertyItem {
  readonly floor: number;
  readonly _salePrice: number;
  constructor(
    id: number,
    address: string,
    areaSqM: number,
    floor: number,
    salePrice: number
  ) {
    super(id, address, areaSqM, PropertyType.Apartment);
    this.floor = floor;
    this._salePrice = salePrice;
  }

  getAnnualTax(): number {
    return this.areaSqM * 2.5 + this.floor * 5;
  }

  getDetails(): string {
    return `[APARTMENT] ${this.address} (${this.areaSqM} sqm, Floor ${
      this.floor
    }) - Annual Tax: ${this.getAnnualTax().toFixed(2)}`;
  }

  get baseSalePrice(): number {
      return this._salePrice;
   }

   @ApplyCommission
   get finalSalePrice(): undefined {
      return undefined;
   }
}

export class House extends BasePropertyItem {
  readonly gardenAreaSqM: number;
  readonly _salePrice: number;

  constructor(
    id: number,
    address: string,
    areaSqM: number,
    gardenAreaSqM: number,
    salePrice: number
  ) {
    super(id, address, areaSqM, PropertyType.House);
    this.gardenAreaSqM = gardenAreaSqM;
    this._salePrice = salePrice;
  }

  getAnnualTax(): number {
    return this.areaSqM * 3.0 + this.gardenAreaSqM * 1.5;
  }

  getDetails(): string {
    return `[HOUSE] ${this.address} (${this.areaSqM} sqm, Garden ${
      this.gardenAreaSqM
    } sqm) - Annual Tax: ${this.getAnnualTax().toFixed(2)}`;
  }

  get baseSalePrice(): number {
      return this._salePrice;
   }

   @ApplyCommission
   get finalSalePrice(): number {
      return this._salePrice;
   }

}

export function findItemById<T extends ContainsId>(arr: T[], id: number) {
  return arr.find((item) => item.id === id);
}
