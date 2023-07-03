import { Text } from "./components/atom";
import { MoleculeInput } from "./components/molecule";
import LoginTemplate from "./components/template/Login";

function App() {
  return (
    <LoginTemplate
      LabelStyle={{ height: "50px" }}
      InputStyle={{}}
      ContainerStyle={{}}
    >
      <Text>AAAAA</Text>
      <Text>DDDDD</Text>
    </LoginTemplate>
  );
}

export default App;
