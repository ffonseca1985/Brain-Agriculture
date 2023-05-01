import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Register = {
    itens: Array<any>,
    itemModify: any,
    loading: boolean
};

const initialState : Register = {
    itens: [],
    itemModify: null,
    loading: false
}

const producerSlice = createSlice({
    name: "producerSlice",
    initialState,
    reducers: {

        setLoading(state, action: PayloadAction<boolean>) {
            state =  {...state, loading: action.payload}
            return state;
        },    
        loadItens(state, action: PayloadAction<Array<any>>) {

            state = { ...state, itens: action.payload }
            return state;
        },
        addItens(state, action: PayloadAction<any>) {
            
            state =  {...state, itens: [...state.itens, action.payload], loading: false};
            return state;
        },
        deleteItem(state, action: PayloadAction<any>) {
            
            const newItens = state.itens.filter(x => x.id !== action.payload);
            state = {...state, itens: newItens}

            return state;
        },
        updatingItem(state, action: PayloadAction<any>) {

            state = {...state, itemModify: action.payload}
            return state
        },
        updateItem(state, action: PayloadAction<any>)  {
            
            debugger
            const newItens = state.itens.filter(x => x.id !== action.payload.id);
            newItens.push(action.payload);

            state = {...state, itens: newItens, itemModify: null}

            return state;
        }
    }
});

export const { setLoading, loadItens, addItens, deleteItem, updatingItem, updateItem } = producerSlice.actions;
export default producerSlice.reducer;
