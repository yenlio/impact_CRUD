import * as types from '../constants'
export function getRequest(payload) {
    return{
        type:types.GET_ITEM_REQUEST,
        payload

    }
    
}
export function getSuccess(payload) {
    return{
        type:types.GET_ITEM_SUCCESS,
        payload

    }
    
}
export function getFallure(payload) {
    return{
        type:types.GET_ITEM_FALLURE,
        payload

    }
    
}

//add
export function addRequest(payload) {
    return{
        type:types.ADD_ITEM_REQUEST,
        payload

    }
    
}
export function addSuccess(payload) {
    return{
        type:types.ADD_ITEM_SUCCESS,
        payload

    }
    
}
export function addFallure(payload) {
    return{
        type:types.ADD_ITEM_FALLURE,
        payload

    }
    
}

//dele
export function deleteRequest(payload) {
    return{
        type:types.DELETE_ITEM_REQUEST,
        payload

    }
    
}
export function deleteSuccess(payload) {
    return{
        type:types.DELETE_ITEM_SUCCESS,
        payload

    }
    
}
export function deleteFallure(payload) {
    return{
        type:types.DELETE_ITEM_FALLURE,
        payload

    }
    
}

//up


export function updateRequest(payload) {
    return{
        type:types.UPDATE_ITEM_REQUEST,
        payload

    }
    
}
export function updateSuccess(payload) {
    return{
        type:types.UPDATE_ITEM_SUCCESS,
        payload

    }
    
}
export function updateFallure(payload) {
    return{
        type:types.UPDATE_ITEM_FALLURE,
        payload

    }
    
}

//pagi
export function pagiRequest(payload) {
    return{
        type:types.PAGI_ITEM_REQUEST,
        payload

    }
    
}
export function pagiSuccess(payload) {
    return{
        type:types.PAGI_ITEM_SUCCESS,
        payload

    }
    
}
export function pagiFallure(payload) {
    return{
        type:types.PAGI_ITEM_FALLURE,
        payload

    }
    
}

//search

export function searchRequest(payload) {
    return{
        type:types.SEARCH_ITEM_REQUEST,
        payload

    }
    
}
export function searchSuccess(payload) {
    return{
        type:types.SEARCH_ITEM_SUCCESS,
        payload

    }
    
}
export function searchFallure(payload) {
    return{
        type:types.SEARCH_ITEM_FALLURE,
        payload

    }
    
}