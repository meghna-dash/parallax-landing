//
// demo.js
//

const themeSansSerif = document.getElementById('themeSansSerif');
const familySansSerif = window.localStorage.getItem('goodkitSansSerif');

function switchFamily(checked) {

  // Update localStorage value
  window.localStorage.setItem('goodkitSansSerif', checked);

  // Toggle stylesheet
  themeSansSerif.disabled = !checked;

  // Toggle switches
  toggleSwitches(checked);
}

function toggleSwitches(checked) {
  const familySwitches = document.querySelectorAll('.family-switch');

  [].forEach.call(familySwitches, familySwitch => {
    familySwitch.checked = checked;
  });
}

// Toggle stylesheet on load
if (familySansSerif === 'true') {
  themeSansSerif.disabled = false;
}

// Toggle switches on load 
window.addEventListener('DOMContentLoaded', () => {
  toggleSwitches(familySansSerif === 'true');
});
