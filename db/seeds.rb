# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding..."

House.create(house_name: "Frightened Bananas", house_img: ".")
House.create(house_name: "Scaredy Cats", house_img: ".")
Course.create(course_name: 'Magic 101', course_teacher: 'Gandalf', course_day: 'Tuesdays at 3pm')
Course.create(course_name: 'Lightsaber Safety Around Kids', course_teacher: 'Anakin', course_day: 'Wednesdays at 12pm')

puts "Done seeding!"
