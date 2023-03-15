import { Header } from "./components/header";
import { RoutesComponent as Routes } from "./components/routes";
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <div className="container">
      <div className="container__fullscreen">
        <Header />

        <Routes />

        <Toaster />
      </div>
    </div>
  );
}
