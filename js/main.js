// ============= [ Dropdown ] ==========

function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log('first')
}

//  ============= [ settingTabLinks/ NAvTab ] =============
function settingTabLinks(event, tabs) {
  let i, settingTabContent, settingTabLink;
  console.log('here');
  settingTabContent = document.getElementsByClassName("setting-tab-content");
  for (i = 0; i < settingTabContent.length; i++) {
    settingTabContent[i].style.display = "none";
  }
  settingTabLink = document.getElementsByClassName("setting-tab-link");
  for (i = 0; i < settingTabLink.length; i++) {
    settingTabLink[i].className = settingTabLink[i].className.replace(" setting-active", "");
  }
  document.getElementById(tabs).style.display = "block";
  event.currentTarget.className += " setting-active";
}
document.getElementById('profile').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('menu_open');
  document.getElementById('profileInfoContainer').classList.toggle('shadowWhenMenuOpen');
});


//====================[  Switch ]===============

const switchCheck = document.querySelectorAll('.switchCheck');
switchCheck.forEach(element => {
  element.addEventListener('click', function () {
    this.parentElement.nextElementSibling.classList.toggle('switch-active-muted');
  });
});