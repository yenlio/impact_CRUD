import { put, select, takeEvery } from "redux-saga/effects";
import * as actions from '../actions/index'
import * as types from '../constants'
import addApi from "../fetchAPIs/addAPI";
import deleteApi from "../fetchAPIs/deleteAPI";
import getApi from "../fetchAPIs/getAPI";
import GETaApi from "../fetchAPIs/getOneAPI";
import pagiApi from "../fetchAPIs/pagiAPI";
import searchApi from "../fetchAPIs/searchAPI";
import updateApi from "../fetchAPIs/updateAPI";

function* getsaga(action) {
    try {
        const res = yield getApi()
        yield put(actions.getSuccess(res))

    } catch (error) {
        yield put(actions.getFallure(error))
    }

}

function* addsaga(action) {
    try {
        const res = yield addApi(action.payload)// goij api nhu binh thuong
        console.log(res,"ressss");
        yield put(actions.addSuccess(res))

        const reducer = yield select((state) => {
            return {
                listItem: state.items.listItem,
               // activePage: state.items.activePage,
                totalPage: state.items.totalPage,
                textSearch: state.items.textSearchs
            }
        })

        console.log( reducer,"RRR");

        const searchinAPI = yield searchApi({ textSearch: reducer.textSearch })

       // console.log(searchinAPI,"ttttttttttttttttttttt");

        if (reducer.textSearch !== "") {

            let nameAdd = action.payload.name

            if (nameAdd.includes(reducer.textSearch) === true) {
                yield put(actions.searchRequest({
                    activePage: searchinAPI.totalPage,
                    textSearch: reducer.textSearch
                }))

            } 
            else {
                const getOnly = yield GETaApi(res.id)
                // console.log(getOnly, "getonly");

                yield put(actions.searchSuccess({
                    activePage: 1,
                    totalPage: 1,
                    listItem: getOnly.arr
                }))

            }

        }

        else {
            const pagi = yield pagiApi(action.payload)////


            yield put(actions.pagiRequest(pagi.totalPage))
        }

    } catch (error) {
        yield put(actions.addFallure(error))
    }

}
function* deletesaga(action) {
    try {
        const res = yield deleteApi(action.payload)
        yield put(actions.deleteSuccess(res))
        const reducer = yield select((state) => {
            return {
                listItem: state.items.listItem,
                activePage: state.items.activePage,
                totalPage: state.items.totalPage,
                textSearch: state.items.textSearch
            }
        })
        const searchAPIData = yield searchApi({ activePage: reducer.activePage })
        if (reducer.textSearch !== "") {
            if (reducer.listItem.length > 1) {
                yield put(actions.searchRequest({
                    activePage: reducer.activePage,
                    textSearch: reducer.textSearch
                }))
            }
            else {

                if (reducer.activePage === 1 & searchAPIData.all === 0) {
                    yield put(actions.searchSuccess({
                        activePage: 1,
                        totalPage: 1,
                        // listItem: searchAPIData.search,
                        textSearch: reducer.textSearch
                    }))
                }
                else {
                    yield put(actions.searchRequest({
                        activePage: reducer.activePage - 1,
                        textSearch: reducer.textSearch
                    }))

                }
            }
        }
        else {
            if (reducer.listItem.length > 1) {
                yield put(actions.pagiRequest(
                    reducer.activePage
                ))

            }
            else {
                const paginationAPI = yield pagiApi({ activePage: reducer.activePage })
                console.log(paginationAPI.all, "alll");
                if (reducer.activePage === 1 & paginationAPI.all === 0) {
                    yield put(actions.pagiSuccess({
                        activePage: 1,
                        totalPage: 1,
                        listItem: paginationAPI.pagi,
                    }))

                }
                else {
                    yield put(actions.pagiRequest(reducer.activePage - 1))
                }
            }
        }
    } catch (error) {
        yield put(actions.deleteFallure(error))
    }
}
function* updatesaga(action) {
    try {
        const res = yield updateApi(action.payload)
        yield put(actions.updateSuccess(res))
        const reducer = yield select((state) => {
            return {
                listItem: state.items.listItem,
                activePage: state.items.activePage,
                totalPage: state.items.totalPage,
                textSearch: state.items.textSearch
            }
        })
        if (reducer.textSearch !== "") {
            let nameUpdate = action.payload.name
            if (nameUpdate.includes(reducer.textSearch) === true) {
                yield put(actions.searchRequest({
                    activePage: reducer.activePage,
                    textSearch: reducer.textSearch
                }))
            } else {

                const getOnly = yield GETaApi(res.id)
                yield put(actions.searchSuccess({
                    activePage: 1,
                    totalPage: 1,
                    listItem: getOnly.arr
                }))
            }
        }
        else {
            yield put(actions.pagiRequest(reducer.activePage))
        }
    } catch (error) {
        yield put(actions.updateFallure(error))
    }
}

function* paginationsaga(action) {
    try {
        const res = yield pagiApi(action.payload)
        if (action.payload === 1 && res.all === 0) {
            yield put(actions.pagiSuccess({
                activePage: 1,
                totalPage: 1,
                listItem: res.pagi
            }))
        }
        else {
            yield put(actions.pagiSuccess({
                activePage: action.payload,
                totalPage: res.totalPage,
                listItem: res.pagi
            }))

        }

    } catch (error) {
        yield put(actions.pagiFallure(error))
    }
}

function* searchsaga(action) {
    try {
        const res = yield searchApi(action.payload)
        if (action.payload.activePage === 1 && res.all === 0) {
            yield put(actions.searchSuccess({
                activePage: 1,
                totalPage: 1,
                listItem: res.search
            }))
        }
        else {
            yield put(actions.searchSuccess({
                activePage: action.payload.activePage,
                totalPage: res.totalPage,
                listItem: res.search,
                textSearch: action.payload.textSearch
            }))

        }
    } catch (error) {
        yield put(actions.pagiFallure(error))
    }
}
export const listSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getsaga),
    takeEvery(types.ADD_ITEM_REQUEST, addsaga),
    takeEvery(types.DELETE_ITEM_REQUEST, deletesaga),
    takeEvery(types.UPDATE_ITEM_REQUEST, updatesaga),
    takeEvery(types.PAGI_ITEM_REQUEST, paginationsaga),
    takeEvery(types.SEARCH_ITEM_REQUEST, searchsaga)
]