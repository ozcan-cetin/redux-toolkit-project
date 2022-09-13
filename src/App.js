import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppRouter from "./router/AppRouter";
import { store } from "./app/store";
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <AppRouter/>
     </Provider>
    </div>
  );
}

export default App;
