# spec/controllers/places_controller_spec.rb
require 'rails_helper'

describe PlacesController do
  describe 'POST #create' do
    context 'with valid attributes' do
      it 'creates the place' do
        post :create, place: attributes_for(:place)
        expect(Place.count).to eq(1)
      end

      it 'redirects to the "show" action for the new place' do
        post :create, place: attributes_for(:place)
        expect(response).to redirect_to Place.first
      end
    end

    context 'with invalid attributes' do
      it 'does not create the place' do
        post :create, place: attributes_for(:place, name: nil)
        expect(Place.count).to eq(0)
      end

      it 're-renders the "new" view' do
        post :create, place: attributes_for(:place, name: nil)
        expect(response).to render_template :new
      end
    end
  end
end