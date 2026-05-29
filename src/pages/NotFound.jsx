import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#080811] px-6 text-center text-white">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-violet-400">
                Error 404
            </p>

            <h1 className="text-6xl font-black uppercase tracking-tight md:text-8xl">
                Página não encontrada
            </h1>

            <p className="mt-5 max-w-md text-sm text-zinc-400 md:text-base">
                O caminho que você tentou acessar não existe
                ou foi removido.
            </p>

            <div className="mt-10 flex gap-4">

                <button
                    onClick={() => navigate("/")}
                    className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-violet-500"
                >
                    Voltar para Home
                </button>

                <button
                    onClick={() => navigate(-1)}
                    className="rounded-xl border border-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                    Voltar
                </button>

            </div>

        </main>
    )
}

export default NotFound