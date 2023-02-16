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

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: name.value,
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
  return `<div>
        <form id="form-edit">
            <input type="text" id="name" class="border" value="${project.name}" />
            <button class="btn btn-primary">Sửa</button>
        </form>
    </div>`;
};

export default ProjectEdit;
