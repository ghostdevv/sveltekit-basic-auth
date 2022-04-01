<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = ({ session }) => {
        user.set(session.user);

        return {
            status: 200,
        };
    };
</script>

<script>
    import { user } from '$lib/user';
</script>

<h1>
    {$user.username}
</h1>
