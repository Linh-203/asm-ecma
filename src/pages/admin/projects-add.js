import { router, useEffect } from "../../lib";
import axios from "axios";
// import { projects } from "../../data";
const ProjectAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name");
    const image = document.querySelector("#projects-images");
    const url = document.querySelector("#projects-url");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(image.files);
      const formData = {
        name: name.value,
        gallery: urls,
        url: url.value,
      };
      console.log(urls);
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/admin/projects"));
    });
  });

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dv6o1dqnx";
      const PRESET_NAME = "portfolio";
      const FOLDER_NAME = "Portfolio";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData(); //key: values

      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      }
      return urls;
    }
  };
  return `
    <h1 style="margin-top:2%;text-align: center;">Add Project</h1>
    
    <div class="containerForm">
      <form id="form-add">
        <div class="group">
          <input type="text" id="name" class="border" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Project Name</label>
        </div>

        <div class="group">
          <input type="file" multiple id="projects-images" class="border" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Project Images</label>
        </div>

        <div class="group">
          <input type="url" id="projects-url" class="border" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Project Url</label>
        </div>

        
        <button class="btn btn-primary">Thêm</button>
      </form>
    </div>
    `;
};
export default ProjectAdd;
