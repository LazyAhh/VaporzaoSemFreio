// pages/Home/Home.jsx


import PageContainer from "../../components/layout/PageContainer"

import HeroSection from "../../components/hero/HeroSection"
import HeroBanner from "../../components/hero/HeroBanner"
import HeroContent from "../../components/hero/HeroContent"
import HeroInfo from "../../components/hero/HeroInfo"
import HeroActions from "../../components/hero/HeroActions"
import HeroSwitcher from "../../components/hero/HeroSwitcher"
import HeroThumbnailList from "../../components/hero/HeroThumbnailList"
import HeroThumbnailCard from "../../components/hero/HeroThumbnailCard"

import HeroButton from "../../components/ui/buttons/HeroButton"
import VideoButton from "../../components/ui/buttons/VideoButton"
import AddLibraryButton from "../../components/ui/buttons/AddLibraryButton"

import GenreSection from "../../components/sections/GenreSection"

const Home = () => {
  return (
    <>

      <PageContainer>

        {/* HERO */}
        <HeroSection>

          <HeroBanner image="https://imgs.search.brave.com/H52OubokQBr1lTayraTIQlipBfBqWNS1fdi4gbPOepg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvcHQvdGh1bWIv/Zi9mNy9DeWJlcnB1/bmtfMjA3N19jYXBh/LnBuZy81MTJweC1D/eWJlcnB1bmtfMjA3/N19jYXBhLnBuZw">

            <HeroContent>

              <HeroInfo
                badge="Featured"
                genre="RPG"
                title="Cyberpunk 2077"
                description="Explore Night City em uma experiência futurista repleta de ação, escolhas e combate intenso."
              >

                <HeroActions>
                  <HeroButton>
                    Ver Detalhes
                  </HeroButton>

                  <VideoButton />

                  <AddLibraryButton />
                </HeroActions>

              </HeroInfo>

            </HeroContent>

          </HeroBanner>

          <HeroSwitcher>

            <HeroThumbnailList>

              <HeroThumbnailCard
                active
                title="Cyberpunk 2077"
                image="https://imgs.search.brave.com/H52OubokQBr1lTayraTIQlipBfBqWNS1fdi4gbPOepg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvcHQvdGh1bWIv/Zi9mNy9DeWJlcnB1/bmtfMjA3N19jYXBh/LnBuZy81MTJweC1D/eWJlcnB1bmtfMjA3/N19jYXBhLnBuZw"
              />

              <HeroThumbnailCard
                title="Red Dead Redemption 2"
                image="https://imgs.search.brave.com/pZno10hPmbgWrmLrSryN-gmpQsbJ6gXuZRTLJg7B0Tk/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1yb2Nrc3Rhcmdh/bWVzLWNvbS5ha2Ft/YWl6ZWQubmV0L3Jv/Y2tzdGFyZ2FtZXMt/bmV3c2l0ZS9pbWcv/Z2xvYmFsL2dhbWVz/L2ZvYi82NDAvcmVk/ZGVhZHJlZGVtcHRp/b24yLmpwZw"
              />

              <HeroThumbnailCard
                title="Elden Ring"
                image="https://imgs.search.brave.com/o8Xo10VGhU8JE9Cr_89A4KRQ3tYrTXZcN7uTB5qZRWE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvcHQvdGh1bWIv/MC8wZC9FbGRlbl9S/aW5nX2NhcGEuanBn/LzUxMnB4LUVsZGVu/X1JpbmdfY2FwYS5q/cGc"
              />

            </HeroThumbnailList>

          </HeroSwitcher>

        </HeroSection>


        {/* GÊNEROS */}
        <div className="mt-16 space-y-14">

          <GenreSection title="RPG">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />

            </div>
          </GenreSection>


          <GenreSection title="FPS">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />

            </div>
          </GenreSection>


          <GenreSection title="Aventura">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />

            </div>
          </GenreSection>


          <GenreSection title="Indie">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />

            </div>
          </GenreSection>


          <GenreSection title="Corrida">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />

            </div>
          </GenreSection>


          <GenreSection title="Estratégia">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />
              <div className="h-64 rounded-3xl bg-zinc-900" />

            </div>
          </GenreSection>

        </div>

      </PageContainer>

    </>
  )
}

export default Home