import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ProductProps from "../type/product.type"
import axiosHttp from "../utils/axiosHttp";
import {AxiosResponse} from "axios";
import {ResponseApi} from "../utils/response.type";

interface HomeState {
    bestSale: ProductProps[],
    newProduct: ProductProps[],
    babyBicycle: ProductProps[],
    sportBicycle: ProductProps[],
    topographicBicycle: ProductProps[],
    racingBicycle: ProductProps[],
    touringBicycle: ProductProps[],
    femaleBicycle: ProductProps[],
    foldBicycle: ProductProps[]
}

const initialState: HomeState = {
    bestSale: [],
    newProduct: [],
    babyBicycle: [],
    sportBicycle: [],
    topographicBicycle: [],
    racingBicycle: [],
    touringBicycle: [],
    femaleBicycle: [],
    foldBicycle: []
}

export const getProductsByCategory = createAsyncThunk('products/getProducts/category', async (category: number, thunkAPI) => {
    const response = await axiosHttp.get<any, AxiosResponse<ResponseApi<ProductProps[]>>, any>(`api/products/${category}`, {
        signal: thunkAPI.signal
    })

    return {
        category,
        data: response.data.data
    }
})
export const getProductsByBestSale = createAsyncThunk('products/getProducts/hasBestSale', async (bestSale: boolean, thunkAPI) => {
    const response = await axiosHttp.get<any, AxiosResponse<ResponseApi<ProductProps[]>>, any>(`api/products/best-sale/${bestSale}`, {
        signal: thunkAPI.signal
    })

    return {
        bestSale,
        data: response.data.data
    }
})
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
            if (!action.payload.data) return
            switch (action.payload.category) {
                case 0:
                    state.babyBicycle = action.payload.data
                    break
                case 1:
                    state.sportBicycle = action.payload.data
                    break
                case 2:
                    state.topographicBicycle = action.payload.data
                    break
                case 3:
                    state.racingBicycle = action.payload.data
                    break
                case 4:
                    state.touringBicycle = action.payload.data
                    break
                case 5:
                    state.femaleBicycle = action.payload.data
                    break
                case 6:
                    state.foldBicycle = action.payload.data
                    break
                default:
                    break
            }
        }).addCase(getProductsByBestSale.fulfilled, (state, action) => {
            if (!action.payload.data) return
            if(action.payload.bestSale){
                state.bestSale = action.payload.data
            }else{
                state.newProduct = action.payload.data
            }
        })
    }
})
const productsReducer = productSlice.reducer
export default productsReducer
