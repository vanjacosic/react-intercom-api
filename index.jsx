import React from 'react';
import ReactDOM from 'react-dom';

var Intercom = React.createClass({
  getInitialState: function() {
    return {tags: []};
  },
  componentDidMount: function() {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
    fetch('https://api.intercom.io/tags', {
      method: 'GET',
      mode: 'no-cors',
      cache: 'default',
      headers: new Headers({
        'Authorization': 'Basic <PAT>',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    });
  },
  render: function() {
    return (
      <div className="intercomTags">
        {this.state.tags}
      </div>
    );
  }
});

ReactDOM.render(
  <Intercom />,
  document.getElementById('app')
);
