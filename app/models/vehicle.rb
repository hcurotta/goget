class Vehicle < ActiveRecord::Base
  attr_accessible :goget_id, :latitude, :longitude, :name, :pod, :pod_id, :vehicle_type, :available
  # attr_accessor :available
  
  def self.get_pods(agent)
  	puts "processing locations..."

  	page = agent.get('http://www.goget.com.au/bookings/show_location.php')

  	raw = page.parser.xpath("//script").last.text

  	current_index = 0

  	locations = []
  	location = {}

  	raw.each_line do |line|
  	  if line.start_with?("var image_url")
  	    # get the index from the end of the image_url0 set as current_index
  			current_index = line.split('=').first.split('l').last.strip
  			color = line.split('/').last.split('_').last.split('.').first
  			if color == "green"
  			  location[:available] = true
			  elsif color == "red"
			    location[:available] = false
		    end
	    end
  	  
  		if line.start_with?("var info#{current_index}")
  			location[:pod_id] = line.split('pod_id=').last.split(' ').first.to_i
  			locations << location
  			location = {}
  		end
  	end
  	puts "All Locations Updated"
  	return locations
  end
  
  
end
