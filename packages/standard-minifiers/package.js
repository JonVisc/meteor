Package.describe({
  name: 'standard-minifiers',
  version: '1.0.3-beta.12',
  summary: 'Standard minifiers used with Meteor apps by default.',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.imply(['standard-minifier-css','standard-minifier-js']);
});

Package.onTest(function(api) {});