module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

  if (document.getElementsByClassName('indicator').length > 0) {

      indicatorCount = 1;
      //count = parseInt(document.getElementsByClassName('unreadcount')[0].innerText.replace(/\D/g, ""));

    } else {

      indicatorCount = 0;

    };

    if (isNaN(indicatorCount)) {
      indicatorCount = 0;
    };

    // set Franz badge
    Franz.setBadge(0, indicatorCount);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
