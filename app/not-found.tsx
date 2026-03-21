export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4 text-zinc-400">
                Page not found
            </p>
            <a
                href="/"
                className="mt-6 px-4 py-2 border border-white/20 rounded-md hover:bg-white hover:text-black transition"
            >
                Go Home
            </a>
        </div>
    );
}