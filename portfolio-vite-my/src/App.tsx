import {Header} from "./layout/header/Header";
import {AboutMe} from './layout/sections/aboutMe/AboutMe.tsx'
import {TechStack} from "./layout/sections/techStack/TechStack.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {MailMe} from "./layout/sections/mailMe/MailMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        // // <BrowserRouter>
        //
        // {/*        <Routes>*/}
        // {/*            <Route path='/about/' element={<AboutMe/>}/>*/}
        // {/*            <Route path='/tech/' element={<TechStack/>}/>*/}
        // {/*            <Route path='/projects/' element={<Projects/>}/>*/}
        // {/*            <Route path='/mail/' element={ <MailMe/>}/>*/}
        // {/*            <Route path='/cotacts/' element={<Contacts/>}/>*/}
        // {/*        </Routes></BrowserRouter>*/}
        <div>
            <Header/>
            <AboutMe/>
            <TechStack/>
            <Projects/>
            <MailMe/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

