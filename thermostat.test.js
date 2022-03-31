const Thermostat = require('../lib/thermostat')

describe ('Thermostat', () => {
  it ("getTemperature returns the current temperature", () => {
    const therm = new Thermostat();
    expect(therm.getTemperature()).toBe(20);
  });

  it ("up will increase the current temperature by 1 degree", () => {
    const therm = new Thermostat();
    therm.up();
    expect(therm.getTemperature()).toBe(21);
  });

  it ("down will decrease the current temperature by 1 degree", () => {
    const therm = new Thermostat();
    therm.down();
    expect(therm.getTemperature()).toBe(19);
  });

  it ("is iniatialised with power saving mode on", () => {
    const therm = new Thermostat();
    expect(therm.psm).toEqual(true);
  });

  it ("setPowerSavingMode toggles power saving mode on/off", () => {
    const therm = new Thermostat();
    therm.setPowerSavingMode()
    expect(therm.psm).toEqual(false);
  });

  it ("temp cannot be increased above 25 degrees while power saving on", ()  => {
    const therm = new Thermostat();
    therm.up();
    therm.up();
    therm.up();
    therm.up();
    therm.up();
    therm.up();
    expect(therm.getTemperature()).toBe(25);
  });

  it ("temp cannot be lowered below minTemp degrees", ()  => {
    const therm = new Thermostat();
    for (let i = 0; i < 20; i++){
      therm.down();
    };
    expect(therm.getTemperature()).toBe(therm.minTemp);
  });

  it ("reset will reset the temperature to 20 degrees", () => {
    const therm = new Thermostat();
    therm.up
    therm.reset();
    expect(therm.getTemperature()).toBe(20);
  });

  it ("usage will return low-usage if temp below 18", () => {
    const therm = new Thermostat();
    therm.down();
    therm.down();
    therm.down();
    expect(therm.usage()).toBe('low-usage');
  });

  it ("usage will return medium-usage if temp between 18 and 25", () => {
    const therm = new Thermostat();
    expect(therm.usage()).toBe('medium-usage');
  });

  it ("usage will return high-usage if temp above 25", () => {
    const therm = new Thermostat();
    console.log(therm.temperature)
    console.log(therm.maxTemp)
    therm.setPowerSavingMode()
    console.log(therm.maxTemp)
    console.log(therm.psm)
    for (let i = 0; i < 7; i++){
      therm.up();
    };
    console.log(therm.temperature)
    expect(therm.usage()).toBe('high-usage');
  });
});