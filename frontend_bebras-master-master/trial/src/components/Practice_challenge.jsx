  import React from 'react';
  import '../App.css';
  import './PracticeChallenge.css';
  class Practice_challenge extends React.Component {
    constructor(props) {
      super(props);
      this.optcorrect='hidden'
			this.options = this.options.bind(this);
    }   
    options()
    {
      alert('hi')
    //  document.getElementsByID('i').classList.add('correctoption');
  //     alert(s)
  // s.classList.add('correctoption');

    }
    optcorrect() {
      //alert('hi')
      var css = (this.state.optcorrect === "hidden") ? "show" : "hidden";
      this.setState({ "optcorrect": css });
    }
    render(){

      
    return (
      <div className="P">
        <title>Bebras </title>
        <meta charset="UTF-8"></meta>

       
  <div id="main" class="wrap">

  <section class="page-top wrap">

    <h2 class="page-section-title">Try out these practice challenges.</h2>

  </section>
  <div class="zz-bottom"></div>
  <section class=" margin-t72 wrap">
  <div class="container">
    <div class="row">
<div class="col-md-2">
side div
</div>
<div class="col-md-8">
<div class="row">
  <p>The flowers come in white, yellow or blue.
Clara wants a bunch of six flowers. She tells the florist:<br></br>
• There must be two of each of the colours yellow, white and blue<br></br>
• Flowers of the same type must not have the same colour.<br></br>
• There should be no more than two of each type of flower.<br></br>
A flower shop sells the following types of flowers: <br></br>
<img alt="oops" src={require('../images/PracChallenge/flower.PNG')}></img> Question:
Which of the following bunches will Clara be happy with? </p>
</div>
<div class="row">
  
<div class="col-md-3" id="i"><button className={this.state.optcorrect}  onClick={this.optcorrect.bind(this)}><img alt="oops" src={require('../images/PracChallenge/flower1.PNG')}></img></button></div>
{/* <div class="col-md-3"><button class="optionsbtn" onClick={this.options}><img  alt="oops" src={require('../images/PracChallenge/flower2.PNG')}></img></button></div>
<div class="col-md-3"><button class="optionsbtn" onClick={this.options}><img alt="oops" src={require('../images/PracChallenge/flower3.PNG')}></img></button></div>
<div class="col-md-3"><button class="optionsbtn" onClick={this.options}><img  alt="oops" src={require('../images/PracChallenge/flower4.PNG')}></img></button></div> */}

</div>
<div class="dist"></div>
</div>
</div>







    </div>
    </section>

  </div> 
  </div>
    );
    }
  }

  export default Practice_challenge;
