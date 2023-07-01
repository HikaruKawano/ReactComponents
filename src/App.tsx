import { AuthenticationOrganisme } from "./components/Organism";
import { MoleculeInput } from "./components/molecule";
import LoginTemplate from "./components/template/Login";

function App() {
  return (
    <LoginTemplate
      LabelStyle={{ height: "50px" }}
      InputStyle={{}}
      ContainerStyle={{}}
    >
      <p>sdadad</p>
      <MoleculeInput InputProps={{}} LabelProps={{}}>
        <p>aaaaaa</p>
      </MoleculeInput>
      <p>asdada</p>
    </LoginTemplate>
  );
}

export default App;
