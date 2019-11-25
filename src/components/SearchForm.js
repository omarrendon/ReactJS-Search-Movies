import React, {Component} from 'react'
const API_KEY = 'e48b8382'
export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    handleChange = (e) => {
        this.setState({
            inputMovie: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(data => data.json())
            .then(res => {
                const {
                    Search = [],
                    resultados = '0'
                } = res
                console.log({Search, resultados})
                this.props.onResults(Search)
            })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this.handleChange}
                            type="text" 
                            placeholder="Buscar pelicula..."
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
