# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
course_list = [
  {
    name: "Ruby on rails",
    imageurl: "https://www.clariontech.com/hubfs/BlogImage-99.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
    category: "Programming"
    
  },
  {
    name: "Unity 3d",
    imageurl: "https://unity3d.com/files/images/ogimg.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
    category: "Game development"
    
  },
  {
    name: "Vue Mastery",
    imageurl: "https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/Vue.js-cta-main.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
    category: "Programming"
    
  },
  {
    name: "Data Structure",
    imageurl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191213191344/Why-Data-Structures-and-Algorithms-Are-Important-to-Learn.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
    category: "Computer Sciene"
    
  },
  {
    name: "Node JS",
    imageurl: "https://images.tutorialedge.net/images/node.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
    category: "Programming"
    
  },
  {
    name: "Web Development with Django",
    imageurl: "https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/curious/uploads/pictures/1512133966-1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
    category: "Programming"
    
  },
]

lesson_list = [
  {
    lessonname: "Basic 1",
    lessonmaterial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at."
    
  },
  {
    lessonname: "Basic 1",
    lessonmaterial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at."
    
  },
  {
    lessonname: "Basic 1",
    lessonmaterial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at."
    
  },
  {
    lessonname: "Basic 1",
    lessonmaterial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at."
    
  },
  {
    lessonname: "Basic 1",
    lessonmaterial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at."
    
  },
  {
    lessonname: "Basic 1",
    lessonmaterial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at."
    
  }
]





course_list.each do |course| 
  Course.create!(course)
end
lesson_list.each do|lesson|
  @lesson = Lesson.new(lesson);
  @course = Course.find(1)
  @lesson.course = @course
  @lesson.save!
end
puts "#{course_list.count} courses created!"
puts "#{lesson_list.count} lessons created!"