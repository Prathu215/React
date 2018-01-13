import React, { Component } from 'react';



class CompanyDetails extends Component {
    render() {
        return (
            <div className="CompanyDetailsStyle" style={{backgroundColor:this.props.currentCompany.bgc}} >

                <h1>{this.props.currentCompany.name}</h1>
                <h2>{this.props.currentCompany.desc}</h2>

            </div>
        );
    }
}

export default CompanyDetails;
