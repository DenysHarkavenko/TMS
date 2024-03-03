class ApplicationController < ActionController::API
  acts_as_token_authentication_handler_for User

  def authenticate_user!
    super || render_unauthorized
  end

  def render_unauthorized
    self.headers['WWW-Authenticate'] = 'Token realm="Application"'
    render json: { error: 'Unauthorized' }, status: 401
  end
end
