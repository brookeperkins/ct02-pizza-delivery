const Driver = require('./driver');
const Schedule = require('./schedule');

describe('driver', () => {
  it('holds information about a driver', () => {
    const driver = new Driver('Driver1');

    expect(driver.name).toEqual('Driver1');
    expect(driver.currentSchedule).toEqual(expect.any(Schedule));

  });
});
