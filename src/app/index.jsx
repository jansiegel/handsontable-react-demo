import React from 'react';
import ReactDOM from 'react-dom';
import HotTable from 'react-handsontable';

class HandsontableParent extends React.Component {
  constructor() {
    super();

    this.qotsaSinglesData = [["\"If Only\"","1998","Queens of the Stone Age","—","\"If Only\"","1998"],["\"The Lost Art of Keeping a Secret\"","2000","Rated R","21","\"The Lost Art of Keeping a Secret\"","2000"],["\"Feel Good Hit of the Summer\"","—","Rated R","75","\"Feel Good Hit of the Summer\"","—"],["\"No One Knows\"","2002","Songs for the Deaf","5","\"No One Knows\"","2002"],["\"Go with the Flow\"","2003","Songs for the Deaf","24","\"Go with the Flow\"","2003"],["\"First It Giveth\"","—","Songs for the Deaf","—","\"First It Giveth\"","—"],["\"Little Sister\"","2005","Lullabies to Paralyze","13","\"Little Sister\"","2005"],["\"In My Head\"","—","Lullabies to Paralyze","—","\"In My Head\"","—"],["\"Burn the Witch\"","2006","Lullabies to Paralyze","—","\"Burn the Witch\"","2006"],["\"Sick, Sick, Sick\"","2007","Era Vulgaris","40","\"Sick, Sick, Sick\"","2007"],["\"3's & 7's\"","—","Era Vulgaris","—","\"3's & 7's\"","—"],["\"Make It wit Chu\"","—","Era Vulgaris","—","\"Make It wit Chu\"","—"],["\"My God Is the Sun\"","2013","...Like Clockwork","37","\"My God Is the Sun\"","2013"],["\"I Sat by the Ocean\"","—","...Like Clockwork","—","\"I Sat by the Ocean\"","—"],["\"Smooth Sailing\"","2014","...Like Clockwork","32","\"Smooth Sailing\"","2014"],["\"The Way You Used to Do\"","2017","Villains","20","\"The Way You Used to Do\"","2017"]];
    this.mergedCellsConfig = [
      { row: 1, col: 1, rowspan: 2, colspan: 1 },
      { row: 1, col: 2, rowspan: 2, colspan: 1 },
      { row: 3, col: 2, rowspan: 3, colspan: 1 },
      { row: 4, col: 1, rowspan: 2, colspan: 1 },
      { row: 6, col: 1, rowspan: 2, colspan: 1 },
      { row: 6, col: 2, rowspan: 3, colspan: 1 },
      { row: 9, col: 2, rowspan: 3, colspan: 1 },
      { row: 9, col: 1, rowspan: 3, colspan: 1 },
      { row: 12, col: 1, rowspan: 2, colspan: 1 },
      { row: 12, col: 2, rowspan: 3, colspan: 1 },
    ];
    this.editorTable = this.generateEditorTable();
  }

  generateEditorTable() {
    const table = [];
    for (let i = 0; i < this.qotsaSinglesData.length; i++) {
      table.push([this.qotsaSinglesData[i][0], this.qotsaSinglesData[i][2]]);
    }

    return table;
  }

  render() {
    return <div>
      <HotTable
        data={this.qotsaSinglesData}
        colHeaders={["Title", "Year", "Album", "Peak Billboard's US Alternative Songs chart position"]}
        rowHeaders={true}
        columns={[
          {
            type: 'handsontable',
            handsontable: {
              data: this.editorTable,
              autoColumnSize: true,
              colHeaders: ['Title', 'Album'],
              getValue: function() {
                const selection = this.getSelected();
                return this.getDataAtCell(selection[0], 0);
              },
            }
          },
          {
            type: 'numeric'
          },
          {},
          {}
        ]}
        mergeCells={this.mergedCellsConfig}
        contextMenu={true}
      />
    </div>;
  }
}

ReactDOM.render(<HandsontableParent/>, document.getElementById('container'));
