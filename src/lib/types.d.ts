export interface User {
    username: string;
}

export interface AuthUser extends User {
    password: string;
}
