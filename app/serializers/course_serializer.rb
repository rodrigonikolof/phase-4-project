class CourseSerializer < ActiveModel::Serializer
  attributes :id, :course_name, :course_teacher, :course_day_1, :course_day_2
  has_many :enrolments
  has_many :students
end
