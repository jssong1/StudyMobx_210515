import React,{Component}from 'react';
import BookList from './components/BookList';
import Books from './static_data/Books';
class App extends Component {
  render(){
    return (
      <BookList books={Books}/>//jsx문법 props는 {}안에 js문법으로 적는거임
    );
  }
}

export default App;
