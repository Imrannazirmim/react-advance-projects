import FormBuilding from "./components/FormBuilding";

const App = () => {
  const random = Math.floor(Math.random() * 10);
  console.log(random);
  return <FormBuilding />;
};
export default App;
