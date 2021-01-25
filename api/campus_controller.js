const express = require('express');
const router = express.Router();

const models = require('../database/models');

// Allows to get all campuses - returns an array
router.get('/', (req, res, next) => {
    models.Campus.findAll({
        // Eager loading - includes a nested array of students associated with each campus
        include: {
            model: models.Student
        }
    })
    .then(campuses => {
        res.status(200)
        .json({
            message: "Success!",
            campuses
        });
    })
    .catch(err => {
        res.status(500)
        .json({
            message: "An error has occurred!",
            err
        });
    });
});

// Allows to get a single campus - returns a single object
router.get('/:id', (req, res, next) => {
    models.Campus.findByPk(req.params.id)
    .then(campus => {
        if(!campus)
            res.status(404)
            .json({
                message: "Campus not found!"
            })

        res.status(200)
        .json({
            message: "Successfully got campus!",
            campus
        });
    })
    .catch(err => {
        res.status(500)
        .json({
            message: "An error has occurred!",
            err
        });
    });
});

// Allows to add a campus
router.post('/', (req, res, next) => {
    models.Campus.create({
        campusname: req.body.campusname,
        description: req.body.description,
        address: req.body.address,
        imageurl: req.body.imageurl
    })
    .then(campus => {
        res.status(201)
        .json({
            message: "Successfully inserted campus!",
            campus
        })
    })
    .catch(err => {
        res.status(400)
        .json({
            message: "An error has occurred!",
            err
        });
    });
});

// Allows to update a campus
router.put('/:id', (req, res, next) => {
    models.Campus.findByPk(req.params.id)
    .then(campus => {
        if(!campus)
            res.status(404)
            .json({
                message: "Campus not found"
            });

        campus.update({
            campusname: req.body.campusname,
            description: req.body.description,
            address: req.body.address,
            imageurl: req.body.imageurl
        });

        campus.save();

        res.status(200)
        .json({
            message: "Campus successfully updated",
            campus
        });
    })
    .catch(err => {
        res.status(500)
        .json({
            message: "An error has occurred!",
            err
        });
    });
});

// Allows to delete a campus
router.delete('/:id', (req, res, next) => {
    models.Campus.findByPk(req.params.id)
    .then(campus => {
        if(!campus)
            res.status(404)
            .json({
                message: "Campus not found"
            })

        campus.destroy();

        res.status(200)
        .json({
            message: "Campus successfully deleted"
        });
    })
    .catch(err => {
        res.status(500)
        .json({
            message: "An error has occurred!",
            err
        });
    });
});


module.exports = router;