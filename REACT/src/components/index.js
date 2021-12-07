import React from "react"

class Items extends React.Component {
    state = {
        name: '',
        updateData:{
            name:'',
            id:''
        },
        textSearch:''
    }
    render() {
        let listData = []
        let listButton=[]
       
        const {activePage,totalPage,textSearch}=this.props

        for (let i = 1; i <= totalPage; i++) {
           listButton.push(i)
            
        }

        const pagination=listButton.map((item,key)=>{
            if(activePage === item)
            {
                return(
                    <button 
                    key={key}
                    style={{backgroundColor:"blue"}}
                    onClick={()=>{

                      textSearch!==""?
                      this.props.searchDispatch({textSearch:textSearch,activePage:item}):
                      this.props.paginationDispatch(item)
                    }}

                    >{item}</button>
                )
            }
            else{
                return(
                    <button 
                    key={key}
                    style={{backgroundColor:""}}
                    onClick={()=>{
                        textSearch!==""?
                        this.props.searchDispatch({textSearch:textSearch,activePage:item}):
                        this.props.paginationDispatch(item)
                    }}

                    >{item}</button>
                )

            }
        })

        if (this.props.listItem) {
            listData = this.props.listItem.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>
                            {key + 1}
                        </th>
                        <th>
                            {item.name}
                        </th>
                        <th>
                            <button onClick={()=>{
                                this.props.deleteDispatch(item._id)
                            }}>
                                DELETE
                            </button>
                        </th>

                        <th>
                            <button onClick={()=>{
                                this.setState({
                                    updateData:{
                                        id:item._id,
                                        name:item.name
                                    }
                                })
                            }}>
                                select
                            </button>
                        </th>
                    </tr>
                )
            })
        }


        return (
            <div>

                <div>
                    <input onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }}
                        value={this.state.name} />
                    <button onClick={()=>{
                        this.props.addDispatch({
                            name:this.state.name
                        })
                    }}>
                        ADD
                    </button>

                </div>


                <div>
                    <input onChange={(e) => {
                        this.setState({ updateData:{
                            ...this.state.updateData,
                            name:e.target.value
                        } })
                    }}
                        value={this.state.updateData.name} />
                    <button onClick={()=>{
                        this.props.updateDispatch({
                            name:this.state.updateData.name,
                            id:this.state.updateData.id
                        })
                    }}>
                        UPDATE
                    </button>

                </div>


                <div>
                    <input onChange={(e) => {
                        this.setState({ textSearch:e.target.value })
                    }}
                        value={this.state.textSearch} />
                    <button onClick={()=>{
                        this.props.searchDispatch({
                           textSearch:this.state.textSearch,
                           activePage:1
                        })
                    }}>
                        search
                    </button>

                </div>

                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>name</th>
                            </tr>
                            {listData}
                        </tbody>
                    </table>
                    {pagination}
                </div>
            </div>
        )
    }
}
export default Items
