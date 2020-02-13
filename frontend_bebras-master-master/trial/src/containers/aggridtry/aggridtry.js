
import React from "react";
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import MUIDataTable from "mui-datatables";

const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
};
class aggridtry extends React.Component {

	render() {
		return(
<MUIDataTable 
  title={"Employee List"} 
  data={data} 
  columns={columns} 
  options={options} 
/>
		)}}


// class aggridtry extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			columnDefs: [{
// 			  headerName: "Make", field: "make", sortable: true, filter: true
// 			}, {
// 			  headerName: "Model", field: "model",sortable: true, filter: true
// 			}, {
// 			  headerName: "Price", field: "price",sortable: true, filter: true
// 			}],
// 			rowData: [{
// 			  make: "Toyota", model: "Celica", price: 35000
// 			}, {
// 			  make: "Ford", model: "Mondeo", price: 32000
// 			}, {
// 			  make: "Porsche", model: "Boxter", price: 72000
// 			}]
// 		  }
// 	}

	

// 	render() {
// 		return(
// 			<div className="App">
//       <title>Bebras </title>
// 			<meta charset="UTF-8"></meta>

//       <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css'/>
// <link rel="shortcut icon" src={require('../../images/favicon.ico')}/>
// <link rel="stylesheet" src={require('../../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
// <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
// <link rel="stylesheet" src={require('../../style.css')} type="text/css" media="all" />
// <link rel="stylesheet" src={require('../../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
// <div id="main" class="wrap">

// {/* <div id="myGrid" style="height: 150px;width: 600px" class="ag-theme-balham"></div> */}
// <div style={{ height: '150px', width: '600px' }} className="ag-theme-balham">
//     <AgGridReact
//         columnDefs={this.state.columnDefs}
//         rowData={this.state.rowData}>
//     </AgGridReact>
// </div>


// </div>
// </div>
// 		);
	
// 	}

// }


export default aggridtry;