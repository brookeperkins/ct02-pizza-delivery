class Schedule {

    #schedule = [...Array(1440).fill(false)];

    nextOpenMinute = () => this.#schedule.findIndex(open => !open);



    addOrder = ({ startMinute, deliveryMinute }) => { 
      for(let i = startMinute; i <= deliveryMinute; i++) {
        this.#schedule[i] = true;
      }
    }
}

module.exports = Schedule;
