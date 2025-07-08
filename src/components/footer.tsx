import Card from "@/components/mini-components/ui/card"

export default function Footer() {
  return (
    <footer>
      <Card>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
            © 2025 Iván Mayoral. Todos los derechos reservados.
          </p>
        </div>
      </Card>
    </footer>
  )
} 