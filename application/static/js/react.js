var Comment = React.createClass({
  displayName: "Comment",

  render: function render() {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { className: "commentAuthor" },
        this.props.author
      ),
      this.props.children
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function render() {
    return React.createElement(
      "div",
      { className: "commentList" },
      React.createElement(
        Comment,
        { author: "Pete Hunt" },
        "This is one comment"
      ),
      React.createElement(
        Comment,
        { author: "Jordan Walke" },
        "This is another comment"
      )
    );
  }
});

var commentForm = React.createClass({
	render: function() {
		return React.createElement(
        	'div', 
            {className: "commentForm"},
            'commentForm'
        );
    }
});

var commentBox = React.createClass({displayName: 'commentBox',
    render: function() {
        return React.createElement('div', {className: "commentBox"},
        React.createElement("h1",null,"Comments"),
        React.createElement(CommentList,null,"Comments"),
        React.createElement(commentForm,null,"Comments")
      );
    }
});

$('#container').ready(function () {
  ReactDOM.render(
      React.createElement(commentBox, null),
      document.getElementById('container')
  );
});
