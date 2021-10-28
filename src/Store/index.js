import { configureStore } from "@reduxjs/toolkit";
import markets from "./markets-slice";

const store = configureStore({
  reducer: { markets: markets },
});

export default store;
