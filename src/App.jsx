import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikePost2 from './components/Project-hoc/LikePost2';
import LinkeImage2 from './components/Project-hoc/LinkeImage2';
import Renderprops from './components/Project-render/RenderProps';
import LikeImage3 from './components/Project-render/LikeImage3';
import LikePost3 from './components/Project-render/LikePost3';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LinkeImage2/>
        <LikePost2/>
      </div>

      <h3>Some more Blogs</h3>
      <div className='buttons'>
        <Renderprops render = {(count,handleCount)=>(
          <LikePost3 count={count} handelCount={handleCount}/>
        )}
        />
        <Renderprops
        render = {(count,handleCount)=>(
          <LikeImage3 count={count} handelCount={handleCount}/>
          )}
        />
    </div>
  </div>
  )
}

export default App;
