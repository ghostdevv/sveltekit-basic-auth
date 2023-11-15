# SvelteKit Basic Auth

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ghostdevv/sveltekit-basic-auth)
[![Open in SvelteLab](https://docs.sveltelab.dev/button/dark_short.svg)](https://sveltelab.dev/github.com/ghostdevv/sveltekit-basic-auth)

## Complete Example

This SvelteKit hook password protects an app (SEE: [`src/hooks.server.ts`](./src/hooks.server.ts)). The hook checks for a valid auth token, and if it's not found, it prompts the user to login using the browsers built-in auth mechanism.

A list of username password pairs are stored in an environment variable (SEE: [.env.example](./.env.example)). If you login successfully, you can get the authorised username from the page data.

## Copy and Paste

This is the simplest form of the basic auth hook for you to copy and paste into your app, if you want a complete example that includes showing the logged in user see above.

`src/hooks.server.ts`
```ts
import type { Handle } from '@sveltejs/kit';
import { USERS } from '$env/static/private';

interface AuthUser {
    username: string;
    password: string;
}

const users: AuthUser[] = JSON.parse(USERS);

export const handle: Handle = ({ event, resolve }) => {
    const authorization = event.request.headers.get('Authorization');

    if (!authorization || !authorization.startsWith('Basic '))
        return new Response('Unauthorized', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Protected"',
            },
        });

    const token = authorization.replace('Basic ', '');

    const [username, password] = Buffer.from(token, 'base64')
        .toString()
        .split(':');

    const user: AuthUser | undefined = users.find(
        (u) => u.username === username && u.password === password,
    );

    if (!user)
        return new Response('Unauthorized', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Protected"',
            },
        });

    return resolve(event);
};
```

`.env`
```bash
USERS="[{"username":"ghost","password":"test"}]"
```