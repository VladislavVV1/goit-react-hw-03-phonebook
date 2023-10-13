import { Component } from "react";
import { nanoid } from "nanoid";
import { Section } from "./Section/section";
import { PhoneBookForm } from "./PhonebookForm/PhonebookForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
export class App extends Component{
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  addContact = ({name, number}) => {
    if(this.state.contacts.find((contact)=>contact.name.toLowerCase() === name.toLowerCase())){
      alert(`${name} is already in contacts`)
      return
    }
    this.setState((prev) => (
      {contacts: [...prev.contacts, {id:nanoid(5), name:name, number:number},]
    }
    ))
  }

  delete = (name) => {
    this.setState((prev) => (
      {contacts: prev.contacts.filter(contact => contact.name !== name)}))
  }

  handleFilterChange = ({target}) => {
    this.setState(
      {filter: target.value}
    )
  }
  componentDidMount(){
    const savedContacts = JSON.parse(localStorage.getItem("contacts"))
    if(savedContacts){
      this.setState({
        contacts: savedContacts
    })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts.length !== this.state.contacts.length){
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }
render() {
    return <>
    <Section title={'Phonebook'}> 
      <PhoneBookForm addContact={(v) => this.addContact(v)}></PhoneBookForm>
    </Section>
  <br/>
    <Filter value={this.state.filter} handleFilterChange={this.handleFilterChange}></Filter>
  
  {this.state.contacts[0]&& 
    <Section title={'Contacts'}> 
      <ContactsList filter={this.state.filter} contacts={this.state.contacts} del={this.delete}></ContactsList>
    </Section>}
    </>
  }
}

