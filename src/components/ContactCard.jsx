import "../styles/contactCard.css"
import { Link } from "react-router-dom";


export const ContactCard = ({ contact }) => {

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
                    <Link to={`/edit/${contact.id}`}>
                        <button type="button"><i className="fa-solid fa-pencil"></i></button>
                    </Link>
                    <button
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target={`$modal-${contact.id}`}
                        arial-label={`Delete ${contact.name}`} >
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                <div className="modal" id={`modal-${contact.id}`} tabindex="-1" arial-labelledy={`modalLabel-${contact.id}`}>
                    <div className="modal-dialog">
                        <div className="modal-content" id={`modalLabel-${contact.id}`}>
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure toy want delete {contact.name}.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};