import Image from 'next/image'
import Header from '../components/layout/Header'
import SearchBar from '@/components/ui/SearchBar'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen">
          {/* Background Image */}
          <Image
            src="/images/porto-vecchio-1.jpg"
            alt="Villa luxueuse avec vue sur Porto-Vecchio"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Left Column - Text */}
                <div className="lg:flex-1">
                  <h1 className="text-4xl lg:text-6xl font-playfair text-white leading-tight">
                    Découvrez l'Excellence
                    <br />
                    des Villas de Luxe en Corse
                  </h1>
                  <p className="mt-6 text-lg text-white/80 max-w-xl">
                    Des propriétés d'exception pour des séjours inoubliables sur l'Île de Beauté
                  </p>
                </div>

                {/* Right Column - Search Box */}
                <div className="w-full lg:w-[460px] shrink-0">
                  <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8">
                    <h2 className="text-2xl font-playfair text-white mb-6">
                      Trouvez votre villa
                    </h2>
                    <SearchBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
