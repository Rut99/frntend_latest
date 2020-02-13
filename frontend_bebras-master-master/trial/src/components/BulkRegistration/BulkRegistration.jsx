import React from 'react';
//import '../../App.css';
import Select from 'react-select';
 import './BulkRegistration.css';
import MUIDataTable from "mui-datatables";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
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
const optionsdd = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


class BulkRegistration extends React.Component {
  getMuiTheme = () => createMuiTheme({
    overrides: {
      MuiTableLabel: {
        root: {
            fontWeight: 'darker',
            fontSize: '5'
        }
    },
    MUIDataTable: {
      root: {
        fontSize: "5rem"
      }
      
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: "5rem"
      }
      
    },

      MUIDataTableBodyCell: {
        root: {
          fontSize: "1.3rem"
        }
        
      },
      MuiTablePagination: {
        toolbar : {
          fontSize: "2rem"
        }
    },
    }
  })

  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
//       <div className="App ">
//         {/* <title>Home </title>
//         <meta charset="UTF-8"></meta> */}

//         {/* <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
//         <link rel="shortcut icon" src={require('../../images/favicon.ico')} />
//         <link rel="stylesheet" src={require('../../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
//         <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
//         <link rel="stylesheet" src={require('../../style.css')} type="text/css" media="all" />
//         <link rel="stylesheet" src={require('../../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" /> */}
//         <div id='main' class="wrap" >
//           <section class="page-top wrap">

//             <h2 class="page-section-title">Students</h2>

//           </section>
//           <div class="zz-bottom"></div>
//           <section class=" margin-t72 wrap">
//             <div class="container">
//               <div class="row">
//                 <div class="col-md-2"></div>
//                 <div class="col-sm-2"><label class="label1">Select school:</label></div>
//                 <div class="col-md-6">
//                   <Select
//                     value={selectedOption}
//                     onChange={this.handleChange}
//                     placeholder="Select school"
//                     options={optionsdd}
//                   />
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col-md-2"></div>
//                 <div class="col-sm-2"><label class="label1">Select competition:</label></div>
//                 <div class="col-md-6">
//                   <Select
//                     value={selectedOption}
//                     onChange={this.handleChange}
//                     placeholder="Select competition "
//                     options={optionsdd}
//                   />
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col-md-2"></div>
//                 <div class="col-sm-2"><label class="label1">Academic Year:</label></div>
//                 <div class="col-md-6">
//                   <div class="inputdash "><input type="number" min='1'></input> to <input type="number" min='1'></input> </div>

//                 </div>
//               </div>

//             </div>
//             <div class="dist"></div>

//             <div class="container">
//               <div class="row">
//               <MuiThemeProvider theme={this.getMuiTheme()}>
//                 <MUIDataTable
//                   title={"STUDENT LIST"}
//                   data={data}
//                   columns={columns}
//                   options={options}
      
//                 />
//                 </MuiThemeProvider>
//               </div>
              
//             </div>

//           </section>
//           <div class="zz-top"></div>
//           <section class="wrap margin-t72">
// <div class="bkg-cover  padding-72">



// </div>
// </section>

//           <div class="zz-top-foo"></div>



//         </div></div>

<div className="navbr ">
       
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        
    

<div class="bluesection">
        <h1 class="bluecontent">Epic Co.</h1>
        </div>
        <div class="containerbulkreg">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-sm-2"><label class="label1">Select school:</label></div>
              <div class="col-md-6">
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  placeholder="Select school"
                  options={optionsdd}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-sm-2"><label class="label1">Select competition:</label></div>
              <div class="col-md-6">
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  placeholder="Select competition "
                  options={optionsdd}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-sm-2"><label class="label1">Academic Year:</label></div>
              <div class="col-md-6">
                <div class="inputdash "><input type="number" min='1'></input> to <input type="number" min='1'></input> </div>

              </div>
            </div>

          
          <div class="dist"></div>

          <div class="containerreg1">
            <div class="rowdata">
              {/* <MuiThemeProvider theme={this.getMuiTheme()}> */}
                <MUIDataTable
                  title={"STUDENT LIST"}
                  data={data}
                  columns={columns}
                  options={options}

                />
              {/* </MuiThemeProvider> */}
            </div>

          </div>
          </div>
         </div>
    );
  }


}

export default BulkRegistration;
