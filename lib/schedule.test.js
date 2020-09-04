const Schedule = require('./schedule');
// const Order = require('./order.js');

describe('Schedule class', () => {
  it('shows information about the schedule', () => {
    const { nextOpenMinute } = new Schedule();

    expect(nextOpenMinute()).toEqual(0);
  });
});
