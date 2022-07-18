# SvelteKit Basic Auth

This svelte-kit hook password protects an app.  See:  [`src/hooks.ts`](./src/hooks.ts)

The hook checks for a valid auth token, and if it's not found, it prompts the user to login using the browsers built-in auth mechanism.

There is a list of usernames and passwords at the top of that file it will check against (these can be replaced with environment variables). If you login successfully, you can use the `$session` store on the client to check user state and `locals` in endpoints
