class Auction < ApplicationRecord
    has_many :answers, dependent: :destroy
end
