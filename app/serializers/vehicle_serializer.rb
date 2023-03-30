class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :transmission, :fuel_type
end
