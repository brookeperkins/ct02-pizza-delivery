const Schedule = require('./schedule');
const Order = require('./order.js');

describe('Schedule class', () => {
  it('shows the next open minute', () => {
    const { nextOpenMinute } = new Schedule();

    expect(nextOpenMinute()).toEqual(0);
  });

  it('can add an order to where it fits in the schedule', () => {
    const { addOrder, nextOpenMinute, print } = new Schedule();

    const newOrder = new Order('Butt Pizza', 60, 40);

    addOrder(newOrder);
    print();

    expect(nextOpenMinute()).toEqual(61);
  });
});
