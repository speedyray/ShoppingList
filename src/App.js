import React, { Component } from 'react';


import './App.css';
import { timingSafeEqual } from 'crypto';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
         itemsList: ['milk', 'sugar', 'soap', 'fruit' ],
         message: ''
           }

        }

      addItem(e){
        e.preventDefault();
        const {itemsList} = this.state;
        const newItem = this.newItem.value;
          
        const isOnTheList = itemsList.includes(newItem)

       if(isOnTheList){
         this.setState({
           message: 'Cannot add, item is already on the list'
         })
       } else {
       newItem !== '' && this.setState({
          itemsList: [...itemsList, newItem],
          message: ''
        })
      }
        this.addForm.reset();
      }

        removeItem(item){
          const newItemsList = this.state.itemsList.filter(itemList => {
            return itemList !== item;
          })


          this.setState({
            itemsList: [...newItemsList]
          })

          if(newItemsList.length ===0){
               this.setState({
                 message: "No items in your shopping cart, add some"
               })
          }
        }

        clearAll(){
          this.setState({
            itemsList : [],
            message: "No items in your shopping cart, add some"
          })
        }
   render() {
     const { itemsList, message} = this.state
    return ( 
      <React.Fragment>
      
      <header>
      <caption> <h2>Shopping List </h2></caption>
      <form ref={(input) => {this.addForm = input}} className="form-inline"onSubmit={(e) => {this.addItem(e)}}>
  
    <div className="form-group">
    <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
    <input ref={(input) => {this.newItem = input}}type="text" placeholder="Bread" className="form-control" id="newItemInputt" />
    </div>
  
     <button type="submit" className="btn btn-primary">Add</button>
      </form>
      
      
      
      </header>
      
           <div className="content">
           {
             (message !== '' || itemsList.length===0) && <p className="message text-danger">{message}</p>
           }
           { itemsList.length > 0 &&
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
                <td className="text-right">
                <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-danger btn-sm">Remove</button>
                </td>
              </tr>
              
            

              ) )}
            </tbody>
            <tfoot>
               <tr>
                <td colSpan="2">&nbsp;</td>
                <td className="text-right"></td>
                <button onClick={(e) =>  this.clearAll()}className="btn btn-danger btn-sm"> Clear All</button>
                <td></td>
                </tr>
            </tfoot>
          </table>
        }
          </div>
            </React.Fragment>

    );
  }
}

export default App;
