# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding..."
House.delete_all
Course.delete_all
Student.delete_all
House.create(house_name: "Frightened Bananas", house_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHKMRvjAJ5evUVrpSIdNH_408RB9Fh78ak2JZruzP7Q&s")

House.create(house_name: "Crying Pumpkins", house_img: "https://as2.ftcdn.net/v2/jpg/02/50/47/93/1000_F_250479315_jf00UuLYImXnO7iPtgAfSTvP9mOYkwtJ.jpg")
House.create(house_name: 'Raging Eggplants', house_img: "https://as2.ftcdn.net/v2/jpg/02/50/47/85/1000_F_250478591_wYWeVCVUlNdAfQgzRIqsFENUtfyhd1GQ.jpg")
Course.create(course_name: 'Magic 101', course_teacher: 'Gandalf', course_day: 'Tuesdays at 3pm', course_description: 'All caution is not enough when it comes to fighting Sauron. Be prepared should Mordor rise again')
Course.create(course_name: 'Lightsaber Safety Around Kids', course_teacher: 'Anakin', course_day: 'Wednesdays at 12pm', course_description: 'Lightsabers can be the deadliest weapon in the universe in the wrong hands. Learn all about keeping children safe from our industry experts.')
Course.create(course_name: "Wingardium Leviosa Pronunciation", course_teacher: "Hermione Granger", course_day: 'Sundays at 6am', course_description: 'The ever so difficult to pronouce spell gets its own course. Our step by step modules will get you casting it sooner than you imagine.')
Course.create(course_name: 'Pokeball Throwing Technique', course_teacher: 'Ash Ketchum', course_day: 'Fridays at 5pm', course_description:'Tired of having Pokemon run away as you try to catch them? Never again miss an opportunity by improving your throwing accuracy.')
Course.create(course_name: 'Kamehameha Fundamentals', course_teacher: 'Master Roshi', course_day: 'Mondays at 7am', course_description:'Have you ever wanted to fight off extraterrestrial attacks on Earth? Now you can! Get started with one of the most popular techniques.')
Course.create(course_name: 'Introduction to Taijutsu ', course_teacher: 'Rock Lee', course_day: 'Daily from 5am', course_description:'Flashy techniques are not for you? Learn to use your hands and feet to defend the Village Hidden in the Leaves.')

puts "Done seeding!"
