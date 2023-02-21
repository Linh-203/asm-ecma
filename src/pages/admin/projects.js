// import { projects } from "@/data";
import { useEffect, useState } from "../../lib";
const ProjectsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // điều kiện để gọi lại useEffect
  useEffect(() => {
    // 3
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        // Xóa local
        const newProjects = data.filter((project) => project.id != id);
        setData(newProjects);

        // xóa server

        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        }).then(() => alert("Xóa thành công"));
      });
    }
  });
  // 2
  return `
  
      <h1 style="margin-top:2%;text-align: center;">Quản lý dự án</h1>
      <a id="btn-add-new" class="btn btn-primary" href="/admin/projects/add">Thêm</a>
        <table style="margin-top:3%;text-align:center" class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên dự án</th>
                    <th>Link Url</th>
                    <th>Ảnh dự án</th>
                    <th>Action</th>
                </tr>
            </thead>
        <tbody>
            ${data
              .map(
                (project, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${project.name}</td>
                    <td>${project.url}</td>
                    <td id="adminImg"><img src="${
                      project.gallery
                    }" alt=""> </td>
                    <td>
                        <button data-id="${
                          project.id
                        }" class="btn btn-remove btn-danger">Xóa</button>
                        <a class="btn btn-primary" href="/admin/projects/${
                          project.id
                        }/edit">Sửa</a>
                       
                    </td>
                </tr>
            `
              )
              .join("")}
            
        </tbody>
        </table>
    `;
};

export default ProjectsPage;
