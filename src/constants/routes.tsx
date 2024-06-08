import { Home, Browse, Signin, Signup } from '../pages';

type Routes = {
	[key: string]: {
		path: string;
		page: JSX.Element;
		isProtected: boolean;
	};
};

export const ROUTES: Routes = {
	HOME: { path: '/', page: <Home />, isProtected: false },
	BROWSE: { path: '/browse', page: <Browse />, isProtected: true},
	SIGNUP: { path: '/signup', page: <Signin />, isProtected: false},
	SIGNIN: { path: '/signin', page: <Signin />, isProtected: false}
};
