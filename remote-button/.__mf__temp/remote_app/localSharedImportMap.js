
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/remote_app__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/remote_app__prebuild__react_mf_2_dom__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.1.0",
            scope: ["default"],
            loaded: false,
            from: "remote_app",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.1.0"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.1.0",
            scope: ["default"],
            loaded: false,
            from: "remote_app",
            async get () {
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.1.0"
            }
          }
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "shared_lib",
                  name: "shared_lib",
                  type: "module",
                  entry: "http://localhost:6001/shared_lib.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "host_app",
                  name: "host_app",
                  type: "module",
                  entry: "http://localhost:5000/hostApp.js",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      