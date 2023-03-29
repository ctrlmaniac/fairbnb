import Account from "./Account";

export default interface Apartment {
  id?: string;
  host: Account;
  address: string;
  city: string;
  zipCode: string;
  region: string;
  country: string;
  online: boolean;
}
