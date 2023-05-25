import React from "react";
import PropTypes from 'prop-types';
import { ListItem } from "components/ListItem/ListItem";


export const ContactsList = ({contacts, filter, del}) => {

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
    return <ul>
        {filteredContacts.map(contact => 
          <ListItem key={contact.id} name={contact.name} number={contact.number} del={del}></ListItem>
          )}
      </ul>
  }
  ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
    filter: PropTypes.string,
    del: PropTypes.func
}