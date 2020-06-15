class ChangeActivityColumnNameTwo < ActiveRecord::Migration[6.0]
  def change
    rename_column(:activities, :activity, :header)
  end
end