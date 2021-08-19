import { alert, notice, info, success, error } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';

export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(r => r.json())
        .catch(alert({ text: "Ошибка HTTP: " + r.status }))
}

