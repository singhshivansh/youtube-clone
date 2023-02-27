import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from "./utils/store";
import Body from './Components/Body';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import VideoContainer from './Components/VideoContainer';
import VideoPage from './Components/VideoPage';
import VideoSearch from './Components/VideoSearch';

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
        },
        {
          path : '/results',
          element : <VideoSearch />
        }
      ]
    }
  ])
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
        <div className=''>
        </div>
      </Provider>
    </>
  );
}

export default App;
