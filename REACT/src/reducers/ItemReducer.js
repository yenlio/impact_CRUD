import * as actions from '../actions/index'
import * as types from '../constants'
const STATE_DEFAULT = {
    listItem: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,

    activePage: 0,
    totalPage: 0,
    textSearch: ""


}
const ItemReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case types.GET_ITEM_REQUEST:
        case types.ADD_ITEM_REQUEST:
        case types.DELETE_ITEM_REQUEST:
        case types.UPDATE_ITEM_REQUEST:
        case types.PAGI_ITEM_REQUEST:
        case types.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                errorMessage: null,
                listItem: action.payload
            }

        case types.ADD_ITEM_SUCCESS:
        case types.DELETE_ITEM_SUCCESS:
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,

            }

        case types.PAGI_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listItem: action.payload.listItem,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage

            }

            case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listItem: action.payload.listItem,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
                textSearch:action.payload.textSearch

            }

        case types.GET_ITEM_FALLURE:
        case types.ADD_ITEM_FALLURE:
        case types.UPDATE_ITEM_FALLURE:
        case types.PAGI_ITEM_FALLURE:
        case types.SEARCH_ITEM_FALLURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,

            }

        default:
            return state;
    }


}
export default ItemReducer