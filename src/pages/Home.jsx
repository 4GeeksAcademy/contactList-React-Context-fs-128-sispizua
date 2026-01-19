import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { getContacts, deleteContact } from "../services/APIServices.js";
import { ContactCard } from "../components/ContactCard.jsx";
import { useNavigate } from "react-router-dom";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	const navigate = useNavigate();


	const closeDeleteModal = () => setContactToDelete(null);

	const confirmDelete = async () => {
		try {
			await deleteContact(dispatch, contactToDelete.id);
			closeDeleteModal();
		} catch (err) {
			console.error(err);
		}
	}


	useEffect(() => {
		getContacts(dispatch) 
	}, [])
	const handleDelete = async (id) => {
		try {
			await deleteContact(dispatch, id);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="container">
			<div className="contacts">
				{
					store.contacts.map(contact => {
						return (
							<ContactCard contact={contact} key={contact.id} onDelete={() => handleDelete(contact.id)} />
						)
					})
				}

			</div>

			<button onClick={() => navigate("/add")} className="btn btn-primary ">Add Contact</button>

		</div>
	);
}; 