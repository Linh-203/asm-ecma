import Typed from "typed.js";
import { useEffect } from "../lib";
const typingEffect = () => {
  useEffect(() => {
    var typing = new Typed(".down", {
      strings: ["I am Linh"],
      loop: true,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 2000,
    });
  });
  return `<span class="down"></span>`;
};

export default typingEffect;
