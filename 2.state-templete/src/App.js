import React, { Component } from 'react';
import {Container, Grid}from '@material-ui/core';
import SearchBar from './components/SearchBar';

import Books from './static_data/Books';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail'

class App extends Component {

  // state에 대한 초기화는 생성자를 통해서 한다 
  constructor(props){
    super(props);//수퍼 생성자를 생성하지 않으면 this객체가 할당되지 않는다 
    this.state={
      books:Books,
      selectedBook : Books[0],
      
    }
  }

  onSearchTitle(title){
    let updateList = Books;
    updateList = updateList.filter(book =>{
      return book.title.toLowerCase().search(title.toLowerCase())!= -1;
    });
    this.setState({
      books : updateList,

    });
  }

  onSelectedBook(book){
    this.setState({
      selectedBook : book
    })

  }
  render(){
    return(
      <Container>
          <SearchBar onSearchTitle = {this.onSearchTitle.bind(this)}/>
          <Grid container spacing ={2}>
            <Grid item>
              <BookList  books={this.state.books}
                onSelectedBook={this.onSelectedBook.bind(this)}/>
            </Grid>
            <Grid item>
              <BookDetail book={this.state.selectedBook}/>
            </Grid>
          </Grid>
      </Container>
    )
  }
}

export default App;
