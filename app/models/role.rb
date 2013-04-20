class Role
  include Mongoid::Document
  include Mongoid::Timestamps

  ROLE_ADMIN = 'admin'

  field  :name => String

  has_and_belongs_to_many :users

  validates_presence_of :name

end
