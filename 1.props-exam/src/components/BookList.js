import React, {Component} from 'react';
import {List,ListItem,Container} from '@material-ui/core';//export가져오는 형태

// exprot default 형태로 가져올때 - 두줄써야하므로 export형태로 가져오자
// import List from '@material-ui/core';
// import ListItem from '@material-ui/core';

import BookListItem from './BookListItem'


class BookList extends Component{
  render(){

   //const books = this.props.books;
    const {books} =this.props;//다른 표현; es6문법으로 구조분해할당
    const bookItems = books.map(book=>{
      return (
        <ListItem key={book.ISBN}>
          <BookListItem book={book}/>
        </ListItem>
      )
    });

    return(
      <Container maxWidth='sm'>
        <List>
          {bookItems}
        </List>
      </Container>
    )
  }
}


export default BookList;