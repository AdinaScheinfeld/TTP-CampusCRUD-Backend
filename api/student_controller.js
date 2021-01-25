const express = require('express');
const router = express.Router();
const models = require('../database/models');

// Allows to get all students
router.get('/', (req, res, next) => {
    models.Student.findAll()
    .then(students => {
        res.status(200)
        .json({
            message: "Successfully got all students!",
            students
        })
    })
});

// Allows to create a student who is associated with a campus
router.post('/', (req, res, next) => {
    models.Student.create({
        studentname: req.body.studentname,
        gpa: req.body.gpa,
        email: req.body.email,
        imageurl: req.body.imageurl,
        campusId: req.body.campusid
    })
    .then(student => {
        res.status(200)
        .json({
            message: "Successfully inserted student",
            student
        });
    })
})

module.exports = router;