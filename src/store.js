import {configureStore} from '@reduxjs/toolkit'

//import todoreducer
import todoReducer from './slices/todoSlices';



//create Store
const store=configureStore({
    reducer:{
        todo:todoReducer
    },
    devTools:true
})

export default store;