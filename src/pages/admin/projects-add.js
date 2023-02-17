import { router, useEffect } from "../../lib";
import axios from "axios";
// import { projects } from "../../data";
const ProjectAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name");
    const image = document.querySelector("#projects-images");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(image.files);
      const formData = {
        name: name.value,
        gallery: urls,
      };
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
  return `<div>
        <form id="form-add">
            <label for="">Tên Projects</label>
            <input type="text" id="name" class="border" />
            <label for="">ảnh Projects</label>
            <input type="file" multiple id="projects-images" class="border" />
            <button class="btn btn-primary">Thêm</button>
          </form>
    </div>`;
};

export default ProjectAdd;
