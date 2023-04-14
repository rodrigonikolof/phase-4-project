class EnrolmentsController < ApplicationController

    def create
        enrolment = Enrolment.create!(enrolment_params)
        render json: enrolment, status: :created
    end

    def destroy
        enrolment = Enrolment.where(course_id: params[:course_id], student_id: session[:student_id])
        enrolment.destroy
    end

    private

    def enrolment_params
        params.permit(:course_id, :student_id)
    end

    
end
