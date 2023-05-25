import {Component} from "react";
export class PhoneBookForm extends Component{
  state = {
  name:'',
  number: ''
  }

  handleInputValueChange = ({target}) => {
    this.setState(
      {[target.name]: target.value}
    )
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
this.props.addContact(this.state.name, this.state.number)
    this.setState({
      name: '',
      number: ''
    })
  }
    render(){
    return <form onSubmit={this.handleFormSubmit}>
        <label>
          Name
          <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          onInput={(e)=>this.handleInputValueChange(e)}
          required
        />
        </label>
      
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onInput={(e)=>this.handleInputValueChange(e)}
            required
        />
        </label>
        <br/>  
  <button type="submit">Add contact</button>
    </form>
}
};