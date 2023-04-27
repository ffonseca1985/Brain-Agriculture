import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Register = {
    itens: Array<any>,
    loading: boolean
};

const initialState : Register = {
    itens: [],
    loading: false
}

//Nota: Não ví necessidade de usar redux neste projeto, mas como era um requisito entao bora usar!!!!
const producerSlice = createSlice({
    name: "producerSlice",
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state =  {...state, loading: action.payload}
            return state;
        },    
        loadItens(state, action: PayloadAction<Array<any>>) {

            state =  {...state, itens: action.payload, loading: false}
            return state;
        },
        addItens(state, action: PayloadAction<any>) {
            
            state =  {...state, itens: [...state.itens, action.payload], loading: false}
            return state;
        },
        deleteItem(state, action: PayloadAction<any>) {
            
            const newItens = state.itens.filter(x => x.id !== action.payload);
            state = {...state, itens: newItens, loading: false}

            return state;
        },
        updateItem(state, action: PayloadAction<any>)  {
            
            const newItens = state.itens.filter(x => x.id !== action.payload);
            newItens.push(action.payload);

            state = {...state, itens: newItens}

            return state;
        }
    }
});

export const { setLoading, loadItens, addItens, deleteItem, updateItem } = producerSlice.actions;
export default producerSlice.reducer;
