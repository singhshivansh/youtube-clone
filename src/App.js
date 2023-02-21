import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import store from "./utils/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Sidebar />
      </Provider>
    </>
  );
}

export default App;
