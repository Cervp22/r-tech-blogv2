import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    likes: 0
}

export const counterSlice = createSlice({
    name: "likes",
    initialState,
    reducers:{
        increment: (state)=>{
            state.count += 1;
        }

    }
})


export const {
    increment,
} = counterSlice.actions;
export default counterSlice.reducer;