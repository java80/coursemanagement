class Lesson < ApplicationRecord
  belongs_to :course, dependent: :destroy
end
