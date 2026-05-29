import HeroSection from "../components/hero/HeroSection"
import GenreSection from "../components/sections/GenreSection"
import GameCard from "../components/cards/GameCard"
import AddLibraryButton from "../components/ui/buttons/AddLibraryButton"
import LoadingState from "../components/states/LoadingState"
import ErrorState from "../components/states/ErrorState"
import EmptyState from "../components/states/EmptyState"
import useFeaturedGames from "../hooks/useFeaturedGames"
import Footer from "../components/layout/footer/Footer"
import Navbar from "../components/layout/navigation/Navbar"

const Home = () => {

    const { featuredGames, loading, error } = useFeaturedGames()

    if (loading) return <LoadingState />

    if (error) {
        return (
            <ErrorState
                title="Erro ao carregar jogos"
                description="Não foi possível carregar os destaques."
            />
        )
    }

    const heroGame = featuredGames.populares?.[0]

    if (!heroGame) {
        return (
            <EmptyState
                title="Nenhum jogo encontrado"
                description="Ainda não existem jogos cadastrados."
            />
        )
    }

    return (
        <main className="min-h-screen bg-[#080811] text-white">
            <Navbar />

            {/* HERO */}
            <div
                className="relative overflow-hidden"
                style={{
                    backgroundImage: `url(${heroGame.capaUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />

                <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
                    <HeroSection>

                        <div className="flex max-w-xl flex-col justify-end gap-5 pb-4">

                            <div className="flex flex-wrap gap-2">
                                {heroGame.generos?.map((genero) => (
                                    <span
                                        key={genero.id}
                                        className="rounded-md bg-violet-600/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white"
                                    >
                                        {genero.nome}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
                                {heroGame.titulo}
                            </h1>

                            <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
                                {heroGame.desenvolvedora}
                            </p>

                            <div className="flex items-center gap-4 pt-2">
                                <div className="text-2xl font-black text-violet-400">
                                    R$ {Number(heroGame.preco).toFixed(2)}
                                </div>
                                <AddLibraryButton />
                                <button className="rounded-lg border border-white/20 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/40 hover:bg-white/5">
                                    Ver Detalhes
                                </button>
                            </div>

                        </div>

                    </HeroSection>
                </div>
            </div>

            {/* CONTEÚDO */}
            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-14 md:px-6 lg:px-8">

                <GenreSection title="Lançamentos Recentes">
                    <div className="flex gap-5 overflow-x-auto pb-4 custom-scrollbar">
                        {featuredGames.recentes?.map((game) => (
                            <div key={game.id} className="min-w-[240px] max-w-[240px] flex-shrink-0">
                                <GameCard game={game} />
                            </div>
                        ))}
                    </div>
                </GenreSection>

                <GenreSection title="Mais Bem Avaliados">
                    <div className="flex gap-5 overflow-x-auto pb-4 custom-scrollbar">
                        {featuredGames.topAvaliados?.map((game) => (
                            <div key={game.id} className="min-w-[240px] max-w-[240px] flex-shrink-0">
                                <GameCard game={game} />
                            </div>
                        ))}
                    </div>
                </GenreSection>

                <GenreSection title="Populares">
                    <div className="flex gap-5 overflow-x-auto pb-4 custom-scrollbar">
                        {featuredGames.populares?.map((game) => (
                            <div key={game.id} className="min-w-[240px] max-w-[240px] flex-shrink-0">
                                <GameCard game={game} />
                            </div>
                        ))}
                    </div>
                </GenreSection>

                {["Ação", "RPG", "Aventura", "Estratégia", "Indie", "Corrida"].map((genre) => {
                    const genreGames = [
                        ...featuredGames.recentes,
                        ...featuredGames.topAvaliados,
                        ...featuredGames.populares,
                    ].filter((game) =>
                        game.generos?.some((genero) => genero.nome === genre)
                    )

                    if (!genreGames.length) return null

                    return (
                        <GenreSection key={genre} title={genre}>
                            <div className="flex gap-5 overflow-x-auto pb-4 custom-scrollbar">
                                {genreGames.map((game) => (
                                    <div key={`${genre}-${game.id}`} className="min-w-[240px] max-w-[240px] flex-shrink-0">
                                        <GameCard game={game} />
                                    </div>
                                ))}
                            </div>
                        </GenreSection>
                    )
                })}

                <Footer />

            </div>
        </main>
    )
}

export default Home