import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import Navbars from './pages/navbars';
import Widget from './pages/widget';
import Home from './pages/home';
import Footer from './pages/footer';
import Login from './components/login';
import Settings from './pages/settings';
import Forbidden from './components/forbidden';
import CategoryPost from './pages/categoryPost';
import Post from './pages/post';
import Write from './pages/write';
import Functions from './utils/functions';


const AppRoute = () => {
    const headerRef = useRef(null);
    const member = useSelector((state) => state.member.data);

    return (
        <BrowserRouter>
            <div ref={headerRef} className='wrapper'>
                <Login/>
                <Navbars/>
                <div className="session mb-5">
                    <div className="Container" style={{display:"flex", width:"100%"}}>
                        <Widget/>
                        <Routes>
                            <Route exact path='/' element={<Home headerRef={headerRef}/>} />
                            <Route exact path='/settings' element={Functions.isAdmin(member) ?<Settings/> : <Forbidden/>}/>
                            <Route exact path='/category/:name' element={<CategoryPost headerRef={headerRef}/>}/>
                            <Route exact path='/write' element={<Write/>}/>
                            <Route exact path='/post/:id' element={<Post headerRef={headerRef}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default AppRoute;