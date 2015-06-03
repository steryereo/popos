CarrierWave.configure do |config|

    config.ignore_integrity_errors = false
  config.ignore_processing_errors = false
  config.ignore_download_errors = false

  config.fog_provider = 'fog/aws'                        # required
  config.fog_credentials = {
    # :provider               => 'AWS',       # required
    # :aws_access_key_id      => 'AKIAIRYL4J7LLLBVSFYA',       # required
    # :aws_secret_access_key  => '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',       # required
    # :region                 => 'us-west-1'  # optional, defaults to 'us-east-1'
    provider:               'AWS',      # required
    aws_access_key_id:      ENV["AWS_ACCESS_KEY_ID"],       # required
    aws_secret_access_key:  ENV["AWS_SECRET_ACCESS_KEY"],       # required
    region:                 ENV["AWS_S3_REGION"]  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = ENV["AWS_S3_BUCKET"] # required
  # see https://github.com/jnicklas/carrierwave#using-amazon-s3
  # for more optional configuration
end