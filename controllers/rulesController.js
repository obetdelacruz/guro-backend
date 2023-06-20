import Rules from "../models/Rules.js";

async function getRules(req, res) {
  res.send("Rules resource");
}

async function getRulesById(req, res) {
  res.send("Rules resource by id");
}

async function createRules(req, res) {
  res.send("Rules has been created");
}

async function updateRules(req, res) {
  res.send("Rules has been updated");
}

async function deleteRules(req, res) {
  res.send("Rules has been deleted");
}
export default {
  //other Routes
  getRules,
  getRulesById,
  createRules,
  updateRules,
  deleteRules,
};
