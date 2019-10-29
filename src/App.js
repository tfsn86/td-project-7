import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import apiKEY from './config.js';
import axios from 'axios';

// App components
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
	state = {
		photos: []
	};

	componentDidMount = () => {
		this.performSearch();
	};

	performSearch = query => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo });
				// handle success
			})
			.catch(error => {
				// handle error
				console.log('Error fetching and parsing data', error);
			});
	};

	dogsSearch = () => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=dogs&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo });
				// handle success
			})
			.catch(error => {
				// handle error
				console.log('Error fetching and parsing data', error);
			});
	};

	catsSearch = () => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=cats&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo });
				// handle success
			})
			.catch(error => {
				// handle error
				console.log('Error fetching and parsing data', error);
			});
	};

	lionsSearch = () => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=lions&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo });
				// handle success
			})
			.catch(error => {
				// handle error
				console.log('Error fetching and parsing data', error);
			});
	};

	render() {
		return (
			<Router>
				<div className="container">
					<SearchForm onSearch={this.performSearch} />
					<Navigation
						onCatsClick={this.catsSearch}
						onDogsClick={this.dogsSearch}
						onLionsClick={this.lionsSearch}
					/>
					<Switch>
						<Route
							exact
							path="/search/:query"
							render={props => (
								<PhotoContainer {...props} data={this.state.photos} />
							)}
						/>
						<Route
							exact
							path="/"
							render={props => (
								<PhotoContainer {...props} data={this.state.photos} />
							)}
						/>
						<Route
							path="/dogs"
							render={props => (
								<PhotoContainer {...props} data={this.state.photos} />
							)}
						/>
						<Route
							path="/cats"
							render={props => (
								<PhotoContainer {...props} data={this.state.photos} />
							)}
						/>
						<Route
							path="/lions"
							render={props => (
								<PhotoContainer {...props} data={this.state.photos} />
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
