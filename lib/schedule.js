class Schedule {
    
    #schedule = [...Array(1440).fill(false)];

    nextOpenMinute = () => this.#schedule.findIndex(open => !open);



    clear = () => this.#schedule = [...Array(1440).fill(false)];

    print = () => this.#schedule.map(minute => minute ? false : false);

    addOrder = ({ startMinute, deliveryMinute }) => { 
      for(let i = startMinute; i <= deliveryMinute; i++) {
        this.#schedule[i] = true;
      }
    }
}

module.exports = Schedule;
