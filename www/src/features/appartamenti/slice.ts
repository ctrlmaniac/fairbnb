import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appartamento } from "~/types";

interface State {
  getting: boolean;
  getError?: string;
  dettagli?: Appartamento;
  listing: boolean;
  listError?: string;
  list?: Appartamento[];
}

const initialState: State = {
  getting: true,
  getError: undefined,
  dettagli: undefined,
  listing: true,
  listError: undefined,
  list: undefined,
};

export const appartamentiSlice = createSlice({
  name: "appartamenti",
  initialState,
  reducers: {
    getSuccess: (state, action: PayloadAction<Appartamento>) => {
      state.dettagli = action.payload;
      state.getError = undefined;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = action.payload;
      state.dettagli = undefined;
      state.getting = false;
    },
    listSuccess: (state, action: PayloadAction<Appartamento[]>) => {
      state.list = action.payload;
      state.listError = undefined;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.listError = action.payload;
      state.list = undefined;
      state.listing = false;
    },
  },
});

export const { getFail, getSuccess, listSuccess, listFail } =
  appartamentiSlice.actions;

export default appartamentiSlice.reducer;
