import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC63Xxi26cOYMsA4yt6by1R_VYe6qMbZQY';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: 'react' }, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
      console.log(videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))