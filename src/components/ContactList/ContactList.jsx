import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
	// console.log(contacts);
	return (
		<>
			<ul className={s.contain}>
				{contacts.map((contact) => (
					<Contact handleDelete={handleDelete} key={contact.id} {...contact} />
				))}
			</ul>
		</>
	);
};

export default ContactList;
