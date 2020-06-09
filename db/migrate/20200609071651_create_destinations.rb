class CreateDestinations < ActiveRecord::Migration[6.0]
  def change
    create_table :destinations do |t|
      t.text :country
      t.text :city
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
