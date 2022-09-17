# SvelteKit Basic Auth

This svelte-kit hook password protects an app. See: [`src/hooks.server.ts`](./src/hooks.server.ts)

The hook checks for a valid auth token, and if it's not found, it prompts the user to login using the browsers built-in auth mechanism.

There is a list of usernames and passwords at the top of that file it will check against (these can be replaced with environment variables). If you login successfully, you can use the `$page.data.user` which is populated by [`+layout.server.ts`](./src/routes/%2Blayout.server.ts).

If you want to use environment variables for username and passwords checkout the instructions in [`src/hooks.server.ts`](./src/hooks.server.ts) and the [`.env.example`](./.env.example)
