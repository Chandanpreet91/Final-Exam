class AddColumnsToBids < ActiveRecord::Migration[6.0]
  def change
    add_column :bids, :price, :integer
    add_column :bids, :date, :string
  end
end
