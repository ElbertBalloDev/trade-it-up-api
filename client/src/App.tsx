import React from 'react';
import { Viewport, Theme, Row, RowItem } from './components/UI';

import './App.css';

function App() {
  return (
    <Theme>
      <Viewport>
        <h1>Trade ins</h1>
				<Row>
					<RowItem>Item 1</RowItem>
					<RowItem>Item 2</RowItem>
					<RowItem>Item 3</RowItem>
					<RowItem>Item 4</RowItem>
					<RowItem>Item 5</RowItem>
					<RowItem>Item 6</RowItem>
				</Row>
      </Viewport>
    </Theme>
  );
}

export default App;
