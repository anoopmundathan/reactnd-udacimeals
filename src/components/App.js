import React, { Component } from 'react'
import fetchRecipes from '../utils/api'

class App extends Component {
    componentDidMount() {
        fetchRecipes('bread');
    }
    render() {
        return(
            <div>
                Hello React
            </div>
        )
    }
}

export default App