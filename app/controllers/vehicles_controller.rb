class VehiclesController < ApplicationController

def index
  @vehicles = Vehicle.all
  
  respond_to do |format|
    format.html # new.html.erb
    format.json { render json: @vehicles }
  end
end

end
