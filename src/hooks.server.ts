import type { Handle } from '@sveltejs/kit';
// import { USERS } from '$env/static/private';
import type { AuthUser } from '$lib/types';

const users: AuthUser[] = [
    {
        username: 'ghost',
        password: 'test',
    },
];

//* Replace ⬆ with ⬇ after adding your `.env` file and uncomment line 2
// const users: AuthUser[] = JSON.parse(USERS);

export const basicAuth: Handle = ({ event, resolve }) => {
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

    event.locals.user = {
        username: user.username,
    };

    return resolve(event);
};

// Use sequence if you have multiple hooks
// https://kit.svelte.dev/docs/modules#sveltejs-kit-hooks-sequence
export const handle = basicAuth;
