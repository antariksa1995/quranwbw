export const selectableDisplays = {
	1: { displayID: 1, displayName: 'Word by Word', displayComponent: 'WBWDisplay', layout: 'wbw', continuous: false, customClasses: null },
	2: { displayID: 2, displayName: 'Normal', displayComponent: 'NormalDisplay', layout: 'normal', continuous: false, customClasses: null },
	3: { displayID: 3, displayName: 'Continuous Word by Word', displayComponent: 'ContinuousDisplay', layout: 'wbw', continuous: true, customClasses: 'text-center direction-rtl' },
	4: { displayID: 4, displayName: 'Continuous Normal', displayComponent: 'ContinuousDisplay', layout: 'normal', continuous: true, customClasses: 'text-center direction-rtl' },
	5: { displayID: 5, displayName: 'Side By Side', displayComponent: 'SideBySideDisplay', layout: 'normal', continuous: false, customClasses: null },
	6: { displayID: 6, displayName: 'Mushaf Mode' }
};

export const selectableFontTypes = {
	1: { id: 1, font: 'Uthmanic Hafs Digital', apiId: 1, disallowedIn: ['page'] },
	2: { id: 2, font: 'Uthmanic Hafs Mushaf', apiId: 2, disallowedIn: [] },
	3: { id: 3, font: 'Uthmanic Hafs Tajweed Mushaf', apiId: 2, disallowedIn: [] },
	4: { id: 4, font: 'Indopak Madinah', apiId: 3, disallowedIn: ['page'] }
};

export const selectableThemes = {
	1: { id: 1, name: 'Light', palette: 2 },
	2: { id: 2, name: 'Blue', palette: 1 },
	3: { id: 3, name: 'Green', palette: 1 },
	4: { id: 4, name: 'Black', palette: 1 },
	5: { id: 5, name: 'Sepia', palette: 2 }
};

export const verseTranslationsLanguages = [
	{ language_id: 20, language: 'Bangla' },
	{ language_id: 38, language: 'English' },
	{ language_id: 49, language: 'French' },
	{ language_id: 60, language: 'Hindi' },
	{ language_id: 67, language: 'Indonesian' },
	{ language_id: 158, language: 'Tamil' },
	{ language_id: 167, language: 'Turkish' },
	{ language_id: 174, language: 'Urdu' }
];

