import { User } from '$lib/types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        interface Locals {
            user: User;
        }
    }
}

export {};
