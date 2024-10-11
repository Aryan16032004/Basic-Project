import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Container } from '../Components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import databaseService from '../BackendApi/database.js'; // Importing the service for API calls

// Custom Next Arrow Button
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      Next
    </div>
  );
}

// Custom Prev Arrow Button
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      Prev
    </div>
  );
}

function Courses() {
  const [courses, setCourses] = useState([]); // State to hold the courses array

  // Fetch courses when component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await databaseService.getUserCourses(); // Call to get courses using the service
        console.log("API Response:", response);  // Debugging the entire response

        const courseData = response?.data?.data ?? []; // Defensive check for nested data
        console.log("Fetched Course Data:", courseData);  // Debugging the actual course data

        if (Array.isArray(courseData)) {
          const courseArray = courseData.map((course) => ({
            _id: course._id,
            courseName: course.courseName,
          }));

          console.log("Mapped Course Array:", courseArray);
          setCourses(courseArray); // Set the courses array
        } else {
          console.error('Error: Data returned is not an array:', courseData);
        }
      } catch (error) {
        console.error('Error fetching courses:', error.message);
      }
    };

    fetchCourses();
  }, []);

  // Slider settings for slick-carousel
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
   <Container>
     <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-screen-xl pt-20 relative">
        {/* Slider to display courses */}
        <Slider {...settings}>
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id} className="p-2">
                <Link to={`/course/${course._id}`}>
                  <div className="w-full h-32 border border-solid border-black flex items-center justify-center rounded-lg bg-white shadow-md hover:bg-gray-200">
                    <span className="text-lg font-medium">{course.courseName}</span>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>No courses available</div>
          )}
        </Slider>
      </div>

      {/* Custom styles for the carousel navigation buttons */}
      <style>{`
        .custom-arrow {
            position: absolute;
            top: 50%;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            z-index: 1;
          }
          .custom-next {
            right: 10px;
          }
          .custom-prev {
            left: 10px;
          }
      `}</style>
    </div>
   </Container>
  );
}

export default Courses;
