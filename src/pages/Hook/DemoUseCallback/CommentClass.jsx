import React, { Component } from 'react'

export default class CommentClass extends Component {
    first = () => {
        console.log("Class method first!")
    }

    render() {
        return (
            <div>
                CommentClass
            </div>
        )
    }
}