export default function History({ gratitudes }) {
  return (
    <p className="text-white text-2xl"> Previously. you are grateful for 
      <span className="font-bold">
        {gratitudes.map(gratitude => ' ' + gratitude).toString()}
      </span>
    </p>
  )
}