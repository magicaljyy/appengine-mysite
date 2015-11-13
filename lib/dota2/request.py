from google.appengine.api import urlfetch
import urllib

class Request:
  
  @staticmethod
  def get(url, params={}):
    query = urllib.urlencode(params)
    url = url + '?' + query if query else url
    return urlfetch.fetch(url, {}, urlfetch.GET)
  
  @staticmethod
  def post(url, params={}):
    return urlfetch.fetch(url, params, urlfetch.POST)
    