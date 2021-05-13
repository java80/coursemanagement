class AddisStudentToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users,:is_student,:boolean,default:true
  end
end
