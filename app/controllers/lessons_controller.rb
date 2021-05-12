class LessonsController < ApplicationController
  def create
    @course = Course.find(params[:course_id])
    @lesson = @course.lessons.create(lesson_params)
    render json: @lesson
  end
  private
  def lesson_params
    params.require(:lesson).permit(:lessonname,:lessonmaterial)
  end
end
