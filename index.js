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
  // const orderedDrivers = drivers.sort(revenueSorter);
  const driversCopy = Object.assign({}, drivers);
  return orderedDrivers;
}