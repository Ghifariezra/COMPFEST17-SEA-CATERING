export async function checkLogin(): Promise<boolean> {
    try {
        const res = await fetch("/api/user", { cache: "no-store" });
        const data = await res.json();
        console.log(data);
        return data?.isLoggedIn === true;
    } catch (err) {
        console.error("Failed to check login", err);
        return false;
    }
}