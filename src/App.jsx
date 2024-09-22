import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage'
import RSVPPage from './pages/RSVPPage';
import EntouragePage from './pages/EntouragePage';
import VenuePage from './pages/VenuePage';
import AttirePage from './pages/AttirePage';


const router = createBrowserRouter(createRoutesFromElements(
  <>
  {/* Pasulod pa sng main layout ha */}

      <Route path="/welcome" element={<WelcomePage/>}/>
      
    <Route path='/' element={<MainLayout/>}> 
      <Route index element={<HomePage/>}/>
      <Route path="/rsvp" element={<RSVPPage/>}/>
      <Route path="/gallery" element={<RSVPPage/>}/>
      <Route path="/venue" element={<VenuePage/>}/>
      <Route path="/entourage" element={<EntouragePage/>}/>
      <Route path="/attire" element={<AttirePage/>}/>
    </Route>


 
  </>

))


const App = () => {
  return  <RouterProvider router={router} />;
}

export default App