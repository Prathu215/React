import React , {Component} from 'react';



class Add extends Component{
    add(){
        this.props.onAdd(this.refs.cn.value,this.refs.cd.value);
        this.refs.cn.value='';
        this.refs.cd.value='';//To clear the values after you add

    }
    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <input ref="cn" type ="text" className="form-control" placeholder="Enter Company Name"/>
                </div>

                <div className="col-md-2">
                <input  ref="cd" type ="text"  className="form-control" placeholder="Enter Company Description"/>
                </div>

                <button className="btn btn-success" onClick={this.add.bind(this)}>Add</button>
            </div>

        );
    }
}

export default Add;