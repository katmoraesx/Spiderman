export default function Autor() {
  return (
    <div className="page autor-page">
      <h1 className="title-comic"><i className="fas fa-pen-nib"></i> Os Mestres da Marvel</h1>
      <div className="autor-container">
        
        <div className="autor-card stan-lee-card">
          <div className="autor-image-container">
            <img src="/stanlee.jfif" alt="Stan Lee" className="autor-image" />
          </div>
          <div className="autor-content">
            <h2>Stan Lee <span className="nickname"> (The Man)</span></h2>
            <p>
              O lendário criador e ex-editor-chefe da Marvel Comics. Com sua imaginação ilimitada, Stan Lee co-criou o Homem-Aranha. Ele foi o responsável por humanizar os super-heróis, dando a eles problemas cotidianos.
            </p>
            <h3>Outras Criações Notáveis:</h3>
            <ul className="comic-list">
              <li><i className="fas fa-bolt"></i> X-Men</li>
              <li><i className="fas fa-circle-notch"></i> Quarteto Fantástico</li>
              <li><i className="fas fa-fist-raised"></i> Hulk</li>
            </ul>
          </div>
        </div>
        
        <div className="autor-card steve-ditko-card">
          <div className="autor-image-container">
            <img src="/steve.jpg" alt="Steve Ditko" className="autor-image" />
          </div>
          <div className="autor-content">
            <h2>Steve Ditko <span className="nickname"> (The Artist)</span></h2>
            <p>
              O genial artista por trás da concepção visual do Homem-Aranha. Foi Ditko quem desenhou o icônico uniforme, o lança-teias e os movimentos acrobáticos que definiram o herói. Sua visão única e estilo artístico trouxeram vida aos personagens.
            </p>
            <h3>Legado Artístico:</h3>
            <p>Ditko foi também o co-criador visual do Doutor Estranho, introduzindo o misticismo e as dimensões alternativas ao universo Marvel.</p>
          </div>
        </div>
        
      </div>

      <h2 className="title-comic other-works-title"><i className="fas fa-book-open"></i> Outras Obras dos Mestres</h2>
      
      <div className="other-works-container">
        <div className="book-purchase-card">
          <img src="/quarteto.jfif" alt="Quarteto Fantástico" className="book-cover" />
          <div className="book-details">
            <h3 className="book-title-small">Quarteto Fantástico #1</h3>
            <p className="book-price">
              <span className="price-tag">Preço:</span> <span className="price-value">R$ 35,00</span>
            </p>
            <button className="buy-button-small">Comprar</button>
          </div>
        </div>

        <div className="book-purchase-card">
          <img src="/hulk.jfif" alt="O Incrível Hulk" className="book-cover" />
          <div className="book-details">
            <h3 className="book-title-small">O Incrível Hulk #1</h3>
            <p className="book-price">
              <span className="price-tag">Preço:</span> <span className="price-value">R$ 32,50</span>
            </p>
            <button className="buy-button-small">Comprar</button>
          </div>
        </div>


        <div className="book-purchase-card">
          <img src="/xmen.jpg" alt="X-Men" className="book-cover" />
          <div className="book-details">
            <h3 className="book-title-small">X-Men: A Saga da Fênix</h3>
            <p className="book-price">
              <span className="price-tag">Preço:</span> <span className="price-value">R$ 45,00</span>
            </p>
            <button className="buy-button-small">Comprar</button>
          </div>
        </div> 


        <div className="book-purchase-card">
          <img src="/doutor.jfif" alt="Doutor Estranho" className="book-cover" />
          <div className="book-details">
            <h3 className="book-title-small">Doutor Estranho #1</h3>
            <p className="book-price">
              <span className="price-tag">Preço:</span> <span className="price-value">R$ 30,00</span>
            </p>
            <button className="buy-button-small">Comprar</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}