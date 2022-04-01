/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
    interface Locals {
        user: import('$lib/types.d').User;
    }

    interface Session {
        user: import('$lib/types.d').User;
    }

    // interface Platform {}
    // interface Stuff {}
}
