import { createSlice } from '@reduxjs/toolkit'

let postData = {
    postList: [],
    editPostId: "",
    replaceObj: {}
}

const postSlice = createSlice({
    name : 'POST',
    initialState: postData,
    reducers: {
        setPostList(state, action){
            state.postList = action.payload;
        },

        addPostToList (state, action) {
            state.postList.push(action.payload);
        },
        deltetePostFromList(state, action) {
            let index = state.postList.findIndex(post => post.id === action.payload);
            state.postList.splice(index , 1);
        },
        setEditPostId ( state, action ) {
            state.editPostId = action.payload;
        },
        replaceEditedPostToList (state, action) {
            let index = state.postList.findIndex(post => post.id === state.editPostId);
            state.postList.splice(index, 1 , action.payload);
            state.replaceObj = action.payload;
            state.editPostId = '';
        }
    }
})

export const { addPostToList, deltetePostFromList, setEditPostId, replaceEditedPostToList, setPostList } = postSlice.actions;
export default postSlice.reducer;