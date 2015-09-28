from mt import app

@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return 'Hello World! Awesome!!!'


@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404