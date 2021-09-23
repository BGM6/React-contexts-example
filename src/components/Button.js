import React, {Fragment, useContext} from 'react';

import LanguageContexts from '../contexts/LanguageContexts';

const Button = () => {

	const context = useContext(LanguageContexts);

	const text = context === 'english' ? 'Submit' : 'Voorleggen';

	return (
		<Fragment>
			<button className="ui button primary">{text}</button>
		</Fragment>
	);
};

export default Button;