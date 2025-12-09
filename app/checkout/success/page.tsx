"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const method = searchParams.get("method")

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl">
        <CheckCircle className="h-24 w-24 text-gros-red mx-auto mb-6" />
        <h1 className="text-4xl font-bold font-serif text-gros-black mb-4">¡Pedido Confirmado!</h1>
        <p className="text-xl text-gray-600 mb-8">
          {method === "whatsapp"
            ? "Tu pedido ha sido enviado por WhatsApp. Nos pondremos en contacto pronto para confirmar los detalles y el pago."
            : "Gracias por tu compra. Recibirás un email de confirmación pronto con los detalles de tu pedido."}
        </p>

        <div className="bg-gros-sand p-6 rounded-lg mb-8">
          <h2 className="font-bold text-gros-black mb-3">Próximos pasos:</h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li>✓ Recibirás confirmación del pedido</li>
            <li>✓ Detalles de pago y envío</li>
            <li>✓ Tiempo estimado de producción: 7-14 días</li>
            <li>✓ Seguimiento del envío</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link href="/" className="block">
            <Button className="w-full bg-gros-red text-white hover:bg-gros-maroon font-bold h-12">
              Volver al Inicio
            </Button>
          </Link>
          <Link href="/clubes" className="block">
            <Button
              variant="outline"
              className="w-full font-bold h-12 border-gros-red text-gros-red hover:bg-gros-red/10 bg-transparent"
            >
              Seguir Comprando
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
