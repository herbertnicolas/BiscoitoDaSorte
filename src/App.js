import React, { Component } from 'react';
import './estilo.css'
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      textoFrase : ''
    }
    this.gerarFrase = this.gerarFrase.bind(this);

    this.frases = [
      "The love of your life is right in front of your eyes.",
      "Behind this fortune is the love of my life.",
      "You have a secret admirer.",
      "Love, because it is the only true adventure.",
      "The love of your life will appear in front of you unexpectedly!",
      "An old love will come back to you.",
      "Your love life will soon be happy and harmonious.",
      "Follow what calls you.",
      "You're intoxicating when you do what you love.",
      "Be passionate and totally worth the chaos.",
      "You will know it when you see it. It will know you when it sees you.",
      "Do what you love. The rest will fall into place.",
      "Follow what you love and see what turns up.",
      "The middle of the process is no place to determine the end of it.",
      "You should def go for it.",
      "Enter unknown territory.",
      "Everything that is was first a dream.",
      "Focus on the magic of things; yourself.",
      "Love yourself hard.",
      "Set yourself up to experience what you love."
    ]
  }
  
  gerarFrase(){
    let frase = this.frases[getRandomInt(0,9)];
    //alert('ENTROU');
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.setState({textoFrase: '"' + frase + '"'}); 
  }

  render(){
    return(
      <div className="container">
        <h1 className="titleStyle">Fortune Cookie!</h1>
        <img src={require('./assets/biscoito.png')}/>
        <Botao fraseBotao="What do you have for today?" chamaMetodo={this.gerarFrase}/>
        <h3 className='fraseStyle'>{this.state.textoFrase}</h3>
        <h2 className='footsie'>Made by Herbert Nícolas</h2>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button className="btnStyle" onClick={this.props.chamaMetodo}>{this.props.fraseBotao}</button>
      </div>
    )
  }
}
export default App;
