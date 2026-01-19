import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { createContact, getContacts } from "../services/APIServices.js";
import { ContactCard } from "../components/ContactCard.jsx";
import {Form} from "./Form.jsx"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	
	useEffect(() => {
		getContacts(dispatch)
	}, [])
	useEffect(()=>{
		console.log(store.contacts)
	},[store.contacts])

	return (
		<div className="container">
			<div className="contacts">
				{
					store.contacts.map(contact => {
						return (
							<ContactCard contact={contact} key={contact.id} />
						)
					})
				}

			</div>

			<button onClick={() => createContact(dispatch, contact)}>Agregar contacto</button>
			<form></form>

		</div>
	);
}; 