import Footer from "../components/Footer";
import Header from "../components/Header";
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
