import { useState } from 'react';
import './App.css';

const tecnologias = ['React', 'Vite', 'Git', 'GitHub', 'Vercel'];

function App() {
  const [cliques, setCliques] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Olá, eu sou o Cauã!</h1>
        <p>Atividade de DevOps: template React publicado na Vercel.</p>
      </header>

      <main className="conteudo">
        <section className="card">
          <h2>Tecnologias usadas</h2>
          <ul>
            {tecnologias.map((tec) => (
              <li key={tec}>{tec}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Contador interativo</h2>
          <p>Você clicou {cliques} vezes.</p>
          <button onClick={() => setCliques(cliques + 1)}>Clique aqui</button>
          <button className="secundario" onClick={() => setCliques(0)}>
            Zerar
          </button>
        </section>
      </main>

      <footer className="rodape">
        Feito por Cauã Nogueira – Fatec · Template original: SafdarJamal/vite-template-react
      </footer>
    </div>
  );
}

export default App;