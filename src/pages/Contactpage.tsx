import { useState } from "react";
import { useDispatch ,useSelector} from 'react-redux';
import { addContact } from '../features/contacts/contactSlice';
import { selectContacts } from '../features/contacts/selectors';
function Contactpage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    status: "active", // Default status
  });
  const [isFormOpen,setFormOpen]=useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    const newContact = {
      id: Date.now(), // Generate a unique ID
      firstName: formData.firstName,
      lastName: formData.lastName,
      status: formData.status,
    };
    dispatch(addContact(newContact));
    console.log("Form data submitted:", formData);
    setFormOpen(false);
  };
  function handleCreateContactOnClick(){
    setFormOpen(true);
  }
  return (
    <div className="flex flex-col justify-center mt-10">
      {!isFormOpen && (
        <div className="flex justify-center mb-10">
          <button
            onClick={handleCreateContactOnClick}
            className="bg-blue-500 w-40 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Create Contact
          </button>
        </div>
      )}
      {
  !isFormOpen && contacts.length > 0 && (
    <div>
      {contacts.map(contact => (
        <div key={contact.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold">{contact.firstName} {contact.lastName}</h3>
          <p>Status: <span className={`font-semibold ${contact.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
            {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
          </span></p>
        </div>
      ))}
    </div>
  )
}

      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          className="w-80 mx-auto p-4 bg-white rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <span className="block text-gray-700 font-semibold mb-2">
              Status
            </span>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === 'active'}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === 'inactive'}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out"
          >
            Submit
          </button>
        </form>
      )}
      
    </div>
  );
}
export default Contactpage;
