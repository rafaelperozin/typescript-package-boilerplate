import I18n from 'i18n-js';
import {cast, types} from 'mobx-state-tree';
import {AvailableLanguages, Language} from './language.model';

export const LanguageStore = types
	.model('LanguageStore', {
		languages: types.frozen<Language[]>(),
		currentLanguage: types.enumeration('Languages', Object.values(AvailableLanguages)),
		testing: types.maybe(types.string),
	})
	.actions((self) => ({
		setCurrentLanguage: (languageCode: AvailableLanguages) => {
			I18n.locale = languageCode;
			self.currentLanguage = AvailableLanguages[languageCode];
		},
		setLanguages: (languesList: Language[]) => (self.languages = cast(languesList)),
		setTesting: (value: string) => (self.testing = value),
	}));
