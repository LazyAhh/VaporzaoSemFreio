const GameCard = ({ game }) => {
    return (
        <article className="group overflow-hidden rounded-xl border border-white/5 bg-[#111118] transition hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-900/20">

            <div className="aspect-[3/4] overflow-hidden">
                <img
                    src={game.capaUrl || "https://placehold.co/600x400?text=Imagem+não+encontrada"}
                    alt={game.titulo}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="space-y-3 p-4">

                <div className="flex flex-wrap gap-1.5">
                    {game.generos?.map((genero) => (
                        <span
                            key={genero.id}
                            className="rounded-md bg-violet-950/60 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-violet-300"
                        >
                            {genero.nome}
                        </span>
                    ))}
                </div>

                <h3 className="line-clamp-1 text-base font-black uppercase tracking-wide text-white">
                    {game.titulo}
                </h3>

                <p className="text-xs text-zinc-500">
                    {game.desenvolvedora}
                </p>

                <div className="flex items-center justify-between pt-1">
                    <span className="text-base font-black text-violet-400">
                        R$ {Number(game.preco).toFixed(2)}
                    </span>
                    <button className="rounded-lg bg-violet-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-violet-500 active:scale-95">
                        + Biblioteca
                    </button>
                </div>

            </div>
        </article>
    )
}

export default GameCard