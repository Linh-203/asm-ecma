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
  return `<div>
        <h1>Quản lý dự án</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên dự án</th>
                    <th></th>
                </tr>
            </thead>
        <tbody>
            ${data
              .map(
                (project, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${project.name}</td>
                    <td>
                        <button data-id="${
                          project.id
                        }" class="btn btn-remove btn-danger">Remove</button>
                        <a href="/admin/projects/${project.id}/edit">Sửa</a>
                    </td>
                </tr>
            `
              )
              .join("")}
            
        </tbody>
    </div>`;
};

export default ProjectsPage;

// JSON: parse va stringify
// localStorage.getItem(key) => vi du: JSON.parse(localStorage.get('a'))
// localStorage.setItem(key, JSON.stringify(value));

// Bước 1: npm i -g json-server
// Bước 2: truy cập vào root folder gõ : json-server --watch db.json
// Nếu lỗi: truy cập https://angular.io/guide/setup-local
// copy dòng: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
