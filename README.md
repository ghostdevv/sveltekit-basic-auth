# Svelte Kit Basic Auth

In the `src/hooks.ts` file is the bulk of the logic, it checks whether you have a valid auth token and if not it will prompt you to login using the browsers basic auth mechanism. There is a list of usernames and passwords at the top of that file it will check again. If you login successfully then the load function in `src/routes/__layout.svelte` will update the auth store so you have global state across your app.
