import { useNavigate } from "react-router-dom"

const BackButton = ({
  label = "Voltar",
}) => {

  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-6 flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-white"
    >
      ← {label}
    </button>
  )
}

export default BackButton