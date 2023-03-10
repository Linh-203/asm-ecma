import { projects } from "../data";
import { useEffect, useState } from "../lib";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // điều kiện để gọi lại useEffect
  return `
  <section class="section" id="projects">
  <div class="container text-center">
      <p class="section-subtitle">What I Did ?</p>
      <h6 class="section-title mb-6">Projects</h6>
      <!-- row -->
      <div class="row">
          ${data
            .map(
              (project) =>
                `<div class="col-md-4">
                <a target="_blank" href="${project.url}" class="portfolio-card">
                  <img src="${project.gallery}" class="portfolio-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">    
                  <span class="portfolio-card-overlay">
                      <span class="portfolio-card-caption">
                          <h4>${project.name}</h5>
                          <p class="font-weight-normal">Category: Web Templates</p>
                      </span>                         
                  </span>                     
              </a>
          </div>`
            )
            .join("")}
           
      </div><!-- end of row -->
      
  </div><!-- end of container -->
</section>
    `;
};
export default Projects;
