import vetor from "../assets/vetor.png"

export default function Vetor () {
    return (
        <div className="w-1/2 h-screen bg-verde relative">
            <div className="flex flex-col items-center absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <img src={vetor} alt="" />
                <h1 className="font-bold text-3xl -tracking-tight text-secondary leading-loose">Exam Mastery Hub</h1>
                <small className="text-base font-normal text-alternative/90 text-center max-w-80">Unleash Your Academic Success with Exame Mastery Hub's Exam Excellence Plataform</small>
            </div>
        </div>
    )
}