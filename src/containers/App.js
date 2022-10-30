import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {items} from '../Items';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: items,
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      return response.json();
    })
    .then(users =>{
      this.setState({items: items})
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render(){
    const { items, searchfield } = this.state;
    const filteredItems = this.state.items.filter(items => {
      return items.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if(items.length === 0){
      return <h1> Loading </h1>
    }
    else {
      return (
          <div className='tc'>
            <h1 className='f2'> Items </h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList items={filteredItems}/>
            </Scroll>
          </div>
      );
    }
  }
}

export default App;
