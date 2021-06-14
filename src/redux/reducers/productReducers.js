import { ActionTypes } from "../constant/action-types";


const initialState={
    products:[]
  
}
export const productReducer = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state,products:action.payload};
    default:
      return state;
  }
};

export const selectedProductReducer=(state={},action)=>{
   switch (action.type) {
     case ActionTypes.SELECTED_PRODUCT:
       return{
         ...state,...action.payload
       }
       case ActionTypes.REMOVE_SELECTED_PRODUCT:
       return{
          
       }
     default:
       return state
   }
}

const allCategoriesState={
  allCategories:[]
}

export const getAllCategoriesReducer=(state=allCategoriesState,action)=>{
     switch (action.type) {
       case ActionTypes.GET_ALL_CATEGORIES:
         return{
           ...state, allCategories:action.payload
         }
       default:
         return  state    
     }
}

const singleCategory={
  selectedCategory:"men's clothing"
}

export const selectedCategoryReducer=(state=singleCategory,action)=>{
        switch (action.type) {
          case ActionTypes.SELECTED_CATEGORY:
            return{
                selectedCategory:action.payload
            }   
          default:
            return state
        }
}

const selectedCategoryProducts={
  selectedCategoryProducts:[]
}

export const selectedCategoryProductsReducer=(state=selectedCategoryProducts,action)=>{
  switch (action.type) {
    case ActionTypes.SELECTED_CATEGORY_PRODUCTS:
      return{
          ...state,selectedCategoryProducts:action.payload
      }   
    default:
      return state
  }
}
