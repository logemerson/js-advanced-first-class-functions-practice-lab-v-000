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

function numberSorter(n1, n2) {
  return n1-n2;
}

function driversByRevenue(drivers) {
  return drivers.sort(numberSorter);
}