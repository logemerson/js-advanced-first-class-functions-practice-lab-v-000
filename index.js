function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  }
}

function logDriversByHometown(drivers, location) {
  for (const driver of drivers) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  }
}

function revenueSorter(driver1, driver2) {
  return driver1.revenue-driver2.revenue;
}

function driversByRevenue(drivers) {
  const driversCopy = Object.assign([], drivers);
  const orderedDrivers = driversCopy.sort(revenueSorter);
  
  return orderedDrivers;
}

const nameSorter = function(driver1, driver2) {
  return driver1.name.localeCompare(driver2.name);
}

function driversByName(drivers) {
  const driversCopy = Object.assign([], drivers);
  const orderedDrivers = driversCopy.sort(nameSorter);
  
  return orderedDrivers;
}

