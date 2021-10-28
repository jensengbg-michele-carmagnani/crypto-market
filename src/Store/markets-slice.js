import { createSlice } from "@reduxjs/toolkit";


const markets = createSlice({
  name: "markets",
  initialState: { markets: [], detailsCurrency: {}, showDetails: false },
  reducers: {
    replaceMarket(state, action) {
      state.markets = action.payload;
    },
    setDetails(state, action) {
      const id = action.payload;
      const detailsItem = state.markets.find((item) => item.id === id);
      state.detailsCurrency = detailsItem;
      state.showDetails = !state.showDetails;
    },
    changeStatusShowDetails(state) {
      state.showDetails = !state.showDetails;
    }
  },
});

export default markets.reducer;
export const marketAction = markets.actions;
