import React, { Component } from 'react';



class Company extends Component {

    onCompanyClick(){
        this.props.onCompClick();
    }

    onCompanyRemove(e){ //event
        this.props.onCompRemove();
        e.stopPropagation();
    }
    render() {
        return (
            <div className="companyStyle" style={{backgroundColor:this.props.bgc}}
            onClick={this.onCompanyClick.bind(this)}>
                <a className="btn btn-danger pull-right" onClick={this.onCompanyRemove.bind(this)}>Remove</a>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Company;
