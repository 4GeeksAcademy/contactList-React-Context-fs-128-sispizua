export const getContacts = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/santiago/contacts`)
    console.log(response);
    if (!response.ok) {
        createAgenda();
        return
    }
    const data = await response.json();
    console.log(data);
    dispatch({ type: 'set_contacts', payload: data.contacts })
}


const createAgenda = async (params) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/santiago`, {
        method: "POST"
    })
    console.log(response);
}

export const createContact = async (dispatch, contact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/santiago/contacts`, {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json()
    dispatch({ type: 'add_contact', payload: data })
};

export const deleteContact = async (dispatch, id)=>{
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/santiago/contacts/${id}`,
       { method:"DELETE"}
    );
    dispatch({type:"delete_contact", payload: id});
}


export const editContact = async (contact, navigate, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/santiago/contacts/${contact.id}`, {
        method: "PUT",
        body: JSON.stringify(contact),
        headers: {
            "content-type": "application/json"
        }
    })
    const data =await response.json()
    console.log(data)
    await getContacts(dispatch)
    navigate("/")
    }