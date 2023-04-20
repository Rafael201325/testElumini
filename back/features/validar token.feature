Feature: Validar token

  Scenario: Check the presence of the key "typeOfEstablishment" in the returned JSON
    
  Given access the endpoint "https://portal.vr.com.br/api-web/comum/enumerations/VRPAT"
    
  Then Search for JSON by key "typeOfEstablishment"
    
And print a result randomly
