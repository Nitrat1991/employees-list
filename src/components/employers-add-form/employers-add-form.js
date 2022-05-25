import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onVelueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSumbit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onVelueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onVelueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onSumbit}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;