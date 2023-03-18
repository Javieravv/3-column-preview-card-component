import { CardComponent } from "./CardComponent"
import './css-components/cards-component.css'

export const CardsComponent = () => {
  return (
    <main className="cards-cars">
        <CardComponent 
            icono = "icon-sedans.svg"
            title = "SEDANS"
            description = "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            color = "hsl(31, 77%, 52%)"
        />
        <CardComponent 
            icono = "icon-suvs.svg"
            title = "SUVS"
            description = "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            color = "hsl(184, 100%, 22%)"
        />
        <CardComponent 
            icono = "icon-luxury.svg"
            title = "Luxury"
            description = "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style"
            color = "hsl(179, 100%, 13%)"
        />
    </main>
  )
}
