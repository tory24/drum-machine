import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLetter: '',
      names: [['Q', 'Heater-1'], ['W', 'Heater-2'], ['E', 'Heater-3'], ['A', 'Heater-4'], ['S', 'Clap'], ['D', 'Open Hi-Hat'], ['Z', 'Kick-n-Hat'], ['X', 'Kick'], ['C', 'Closed Hi-Hat']]
    }
    this.handleClick = this.handleClick.bind(this);
    this.findName = this.findName.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  
  findName(letter) {
    this.state.names.forEach(subArray => {
      return (subArray[0] === letter) ?  document.getElementById('text').innerHTML = subArray[1] : null;
    });
  }
  
  playSound(letter) {
    if (letter === 'Q' || letter === 'W' || letter === 'E' || letter === 'A' || letter === 'S' || letter === 'D' || letter === 'Z' || letter === 'X' || letter === 'C') {
      return document.getElementById(letter).play(); //Can add '.cloneNode()' before .play for quick audio repeat
    }
  }
  
  handleClick(e) {
    var name = this.findName(e.target.value);
    this.setState({ currentLetter: name });
    this.playSound(e.target.value);
  }
  
  render() { 
    document.addEventListener('keydown', event => {  
      this.playSound(event.key.toUpperCase());
      this.findName(event.key.toUpperCase());
    });
    
    return (
      <div>
        <h1>Drum Machine!</h1>
        <div id="drum-machine">
          <div id="display">
            
            <div id="info-box">
              <div id="description-box">
                <p id='text'></p>
              </div>
            </div>
            
            <button onClick={this.handleClick} value= 'Q' class="drum-pad" id="1">Q<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" class="clip" id="Q"></audio></button>
            <button onClick={this.handleClick} value= 'W' class="drum-pad" id="2">W<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" class="clip" id="W"></audio></button>
            <button onClick={this.handleClick} value='E' class="drum-pad" id="3">E<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" class="clip" id="E"></audio></button>
            <button onClick={this.handleClick} value= 'A' class="drum-pad" id="4">A<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" class="clip" id="A"></audio></button>
            <button onClick={this.handleClick} value= 'S' class="drum-pad" id="5">S<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" class="clip" id="S"></audio></button>
            <button onClick={this.handleClick} value= 'D' class="drum-pad" id="6">D<audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" class="clip" id="D"></audio></button>
            <button onClick={this.handleClick} value= 'Z' class="drum-pad" id="7">Z<audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" class="clip" id="Z"></audio></button>
            <button onClick={this.handleClick} value= 'X' class="drum-pad" id="8">X<audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" class="clip" id="X"></audio></button>
            <button onClick={this.handleClick} value= 'C' class="drum-pad" id="9">C<audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" class="clip" id="C"></audio></button>
          </div>
        </div>
      </div>
    )
  }
};

export default App;