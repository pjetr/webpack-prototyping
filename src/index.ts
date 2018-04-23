/**
 * @author Peter Delvaux <peter.delvaux@mailfence.com>
 * @since 23 April 2018
 */

// Style imports do not touch, or your CSS won't work.
import 'normalize.css';
import './main.scss';

// add index.html to the page
$(function() {
  $('body').append(require('./index.html'));
})