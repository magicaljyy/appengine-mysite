from request import Request

class Client:
  
  BASE_URL = "https://api.steampowered.com"
  
  def __init__(self, api_key):
    self.api_key = api_key
  
  def sendRequest(self, interface, version, method, params={}):
    url = ('/').join([self.BASE_URL, interface, method, version])    
    params['key'] = self.api_key
    return Request.get(url, params)
    
  def getHistory(self, params={}):
    return self.sendRequest('IDOTA2Match_570', 'v1', 'GetMatchHistory', params)
  
  def getHeroes(self, params={}):
    return self.sendRequest('IEconDOTA2_570', 'v1', 'GetHeroes', params)