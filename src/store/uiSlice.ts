import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type UiState = {
  mobileNavOpen: boolean
  projectFilter: string
  emailCopied: boolean
  activeSection: string
}

const initialState: UiState = {
  mobileNavOpen: false,
  projectFilter: 'All',
  emailCopied: false,
  activeSection: '',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileNavOpen(state, action: PayloadAction<boolean>) {
      state.mobileNavOpen = action.payload
    },
    toggleMobileNav(state) {
      state.mobileNavOpen = !state.mobileNavOpen
    },
    setProjectFilter(state, action: PayloadAction<string>) {
      state.projectFilter = action.payload
    },
    setEmailCopied(state, action: PayloadAction<boolean>) {
      state.emailCopied = action.payload
    },
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload
    },
  },
})

export const {
  setMobileNavOpen,
  toggleMobileNav,
  setProjectFilter,
  setEmailCopied,
  setActiveSection,
} = uiSlice.actions

export default uiSlice.reducer
