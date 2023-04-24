
import { configureStore } from '@reduxjs/toolkit';
import producerSlice from "./producer/produceSlice"

const store = configureStore({
    reducer: {
        producer: producerSlice
    },
});

export default store