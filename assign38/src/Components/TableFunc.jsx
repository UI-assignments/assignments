import React from 'react'

export default function TableFunc() {
    const books = [
        {
            id: '1',
            name: 'c',
            author: 'John',
            publication: 'AVV'
        },
        {
            id: '2',
            name: 'c++',
            author: 'Vikram',
            publication: 'AVV'
        },
        {
            id: '3',
            name: 'Java',
            author: 'Venky',
            publication: 'AVV'
        }
        ]
    return(
        <div className = 'container-fluid' >
            <h3>Table using Function Component</h3>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Book ID</th>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Publications</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            books.map(book => <tr>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.publication}</td>
                            </tr>)
                        }
                    </tbody>

                </table>

        </div >
    )
}
