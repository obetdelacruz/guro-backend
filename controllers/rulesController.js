import Rules from "../models/Rules.js";

//HTTP GET ALL RULES
async function getRules(req, res) {
  const rules = await Rules.find({});

  return res.status(200).json(rules);
}

//http get rules by id
async function getRulesById(req, res) {
  const id = req.params.id;
  const rules = await Rules.findById(id);

  return res.status(200).json(rules);
}
//HTTP CREATE/POST RULES
async function createRules(req, res) {
  try {
    const { rules } = req.body;
    const newRules = new Rules({ rules });
    const savedRules = await newRules.save();

    res.status(201).json(savedRules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create rules" });
  }
}
//HTTP UPDATE/PUT RULES
async function updateRules(req, res) {
  try {
    const rulesId = req.params.id;
    const { rules } = req.body;

    const updatedRules = await Rules.findByIdAndUpdate(
      rulesId,
      { rules },
      { new: true }
    );

    if (!updatedRules) {
      return res.status(404).json({ error: "Rules not found" });
    }

    res.status(200).json(updatedRules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update rules" });
  }
}

async function deleteRules(req, res) {
  try {
    const rulesId = req.params.id;
    await Rules.findByIdAndDelete(rulesId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete rules" });
  }
}

export default {
  //other Routes
  getRules,
  getRulesById,
  createRules,
  updateRules,
  deleteRules,
};
