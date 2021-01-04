# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Auction.destroy_all 

User.destroy_all

PASSWORD='supersecret'

super_user=User.create(
    first_name: 'Jon',
    last_name: 'Snow',
    email:"js@winterfell.gov",
    password: PASSWORD
)
10.times do 
    first_name=Faker::Name.first_name
    last_name=Faker::Name.last_name
    User.create(
        first_name:first_name,
        last_name: last_name,
        email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
        password: PASSWORD
    )
    end
    users=User.all
    

200.times do 
    created_at = Faker::Date.backward(days:365*5)
    Auction.create(
        title: Faker::Device.model_name ,
        description: Faker::ChuckNorris.fact,
        reserve_price: rand(10_000),
        ends_at: Faker::Date.forward(days:365*5),
        created_at:created_at,
        updated_at:created_at,
        user: users.sample
    )
end
auctions = Auction.all
   auctions.each do |q|
    5.times do
        price= Faker::Number.within(range: 200..400)
            date= Faker::Date.backward(days: 14)
         Bid.create(
            body:"$#{price} on #{date}",
             auction_id: q.id,
             user: users.sample 
        )
    end
end
bids = Bid.all 


puts Cowsay.say("Generated #{auctions.count} auctions", :bunny)
puts Cowsay.say("Generated #{users.count} user", :beavis)
puts Cowsay.say("Generated #{bids.count} bids", :frogs)