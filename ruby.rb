# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    # definining the properties as attributes for the class 
  attr_reader :model, :current_speed
  #model will represent the model of the bike as a string
  #wheels will represent the number of wheels the bike has as an integer
  #current_speed is representing the current speed of the bike also an integer 
  attr_accessor :wheels
#constructor defines the initialize method by accepting a parameter of model
#it will then set the model of the bike to the provided value
#values of wheels will be set to 2 by default as well as current speed to 0
  def initialize(model)
    @model = "Trek"
    @wheels = 2
    @current_speed = 0
    end
    #method for tricycle changes wheels from 2 to 3 converting bike into tricycle
    def make_tricycle
    @wheels = 3
    end
    #pedal method increases current speed by parameter of amount
    def pedal_faster(amount)
        @current_speed += amount 
    end
    #brake method decreases current speed of the bike by the amount parameter, method also makes sure speed does not go below 0
    def brake(amount)
        @current_speed = [@current_speed - amount, 0].max
    end
    #bike type creates an if statement to differentiate between a tricycle and a bike 
    def bike_info
        bike_type = if @wheels == 3
                        "tricycle"
                    else
                        "bike"
        end
        # bike info then runs a string that interpolates the model, type, number of wheels and the current speed 
        "The #{@model} #{bike_type} has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end