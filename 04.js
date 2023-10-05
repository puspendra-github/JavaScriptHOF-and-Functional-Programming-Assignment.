const books = [
    {
        book:"Deep Work",
        author:'vikash'
        ,year:2011
    },
    {
        book:"Power of subconsious mind",
        author:'ayushi',
        year:2011
    },
    {
        book:"social science",
        author:'ruchi',
        year:2006
    },
    {
        book:"sst",
        author:'sanjana',
        year:2009
    },
    {
        book:"power and money",
        author:'priti',
        year:2005
    }
]

const filteredBooks = books.filter((book) => {
    return book.year >=2010
})

const result = filteredBooks.map((book)=>{
    return {
        ...book,
        author: book.author.toUpperCase(),
        }
})

console.log(result)