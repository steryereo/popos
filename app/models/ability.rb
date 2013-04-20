class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)

    if user.role? Role::ROLE_ADMIN
      can :edit, Popo
      can :create, User
    end

  end
end
