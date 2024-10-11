// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import { User } from './Models/user.model.js';
// import { Class } from './Models/class.model.js';
// import { Course } from './Models/course.model.js';
// import { Topic } from './Models/topic.model.js';

// // Load environment variables
// dotenv.config();

// // MongoDB Connection
// mongoose
//   .connect('your mongodb uri/School')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// // Function to seed data
// const seedData = async () => {
//   try {
//     // Clear existing data
//     await Class.deleteMany({});
//     await Course.deleteMany({});
//     await Topic.deleteMany({});
//     await User.deleteMany({});

//     // Create 12 classes ("One" to "Twelve") with IDs "01" to "12"
//     const classNames = [
//       'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
//     ];
//     const classes = await Promise.all(
//       classNames.map((name, index) =>
//         Class.create({ className: name, classId: String(index + 1).padStart(2, '0'), course: [] })
//       )
//     );

//     // Create Courses, Topics, and Users for each class
//     for (let i = 0; i < classes.length; i++) {
//       const classModel = classes[i];
      
//       // Two courses for each class
//       const courseNames = [`Course ${i * 2 + 1}`, `Course ${i * 2 + 2}`];
//       const courses = await Promise.all(
//         courseNames.map((courseName) => Course.create({ courseName }))
//       );

//       // Assign each course to the class
//       classModel.course = courses.map((course) => course._id);
//       await classModel.save();

//       // Create one topic for each course
//       for (let course of courses) {
//         const topicTitle = course.courseName.replace('Course', 'Topic'); // Create topic titles like "Topic 1", "Topic 2", etc.
//         const topic = await Topic.create({
//           title: topicTitle,
//           description: 'Lorem ipsum description for ' + topicTitle,
//           content: 'Lorem ipsum content for ' + topicTitle,
//           videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example video link
//           iframe: '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
//         });

//         // Assign the topic to the course
//         course.topics = [topic._id];
//         await course.save();
//       }

//       // Create a user for each class
//       const classIdString = classModel.classId; // Get the class ID (e.g., "01", "02")
//       const username = `${classIdString}${classIdString.padStart(3, '0')}`; // Generate username like "01001", "02002"
      
//       const password = 'password123'; // Store the plain string password

//       // Create the user with the generated username and class reference
//       await User.create({
//         username: username,
//         password: password, // Use plain password
//         refreshToken: '',
//       });

//       console.log(`Created user for class ${classModel.className} with username ${username}`);
//     }

//     console.log('Data seeding completed successfully.');
//     mongoose.connection.close();
//   } catch (err) {
//     console.error('Error while seeding data:', err);
//     mongoose.connection.close();
//   }
// };

// // Call the function to seed data
// seedData();
