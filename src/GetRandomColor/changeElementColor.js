
  export function changeElementColor() {
  const statisticsListItems = document.querySelector('[data-action="bg-color"]'); 
  console.log("changeElementColor ~ statisticsListItems", statisticsListItems)

  statisticsListItems.style.backgroundColor = `${getRandomHexColor()}`;
  
}

function getRandomHexColor() {    

  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}