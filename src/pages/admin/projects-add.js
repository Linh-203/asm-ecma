import { router, useEffect } from "../../lib";
// import { projects } from "../../data";
const ProjectAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
        name: name.value,
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

  return `<div>
        <form id="form-add">
            <input type="text" id="name" class="border" />
            <button class="btn btn-primary">Thêm</button>
        </form>
    </div>`;
};

export default ProjectAdd;
