import React, {useContext} from 'react';
import LanguageContexts from '../contexts/LanguageContexts';

const Field = () => {

	const context = useContext(LanguageContexts);

	const text = context === 'english' ? 'Name' : 'Naam';

	return (
		<div className="ui field">
			<label>{text}</label>
			<input/>
		</div>
	);
};

export default Field;