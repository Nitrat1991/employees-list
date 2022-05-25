import { Component } from 'react';
import './search-panel.css';

class SearchPannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdetSearchLoc = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdetSearch(term);
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Найти сотрудника"
                value={this.state.term} 
                onChange={this.onUpdetSearchLoc}/>
        )
    }
}

export default SearchPannel;