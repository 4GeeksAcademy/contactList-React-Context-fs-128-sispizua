export const initialStore=()=>{
  return{
    contacts: []
  }
}

export default function storeReducer(store, action = {}) { //dependiendo el tipo de accion el va a cambiar el store 
  switch(action.type){
      case 'set_contacts':  // en caso del que tipo de accion se llame set_contacts
      return{
        ...store,
        contacts: action.payload
      }
      case 'add_contact':
        return{
          ...store,
          contacts:[...store.contacts, action.payload]
        }
        case`delete_contact`:
        return{
          ...store,
          contacts:store.contacts.filter(c=> c.id !== action.payload)
        }
    default:
      throw Error('Unknown action.');
  }    
}
