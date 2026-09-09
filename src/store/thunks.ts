import { createAsyncThunk } from '@reduxjs/toolkit'
import { profile } from '@/data/content'
import { setEmailCopied } from './uiSlice'

export const copyEmail = createAsyncThunk('ui/copyEmail', async (_, { dispatch }) => {
  await navigator.clipboard.writeText(profile.email)
  dispatch(setEmailCopied(true))
  window.setTimeout(() => {
    dispatch(setEmailCopied(false))
  }, 2000)
})
