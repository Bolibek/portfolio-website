import { configureStore, createSlice } from "@reduxjs/toolkit";
import stringMiddleware from "../middleWare/stringMiddleWare";

const initialState = {
	isLast: true,
	tabKeyForLap: "hidden",
	tabKeyForOth: "hidden",
	tabKeyForMob: "hidden",
};

const appSlice = createSlice({
	name: "reducer",
	initialState,
	reducers: {
		toggleLastElState: (state, action) => {
			state.isLast = action.payload;
		},
		toggleTabKeyForLap: (state) => {
			state.tabKeyForLap = state.tabKeyForLap === "hidden" ? "" : "hidden";
		},
		toggleTabKeyForOth: (state) => {
			state.tabKeyForOth = state.tabKeyForOth === "hidden" ? "" : "hidden";
		},
		toggleTabKeyForMob: (state) => {
			state.tabKeyForMob = state.tabKeyForMob === "hidden" ? "" : "hidden";
		},
	},
});

export const {
	toggleLastElState,
	toggleTabKeyForLap,
	toggleTabKeyForOth,
	toggleTabKeyForMob,
} = appSlice.actions;
const reducer = appSlice.reducer;
export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(stringMiddleware),
});
