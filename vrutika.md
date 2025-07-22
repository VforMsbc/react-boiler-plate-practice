1)Use of routes folder--------------------- 
- we have created 2 files in routes folder, one is validator component that is checking the condition i, it is acting as a middleware but on frotnend, if the condition saisfies, then the necessary routes are directed,

why we need to use this, 
implementing user based or permission based, routing system, this allows us to seperate our users, and protect our data,

what we are achieving through this,
authorization, no un-necessary re-renders, data security.

2)Using hooks to implement components---------------------
- we have created hooks file, that gives us all the supporting variables, and methods that are used by our UI component

-why need to use this,
we are implementing very important oops concept over here, we are hiding implementation details, and exposing only the necessary details, that will be used by othre devs, 
we are encapsulating the data logic, and giving that variables, methods to use
we need this to seperate our logics from ui components

what we are achieving through this,
- encapsulation
- seperating logic and ui rendering part

3)wrappers for components-----------------------
- we have created components like, tables, charts by using different core libraries and then using our custom wrappers to achieve a speicifc thing.
-major part of this wrapping is understood, where we have implemented our custom theme, 
here we have combination of providers, context, hooks, to achieve this 

why we need to use this,
- to extend posibility of the component usage,
- to seprate each and every thing on the basis of logic and ui components, so that each layer has only single repsonsibilty to look after
- to supply necessary things

what we have achieve through this,
- SRP

4)Props and its scope understanding,------------------------------
- props is fundamnetal part of react state handling, we have defined prop types at every level and used them, we are handling different types of props through different methods, like usestate, use reducers, use context, use refs,

-----types of props-----
--(1) Declarative props - like static props that we pass directly in the parent component, these props are only changed by the parent components or where they are defined

--(2) Refs/Mutable Objects - we use these props when we want to give access to the children components to change the state of any props, these are persistent and can be changed wihtout causing re-renders


why we need to use this,
- to make achieve reusablitiy, 

what we have achieved through this,
- utility, enhanced or extended use of component

5)Callbacks---------------------------------
- we have used callback function to render a menu and display it in ui in the sidebar component, we have used useCallback hook, 

-useCallback - this hook in react returns a stored function, it consists of a dependency array, whenever the state in dependency array changes, the usecallback is called, untill and unless there is the stored function, this prevents un-necessary re-renders

why we need to use this,
- if we would have used sttaic props, then on every change of state the idebar would be re-render, and every time sidebar elements will be generated in the dom tree, this will cause load on dom tree, and eventually the application may slow down

what we have achieved through this,
- efficiency in application

6)Purpose of Everything 
- before implementing any functions, state, or anything, we must know what purpose they would be serving, minimum requirements, 

7)Redux and redux thunk
"any failure is more of a handled error then unhandled exception"

- we are using redux and redux thunk to manage the state and global error handling of asynchronous javascript that is implemented in our react code, for example, API requests that are made to server.

-how it is implemented
--we have created a getasyncthunk function here, we have created this wrapper to extract the source token that we receive along with thunk API, 
"why need this source token" ? 
- in this source token we have abort signal, these abort signal can cancel the api requests when the request is canceled in the frontend side, like closing of the browser or when the tab or page is switched, 
this will cancel the request to the server so that we un-necessary api calls can be prohibited.

after getting the source token, we are sending back again this as a callback, but this time along with the source token,

1--)UI (dispatch) - 
we use dispatch to get that state to reflect in our ui (Login.hooks.ts)

2--)Thunk (payload) -  
after getting payload from ui, like input,we pass the payload to a custom function created used to use the createAsynThunk wrapper,  (login/service.ts)
-- return type - {"name" : "abc" }

3--)API Call - 
inside the thunk, we have a dedicated api call function that only looks after making a request like get, post, delete, patch, to the server, this returns a schema data , 
-- return type - {"data":{"name" : "abc" }, message:"", error:"", .....}

4--)Callback of type Thunk (args, payload, source)
this will return us api schema response along with source token

-- return type - {"data":{"name" : "abc" }, message:"", error:"", ....., sourceToken:"123"}

5--)Slice
in the slice file, we have created different states like, fulfilled, rejected, pending for completion status of action creators,
the data is stored accordingly and then passed to the stored

6--)Store
the store manages and stores the updated values of the slices
it is then used by dispatch hook to dispatch the state

why we need this-
we need redux thunk to create action creators for asynchronous states and to maintain global errors that are received in the promises

what we have achieved through this,
-global error handling
-canceltoken 
-track login attempts
-support custom meta data
-enable silent for supporting errors
-supports custom headers, token, like we build using axios instances and interceptors
-auto-cancel previous thunk

8)Using right things
- we have used everything in this react boiler plate, but everything is handled differently beacuse each feature has different requirements

-for eg, in implementing theming, we have used contexts and providers for globally implementing dark and light themes, we can also redux here, but we have used context because we only  want ui components to reflect the changes and it consists only ui and layout logic,
-whereas in redux, we use it to seperate any type of logics that are complex and must be handled carefully,

