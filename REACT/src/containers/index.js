 import React from "react"
import { connect } from "react-redux"
import * as actions from '../actions/index'
import Items from "../components/index"
 class ItemContainer extends React.Component{
    componentDidMount(){
        this.props.paginationDispatch(1)
    }
    render(){
        return(
            <Items{...this.props}/>
        )
    }
 }

 const mapStatetoProps=(state)=>{
    return{
        listItem:state.items.listItem,
        activePage:state.items.activePage,
        totalPage:state.items.totalPage,
        textSearch:state.items.textSearch

    }
 }

 const mapDispatchtoProps=(dispatch)=>{
    return{
        initLoad:()=>{
            dispatch(actions.getRequest())
        },
        addDispatch:(data)=>{
            dispatch(actions.addRequest(data))
        },
        deleteDispatch:(id)=>{
            dispatch(actions.deleteRequest(id))
        },
        updateDispatch:(data)=>{
            dispatch(actions.updateRequest(data))
        },
        paginationDispatch:(num)=>{
            dispatch(actions.pagiRequest(num))
        },

        searchDispatch:(textSearch)=>{
            dispatch(actions.searchRequest(textSearch))
        },

        
    }
 }



export default connect(mapStatetoProps,mapDispatchtoProps)(ItemContainer)