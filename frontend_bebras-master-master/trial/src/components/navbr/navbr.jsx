import React from 'react';
import '../../App.css';
import "./navbr.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import BulkRegistration from "../BulkRegistration/BulkRegistration";
import Select from 'react-select';
//import './BulkRegistration.css';
import MUIDataTable from "mui-datatables";
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

class navbr extends React.Component {
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
        toolbar: {
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
      <div className="navbr ">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        {/* <title>Home </title>
        <meta charset="UTF-8"></meta>
        
        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
        <link rel="shortcut icon" src={require('../../images/favicon.ico')} />
        <link rel="stylesheet" src={require('../../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" /> */}
        {/* <link rel="stylesheet" src={require('../../style.css')} type="text/css" media="all" /> */}
        {/* <link rel="stylesheet" src={require('../../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" /> */}
        {/* <div className="containerreg centerreg"> */}
          <nav className="menu">
            <h1 className="menu__logo">Epic Co.</h1>

            <div className="menu__right">
              <ul className="menu__list">
                <li className="menu__list-item "><NavLink className="menu__link" to="/navbr/BulkRegistration">BulkRegistration</NavLink></li>
                <li className="menu__list-item"><a className="menu__link" href="http://localhost:3000/teacher#/teacher/BulkReg">About</a></li>
                <li className="menu__list-item"><a className="menu__link" href="#">Portfolio</a></li>
                <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>
                
              </ul>
            <button type="button " class="menu__search-button ">
           Log out
        </button>
                          
              
              <form className="menu__search-form hide" method="POST">
                <input className="menu__search-input" placeholder="Type and hit enter"></input>
              </form>
            </div>
          </nav>
          <div className="content">
            <Route path="/navbr/BulkRegistration" component={BulkRegistration} />
          </div>

          
        </div>
        
      // </div>
    );
  }


}

export default navbr;
