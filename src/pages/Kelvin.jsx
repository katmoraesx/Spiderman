import React from 'react';

export default function Colega() {
  return (
    <div className="page colega-page">
      <h1 className="title-comic">Agradecimento Especial: Kelvin</h1>
      
      <div className="colega-card">
        <div className="colega-info">
          <p className="intro-text">
            "Olá! Meu nome é **Kelvin**. Fico feliz que você tenha gostado do livro do Homem-Aranha. Eu o escolhi porque a história de Peter Parker vai muito além dos superpoderes. É sobre responsabilidade, luta e a jornada de um jovem comum que se torna extraordinário. É uma leitura que nos inspira a encontrar o herói que existe em todos nós."
          </p>
        </div>
        
        <div className="spidey-icon-wrapper">
          <i className="fas fa-hand-spock"></i>
          <p className="spidey-greetings">EXCELSIOR!</p>
        </div>
      </div>
    </div>
  );
}