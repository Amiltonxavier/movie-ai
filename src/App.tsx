import logo from "./assets/Logo.svg"
import star from "./assets/Star.svg"
import play from "./assets/icone.svg"
import play1 from "./assets/play1.svg"
import { FILMS } from "./constant/index"
import { Calendar, Clock11 } from "lucide-react"
function App() {

  return (
    <main className="min-h-screen bg-[#1E1F28] w-full">
      <section className="py-16 px-24">
        <header className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center mb-9">
          <img src={logo} alt="logo tipo da aplicação" />
          <button className="flex gap-2 items-center rounded py-2 justify-center px-6 sm:py-3 text-white  shadow bg-gradient-to-r from-[#8323FF] to-[#FF2DAF] ">
            <span className="font-medium">Nova recomendação</span>
            <img src={play1} alt="" />
          </button>
        </header>
        <article className="grid grid-cols-1 sm:grid-cols-3 gap-9">
          {
            FILMS.map((film) => (
              <div key={film.id} className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <h5 className="text-white font-semibold text-2xl truncate">{film.title}</h5>
                  <span className="flex  gap items-center">
                    <img src={star} alt={film.title} className="hover:scale-110 transition duration-500 cursor-pointer object-cover" />
                    <span className="font-bold text-xl text-[#FEEA35]">{film.rating}</span>
                  </span>
                </div>
                <div className="rounded-md w-full">
                  <img src={film.img} alt="barbie movie" className="w-full" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#8B8D9B] flex gap-1 text-base">
                    <Clock11 size={20} /> {film.duration}
                  </span>
                  <span className="text-[#8B8D9B] flex gap-1 text-base">
                    <Calendar size={20} />
                    {film.ReleaseDate}
                  </span>
                </div>
                <footer className="w-full">
                  <button type="button" className="flex px-4 bg-[#2B2B37] hover:bg-[#2B2B37]/80 text-white font-medium w-full py-3 items-center gap-4 justify-center rounded-lg"><img src={play} /> Assistir trailer</button>
                </footer>
              </div>
            ))
          }
        </article>
      </section>
    </main>
  )
}

export default App
