class Contact
  include Mongoid::Document
  include Mongoid::Timestamps

  field :contact_name,  type: String

  validates_presence_of :contact_name

  embedded_in :popo
end
