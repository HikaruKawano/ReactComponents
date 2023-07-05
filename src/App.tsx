import { Text } from "./components/atom";
import { MoleculeInput } from "./components/molecule";
import LoginTemplate from "./components/template/Login";

function App() {
  return (
    <LoginTemplate
      LabelStyle={{ height: "50px" }}
      InputStyle={{ amount: 1}}
      ContainerStyle={{}}
    >
      <Text>AAAAA</Text>
      <Text> ffffff</Text>
      <Text>ffffffffff</Text>
      
    </LoginTemplate>
  );
}

export default App;
