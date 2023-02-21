import { router, useEffect } from "../../lib";
import axios from "axios";
// import { projects } from "../../data";
const ProjectAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name");
    const image = document.querySelector("#projects-images");
    const url = document.querySelector("#projects-url");
    // Truy cập vào các ô span
    const errorNameEle = document.getElementById("error-name");
    const errorUrlEle = document.getElementById("error-url");
    const errorImageEle = document.getElementById("error-images");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let nameValue = name.value;
      let urlValue = url.value;

      // Validate dữ liệu trong các ô input và highlight
      // Kiểm tra trường username
      if (nameValue.length == "") {
        errorNameEle.innerHTML = "Usename không được bỏ trống";
      } else {
        errorNameEle.innerHTML = "";
      }
      // Kiểm tra trường url
      if (urlValue.length == "") {
        errorUrlEle.innerHTML = "Url không được bỏ trống";
      } else {
        errorUrlEle.innerHTML = "";
      }
      // Kiểm tra trường images

      var fileInput = document.getElementById("projects-images");

      var filePath = fileInput.value;

      // Kiểm tra kiểu file
      var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

      if (!allowedExtensions.exec(filePath)) {
        errorImageEle.innerHTML = "File không hợp lệ";
        fileInput.value = "";
        return false;
      }

      //---------------------------
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
  return /*html*/ `
    <h1 style="margin-top:2%;text-align: center;">Add Project</h1>
    
    <div class="containerForm">
      <form id="form-add">
        <div class="group">
          <input type="text" id="name" class="border"  />
          <span style="color:red;" id="error-name"> </span>                
          <label>Project Name</label>
        </div>

        <div class="group">
          <input type="file" id="projects-images" class="border "  />
          <span style="color:red;" id="error-images"> </span> 
          <label>Project Images</label>
        </div>

        <div class="group">
          <input type="url" id="projects-url" class="border"  />
          <span style="color:red;" id="error-url"> </span> 
          <label>Project Url</label>
        </div>

        
        <button class="btn btn-primary">Thêm</button>
      </form>
    </div>
    `;
};
export default ProjectAdd;
