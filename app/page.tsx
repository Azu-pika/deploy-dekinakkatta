"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation" // Correct import for App Router


export default function Home() {
  const router = useRouter(); // Initialize the router

  const handleNavigation = () => {
    router.push("/book_new_stay"); // Navigate to the desired route
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
      <Image
          src="/assets/japanese-ryokan.jpg" // Update with the correct path
          alt="Japanese Ryokan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-0" />
        <div className="absolute bottom-7 right-8 text-right text-white">
         <h1 className="text-5xl font-roboto font-light mb-1 leading-none">Wa Ryokan</h1>
          <p className="text-xl font-roboto mb-2">Discover the beauty of Japan</p>
          <Button size="lg" className="font-roboto" onClick={handleNavigation}>
            Check Availability
          </Button>

        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-roboto font-semibold mb-6 text-center">Welcome to Our Ryokan</h2>
        <p className="text-lg font-roboto text-gray-700 leading-relaxed mb-8">
          Immerse yourself in the serene atmosphere of our traditional Japanese inn. Experience the perfect blend of
          ancient customs and modern comfort, surrounded by the beauty of nature and the warmth of Japanese hospitality.
        </p>
      </section>

      {/* Featured Amenities */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-roboto font-semibold mb-12 text-center">Recreation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Onsen Hot Springs", src: "/assets/onsen.jpg" },
              { title: "Traditional Cuisine", src: "/assets/cuisine.jpg" },
              { title: "Zen Gardens", src: "/assets/zen.jpg" }
            ].map((amenity, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={amenity.src}
                  alt={amenity.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-roboto font-semibold mb-2">{amenity.title}</h3>
                  <p className="font-roboto text-gray-600">Experience the essence of Japanese culture and relaxation.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

