import { Text } from "./components/atom";
import { LoginTemplate } from "./components/template/Login";


function App() {
  return (
    <LoginTemplate.root>
      <LoginTemplate.card typeCard="CardDefault">
        <LoginTemplate.input />
        <LoginTemplate.label>
          <Text>AAAAAAAAAAA</Text>
        </LoginTemplate.label>
      </LoginTemplate.card>
    </LoginTemplate.root>
  );
}

export default App;
