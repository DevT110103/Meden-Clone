import { createSlice } from '@reduxjs/toolkit';

export const NavigateSlice = createSlice({
  name: 'navigate',
  initialState: {
    page: 1,
  },
  reducers: {
    navigationPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
});
