import { Text } from "./components/atom";
import { Auth } from "./components/template/Login";

function App() {
  return (
    <Auth.Login.root>
      <Auth.Login.form >
        <Auth.Login.input />
        <Auth.Login.label>
          <Text>AAAAAAAAAAA</Text>
        </Auth.Login.label>
        <Auth.Login.button>Enviar</Auth.Login.button>
      </Auth.Login.form>
    </Auth.Login.root>
  );
}

export default App;
