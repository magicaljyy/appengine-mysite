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
      this.props.children,
      this.props.key
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function render() {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { author: comment.author },
        comment.text,
        comment.key
      );
    });
    return React.createElement(
      "div",
      { className: "commentList" },
      commentNodes
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

var data = [
  {key:1, author: "Pete Hunt", text: "This is one comment"},
  {key:2, author: "Jordan Walke", text: "This is another comment"}
];

var commentBox = React.createClass({displayName: 'commentBox',
    render: function() {
        return React.createElement('div', {className: "commentBox"},
        React.createElement("h1",null,"Comments"),
        React.createElement(CommentList,{data: this.props.data}),
        React.createElement(commentForm,null)
      );
    }
});

$('#container').ready(function () {
  ReactDOM.render(
      React.createElement(commentBox, { data: data }),
      document.getElementById('container')
  );
});
