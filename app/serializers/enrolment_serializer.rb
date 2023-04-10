class EnrolmentSerializer < ActiveModel::Serializer
  attributes :id, :course_id, :student_id
  belongs_to :student
  belongs_to :course
end
