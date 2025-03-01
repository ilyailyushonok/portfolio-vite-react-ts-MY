import {Header} from "./layout/header/Header";
import {AboutMe} from './layout/sections/aboutMe/AboutMe.tsx'
import {TechStack} from "./layout/sections/techStack/TechStack.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {MailMe} from "./layout/sections/mailMe/MailMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GoTopBtn} from "./components/goTop/GoTopBtn.tsx";

function App() {
    return (

        <div>
            <div></div>
            <Header/>
            <AboutMe/>
            <TechStack/>
            <Projects/>
            <MailMe/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;

