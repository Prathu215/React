import React, { Component } from 'react';
import Company from './Company';


class CompaniesList extends Component {

    onCompanyClick(i){
        this.props.onCompanyClick(i);
    }

    onCompanyRemove(i){
        this.props.onCompanyRemove(i);
    }

    render() {
        return (

            <div className="row">
                {this.props.companies.map( (companyItem ,i) =>
                     <Company key={i} name={companyItem.name} bgc={companyItem.bgc}
                                    onCompClick={this.onCompanyClick.bind(this,i)}
                     onCompRemove={this.onCompanyRemove.bind(this,i)}/>
                )}
            </div>

           /* <div className="row">//without shorcut for fucntion it works properly here
           the function is es5 and has to replace with es6 just like above one /*arrow functions which makes syntax very simpler.

                {this.props.companies.map(function(companyItem ,i){
                    return <Company key={i} name={companyItem.name} bgc={companyItem.bgc}
                    onCompClick={this.onCompanyClick.bind(this,i)}/>
                },this)}
                </div>*/
        );
    }
}

export default CompaniesList;
/* taking out static companies<Company name="Google" bgc="#10AEE3"/>
        <Company name="Microsoft" bgc="#60C43F"/>
        <Company name="NetApp" bgc="#E8E815"/>*/