import { Template } from "./components/template/authentication";

function App() {
  return (
    <>
    <Template.Login isEdit > 
      <Template.Components.Label className="ConfirmPassoword">
        aaaa
      </Template.Components.Label>
    </Template.Login>

    <Template.Register isEdit>
      <Template.Components.Label className="ConfirmPassoword">
        DDDDD
      </Template.Components.Label>
      <Template.Components.input></Template.Components.input>
    </Template.Register>
    </>
  );
}

export default App;
