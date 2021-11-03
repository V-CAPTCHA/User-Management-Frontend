const moment = require('moment');

export function generateDateLabel() {
  var dateLabel = [];
  
  for(var i=-89; i<0; i++) {
    dateLabel.push(moment().add(i, 'days').format('DD-MM-YY'))
  }  

  return dateLabel;
}
