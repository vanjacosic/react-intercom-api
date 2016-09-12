# Problem

I get a `401` or `406` from Intercom when I try to authenticate against the private API.

# Reproduce

1. Go to [Intercom](http://app.intercom.io) and get a Personal Access Token (aka. `<PAT>`)
1. Clone repo
1. Run `npm install`
1. Run `webpack-dev-server --progress --colors`
1. Go to [`http://localhost:8080/webpack-dev-server/`](http://localhost:8080/webpack-dev-server/) in Chrome (preferably with the [React Developer Tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) installed)
1. Check the Network tab and see in all its glory that you're not authenticated.

Now the question is: How do you make this work?
