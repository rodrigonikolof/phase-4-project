class CourseSerializer < ActiveModel::Serializer
  attributes :id, :course_name, :course_teacher, :course_day
  has_many :enrolments
  has_many :students
end
