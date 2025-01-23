import { configureStore } from '@reduxjs/toolkit'
import blogStore from './slice/loginSlice'
import postStore from './slice/postSlice'
const store = configureStore({
    reducer: {
        blog: blogStore,
        post: postStore
    }
})

export default store;