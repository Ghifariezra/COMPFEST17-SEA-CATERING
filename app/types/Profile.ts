interface User {
    full_name: string;
    email: string;
    role: string;
}

export interface AvatarMenuProps {
    user: User;
}