<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    import { user } from '$lib/user';

    export const load: Load = ({ session }) => {
        user.set(session.user);

        return {
            status: 200,
        };
    };
</script>
