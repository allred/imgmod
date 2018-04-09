class ImagesController < ApplicationController
  before_action :set_image, only: [:show, :update, :destroy]

  # GET /images
  def index
    order = {created_at: :asc}
    where = {}
    limit = nil
    if params[:limit]
      limit = params[:limit]
    end
    if params[:filter_status] == "approved"
      where.merge! status: "approved"
    elsif params[:filter_status] == "refused"
      where.merge! status: "refused"
    elsif params[:filter_status] == "unmoderated"
      where.merge! status: "unmoderated"
    elsif params[:filter_status] == "moderated"
      where = "status != 'unmoderated'"
    end
    if params[:order] == "updated_at_desc"
      order = {updated_at: :desc}
    end
    @images = Image.where(where).order(order).limit(limit)

    render json: @images
  end

  # GET /images/1
  def show
    render json: @image
  end

  # POST /images
  def create
    @image = Image.new(image_params)

    if @image.save
      render json: @image, status: :created, location: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /images/1
  def update
    if @image.update(image_params)
      render json: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /images/1
  def destroy
    @image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image
      @image = Image.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def image_params
      params.require(:image).permit(:url, :time_entered, :moderator, :status)
    end
end
