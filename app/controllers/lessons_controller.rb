class LessonsController < ApplicationController
  def create
    @course = Course.find(params[:course_id])
    @lesson = @course.lessons.create(lesson_params)
    render json: @lesson
  end

  def update
    @lesson = Lesson.find_by(id: params[:id])
    if @lesson.update(lesson_params)
      
      render json: { message: "Lesson has been updated successfully." }
    
    else
      render json: { message: "Lesson not updated." }
    end

  end

  def destroy
    @lesson = Lesson.find_by(id: params[:id])
    
    if @lesson.present? && @lesson.destroy
      render json: { message: "Lesson: #{@lesson.lessonname} has been deleted" }
    else
      render json: { message: "Lesson not deleted" }
    end
  end

  private

  def lesson_params
    params.permit(:lessonname, :lessonmaterial)
  end
end
