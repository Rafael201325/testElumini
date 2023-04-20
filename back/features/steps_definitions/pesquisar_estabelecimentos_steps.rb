require 'httparty'
require 'json'
require 'rspec/expectations'

    World(RSpec::Matchers)

Given('access the endpoint {string}') do |url|
    @response = HTTParty.get(url)
end

Then('Search for JSON by key {string}') do |chave|
    json_response = JSON.parse(@response.body)
    expect(json_response).to have_key(chave)
end

And('print a result randomly') do
    json_response = JSON.parse(@response.body)
    tipos = json_response['typeOfEstablishment']
    tipo_aleatorio = tipos.sample
    puts "result randomly: #{tipo_aleatorio}"
end
