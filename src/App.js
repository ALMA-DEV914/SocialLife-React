import TopBar from './components/topbar/Topbar';
import Feed from './components/feed/Feed';
import Sidebar from './components/sidebar/Sidebar';
import Rightbar from './components/rightbar/Rightbar';

function App() {
  return (
    <>
   <TopBar/>
   <div className='homeConatiner'>
   <Sidebar/>
   <Feed/>
   <Rightbar/>
   </div>
   </>
  );
}

export default App;
