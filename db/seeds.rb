require 'faker'

10.times do 
    make = Faker::Vehicle.make

    vehicle = Vehicle.new(
        make: make,
        model: Faker::Vehicle.model,
        transmission: Faker::Vehicle.transmission,
        fuel_type: Faker::Vehicle.fuel_type
    )
    
    vehicle.save

end