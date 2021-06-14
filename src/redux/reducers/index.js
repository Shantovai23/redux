import {combineReducers} from 'redux'
import {productReducer,selectedProductReducer,getAllCategoriesReducer,selectedCategoryReducer,selectedCategoryProductsReducer} from './productReducers'

const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    allCategories:getAllCategoriesReducer,
    selectedCategory:selectedCategoryReducer,
    selectedCategoryProducts:selectedCategoryProductsReducer
})

export default reducers

