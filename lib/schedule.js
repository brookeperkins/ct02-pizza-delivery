class Schedule {
    #schedule = [...Array(1440).fill(false)];

    nextOpenMinute = () => this.#schedule.findIndex(open => !open);

}

module.exports = Schedule;
