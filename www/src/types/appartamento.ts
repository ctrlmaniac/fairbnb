import Account from "./account";
import AppartamentoImg from "./appartamentoImg";
import { Camera } from "./camera";
import { Recensione } from "./recensione";
import { Servizio } from "./servizio";

export default interface Appartamento {
  id?: string;
  host: Account;
  comune: string;
  nazione: string;
  indirizzo: string;
  costo: number;
  checkin: string;
  checkout: string;
  feste: boolean;
  fumare: boolean;
  animaliDomestici: boolean;
  bagni: number;
  camere: Camera[];
  numeroCamere: number;
  letti: number;
  ospiti: number;
  servizi: Servizio[];
  recensioni: Recensione[];
  voto: number;
  immagini: AppartamentoImg[];
}
