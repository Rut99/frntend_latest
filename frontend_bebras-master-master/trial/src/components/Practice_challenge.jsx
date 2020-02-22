import React from 'react';
import '../App.css';
import './PracticeChallenge.css';
class Practice_challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctopt: '',
      wrongopt: '',
      answercorrect: 'hidden',
      answerwrong: 'hidden'
    }


  }
  correctoptfun() {
    //alert('hi')
    var cs = (this.state.answercorrect === "hidden") ? "show" : "hidden";
    this.setState({ "answercorrect": cs });
    var cs = (this.state.answerwrong === "hidden") ? "hidden" : "hidden";
    this.setState({ "answerwrong": cs });
    var css = (this.state.correctopt === "") ? "correctoption" : "";
    this.setState({ "correctopt": css });
  }
  wrongoptfun() {
    //alert('hi')
    var cs = (this.state.answerwrong === "hidden") ? "show" : "hidden";
    this.setState({ "answerwrong": cs });
    var cs = (this.state.answercorrect === "hidden") ? "hidden" : "hidden";
    this.setState({ "answercorrect": cs });
    var css = (this.state.wrongopt === "") ? "wrongoption" : "";
    this.setState({ "wrongopt": css });
    var css1 = (this.state.correctopt === "") ? "correctoption" : "correctoption";
    this.setState({ "correctopt": css1 });
  }

  render() {


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
            {/* questionstartshere */}
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

                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} src={require('../images/PracChallenge/flower1.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/flower2.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/flower3.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.correctoptfun.bind(this)}><img className={this.state.correctopt} alt="oops" src={require('../images/PracChallenge/flower4.PNG')}></img></button></div>

                  </div>
                  <div class="dist"></div>
                  <div className={this.state.answercorrect} style={{ "backgroundColor": "green" }}>
                    <p style={{ "color": "white" }}>Amazing! You got the question right!</p>
                  </div>
                  <div className={this.state.answerwrong} style={{ "backgroundColor": "red" }}>
                    <p style={{ "color": "white" }}>Oops! Better luck next time!</p>
                  </div>
                  <div class="dist"></div>
                </div>
              </div>
            </div>
            {/* questionendsshere */}
            <div class="dist"></div>
            {/* questionstartshere */}
            <div class="container">
              <div class="row">
                <div class="col-md-2">
                  side div
</div>
                <div class="col-md-8">
                  <div class="row">
                    <p>Four footprints have been found in the mud.<br></br>
                      The police are looking for a robber who wore shoes with these properties:<br></br>
                      • The soles have a stripy pattern<br></br>
                      • The heel is thin <br></br>
                      Question:
Choose the set of shoe prints that could belong to the robber.</p>
                  </div>
                  <div class="row">

                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} src={require('../images/PracChallenge/shoe1.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/shoe2.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/shoe3.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.correctoptfun.bind(this)}><img className={this.state.correctopt} alt="oops" src={require('../images/PracChallenge/shoe4.PNG')}></img></button></div>

                  </div>
                  <div class="dist"></div>
                  <div className={this.state.answercorrect} style={{ "backgroundColor": "green" }}>
                    <p style={{ "color": "white" }}>Amazing! You got the question right!</p>
                  </div>
                  <div className={this.state.answerwrong} style={{ "backgroundColor": "red" }}>
                    <p style={{ "color": "white" }}>Oops! Better luck next time!</p>
                  </div>
                  <div class="dist"></div>
                </div>
              </div>
            </div>
            {/* questionendsshere */}
            <div class="dist"></div>
            {/* questionstartshere */}
            <div class="container">
              <div class="row">
                <div class="col-md-2">
                  side div
</div>
                <div class="col-md-8">
                  <div class="row">
                    <p>At the LIFO ice cream parlour the scoops of ice cream are stacked on your cone in the exact order in which you ask for them. <br></br>What do you have to say in order to get the ice cream shown in the picture?<br></br>
                      <img alt="oops" src={require('../images/PracChallenge/icecream.PNG')}></img>
                      I would like to get an ice cream with ... </p>
                  </div>
                  <div class="row">

                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7 >Chocolate, Smurf and Strawberry! </h7></button></div>
                    <div class="col-md-3"><button className={this.state.correctopt} onClick={this.correctoptfun.bind(this)}><h7>Strawberry, Smurf and Chocolate!</h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7> Chocolate, Strawberry and Smurf! </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7> Strawberry, Chocolate and Smurf! </h7></button></div>

                  </div>
                  <div class="dist"></div>
                  <div className={this.state.answercorrect} style={{ "backgroundColor": "green" }}>
                    <p style={{ "color": "white" }}>Amazing! You got the question right!</p>
                  </div>
                  <div className={this.state.answerwrong} style={{ "backgroundColor": "red" }}>
                    <p style={{ "color": "white" }}>Oops! Better luck next time!</p>
                  </div>
                  <div class="dist"></div>
                </div>
              </div>
            </div>
            {/* questionendsshere */}
            <div class="dist"></div>
            {/* questionstartshere */}
            <div class="container">
              <div class="row">
                <div class="col-md-2">
                  side div
</div>
                <div class="col-md-8">
                  <div class="row">
                    <p>A Beaver puts ﬁve bottles on a table.<br></br> He places them so that every bottle has a bit showing.<br></br> He places the ﬁrst bottle at the back of the table and puts each new bottle in front of those already placed.
<br></br>
                      <img alt="oops" src={require('../images/PracChallenge/arrangebottles.PNG')}></img><br></br>
                      In what order are the bottles placed as shown in the picture?  </p>
                  </div>
                  <div class="row">

                    <div class="col-md-3"><button className={this.state.correctopt} onClick={this.correctoptfun.bind(this)}><h7 >E D C B A </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>D B C A E </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>E C D A B </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7> D C E B A </h7></button></div>

                  </div>
                  <div class="dist"></div>
                  <div className={this.state.answercorrect} style={{ "backgroundColor": "green" }}>
                    <p style={{ "color": "white" }}>Amazing! You got the question right!</p>
                  </div>
                  <div className={this.state.answerwrong} style={{ "backgroundColor": "red" }}>
                    <p style={{ "color": "white" }}>Oops! Better luck next time!</p>
                  </div>
                  <div class="dist"></div>
                </div>
              </div>
            </div>
            {/* questionendsshere */}
            <div class="dist"></div>
            {/* questionstartshere */}
            <div class="container">
              <div class="row">
                <div class="col-md-2">
                  side div
</div>
                <div class="col-md-8">
                  <div class="row">
                    <p>A beaver wants to buy a bird house for her daughter’s birthday. Her daughter says:<br></br> "I would like a bird house with 2 windows and a heart".
<br></br>

                      Question: Which bird house should her Mum buy?
 </p>
                  </div>
                  <div class="row">

                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} src={require('../images/PracChallenge/house1.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/house2.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.correctoptfun.bind(this)}><img className={this.state.correctopt} alt="oops" src={require('../images/PracChallenge/house3.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/house4.PNG')}></img></button></div>

                  </div>
                  <div class="dist"></div>
                  <div className={this.state.answercorrect} style={{ "backgroundColor": "green" }}>
                    <p style={{ "color": "white" }}>Amazing! You got the question right!</p>
                  </div>
                  <div className={this.state.answerwrong} style={{ "backgroundColor": "red" }}>
                    <p style={{ "color": "white" }}>Oops! Better luck next time!</p>
                  </div>
                  <div class="dist"></div>
                </div>
              </div>
            </div>
            {/* questionendsshere */}
          </section>

        </div>
      </div>
    );
  }
}

export default Practice_challenge;
