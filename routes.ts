/**
 * An array of routes thar are accessible to the public
 * These routes do not require authentication
 * @type {strin[]}
 */
export const publicRoutes = [
    "/"
];

/**
 * An array of routes thar are used for authentication
 * These routes will redirect logged user to /settings
 * @type {strin[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register"
];
 
/**
 * The prefix for API authentication route
 * Routes that start with this prefix are used for API authentication purpose
 * @type {strin}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 * @type {string}
 */
export const DEAULT_LOGIN_REDIRECT = "/dashboard";
