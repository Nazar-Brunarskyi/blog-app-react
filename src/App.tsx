import { Header } from "./components/header";
import { RoutesComponent as Routes } from "./components/routes";

export const App = () => {
  return (
    <div className="container">
      <div className="container__fullscreen">
        <Header />

        <Routes />
      </div>
    </div>
  );
}
