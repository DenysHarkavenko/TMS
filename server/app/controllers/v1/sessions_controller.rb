class V1::SessionsController < ApplicationController
  # sign in
  def create
    user = User.where(email: params[:email]).first

    if user&.valid_password?(params[:password])
      render json: { token: user.authentication_token }, status: :created
    else
      head(:unauthorized)
    end
  end
  # sign out
  def destroy
    current_user&.authentication_token = nil
    if current_user.save
      head(:ok)
    else
      head(:unauthorized)
    end
  end
end
