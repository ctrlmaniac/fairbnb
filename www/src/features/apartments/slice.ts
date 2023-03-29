import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Account from "~/types/Account";
import Apartment from "~/types/Apartment";

interface State {
  response?: string;
  list: Apartment[];
  listing: boolean;
  listError: boolean;
  posting: boolean;
  postError: boolean;
}

const initialState: State = {
  response: undefined,
  list: [],
  listing: false,
  listError: false,
  posting: false,
  postError: false,
};

export const apartmentSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    listStart: (state) => {
      state.listing = true;
      state.listError = false;
    },
    listSuccess: (state, action: PayloadAction<Apartment[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.listError = true;
      state.listing = false;
      state.response = action.payload;
    },
    postStart: (state) => {
      state.posting = true;
      state.postError = false;
    },
    postSuccess: (state, action: PayloadAction<Apartment[]>) => {
      state.postError = false;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = true;
      state.posting = false;
      state.response = action.payload;
    },
  },
});

export const {
  unsetResponse,
  listFail,
  listStart,
  listSuccess,
  postFail,
  postStart,
  postSuccess,
} = apartmentSlice.actions;

export default apartmentSlice.reducer;
