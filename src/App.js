import Input from "./components/Input";

function App() {
  return (
    <div>
      <Input />
      <Input error={true}/>
      <Input disabled={true}/>
      <Input helperText="Some interesting text"/>
      <Input helperText="Some interesting text" error={true}/>
      <Input iconPos="start"/>
      <Input iconPos="end"/>
      <Input value="text"/>
      <Input size="sm"/>
      <Input fullWidth={true} />
      <Input multiline={true} rows="4"/>
    </div> 
  );
}

export default App;
