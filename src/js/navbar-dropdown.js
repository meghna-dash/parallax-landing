//
// navbar-dropdown.js
//

(function() {

  //
  // Variables
  //

  // Selectors
  const drops = document.querySelectorAll('.navbar-nav .dropdown, .navbar-nav .dropright');
  const dropdowns = document.querySelectorAll('.navbar-nav .dropdown');
  const droprights = document.querySelectorAll('.navbar-nav .dropright');

  // Events
  const showEvents = ['mouseenter'];
  const hideEvents = ['mouseleave', 'click'];

  // Transition
  const transitionDuration = 200;

  // Positioner
  const overflowPadding = 16;

  // Breakpoint
  const desktopSize = 992;

  //
  // Functions
  //

  // Show drop
  function showDrop(menu) {
    if (window.innerWidth < desktopSize) {
      return;
    }

    menu.classList.add('showing');

    setTimeout(() => {
      menu.classList.remove('showing');
      menu.classList.add('show');
    }, 1);

    positionDrop(menu);
  }

  // Hide drop
  function hideDrop(e, menu) {
    if (window.innerWidth < desktopSize) {
      return;
    }

    if (!menu.classList.contains('show')) {
      return;
    }

    if (e.type === 'click' && e.target.closest('.dropdown-menu form')) {
      return;
    }

    menu.classList.add('showing');
    menu.classList.remove('show');

    setTimeout(() => {
      menu.classList.remove('showing');
    }, transitionDuration);
  }

  // Position drop
  function positionDrop(menu) {
    const positioner = menu.parentElement;
    const drop = positioner.parentElement;

    const isDropright = drop.classList.contains('dropright');
    const menuOffset = isDropright ? [-32, 0] : [0, 0];
    const menuPlacement = isDropright ? 'right-start' : 'auto';

    Popper.createPopper(drop, positioner, {
      placement: menuPlacement,
      modifiers: [{
        name: 'offset',
        options: {
          offset: menuOffset,
        }
      }, {
        name: 'preventOverflow',
        options: {
          padding: overflowPadding,
        },
      }]
    });
  }

  // Toggle dropright
  function toggleDroprights(e, menu) {
    if (window.innerWidth >= desktopSize) {
      return;
    }

    e.stopPropagation();

    const parentElement = menu.parentElement;
    const parentMenu = parentElement.closest('.dropdown-menu');
    const siblingMenus = parentMenu.querySelectorAll('.dropdown-menu');

    [].forEach.call(siblingMenus, function(el) {
      if (el !== menu) {
        el.classList.remove('show');
      }
    });

    menu.classList.toggle('show');
  }

  // Hide droprights
  function hideDroprights(menu) {
    if (window.innerWidth >= desktopSize) {
      return;
    }

    menu.classList.remove('show');
  }

  //
  // Listeners
  //

  [].forEach.call(drops, dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');

    // Show drop
    showEvents.forEach(event => {
      dropdown.addEventListener(event, () => {
        showDrop(menu);
      });
    });

    // Hide drop
    hideEvents.forEach(event => {
      dropdown.addEventListener(event, e => {
        hideDrop(e, menu);
      });
    });
  });

  [].forEach.call(droprights, dropright => {
    const toggle = dropright.querySelector('[data-toggle="dropdown"]')
    const menu = dropright.querySelector('.dropdown-menu');

    // Toggle dropright
    toggle.addEventListener('click', e => {
      e.preventDefault();

      toggleDroprights(e, menu);
    });
  })

  $(dropdowns).on('hide.bs.dropdown', function() {
    const menus = this.querySelectorAll('.dropright .dropdown-menu');

    // Hide droprights
    [].forEach.call(menus, menu => {
      hideDroprights(menu);
    });
  });

})();
