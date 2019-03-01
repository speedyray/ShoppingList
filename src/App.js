import React, { Component } from 'react';


import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
         itemsList: ['milk', 'sugar', 'soap', 'fruit' ]
           }

          }


      addItem(e){
        e.preventDefault();
        const {itemsList} = this.state;
        const newItem = this.newItem.value; 

        this.setState({
          itemsList: [...itemsList, newItem]
        })

        this.addForm.reset();
      }

   render() {
    return ( 
      <React.Fragment>
      <caption> <h2>Shopping List </h2></caption>
      <header>
      <form ref={(input) => {this.addForm = input}} className="form-inline"onSubmit={(e) => {this.addItem(e)}}>
  
    <div className="form-group">
    <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
    <input ref={(input) => {this.newItem = input}}type="text" placeholder="Bread" className="form-control" id="newItemInputt" />
    </div>
  
     <button type="submit" className="btn btn-primary">Add</button>
      </form>
      
      
      
      </header>
           
            <table className="table">
            
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
            {this.state.itemsList.map(item => (
              <tr key={item}>
                <td>1</td>
                <td>{item}</td>
                
                <button className="btn btn-danger">Delete</button>
              </tr>
              
            

              ) )}
            </tbody>
          </table>
            </React.Fragment>

    );
  }
}

export default App;
