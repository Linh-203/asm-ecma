import axios from "axios";
import { router, useEffect, useState } from "../../lib";
const ProjectEdit = ({ id }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/projects/" + id)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    const url = document.querySelector("#url");
    const image = document.querySelector("#images");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(image.files);
      const formData = {
        name: name.value,
        url: url.value,
        gallery: urls,
      };
      fetch("http://localhost:3000/projects/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(() => router.navigate("/admin/projects"))
        .catch((error) => console.log(error));
    });
  });
  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dychym88x";
      const PRESET_NAME = "up-load-image";
      const FOLDER_NAME = "Portfolio-Cv";
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
    <h1 style="margin-top:2%;text-align: center;">Edit dự án</h1>
    <div class="containerForm">
      <form id="form-edit">
        <div class="group">
          <input type="text" id="name" class="border" value="${project.name}" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Project Name</label>
        </div>

        <div class="group">
          <input type="file" multiple id="images" class="border" value="${project.gallery}" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Project Images</label>
        </div>

        <div class="group">
          <input style="width: 350px;" type="url" id="url" class="border" value="${project.url}" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Project Url</label>
        </div>

        <button class="btn btn-primary">Sửa</button>
      </form>
    </div>
    `;
};

export default ProjectEdit;
