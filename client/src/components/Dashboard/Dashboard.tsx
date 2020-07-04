import React from 'react';
import { Row, RowItem, SlideUp } from '../UI';

const Dashboard: React.FC = () => {
  return (
    <Row>
      <RowItem>
        <img src='https://i.picsum.photos/id/229/400/400.jpg?hmac=Jksff98ikvF_x7OpTJVXjGhaQdElbt8ElT39ZXohV4E' />
        <SlideUp>meep</SlideUp>
      </RowItem>
      <RowItem>
        <img src='https://i.picsum.photos/id/884/400/400.jpg?hmac=fVULAo0Iup0jA9R3FbRzEi89d5fAlz4E1xLcy5R6zZw' />
        <SlideUp>meep</SlideUp>
      </RowItem>
      <RowItem>
        Item 3<SlideUp>meep</SlideUp>
      </RowItem>
      <RowItem>Item 4</RowItem>
      <RowItem>Item 5</RowItem>
      <RowItem>Item 6</RowItem>
      <RowItem>Item 7</RowItem>
      <RowItem>Item 8</RowItem>
      <RowItem>Item 9</RowItem>
      <RowItem>Item 10</RowItem>
    </Row>
  );
};

export default Dashboard;
