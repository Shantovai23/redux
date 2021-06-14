import {ActionTypes} from '../constant/action-types'

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,   
    }
}

export const getAllCategories=(allCategories)=>{
    return{
        type:ActionTypes.GET_ALL_CATEGORIES,
        payload:allCategories
    }
}
export const selectedCategory=(category)=>{
    return{
        type:ActionTypes.SELECTED_CATEGORY,
        payload:category
    }
}

export const selectedCategoryProductsstored=(categoryProducts)=>{
    return{
        type:ActionTypes.SELECTED_CATEGORY_PRODUCTS,
        payload:categoryProducts
    }
}