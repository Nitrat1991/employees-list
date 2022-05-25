import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPannel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'Vada V.', salary: 800, increase: true, rise: true, id: 1},
                {name:'Vova G.', salary: 1800, increase: false, rise: false, id: 2},
                {name:'Boba L.', salary: 2800, increase: true, rise: false, id: 3},
            ]
        }
        this.maxId = 4;
    }    

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        } 
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPannel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>

                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;