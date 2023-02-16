import Account from "./account";
import Appartamento from "./appartamento";

export interface Recensione {
  id?: string;
  recensore: Account;
  appartamento: Appartamento;
  voto: number;
  recensione: string;
}
