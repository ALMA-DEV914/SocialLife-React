import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Rightbar from './components/rightbar/Rightbar';

function App() {
  return (
    <>
   <Home/>
   <div className='homeConatiner'>
   <Sidebar/>
   <Rightbar/>
   </div>
   </>
  );
}

export default App;
