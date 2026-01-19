import { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";
import { createContact, editContact } from "../services/APIServices";


export const Form = () => {

    const {store, dispatch} = useGlobalReducer()

    const {id} = useParams()
    const navigate = useNavigate()

    const [contact, setContact] = useState({
		"name": "",
		"phone": "",
		"email": "",
		"address": ""
	});
    console.log(contact);

    const[isEditing, setIsEditing] = useState(false)

    const [showAlert, setShowAlert]=useState(false);

    const handleInputChange = (e)=>{
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit =(e)=> {
        e.preventDefault();
        if(!contact.name || !contact.email || !contact.phone || !contact.address){
            setShowAlert(true);
            setTimeout(()=> setShowAlert(false),2000);
            createContact(contact, navigate,dispatch)
            return;
        }
        if(isEditing){
            editContact(contact, navigate, dispatch)
        }

    }


    const contactToEdit = () => {
  if (!store.contacts || store.contacts.length === 0) return;

  const contactFound = store.contacts.find(c => c.id === Number(id));
  if (!contactFound) return;

  setContact(contactFound);
};
    useEffect(()=>{
        if(id){
            console.log("estoy editando")
            setIsEditing(true)
            contactToEdit();
        }else{
            console.log("estoy creando un contacto")
            setIsEditing(false)
        }


    },[id,store.contacts])

    return (
        <form className="container container-fluid  m-1" onSubmit={handleSubmit}>
            {showAlert && (
                <div className="alert alert-warning" role="alert">
                    Todos los campos son obligatorios.
                </div>
            )}
            <div className="mb-3">
                <label  className="form-label px-2">Full Name</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Full Name"
                name="name"
                value={contact.name}
                onChange={handleInputChange}
                >
                </input>
            </div>
            <div className="mb-3">
                <label  className="form-label px-2">Email address</label>
                <input 
                type="email" 
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={contact.email}
                onChange={handleInputChange}
                ></input>
            </div>
            <div className="mb-3">
                <label  className="form-label px-2">Phone</label>
                <input 
                type="number" 
                className="form-control"
                placeholder="Enter Phone"
                name="phone"
                value={contact.phone}
                onChange={handleInputChange}
                ></input>
            </div>
            <div className="mb-3">
                <label className="form-label px-2">Address</label>
                <input type="text"
                className="form-control"
                placeholder="Enter address"
                name="address"
                value={contact.address}
                onChange={handleInputChange}
                ></input>
            </div>
            <button type="submit" className="btn btn-success w-100">Save</button>
        </form>
    )
}