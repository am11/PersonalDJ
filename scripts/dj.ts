// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
module PersonalDJ {
    "use strict";

    export module DJ {
        export function initialize() {
            document.querySelector('body section.container>button').addEventListener('click', onButtonPressed, false);
        }

        function onButtonPressed() {
            Application.GetRemoteJson(
                'https://api.github.com/users/am11/repos',
                (response) => {
                    (<HTMLElement>document.querySelector('body section.container>code')).innerHTML = response;
                });
        }
    }
}
