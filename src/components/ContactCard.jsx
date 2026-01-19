import "../styles/contactCard.css"
import { Link } from "react-router-dom";


export const ContactCard = ({ contact, onDelete }) => {

    return (
        <div className="conteiner conteiner-fluid CardBody">
            <div>
                <img className="contact-img rounded-circle" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="infoContact">
                <div>
                    <h3>{contact.name} </h3>
                    <p><i className="fa-solid fa-phone"></i> : {contact.phone} </p>
                    <p><i className="fa-solid fa-envelope"></i> : {contact.email} </p>
                    <p><i className="fa-solid fa-house"></i> : {contact.address} </p>
                </div>
                <div className="buttonsCard">
                    <Link to={`/edit/${contact.id}`} className="iconContact" aria-label={`Edit ${contact.name}`} >
                        <i className="fa-regular fa-pen-to-square iconContact"></i>
                    </Link>
                    <button
                        type="button"
                        className="iconContact"
                        data-bs-toggle="modal"
                        data-bs-target={`#modal-${contact.id}`}
                        aria-label={`Delete ${contact.name}`}>
                        <i className="fa-solid fa-trash-can iconContact"></i>
                    </button>
                </div>

                
                <div className="modal fade" id={`modal-${contact.id}`} tabIndex="-1" aria-labelledby={`modalLabel-${contact.id}`} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`modalLabel-${contact.id}`}>
                                    Delete contact
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure toy want delete {contact.name}.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e)=>{onDelete(); e.currentTarget.blur(); }} >Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};