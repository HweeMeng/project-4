# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.new({email: FFaker::Internet.email, password: 'password', password_confirmation: 'password'})
user1.save

user2 = User.new({email: FFaker::Internet.email, password: 'password', password_confirmation: 'password'})
user2.save

user3 = User.new({email: FFaker::Internet.email, password: 'password', password_confirmation: 'password'})
user3.save

user4 = User.new({email: FFaker::Internet.email, password: 'password', password_confirmation: 'password'})
user4.save

users = [user1,user2,user3,user4]

users.each do |user|
  20.times do |n|
    user.post.create({title: FFaker::Lorem.words ,content: FFaker::Lorem.paragraph})
  end
end