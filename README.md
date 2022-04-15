# SvelteKit Basic Auth

This svelte-kit hook password protects an app.  See:  [`src/hooks.ts`](./src/hooks.ts)

The hook checks for a valid auth token, and if it's not found, it prompts the user to login using the browsers built-in auth mechanism.

There is a list of usernames and passwords at the top of that file it will check against (these can be replaced with environment variables). If you login successfully, the load function in `src/routes/__layout.svelte` will update the global svelte-kit `user` store.
