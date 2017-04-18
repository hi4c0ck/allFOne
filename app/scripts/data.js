var dataSet = [
  ['Tiger Nixon', '15', '0', '15', '115', '0'],
  ['Garrett Winters', '25', '0', '25', '43', '0'],
  ['Ashton Cox', '33', '0', '33', '128', '0'],
  ['Cedric Kelly', '0', '0', '0', '103', '0'],
  ['Airi Satou', '0', '0', '0', '103', '0'],
  ['Brielle Williamson', '58', '0', '58', '168', '0'],
  ['Herrod Chandler', '40', '0', '40', '120', '0'],
  ['Rhona Davidson', '40', '0', '40', '103', '0'],
  ['Colleen Hurst', '15', '0', '15', '58', '0'],
  ['Sonya Frost', '25', '0', '25', '64', '0'],
  ['Jena Gaines', '43', '0', '43', '101', '0'],
  ['Quinn Flynn', '58', '0', '58', '114', '0'],
  ['Charde Marshall', '0', '0', '0', '128', '0'],
  ['Haley Kennedy', '0', '0', '0', '58', '0'],
  ['Tatyana Fitzpatrick', '15', '0', '15', '118', '0'],
  ['Michael Silva', '25', '0', '25', '143', '0'],
  ['Paul Byrd', '18', '0', '18', '64', '0'],
  ['Gloria Little', '15', '0', '15', '140', '0'],
  ['Bradley Greer', '0', '0', '0', '96', '0']
];

var indexFontSize = function(index) {
  if (index === 0) {
    return '15pt';
  }
  if (index === 1) {
    return '14pt';
  }
  if (index === 2) {
    return '13pt';
  }
  return '11pt';
};

var indexColor = function(index) {
  if (index === 0) {
    return '#BBAE2A';
  }
  if (index === 1) {
    return '#9a9FAB';
  }
  if (index === 2) {
    return '#8B5513';
  }
  if (index % 2 !== 0) {
    return '#000000';
  }
  return '#332222';
};

var namedColor = function(name) {
  if (name.includes('Airi')) {
    return '#FC8336';
  }
  if (name.includes('Colleen')) {
    return '#FC4676';
  }
  return '#E8E3C5';
};

var scoredColor = function(score) {
  if (score === '58') {
    return 'Red';
  }
  if (score === '43') {
    return 'blue';
  }
  if (score === '40') {
    return 'green';
  }
  if (score < '40' && score > '0') {
    return '#DAFDEB';
  }
  return 'orange';
};

var scoredGPColor = function(score) {
  if (score > '90') {
    return 'Red';
  }
  if (score === '65') {
    return 'blue';
  }
  if (score > '46') {
    return 'green';
  }
  if (score < '47' && score > '0') {
    return '#DAFDEB';
  }
  return 'orange';
};

var totalScoreColor = function() {
  return '#C5E2DD';
};

var getScoreColor = function(data, column) {
  if (column === 0) {
    return namedColor(data[column]);
  }
  if (column === 1 || column === 2) {
    return scoredColor(data[column]);
  }
  if (column === 3) {
    return scoredGPColor(data[column]);
  }
  if (column === 4) {
    return totalScoreColor();
  }
  return 'white';
};

document.ready(function() {
  ('#rating_table').dataTable({
    data: dataSet,
    columns: [
      {title: 'Name'},
      {title: 'Last Qlf'},
      {title: 'Last Race'},
      {title: 'Last GP'},
      {title: 'Total Points'},
      {title: 'reserved'}
    ],
    order: [[4, 'desc']],
    createdRow: function(row, data) {
      (row).find('td').each(function(column, td) {
        (td).css({
          color: getScoreColor(data, column)
        });
      });
    },
    fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
      (nRow).children().css({
        background: indexColor(iDisplayIndexFull)
      }).css('font-size', indexFontSize(iDisplayIndexFull));
    }
  });
});
