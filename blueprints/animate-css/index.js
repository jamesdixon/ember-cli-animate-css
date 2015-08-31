var path = require("path");

module.exports = {
  normalizeEntityName: function() {
  },

  beforeInstall: function(options) {
    return this.addBowerPackageToProject("animate.css", "~3.4.0");
  }
};
