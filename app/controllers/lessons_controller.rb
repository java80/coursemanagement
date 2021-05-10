class LessonsController < ApplicationController
  def create
    @course = Course.find(params[:course_id])
    @lesson = course.lessons.create(lesson_params)
    redirect_to course_path(@course)
  end
  private
  def lesson_params
    params.require(:lesson).permit(:lessonname,:lessonmaterial)
  end
end
