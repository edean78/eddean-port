const router = require('express').Router();
const projectController = require('../../controllers/projectController');

// Matches with "/api/projects"
router.route('/projects')
    .get(projectController.findAll)

module.exports = router;
    