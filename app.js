const book = {
    bookName: 'Secret',
    authorName: 'Shhady',
    PublishingYear: 2022,
    pages: 150,
    topics: 5

}
    let func = (book)=> {
    return `The book ${book.bookName} was written by ${book.authorName} in
    the year ${book.PublishingYear}, it includes ${book.topics} topics and ${book.pages} pages.`;
}


console.log(func(book));