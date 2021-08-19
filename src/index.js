import renderCountries from '../templates/list-coutries.hbs'
import renderCountry from '../templates/one-country.hbs';
import { alert, notice, info, success, error } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';


