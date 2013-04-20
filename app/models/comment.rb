class Comment
  include Mongoid::Document
  include Mongoid::Timestamps

  field :comment,  type: String

  embedded_in :popo

  validates_presence_of :comment
end
