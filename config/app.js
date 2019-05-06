export default {
  name: 'California Home Fitness',
  // name: 'R_Comm',
  logging: {
    // Change me for less 'DEBUG'
    level: ['production'].indexOf(process.env.NODE_ENV) < 0 ? 'info' : 'info',
    debugSQL: false,
    apolloLogging: ['production'].indexOf(process.env.NODE_ENV) < 0
  },
  // Check here for Windows and Mac OS X: https://code.visualstudio.com/docs/editor/command-line#_opening-vs-code-with-urls
  // Use this protocol handler for Linux: https://github.com/sysgears/vscode-handler
  stackFragmentFormat: 'atom://file/{0}:{1}:{2}'
};
