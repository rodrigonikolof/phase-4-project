class StudentsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        student = Student.create(student_params)
        if student.valid? 
            session[:student_id] = student.id
            render json: student, status: :created
        else
            render json: {errors: student.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def student_params
        params.permit(:name, :username, :house_id, :password, :password_confirmation)
    end

end
