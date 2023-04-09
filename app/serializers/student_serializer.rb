class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  belongs_to :house
  has_many :enrolments
  has_many :courses
end
