class Course < ApplicationRecord
    has_many :enrolments
    has_many :students, through: :enrolments
end
