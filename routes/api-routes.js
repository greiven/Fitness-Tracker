var db = require("../models");    
     module.exports = function(app) {
//  get all the workouts
         app.get("/api/workouts", (req, res) => {
            db.Workout.find({})
            .then(allWorkouts => {
                res.json(allWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
        });
//  create a new workout 
        app.post("/api/workouts", (req,res) => {
            db.Workout.create({})
              .then(Workoutdb => {
                res.json(Workoutdb);
              })
              .catch(err => {
                res.json(err);
              });
          });
//   update the workout by adding a new exercice 
          app.put("/api/workouts/:id", (req, res) => {
            const exercice_id = req.params.id;
            db.Workout.findOneAndUpdate({ _id: exercice_id}, { $push: { exercises: req.body } })
              .then(Workoutdb => {
                res.json(Workoutdb);
              })
              .catch(err => {
                res.json(err);
              });
          });

// gets workouts by  range
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(5)
      .then(Workoutdb => {
        res.json(Workoutdb);
      })
      .catch(err => {
        res.json(err);
      });
  });
   
    };