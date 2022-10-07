# Learn Angular with me
Angular tips and tricks

## Angular Test with Karma
To run only one spec file or method with Karma in Angular Idea project, add `f` prefix: 

    fdescribe('CollablynkNavigationComponent', () => {...
    or 
    fit('should create 2', () => { ...

To run only one module with Karma in TM-UI project, change the `tm-web/src/angular/src/test.ts` file as follows

    // Then we find all the tests.
    const context = require.context('app/item/attachments-tab', true, /\.spec\.ts$/);

## Angular Remote Debug with Proxy
E:\IdeaProjects\DEV\TM\tm-ui\tm-web\src\angular\src\environments\environment.proxy.ts

    export const environment = {
    production: false,
    urlPrefix: "/hix/ui/",
    envName: "proxy",
    };

In E:\IdeaProjects\DEV\TM\tm-ui\tm-web\src\angular\package.json

    "startProxy": "ng serve --configuration=proxy --proxy-config proxy.conf.json --host 0.0.0.0 --disable-host-check",

In E:\IdeaProjects\DEV\TM\tm-ui\tm-web\src\angular\proxy.conf.json

    {
    "/hix": {
    "target": "http://nicosemi-ww5074:8080/",
    "secure": false
    },
    "/api": {
    "target": "http://nicosemi-ww5074:8080/hix/ui",
    "secure": false
    }
    }

### Resources
#### github-tkmfwy

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-tkmfwy)
