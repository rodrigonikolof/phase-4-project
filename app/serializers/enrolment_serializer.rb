class EnrolmentSerializer < ActiveModel::Serializer
  attributes :id, :course_day
  belongs_to :student
  belongs_to :course
end
