export default function PublicoAlvo() {
  return (
    <div className="page publico-alvo-page">
      <h1 className="title-comic"><i className="fas fa-users"></i> Para Quem É Esta História?</h1>
      <p className="subtitle">
        Uma aventura imperdível para todos que amam o universo Marvel e histórias inspiradoras.
      </p>
      <div className="audience-grid">
        <div className="audience-card">
          <i className="fas fa-mask"></i>
          <h2>Fãs de Super-Heróis</h2>
          <p>Para aqueles que buscam coragem, força e justiça em cada página. Uma narrativa rica em batalhas épicas e dilemas morais.</p>
        </div>
        <div className="audience-card">
          <i className="fas fa-hat-cowboy"></i>
          <h2>Amantes de Aventura</h2>
          <p>Uma jornada de ação ininterrupta, com reviravoltas surpreendentes e momentos de tirar o fôlego a cada balanço de teia.</p>
        </div>
        <div className="audience-card">
          <i className="fas fa-star-of-david"></i>
          <h2>Apoiadores da Marvel</h2>
          <p>Uma adição essencial para a coleção de qualquer fã do Universo Marvel, conectando-se com a vasta tapeçaria de histórias e personagens.</p>
        </div>
      </div>
      <div className="age-rating">
        <span>Recomendação:</span> **A partir de 10 anos**
      </div>
    </div>
  );
}