# Invoking a component via a service 
This code demonstrates how to invoke functions of a component from a service.
This means that the component is accessable from anyother component within the app.
In this example the component is essentially a UI blocker consisting of a modal overlay and a spinner icon.
A service exposes the component allowing other components to activate the UI blocker.

## Abstraction
This example is build upon this seed project [simple-pro-ready-angular2-webpack-seed](http://https://github.com/JohnOutbottle/simple-pro-ready-angular2-webpack-seed).
The seed has all the basics of a fully functional production ready application.

## Running
1. `npm run build` - builds the application into the dist directory the contents of which are stand-alone and fully functional.
You can run it by navigating to the dist directory in a command terminal and serving it up using npm module http-server or httpster etc.
2. `npm run build-w` - This does the same as 1 but continues to listen for code changes, building automatically when changes are detected.
3. `npm live` - This fires up the webpack-dev-server and serves up the application on http://localhost:8081. It rebuilds and reloads the browser automatically when code changes are detected.

## Code highlights
The main points of interest are the app/shared/screenblocker components and service.
Note that the component is rendered on each page of the application, specifically the home and pluto pages

__home.component.html__, __pluto.component.html__
```html
<screen-blocker></screen-blocker>
```

The `ScreenBlockerService` simply exposes an Observable and a `spin()` function. The `spin()` function simply causes the observable to emit.

The  `ScreenBlockerComponent` is subscribed to the observable and will set booleans to cause the component to be displayed.
The associated CSS does the magic letting FontAwesome provide the spinning icon.
So now, any component can have the service injected, invoke the `spin` function, results in the observer emitting, the screen blocker component is subscribed (observing) and displays the blocker.

    


