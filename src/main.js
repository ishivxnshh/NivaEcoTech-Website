import './style.css'
import Alpine from 'alpinejs'
import EmblaCarousel from 'embla-carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

window.Alpine = Alpine
Alpine.start()

// Initialize Embla Carousel
const emblaNode = document.querySelector('.embla__viewport')
if (emblaNode) {
    const options = { loop: true }
    const plugins = [
        AutoScroll({ 
            playOnInit: true, 
            speed: 1,
            stopOnInteraction: false
        })
    ]
    EmblaCarousel(emblaNode, options, plugins)
}
