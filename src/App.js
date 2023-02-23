import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Provider } from 'react-redux';
import store from "./utils/store";
import Body from './Components/Body';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import VideoContainer from './Components/VideoContainer';
import VideoPage from './Components/VideoPage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Body />,
      children : [
        {
          path: "/",
          element : <VideoContainer />
        },
        {
          path : '/watch',
          element : <VideoPage/>
        }
      ]
    }
  ])
  return (
    <>
      <Provider store={store}>
        <div className=''>
          <Header />
        </div>
        <div className=''>
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;
