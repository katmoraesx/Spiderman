import React from 'react';

export default function Sinopse() {
  return (
    <div className="page sinopse-page">
      <h1 className="title-spidey"><i className="fas fa-spider"></i> Peter Parker: O Espetacular Homem-Aranha</h1>
      
      <div className="sinopse-container">
        
        <div className="book-card-container">
          <div className="book-card">
            <img src="/livroprincipal.jpg" alt="Capa do Livro do Homem-Aranha" className="book-cover" />
            <div className="book-details">
              <h2 className="book-title">O Espetacular Homem-Aranha #1</h2>
              <p className="book-price">
                <span className="price-tag">Preço:</span> <span className="price-value">R$ 29,90</span>
              </p>
              <button className="buy-button">Comprar Agora <i className="fas fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
        <div className="description-and-promo-container">
            <div className="promo-box">
              <h2><i className="fas fa-exclamation-circle"></i> Aventura e Emoção!</h2>
              <ul>
                <li><i className="fas fa-star"></i> Vilões Clássicos</li>
                <li><i className="fas fa-heart"></i> Romance e Drama</li>
                <li><i className="fas fa-rocket"></i> Efeitos Visuais Incríveis</li>
              </ul>
              <p>Uma jornada que vai te prender do início ao fim!</p>
            </div>

            <div className="content-box">
              <p>
                Em um mundo onde arranha-céus tocam as nuvens e o crime espreita nas sombras, um herói solitário se ergue. **Peter Parker**, o jovem fotógrafo da cidade de Nova York, vive uma vida dupla repleta de responsabilidades. Enquanto enfrenta o dilema de pagar o aluguel e ir para a aula, ele se transforma no amigável vizinho, o espetacular Homem-Aranha.
              </p>
              <p>
                Nesta emocionante saga, Peter não apenas balança pelas ruas, mas também se confronta com o surgimento de novos vilões que testam seus limites. A trama se aprofunda nos conflitos internos do herói, explorando o peso da famosa frase: **"Com grandes poderes, vêm grandes responsabilidades"**. Descubra os desafios que ele enfrenta ao equilibrar sua vida pessoal, amorosa e a luta incessante por justiça.
              </p>
              <div className="fact-box">
                <h3><i className="fas fa-lightbulb"></i> Fato Rápido</h3>
                <p>O Homem-Aranha foi um dos primeiros heróis adolescentes a ser protagonista de sua própria série de quadrinhos, um conceito revolucionário na época!</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}