import React from 'react';
import logo from '../../logo.svg';
import mycss from '../../App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../../components/Home";
import Competition from "../../components/Competition";
import Teacher from "../../components/Teacher";
import Contact from "../../components/Contact";
import Practice_challenge from "../../components/Practice_challenge";
import Result from "../../components/Result";


class NewApp extends React.Component {
  render(){
  return (
    <HashRouter>
    <div className="NewApp">
      <title>Bebras </title>
			<meta charset="UTF-8"></meta>

      <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css'/>
<link rel="shortcut icon" src={require('../../images/favicon.ico')}/>
<link rel="stylesheet" src={require('../../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
<link rel="stylesheet" src={require('../../style.css')} type="text/css" media="all" />
<link rel="stylesheet" src={require('../../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />

      <header id="header-bar" class="wrap">
  
  <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="clearfix">
           <div id="logo"><a href="#"><img class="img-responsive" src="images/logo.png" alt=""/></a></div>
           
           <nav class="navbar navbar-custom" role="navigation">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse-navigation"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
           </div>
           <div class="collapse navbar-collapse" id="collapse-navigation">
             <ul class="nav menu-nav">
               <li class="current_page_item"><NavLink to="/Home">Home</NavLink></li>
               <li><NavLink to="/Teacher">Teacher</NavLink></li>
               <li><NavLink to="/Practice_challenge">Practice Challenge</NavLink> </li>
               <li><NavLink to="/Competition">Competition</NavLink></li>
               <li><NavLink to="/Result">Result</NavLink></li>
               <li><NavLink to="/Contact">Contact</NavLink></li>
               <li><a href="#"><i class="fa fa-power-off"></i></a>
              <ul class="sub-menu">
	   <li><a href="#">Logout</a></li> </ul>
                </li>
                <li></li>
             </ul>
           </div>
           
         </nav>
          
         </div>
 
     </div>
   </div>
   </div>
 </header>

 <div className="content">
            <Route path="/Home" component={Home}/>
            <Route path="/Competition" component={Competition}/>
            <Route path="/Teacher" component={Teacher}/>
            <Route path="/Practice_challenge" component={Practice_challenge}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Result" component={Result}/>
          </div>
    </div>


    </HashRouter>
  );
  }
}

export default NewApp;
