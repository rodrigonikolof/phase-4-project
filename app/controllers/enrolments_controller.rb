class EnrolmentsController < ApplicationController

    def create
        enrolment = Enrolment.create!(enrolment_params)
        render json: enrolment, status: :created
    end

    def destroy
        enrolment = Enrolment.find(params[:id])
        enrolment.destroy
    end

    private

    def enrolment_params
        params.permit(:course_id, :student_id)
    end

    
end
