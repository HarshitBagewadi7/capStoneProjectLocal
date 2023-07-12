const router = require("express").Router();
const ProjectModel = require("../data/models/CreateProjectModel");

router.get("/projects", async (req, res) => {
  let allPojects = await ProjectModel.find({});
  res.json(allPojects);
});

router.get("/project/:id", async (req, res) => {
  let projectData = await ProjectModel.findById(req.params.id).exec();
  res.json(projectData);
});

router.get("/contributors", async (req, res) => {
  try {
    const data = await ProjectModel.find({}, "title contribution");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/contributors/:id", async (req, res) => {
  try {
    // const { id } = req.params;
    const data = await ProjectModel.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/contributeProject/:id", async (req, res) => {
  try {
    const doc = await ProjectModel.findById(req.params.id);
    doc.contribution.push(req.body);
    await doc.save();
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/createProject", async (req, res) => {
  try {
    const createProjectData = new ProjectModel(req.body);
    await createProjectData.save();
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
