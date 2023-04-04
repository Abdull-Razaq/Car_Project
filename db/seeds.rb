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

puts "Users..."
# user1 = User.create(email: "mha44@gmail.com", username: "MHGG")
# user2 = User.create(email: "yuiooi04@gmail.com", username: "YHHH")


puts 'Manufacturers...'
manufacturer1 = Manufacturer.create(name: "Toyota", country_of_origin: "Japan")
manufacturer2 = Manufacturer.create(name: "Mercedes", country_of_origin: "Germany")
manufacturer3 = Manufacturer.create(name: "Cadillac", country_of_origin: "USA")

puts 'Done seeding!!'