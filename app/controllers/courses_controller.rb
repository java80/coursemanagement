class CoursesController < ApplicationController
  #skip_before_action :authenticate_user!, only: %i[index show]
  #before_action :set_course, only:%i[show update destroy]

  def all_Courses
    @courses = Course.all

    render json: @courses, include: [:lesson]
  end
  def index
    @courses = Course.all
    render json: @courses
  end

  def show
    @course = Course.find(params[:id])
<<<<<<< HEAD
    render json: @course
=======
    # render json: @course, include: [:courses]
>>>>>>> d9cf05addfe1a7735b677ed335259eba361a1074
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
  def set_course
    @course = Course.find(params[:id])
  end
  def course_params
  params.require(:course).permit(:name, :imageurl, :description, :category)
  end

end
