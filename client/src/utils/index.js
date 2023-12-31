export const daysLeft = (deadline) => {
    console.log(deadline);
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };
  
  export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
  
    return percentage;
  };

    export const convertToUnixTimestamp = (dateString) => {
    const date = new Date(dateString);
    return Math.floor(date.getTime() / 1000);
  }
  
  export const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;
  
    if (img.complete) callback(true);
  
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  };


export const convertToDate = (unixTimestampMs) =>{
    const date = new Date(unixTimestampMs);
    const formattedDate = date.toLocaleDateString("en-US");
    return formattedDate;
}
