import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
    const session = await auth();

    return (
        <div>

            {JSON.stringify(session)}

            <div className="text-center">
                <h2 className="text-xl font-bold mb-9">
                    Welcome, {session?.user.name}
                </h2>

                <p className="p-3">Your access token is ... </p>
                <input
                    type="text"
                    value={session?.user.accessToken}
                    className="w-fit p-2 mb-9 border-2 border-slate-300 rounded-md text-slate-600"
                />
            </div>


            <form action={async () => {
                "use server";

                await signOut();
            }}>

                <button type="submit">
                    Sign out
                </button>
            </form>
        </div>
    )
}
export default SettingsPage;