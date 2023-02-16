import { render, router } from "./lib";
import HomePage from "./pages/Home";
import AdminProjectPage from "./pages/admin/projects";
import AdminProjectAddPage from "./pages/admin/projects-add";
import AdminProjectEditPage from "./pages/admin/projects-edit";

const app = document.getElementById(`app`);

router.on("/", () => render(HomePage, app));
router.notFound(() => console.log(`Not Found Page`));
router.on("/admin/projects", () => render(AdminProjectPage, app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => AdminProjectEditPage(data), app)
);
router.resolve();
