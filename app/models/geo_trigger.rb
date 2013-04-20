class GeoTrigger

  attr_accessor :app_id, :app_secret, :response, :data, :token

  def initialize
    @app_id     = 'Gxg29jmGHS8y76FZ'
    @app_secret = '9c35b31b83e24685b78fa65a9efe8fe8'
    @trigger_distance = 150
  end

  def self.all_trigger_all_popos
    trigger = GeoTrigger.new
    trigger.create_token

    Popo.all.each do |popo|
      trigger.trigger_create(popo)
    end
  end


  def create_token
    @response = RestClient.post("https://devext.arcgis.com/sharing/oauth2/token", {
      'client_id'     => @app_id,
      'client_secret' => @app_secret,
      'grant_type'    => 'client_credentials',
      'f'             => 'json'
    })
    @data = JSON.parse(@response)
    @token = @data['access_token']
  end


  def trigger_create(popo)
    @data = {
      triggerId: popo.id.to_s,
      condition: {
        direction: "enter",
        geo: {
          latitude:  popo.latitude,
          longitude: popo.longitude,
          distance:  @trigger_distance
        }
      },
      action: {
        message: "You are near a Privately Owned Public Open Space: #{popo.name}"
      },
      setTags: "popos"
    }
    @response = JSON.parse(RestClient.post("http://geotriggersdev.arcgis.com/trigger/create", @data, :authorization => "Bearer #{@token}"))
  end

end
