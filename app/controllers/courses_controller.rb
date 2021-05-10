class CoursesController < ApplicationController

  def index
    @courses = Course.all
    render json: @courses
  end
  def show
    @course = Course.find(params[:id])
    render json: @course include: [:courses]
  end
  def create
    @course = Course.new(course_params)
    if @course.save
      render json: @course
      # redirect_to @course
    else
    render json: @course.errors
    
    end
  end
  def update
    @course = Course.find(params[:id])
    if @course.update(course_params)
      render json: @course
    else
      render json: @course.errors
    end
  end
  def destroy
    @course = Course.find(params[:id])
    @course.destroy
    render json: {message: "#{course.name} has been deleted"}
  end
  private
  def course_params
  params.require(:course).permit(:name, :imageurl, :description, :category)
  end

end
