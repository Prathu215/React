import React, {Component} from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {CarService} from "./CarService";

require("primereact/resources/themes/omega/theme.css");
require("primereact/resources/primereact.min.css");

class Invoices extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };

        this.carservice = new CarService();

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => {
            this.setState({cars: data});
            console.log(data); // print to console
        });
    }

    render() {
        var dynamicColumns = this.cols.map((col, i) => {
            return <Column key={col.field} field={col.field} header={col.header}/>;
        });

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>DataTable displays data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <DataTable value={this.state.cars}>
                        <Column field="vin" header="Vin"/>
                        <Column field="year" header="Year"/>
                        <Column field="brand" header="Brand">
                            {/*<template let-col let-item="rowData" pTemplate type="body">*/}
                                {/*<a href="">rowData</a>*/}
                            {/*</template>*/}
                            <template let-col let-item="brand" pTemplate type="body">
                                <a href="">brand</a>
                            </template>
                        </Column>

                        <Column field="color" header="Color"/>
                    </DataTable>

                    <h3>Dynamic Columns</h3>
                    <DataTable value={this.state.cars}>
                        {dynamicColumns}
                    </DataTable>

                </div>
            </div>
        );
    }
}

/*const mapStateToProps = (state) => {
    return {
        main: state.main

    };
};*/
/*
const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(login());
        },
        logout: () => {
            dispatch(logout());
        },
        setTabnerInvoices: (invoices) => {
            dispatch(setTabnerInvoices(invoices));
        }

    };
};*/

//export default connect(mapStateToProps, mapDispatchToProps)(Invoices);
export default Invoices;
