import { get } from 'svelte/store';
import { __chapterNumber } from '$utils/stores';
import { quranMetaData } from '$data/quranMeta';

// function to parse the URL to get the starting and ending verses
export function parseURL() {
	const chapterTotalVerses = quranMetaData[get(__chapterNumber)].verses;
	const url = window.location.pathname;

	// example verses: /1, /2/255, /2/285-286
	const urlSlashesSplit = url.split('/');
	const urlSlashesCount = urlSlashesSplit.length - 1;

	// example verses: /2:255
	const urlColenSplit = url.split(':');
	const urlColenCount = urlColenSplit.length - 1;

	let startVerse, endVerse;

	// for URL with slashes
	if (urlSlashesCount > 0) {
		// eg: /2 or if there are more than two slashes
		if (urlSlashesCount === 1 || urlSlashesCount > 2) {
			(startVerse = 1), (endVerse = +chapterTotalVerses);
		}

		// eg: /2/255 or /2/255-256
		else if (urlSlashesCount === 2) {
			const secondPartHyphenSplit = urlSlashesSplit[2].split('-');
			const secondPartHyphenSplitCount = secondPartHyphenSplit.length - 1;

			// eg: /2/255
			if (secondPartHyphenSplitCount === 0) {
				(startVerse = +urlSlashesSplit[2]), (endVerse = +startVerse);
			}

			// eg: /2/255-256
			else if (secondPartHyphenSplitCount === 1) {
				(startVerse = +secondPartHyphenSplit[0]), (endVerse = +secondPartHyphenSplit[1]);
			}

			// all other possibilites
			else (startVerse = 1), (endVerse = +chapterTotalVerses);
		}
	}

	// for URL with colen
	if (urlColenCount > 0) {
		let chapter = urlColenSplit[0],
			startVerse = +urlColenSplit[1];

		if (chapter < 1) chapter = 1;
		if (chapter > 114) chapter = 114;

		if (startVerse < 1) startVerse = 1;
		if (startVerse > quranMetaData[chapter].verses) startVerse = quranMetaData[chapter].verses;

		endVerse = startVerse;
	}

	// making sure the verses are between 1 and max chapter verses
	if (startVerse < 1) startVerse = 1;
	if (endVerse > chapterTotalVerses) endVerse = chapterTotalVerses;

	// making sure the start verse is not higher than the ending verse
	if (startVerse > endVerse) startVerse = endVerse;

	return [+startVerse, +endVerse];
}
