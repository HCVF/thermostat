class Thermostat {
  constructor() {
    this.temperature = 20;
    this.psm = true;
    this.maxTemp = 25
    this.minTemp = 10;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemp) {
      this.temperature ++
    };
  };

  down() {
    if (this.temperature > this.minTemp) {
    this.temperature --;
    };
  };

  setPowerSavingMode() {
    if (this.psm === true) {
      this.psm = false
    } else {
      this.psm = true
    };
    this.psm ? this.maxTemp = 25 : this.maxTemp = 35;
  };
  reset() {
    this.temperature = 20
    this.psm = true
  }
  usage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature > 25) {
      return "high-usage";
    } else {
      return "medium-usage";
    };
  };
};

module.exports = Thermostat