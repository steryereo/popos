CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',       # required
    :aws_access_key_id      => 'AKIAI2KTIJ3TTNBMO6OA',       # required
    :aws_secret_access_key  => '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',       # required
    # :region                 => 'eu-west-1'  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = 'urbanwander' # required
  # see https://github.com/jnicklas/carrierwave#using-amazon-s3
  # for more optional configuration
end