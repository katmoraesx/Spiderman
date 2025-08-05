export default function Autor() {
  return (
    <div className="page autor-page">
      <h1 className="title-comic"><i className="fas fa-pen-nib"></i> Os Mestres da Marvel</h1>
      <div className="autor-container">
        <div className="autor-card">
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
        <div className="autor-card ditko-card">
          <h2>Steve Ditko <span className="nickname"> (The Artist)</span></h2>
          <p>
            O genial artista por trás da concepção visual do Homem-Aranha. Foi Ditko quem desenhou o icônico uniforme, o lança-teias e os movimentos acrobáticos que definiram o herói. Sua visão única e estilo artístico trouxeram vida aos personagens.
          </p>
          <h3>Legado Artístico:</h3>
          <p>Ditko foi também o co-criador visual do Doutor Estranho, introduzindo o misticismo e as dimensões alternativas ao universo Marvel.</p>
        </div>
      </div>
    </div>
  );
}