export const selectableVerseTranslations = {
	// bangla
	161: {
		resource_id: 161,
		resource_name: 'Taisirul Quran',
		language_id: 20
	},
	163: {
		resource_id: 163,
		resource_name: 'Sheikh Mujibur Rahman',
		language_id: 20
	},
	162: {
		resource_id: 162,
		resource_name: 'Rawai Al-bayan',
		language_id: 20
	},
	213: {
		resource_id: 213,
		resource_name: 'Dr. Abu Bakr Muhammad Zakaria',
		language_id: 20
	},

	// english
	131: {
		resource_id: 131,
		resource_name: 'The Clear Quran (Mustafa Khattab)',
		language_id: 38
	},
	20: {
		resource_id: 20,
		resource_name: 'Saheeh International',
		language_id: 38
	},
	84: {
		resource_id: 84,
		resource_name: 'Mufti Taqi Usmani',
		language_id: 38
	},
	85: {
		resource_id: 85,
		resource_name: 'Abdel Haleem',
		language_id: 38
	},
	95: {
		resource_id: 95,
		resource_name: 'Abul Alaa Maududi',
		language_id: 38
	},
	57: {
		resource_id: 57,
		resource_name: 'Transliteration',
		language_id: 38
	},
	19: {
		resource_id: 19,
		resource_name: 'Pickthall',
		language_id: 38
	},
	22: {
		resource_id: 22,
		resource_name: 'Yusuf Ali',
		language_id: 38
	},
	203: {
		resource_id: 203,
		resource_name: 'Hilali & Khan',
		language_id: 38
	},

	// french
	779: {
		resource_id: 779,
		resource_name: 'Rashid Maash',
		language_id: 49
	},
	136: {
		resource_id: 136,
		resource_name: 'Montada Islamic Foundation',
		language_id: 49
	},
	31: {
		resource_id: 31,
		resource_name: 'French Translation (Muhammad Hamidullah)',
		language_id: 49
	},

	// hindi
	122: {
		resource_id: 122,
		resource_name: 'Maulana Azizul Haque al-Umari',
		language_id: 60
	},

	// indonesian
	134: {
		resource_id: 134,
		resource_name: 'King Fahad Quran Complex',
		language_id: 67
	},
	33: {
		resource_id: 33,
		resource_name: 'Indonesian Islamic affairs ministry',
		language_id: 67
	},
	141: {
		resource_id: 141,
		resource_name: 'The Sabiq company',
		language_id: 67
	},

	// tamil
	229: {
		resource_id: 229,
		resource_name: 'Sheikh Omar Sharif bin Abdul Salam',
		language_id: 158
	},
	50: {
		resource_id: 50,
		resource_name: 'Jan Trust Foundation',
		language_id: 158
	},
	133: {
		resource_id: 133,
		resource_name: 'Abdul Hameed Baqavi',
		language_id: 158
	},

	// turkish
	210: {
		resource_id: 210,
		resource_name: 'Dar Al-Salam Center',
		language_id: 167
	},
	77: {
		resource_id: 77,
		resource_name: 'Turkish Translation (Diyanet)',
		language_id: 167
	},
	52: {
		resource_id: 52,
		resource_name: 'Elmalili Hamdi Yazir',
		language_id: 167
	},
	112: {
		resource_id: 112,
		resource_name: 'Shaban Britch',
		language_id: 167
	},
	124: {
		resource_id: 124,
		resource_name: 'Muslim Shahin',
		language_id: 167
	},

	// urdu
	156: {
		resource_id: 156,
		resource_name: "Fe Zilal al-Qur'an",
		language_id: 174
	},
	97: {
		resource_id: 97,
		resource_name: 'Tafheem Ul Quran - Abul Alaa Maududi',
		language_id: 174
	},
	234: {
		resource_id: 234,
		resource_name: 'Fatah Muhammad Jalandhari',
		language_id: 174
	},
	158: {
		resource_id: 158,
		resource_name: 'بیان القرآن (ڈاکٹر اسرار احمد)',
		language_id: 174
	},
	151: {
		resource_id: 151,
		resource_name: 'Shaykh al-Hind Mahmud al-Hasan (with Tafsir E Usmani)',
		language_id: 174
	},
	54: {
		resource_id: 54,
		resource_name: 'Maulana Muhammad Junagarhi',
		language_id: 174
	},
	819: {
		resource_id: 819,
		resource_name: 'Maulana Wahiduddin Khan',
		language_id: 174
	},
	831: {
		resource_id: 831,
		resource_name: 'Abul Alaa Maududi (Roman Urdu)',
		language_id: 174,
		is_roman: true
	}
};

export const selectableWordTranslations = {
	1: { id: 5, language: 'Bangla' },
	2: { id: 1, language: 'English' },
	3: { id: 11, language: 'French' },
	4: { id: 8, language: 'German' },
	5: { id: 3, language: 'Hindi' },
	6: { id: 4, language: 'Indonesian' },
	7: { id: 10, language: 'Ingush' },
	8: { id: 9, language: 'Russian' },
	9: { id: 7, language: 'Tamil' },
	10: { id: 6, language: 'Turkish' },
	11: { id: 2, language: 'Urdu' }
};

