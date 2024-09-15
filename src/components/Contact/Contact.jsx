import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";
const Contact = ({ id, name, number, handleDelete }) => {
	return (
		<li className={s.listItem}>
			<div className={s.listData}>
				<div className={s.item}>
					<BsFillPersonFill /> {name}
				</div>
				<div className={s.item}>
					<BsFillTelephoneFill /> {number}
				</div>
			</div>
			<button className={s.btn} onClick={() => handleDelete(id)}>
				Delete
			</button>
		</li>
	);
};

export default Contact;
