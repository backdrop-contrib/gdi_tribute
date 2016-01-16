/**
 * @file
 * JS for Pure CSS.
 */
(function($, Backdrop, window, document, undefined) {

  // Show dropdown on hover.
  Backdrop.behaviors.gdi_tribute_dropdown = {
    attach: function(context, setting) {
      //your custom action here
    }
  }

  $(document).ready(function() {

    // run Javascript on page load here
    console.log("Welcome to the console");

  });
})(jQuery, Backdrop, this, this.document);
