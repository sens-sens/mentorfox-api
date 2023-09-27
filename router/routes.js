const express = require('express');
const router = express.Router();
const CourseController = require('./../controllers/CourseController'); // Import the controller class

router.get('/api/v1/coursecategories', CourseController.getAllCourses);
router.get('/api/v1/coursecategories/:id', CourseController.getCourseById);
router.put('/api/v1/coursecategories', CourseController.updateCourse);
router.post('/api/v1/coursecategories', CourseController.createCourse);
router.delete('/api/v1/coursecategories', CourseController.deleteCourse);


module.exports = router;
