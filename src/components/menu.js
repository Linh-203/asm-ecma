const Menu = () => {
  return `
  <nav class="custom-navbar" data-spy="affix" data-offset-top="20">
        <div class="container">
            <a class="logo" href="#">V.Linh</a>         
            <ul class="nav">
                <li class="menu-list">
                    <a class="link" href="#">Home</a>
                </li>
                <li class="menu-list">
                    <a  class="link" href="#about">About</a>
                </li>
                <li class="menu-list">
                    <a class="link" href="#projects">Projects</a>
                </li>
                <li class="menu-list">
                    <a class="link" href="#contact">Contact</a>
                </li>
                <!-- <li class="item">
                    <a class="link" href="#testmonial">Testmonial</a>
                </li> 
                <li class="item">
                    <a class="link" href="#blog">Blog</a>
                </li>
                
                <li class="item ml-md-3">
                    <a href="components.html" class="btn btn-primary">Components</a>
                </li>
                -->
            </ul>
            
        </div>          
    </nav>
    `;
};
export default Menu;
