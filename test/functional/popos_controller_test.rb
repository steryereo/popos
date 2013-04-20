require 'test_helper'

class PoposControllerTest < ActionController::TestCase
  setup do
    @popo = popos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:popos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create popo" do
    assert_difference('Popo.count') do
      post :create, popo: {  }
    end

    assert_redirected_to popo_path(assigns(:popo))
  end

  test "should show popo" do
    get :show, id: @popo
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @popo
    assert_response :success
  end

  test "should update popo" do
    put :update, id: @popo, popo: {  }
    assert_redirected_to popo_path(assigns(:popo))
  end

  test "should destroy popo" do
    assert_difference('Popo.count', -1) do
      delete :destroy, id: @popo
    end

    assert_redirected_to popos_path
  end
end
