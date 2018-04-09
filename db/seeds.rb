# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

path_input = "#{Rails.root}/images.csv"
File.open(path_input, 'r') do |f|
  f.each_line do |l|
    time_entered, url = l.chomp.split(/\s*,\s*/)
    Image.create({
      time_entered: DateTime.strptime(time_entered, '%s'),
      url: url,
      status: "unmoderated",
    })
  end
end
=begin
images = Image.create([
  {time_entered: 1455123632, url: "https://d3ous0vnp05zqm.cloudfront.net/manual_uploads/moderation_challenge/images/4.1.01.jpeg"},
  {time_entered: 1455123633, url: "https://d3ous0vnp05zqm.cloudfront.net/manual_uploads/moderation_challenge/images/4.1.02.jpeg"},
])
=end
