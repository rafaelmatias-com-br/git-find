import {Header} from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/itemList"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={background} className="background" alt="background app"/>

        <div className="info">
          
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>

          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/70954632?v=4" className="profile" alt="imagem de perfil"/>

            <div>
              <h3>Rafael Matias</h3>
              <span>@rafaelmatias-com-br</span>
              <p>Descrição Github</p>
            </div>
          </div>

          <hr/>
          
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Teste01" description="Teste de descrição"/>
            <ItemList title="Teste01" description="Teste de descrição"/>
            <ItemList title="Teste01" description="Teste de descrição"/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
