import React, {useState} from 'react';
import LanguageContexts from '../contexts/LanguageContexts';

import UserCreate from './UserCreate';

const App = () => {
	const [language, setLanguage] = useState('english');

	const onLanguageChange = (language) => {
		setLanguage(language);
	};

	return (
		<div className="ui container">
			<div>
				Select a language:
				<i className="flag us"
					 onClick={() => onLanguageChange('english')}
				/>
				<i className="flag nl"
					 onClick={() => onLanguageChange('dutch')}/>
			</div>

			<LanguageContexts.Provider value={language}>
				<UserCreate/>
			</LanguageContexts.Provider>
		</div>
	);
};

export default App;