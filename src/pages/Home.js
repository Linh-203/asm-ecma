import Footer from "../components/footer";
import Header from "../components/header";
import Menu from "../components/menu";
import About from "../components/about";
import Projects from "../components/projects";
import ContactWork from "../components/contact-work";
import Contact from "../components/contact";
const HomePage = () => {
  return `
    ${Menu()}
    ${Header()}
    ${About()}
    ${Projects()}
    ${ContactWork()}
    ${Contact()}
    ${Footer()}
    `;
};
export default HomePage;
