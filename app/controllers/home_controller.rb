class HomeController < ApplicationController

  def index
    Popo.new(:name => "hi")
  end

end
