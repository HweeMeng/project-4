json.extract! activity, :id, :header, :details, :links, :destination_id, :created_at, :updated_at
json.url activity_url(activity, format: :json)