- Install Extension
- Build for Chrome
- Popup
- Basic Communication / Setup
- remove menus
- remove alternative menus
- render networks
- render templates
- remove initial flash of hidden content / enforce ACL on initial render
- Primitives
- remove submenus
- Show Block Pages
- no effect for nonsaml users
- Logout of meraki hooks:
  - when extension uninstalled
  - when disabling extension
- msp page redirect, deep link
- hide submenus
- hide alternative menus
- hide menus
- Delegate Mode
- network filters/search messes up rendering
- ACL caching and updating for performance?
- redirect to allowed pages on blocked page / default page (what if blocked?) // V2 Features
- Detect when closing meraki tabs to log out of meraki pages


-- Verify --
  -- Make work --

* token refresh
* Preview Mode
* Build for FireFox


Not Critical:

- Debug Part of Extesion?
* Disable delegate dashboard saml login. (Do only from extension)

V2:

- Fix Popup login form
- 2FA confirm
- google signing
- Fix login to Meraki via SAML from popup

* Show badge icon on meraki dashboard
* Allow moveable badge
* Add CSP to frontend to handle token stealing