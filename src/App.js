import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Provider } from 'react-redux';
import store from "./utils/store";
import Body from './Components/Body';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import VideoContainer from './Components/VideoContainer';

function App() {
  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Body />,
      children : [
        {
          path: "/",
          element : <VideoContainer />
        }
      ]
    }
  ])
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
