
import {configureStore} from "@reduxjs/toolkit"
import { increment } from "../redux/slices/counterSlice"


export const store = configureStore({
    reducer:{
      counter: increment()
    }
})

