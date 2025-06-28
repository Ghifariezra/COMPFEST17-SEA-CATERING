export interface LinkCompProps {
    href: string;
    text: string;
    active?: string | null;
    setActive?: (text: string) => void;
}