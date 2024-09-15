import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const contactList = [
	{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
	{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
	{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
	{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
	// const [contacts, setContacts] = useState(contactList);
	const [filter, setFilter] = useState("");

	const [contacts, setContacts] = useState(() => {
		const savedData = JSON.parse(window.localStorage.getItem("contacts"));
		if (savedData?.length) {
			return savedData;
		}
		return contactList;
	});

	useEffect(() => {
		window.localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	const handleSubmit = (values, actions) => {
		const newValues = { ...values, id: nanoid() };
		setContacts((prev) => {
			return [...prev, newValues];
		});
		actions.resetForm();
	};

	const handleDelete = (id) => {
		setContacts((prev) => {
			return prev.filter((contact) => contact.id !== id);
		});
	};

	const visibleTasks = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm handleAdd={handleSubmit} />
			<SearchBox value={filter} onFilter={setFilter} />
			<ContactList handleDelete={handleDelete} contacts={visibleTasks} />
		</>
	);
}

export default App;
