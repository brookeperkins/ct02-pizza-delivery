const Order = require('./order');

describe('Collection class', () => {
  it('returns the start time', () => {
    const newOrder = new Order('Fungus Pizza', 50, 25);

    expect(newOrder.startMinute).toEqual(5);
  });
});
