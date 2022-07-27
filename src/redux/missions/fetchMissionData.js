import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMissions from './missions';

const initialState = {
  isLoading: false,
  isFailed: false,
  items: [],
};

export const fetchRocketsData = createAsyncThunk (
  'missions/fetchMissions',
  async () => {
    const { data } = await fetchMissions();

    return data;
  },
);

const missionSlice = createSlice({
 name: 'missions',
 initialState,
 extraReducers: {
   [fetchRocketsData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
   },
   [fetchRocketsData.pending]: (state) => { state.isLoading =  true; },
   [fetchRocketsData.rejected]: (state) => { state.isFailed = true; },
 },
});

export default missionSlice.reducer;