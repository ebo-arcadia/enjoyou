class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :year
      t.string :imdbID
      t.poster :string
      t.timestamps
    end
  end
end
