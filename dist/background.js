console.log("Hello this script is running on background");

/*
 * BASICALLY WHENEVER USER CLICKED ON EXTENSION THEN IT WILL RENDER INDEX.HTML THAT IS FRONTEND  CREATED BY REACT.JS

  THEN WE JUST NEED TO MAKE CHANGES IN REACT.JS index.html FILE
 
chrome.action.onClicked.addListener(() => {
  console.log("TAB CREATED");

  chrome.tabs.create({ url: "index.html" });
});

*/

/*
  BASICALLY THESE CODE SAYS THAT WHENEVER USER CLICKS ON EXTENSION THEN IT MUST RENDER LOCAL HOST http://localhost:5173/ THAT HAS BEEN CREATED BY REACT

  MAIN USE WITH THE HELP OF THESE WHENEVER USER MAKES CAHNGES IN REACT SUCH AS CALLING API OR ANY OTHER THING IT WILL GET REFLECTED IN TAB CREATED BY EXTENSION
 */
chrome.action.onClicked.addListener(() => {
  console.log("TAB CREATED");
  chrome.tabs.create({ url: "index.html" });
});
