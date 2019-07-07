import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_CONTACTS
} from "../Types";

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: "Jill Johnson",
				email: "jill@gmail.com",
				phone: "111-222-3333",
				type: "personal"
			},
			{
				id: 2,
				name: "marie Johnson",
				email: "marie@gmail.com",

				type: "professional"
			},
			{
				id: 3,
				name: "Tony Washington",
				email: "tony@gmail.com",
				phone: "222-222-3333",
				type: "personal"
			}
		]
	};
	const [ state, dispatch ] = useReducer(contactReducer, initialState);

	// add contact

	// delete contact

	// set current contact

	// clear current contact

	// update contact

	// filter contacts

	// clear filter

	return <ContactContext.Provider value={{ contacts: state.contacts }}>{props.children}</ContactContext.Provider>;
};

export default ContactState;
