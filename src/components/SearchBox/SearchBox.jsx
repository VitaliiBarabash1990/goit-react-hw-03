import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
	return (
		<label className={s.label}>
			<span className={s.text}>Find contacts by name</span>
			<input
				type="text"
				value={value}
				onChange={(e) => onFilter(e.target.value)}
			/>
		</label>
	);
};

export default SearchBox;
