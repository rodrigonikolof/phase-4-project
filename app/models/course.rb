class Course < ApplicationRecord
    has_many :enrolments, dependent: :destroy
    has_many :students, through: :enrolments
end
