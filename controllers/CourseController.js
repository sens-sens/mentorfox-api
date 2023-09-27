const DynamoDb = require("./../db/db")

const config = {
  apiVersion: '2023-09-26',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
  AWS_SDK_LOAD_CONFIG: 1,
}

var AWS = require('aws-sdk');
// Set the region 
AWS.config.update(config);

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


const courses = [
    { id: 1, name: 'Front-End' },
    { id: 2, name: 'Cloud' },
  ];
  
  class CourseController {
    static getAllCourses(req, res) {
      ddb.listTables({Limit: 10}, function(err, data) {
        if (err) {
          console.log("Error", err.code);
        } else {
          console.log("Table names are ", data.TableNames);
        }
      });
      
      res.json(courses);
    }
  
    static getCourseById(req, res) {
      const courseId = parseInt(req.params.id);
      const course = courses.find((u) => u.id === courseId);
  
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
  
      res.json(course);
    }

    static deleteCourse(req, res) {
      res.json(courses);
    }

    static updateCourse(req, res) {
      res.json(courses);
    }

    static createCourse(req, res) {
      res.json(courses);
    }
  }
  
  module.exports = CourseController;
  