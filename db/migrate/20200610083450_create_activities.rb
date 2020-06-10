class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.text :type
      t.text :details
      t.text :links
      t.belongs_to :destination, null: false, foreign_key: true

      t.timestamps
    end
  end
end
