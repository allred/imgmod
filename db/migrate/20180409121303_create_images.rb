class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :url
      t.datetime :time_entered
      t.string :moderator
      t.string :status

      t.timestamps
    end
  end
end