export const selectableReciters = {
	1: { id: 1, timestampSlug: 'basit_mujawwad', reciter: 'Abdul Basit (Mujawwad)', url: 'https://everyayah.com/data/Abdul_Basit_Mujawwad_128kbps/' },
	2: { id: 2, timestampSlug: 'basit_murattal', reciter: 'Abdul Basit (Murattal)', url: 'https://everyayah.com/data/Abdul_Basit_Murattal_192kbps/' },
	3: { id: 3, reciter: 'Abdul-Rahman Al-Sudais', url: 'https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/' },
	4: { id: 4, reciter: 'Abu Bakr Ash-Shaatree', url: 'https://everyayah.com/data/Abu%20Bakr%20Ash-Shaatree_128kbps/' },
	// 5: ...
	6: { id: 6, timestampSlug: 'rifai', reciter: 'Hani Ar-Rifai', url: 'https://everyayah.com/data/Hani_Rifai_192kbps/' },
	7: { id: 7, reciter: 'Maher Al-Muaiqly', url: 'https://everyayah.com/data/MaherAlMuaiqly128kbps/' },
	8: { id: 8, timestampSlug: 'husary', reciter: 'Mahmoud Khalil Al-Husary', url: 'https://everyayah.com/data/Husary_128kbps/' },
	9: { id: 9, reciter: 'Mahmoud Khalil Al-Husary (with gaps)', url: 'https://everyayah.com/data/Husary_Muallim_128kbps/' },
	10: { id: 10, timestampSlug: 'mishary', reciter: 'Mishary Rashid Alafasy', url: 'https://everyayah.com/data/Alafasy_128kbps/' },
	11: { id: 11, reciter: 'Mohamed El-Minshawi (Mujawwad)', url: 'https://everyayah.com/data/Minshawy_Mujawwad_192kbps/' },
	12: { id: 12, reciter: 'Mohamed El-Minshawi (Teacher)', url: 'https://everyayah.com/data/Minshawy_Teacher_128kbps/' },
	13: { id: 13, reciter: 'Muhammad Ayyub', url: 'https://everyayah.com/data/Muhammad_Ayyoub_128kbps/' },
	14: { id: 14, reciter: 'Nasser Al Qatami', url: 'https://everyayah.com/data/Nasser_Alqatami_128kbps/' },
	15: { id: 15, timestampSlug: 'shuraym', reciter: 'Saood Ash-Shuraym', url: 'https://everyayah.com/data/Saood_ash-Shuraym_128kbps/' },
	16: { id: 16, reciter: 'Yasser Ad-Dossari', url: 'https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/' }
};

export const selectableTranslationReciters = {
	1: { id: 1, reciter: 'English - Ibrahim Walk (Sahih International)', url: 'https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/' },
	2: { id: 2, reciter: 'Urdu - Dr. Farhat Hashmi (word by word)', url: 'https://everyayah.com/data/translations/urdu_farhat_hashmi/' },
	3: { id: 3, reciter: 'Urdu - Shamshad Ali Khan', url: 'https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/' }
};

export const selectablePlaybackSpeeds = {
	1: { id: 1, speed: 0.5 },
	2: { id: 2, speed: 0.75 },
	3: { id: 3, speed: 1 },
	4: { id: 4, speed: 1.25 },
	5: { id: 5, speed: 1.5 },
	6: { id: 6, speed: 1.75 },
	7: { id: 7, speed: 2 }
};

export const selectableTooltipOptions = {
	1: { id: 1, name: 'None' },
	2: { id: 2, name: 'Transliteration' },
	3: { id: 3, name: 'Translation' },
	4: { id: 4, name: 'Both' }
};

export const screenBreakpoints = {
	sm: 640,
	md: 768,
	lg: 1024
};

export const mushafFontLinks = {
	// normal word fonts
	COLRv1: 'https://fonts.quranwbw.com/Hafs/KFGQPC-v4/COLRv1',

	// chapter header fonts
	header: 'https://v4.quranwbw.com/fonts/chapter-headers/QCF_SurahHeader_COLOR-Regular.woff2'
};
