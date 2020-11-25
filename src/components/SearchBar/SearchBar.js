import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    state = {
        city: ''
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.city === ''){
            alert('City cannot be empty')
        } else {
            this.props.searchCity(this.state.city)
        }

        this.setState({city: ''})
    };

    onChange = e =>{
         this.setState({[e.target.name]: e.target.value});
    };

    render(){
        return (
            <div className = "SearchBar">
                <div className = "SearchBarChilds">
                    <h5 className = "text-white">Search weather of your city!</h5>
                    <form onSubmit = {this.onSubmit} className = "formSearchCity">
                        <input type = "text" name = "city" id = "inputSearchCity" onChange = {this.onChange} placeholder = "Search City..."/>
                        <button type = "submit" className = "btn btn-outline-info text-white">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;
