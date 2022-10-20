import React, { Component } from 'react'

export default class TableClass extends Component {
    constructor() {
        super();
        this.state = {
            books: [
                {
                    id: '1',
                    name: 'c',
                    author: 'john',
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
                    author: 'venky',
                    publication: 'AVV'
                }
            ]
        }
    }
    render() {
        return (
            <div className='container-fluid'>
                 <h3>Table using Class Component</h3>
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
                            this.state.books.map(book => <tr>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.publication}</td>
                            </tr>)
                        }
                    </tbody>

                </table>

            </div>
        )
    }
}
