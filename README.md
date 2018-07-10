# Node-React-Redux-Blaster
Education project to learn Node, React, Stripe, Redux

## Milestones: 
#### Milestone Commits, Can use as boilerplates for other projects ==> 
-  3/12/2018 : Complete google oAuth flow implemented : https://github.com/csdear/Node-React-Redux-Blaster/commit/e2d684644b2f9083a6d7f47c77bf2d90bfe255c5

-  3/19/2018 A Dev Duplex, React Server and Node(express) Server working in harmony : The react server has been added, the 'client' folder.  Basically in dev envrionment we have two servers running, react frondend and node js backend.  They are able to comm properly via proxy packages, thus elimnating CORs / Cookies issues.  Servers consolidated on production push, as react is built before pushing.  
	https://github.com/csdear/Node-React-Redux-Blaster/commit/0f4696371fabc67286c68d33b6a38a89b343fab1

-  3/22/2018 :  Implemented React Router and Redux Store.  Created some basic routes. Added basic boilerplate code for our future Redux store to track user's authorization state.  https://github.com/csdear/Node-React-Redux-Blaster/commit/8eefb1a4f532ac4494f03a1572c3d7fa6060b66c


-  3/26/2018 :  Implemented Materialize for frontend/css.  Importing components, the header, i.e. using view partials. 
https://github.com/csdear/Node-React-Redux-Blaster/commit/108a4324809db2c4f2945ffadb809c7fb5bb24e1

-  7/10/2018 :  Added Axios and Redux Thunk for better handling of state of current_user from the Redux Store.  Refactors of traditional promises to better async/await syn. Modified the AuthReducer and evaluating user payload -- in reference to the current user's state to return either NULL, False (not logged in) or the User model(logged in). This thereby determines what UI elements are shown to the user depending on their auth/login state -- we make the header element aware of state changes. We also handle NULL to headoff UI/UX bugs. Added a nice redirect after google auth success. Logout and redirect. Making React partials of-a-sort -- offloading the landing component to a external .js file, then importing and rendering the landing compt into our homepage(app.js). Lastly, using react-router-dom Link tag to either the dashboard( logged in, /surveys) or to root (!logged in, /).  The stored user auth state is evaluated, a ternery expression handling to either '/surveys' or '/' depending on user auth state.
https://github.com/csdear/Node-React-Redux-Blaster/commit/e0502dad50e51e2f249104322a6407c78df4fe8b
