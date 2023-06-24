export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <span className="text-5xl">Hola Mundo
      { new Date().getTime()}</span>
    </main>
  )
}
