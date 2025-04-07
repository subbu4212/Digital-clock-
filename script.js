function updateClock(id, timeZone) {
    const now = new Date();
    const options = {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    document.querySelector(`#${id} .time`).textContent = timeString;
  }
  
  function updateAllClocks() {
    updateClock('newyork', 'America/New_York');
    updateClock('london', 'Europe/London');
    updateClock('tokyo', 'Asia/Tokyo');
    updateClock('sydney', 'Australia/Sydney');
    updateClock('dubai', 'Asia/Dubai');
  }
  
  // Update every second
  setInterval(updateAllClocks, 1000);
  updateAllClocks(); // initial call
  