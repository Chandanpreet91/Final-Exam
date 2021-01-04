class Api::V1::AuctionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index 
        auctions = Auction.order(created_at: :desc)
        render(json: auctions)
    end

    def show 
        auction = Auction.find(params[:id])
        render(json: auction)
    end

    def create 
        auction = Auction.new(params.require(:auction).permit(:title, :body))
           auction.user = current_user
        if auction.save 
            render json: {id: auction.id}
         else 
            render(
                json: {errors: auction.errors},
                status: 422
            )
         end
    end
end
