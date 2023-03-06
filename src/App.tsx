import { Header } from "./components/header";
import { RoutesComponent as Routes } from "./components/routes";

export const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes />
    </div>
  );
}
