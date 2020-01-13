import React, { Component } from 'react';
import bg from './assets/img/background.png'
import './Fortune.css';
import './webbridgeloader.js';
import SpritesheetGoldEgg from './assets/img/spritesheet_gold_egg.png'
import CrackEgg from './assets/img/spritesheet_crack_gold_egg.png';

function Deck(props){
  const backgroundUrl = props.completed ? `url(${CrackEgg})` : `url(${SpritesheetGoldEgg})`
  return (
    <div 
      className={`deck ${props.className}`} 
      style={{ 
        backgroundImage: backgroundUrl, 
        backgroundSize: "cover",
      }}
    ></div>
  )
}
class App extends Component {
  state = {
    base64: '',
    str: ''
  }

  componentDidMount(){
    const self = this;

    const reader = new FileReader()

    const ori = 'console.log("helloworld")'
    const base64 = btoa(str);
    console.log(base64)
   
    fetch(bg)
    .then(res => res.blob())
    .then(res => {
      reader.onload = (r => {
        //@ts-ignore
        console.log(r.srcElement.result)
        //@ts-ignore
        const first100Letterr = r.srcElement.result.slice(0,100);
        
        const encoded = first100Letterr + base64;
        console.log(encoded);

        const decoded = atob(encoded.slice(100));
        console.log(decoded)
        //@ts-ignore
        self.setState({base64: decoded})

      });
      reader.readAsDataURL(res);
    }).then(console.log)

  }
  render(){
    return (
      <div className="App">
        <div>Ori</div>
        <img className="image background" src={bg} alt='background'/>
        <div> Modified</div>
        <img className="image background" src={this.state.base64} alt='background'/>
        
      </div>
    );
  }
  
}

export default App;