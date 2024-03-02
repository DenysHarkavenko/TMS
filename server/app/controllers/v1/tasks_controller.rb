class V1::TasksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_project
  before_action :set_task, only: [:show, :update, :destroy]

  # GET /projects/:project_id/tasks
  def index
    @tasks = @project.tasks
    render json: @tasks, status: :ok
  end

  # GET /projects/:project_id/tasks/:id
  def show
    render json: @task, status: :ok
  end

  # POST /projects/:project_id/tasks
  def create
    @task = @project.tasks.build(task_params)
    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/:project_id/tasks/:id
  def update
    if @task.update(task_params)
      render json: @task, status: :ok
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/:project_id/tasks/:id
  def destroy
    @task.destroy
    head :no_content
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def set_task
    @task = @project.tasks.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:name, :description, :status)
  end
end
