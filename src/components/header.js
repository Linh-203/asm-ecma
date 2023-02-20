import typingEffect from "./typingEffect";
const Header = () => {
  return `
        <header id="home" class="header">
  <div class="overlay"></div>
  <div class="header-content container">
    <h1 class="header-title">
      <span class="up">Hi!</span>
      ${typingEffect()}
    </h1>
    <p class="header-subtitle">I'M FRONTEND WEB DEVELOPER</p>
    <a target="_blank" href="https://drive.google.com/file/d/1CbZ0YhF7sa_YYMqvBxkGVV6YTIjWpa6k/view?usp=sharing"><button class="btn-rounded btn btn-outline-primary mt-4">My resume</button></a>
  </div>
</header>;
    `;
};
export default Header;
