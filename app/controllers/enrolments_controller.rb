class EnrolmentsController < ApplicationController

    # def index
    #     enrolments = Enrolment.where(student_id: session[:student_id])
    #     render json: enrolments 
    # end
    def index
        enrolments = Enrolment.all 
        render json: enrolments
    end

    def create
        enrolment = Enrolment.create!(enrolment_params)
        render json: enrolment, status: :created
    end

    def destroy
        enrolment = Enrolment.where(course_id: params[:course_id], student_id: session[:student_id])
        enrolment.destroy
    end

    def test
        hello = "hello"
        render json: hello, status: :ok
    end

    private

    def enrolment_params
        params.permit(:course_id, :student_id)
    end

    
end
