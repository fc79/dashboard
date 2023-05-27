import React from 'react';
import { Column, Table, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';


function customHeader(){
  return(
    <div>kdjsffffffffs</div>
  )
}
function Dashboard() {
  const [arr, setArr] = React.useState([]);

  React.useEffect(() => {
    for (let i = 0; i < 1000; i++) {
      setArr((prevArr) => [...prevArr, { number: i, name: 'uwu' }]);
    }
  }, []);
  return (
    <div className="App">
      <div style={{ height: '80vh', width: '90%',marginTop:'5%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              gridStyle={{ outline: 'none' }}
              width={width}
              height={height}
              headerHeight={20}
              rowHeight={70}
              rowCount={arr.length}
              rowGetter={({ index }) => arr[index]}>
              <Column headerRenderer={customHeader} width={200} label="Number" dataKey="number" />
              <Column width={200} label="Name" dataKey="name" />
              <Column width={200} label="Name" dataKey="name" />
            </Table>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default Dashboard;
