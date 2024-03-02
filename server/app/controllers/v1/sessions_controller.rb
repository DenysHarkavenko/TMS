class V1::SessionsController < ApplicationController
  # sign in
  def create
    user = User.where(email: params[:email]).first

    if user&.valid_password?(params[:password])
      render json: user.as_json(only: [:email]), status: :created
    else
      render json: { error: 'User not found or invalid credentials' }, status: :unauthorized
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
