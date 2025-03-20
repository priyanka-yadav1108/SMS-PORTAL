import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  library: '',
  message: '',
  userData: {}
}

export const getContactSlice = createSlice({
  name: 'getContact',
  initialState,
  reducers: {
    getGroupId: (state, action) => {
      state.value = action.payload
    },
    getLibrary: (state, action) => {
      state.library = action.payload
    },
    getMessage: (state, action) => {
      state.message = action.payload
    },
    getUserData: (state, action) => {
      var{name, mobile, email} = action.payload;
      state.userData = {name:name, mobile:mobile, email:email}
    }
  },
})

// Action creators are generated for each case reducer function
export const { getGroupId, getLibrary, getMessage, getUserData } = getContactSlice.actions

export default getContactSlice.reducer