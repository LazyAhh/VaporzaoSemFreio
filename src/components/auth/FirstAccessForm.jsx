const FirstAccessForm = ({
    matricula,
    password,
    onMatriculaChange,
    onPasswordChange,
    onSubmit,
}) => {
    return (
        <form
            onSubmit={onSubmit}
            className="space-y-5"
        >

            {/* Matrícula */}
            <div className="space-y-2">

                <label className="text-sm font-semibold text-zinc-300">
                    Matrícula
                </label>

                <input
                    type="text"
                    value={matricula}
                    onChange={onMatriculaChange}
                    placeholder="Digite sua matrícula"
                    className="w-full rounded-2xl border border-white/10 bg-[#101018] px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />

            </div>

            {/* Senha */}
            <div className="space-y-2">

                <label className="text-sm font-semibold text-zinc-300">
                    Nova senha
                </label>

                <input
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                    placeholder="Defina sua senha"
                    className="w-full rounded-2xl border border-white/10 bg-[#101018] px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />

            </div>

            {/* Botão */}
            <button
                type="submit"
                className="w-full rounded-2xl bg-violet-600 px-5 py-3 font-bold text-white transition hover:bg-violet-500"
            >
                Definir senha
            </button>

        </form>
    )
}

export default FirstAccessForm