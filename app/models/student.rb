class Student < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true, presence: true, length: { minimum: 4 }
    validates :name, presence: true
    belongs_to :house
    has_many :enrolments
    has_many :courses, through: :enrolments
    
end
