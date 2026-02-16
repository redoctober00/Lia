import { useState } from 'react';
import { Camera } from 'lucide-react';
import BentoCard from './components/BentoCard';
import ImageCarousel from './components/ImageCarousel';
import PhotoGalleryModal from './components/PhotoGalleryModal';
import InfiniteMenu from './components/InfiniteMenu';
import { CAROUSEL_IMAGES, GALLERY_IMAGES, MENU_ITEMS } from './data';
import image1 from './assets/emoji1.png';
import image2 from './assets/emoji2.png';
import image3 from './assets/blue-emoji-removebg-preview.png';
import image4 from './assets/blueemoji.png';

import DomeGallery from './components/DomeGallery';

const App = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-rose-200/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-purple-200/30 to-transparent blur-3xl" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative">
          {/* DomeGallery Background */}
          <div className="absolute inset-0 z-0 opacity-30">
            <DomeGallery
              fit={0.8}
              minRadius={600}
              maxVerticalRotationDeg={0}
              segments={34}
              dragDampening={2}
              grayscale
            />
          </div>
          <div className="text-center space-y-8 max-w-4xl mx-auto relative z-10">
            <div className="flex gap-4 justify-center">
              <img 
                src={image1} 
                alt="Love" 
                className="w-30 h-20 mx-auto drop-shadow-2xl rounded-full object-cover "
              />
              
            </div>
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-rose-600 via-rose-600 to-rose-600 bg-clip-text text-transparent animate-fadeInUp tracking-tight leading-tight">
              To My Dearest Love, Lia
            </h1>
            <p className="text-2xl md:text-3xl text-rose-700 font-light tracking-wide animate-fadeInUp animation-delay-300 leading-relaxed">
           Hello gumaganern sha, I love you so much, Happy Valentine’s Day Lia ❤️!            </p>
            
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="container mx-auto px-4 py-20 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Love Message Card - Large */}
            <BentoCard
              className="md:col-span-2 lg:col-span-2 md:row-span-2"
              gradient="bg-gradient-to-br from-rose-100 to-pink-100 border border-rose-200/50"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <img 
                    src={image3} 
                    alt="Emoji" 
                    className="w-50 h-50 mb-4"
                  />
                  <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6 leading-tight">
                    I love my girlfriend
                  </h2>
                  <p className="text-lg text-rose-800 leading-relaxed font-light">
                  To my sweetest girlfriend, Lia.
                  <br />
                  I still remember the first time I saw you. 
                  It was on a server when we were on a call with other friends, 
                  and we didn’t know each other at that time, 
                  so there was no interaction whatsoever. 

                  Months later, you messaged me asking for help with your programming finals. 
                  It was a Minesweeper project. 
                  I didn’t even know C++, but I still tried to help you by sending some links lol. 
                  Nakatulong naman ata? HWADHASHJDSAHDHA.
                  At that time, we were still just friends.
                  We would be in call, and I’d be playing Stardew while you were crashing out because of your finals, 
                  and there I was teasing you because I was already done with mine. 
                  I think it was around April when we started confessing that we liked each other.
                  Days passed, and we kept playing together while on call, day by day, months by months.
                  A lot of things happened, but you’re still here.  
                  And I’m still here.
                  Happy Valentine’s Day.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6 justify-end">
                  <img 
                    src={image4}
                    alt="" 
                    className="w-12 h-12"
                  />
                  <span className="text-rose-600 font-light italic">baka makita ng bf mo </span>
                </div>
              </div>
            </BentoCard>

            {/* Spotify Playlist Card */}
            <BentoCard className="md:col-span-2 bg-gradient-to-br from-pink-100 to-rose-100 border border-pink-200/50 overflow-hidden">
              <h3 className="text-2xl font-bold text-pink-900 mb-3">Woew may playlist sha oh,,,</h3>
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/6m9Gxgght7J4ewlj5tCZxa?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </BentoCard>

            {/* Photo Gallery Card */}
            <BentoCard className="md:col-span-2 cursor-pointer bg-gradient-to-br from-rose-100 to-rose-100 border border-rose-200/50">
              <div onClick={() => setShowGallery(true)} className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-10 h-10 text-rose-600" />
                  <h3 className="text-2xl font-bold text-rose-900">Arts you made</h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {GALLERY_IMAGES.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-rose-600 mt-4 font-light text-sm">Click to view gallery </p>
                 <p className="text-rose-600 mt-4 font-light text-right">Marami pa iba di ko malagay hashdahaha thank you sa artworks </p>
              </div>
            </BentoCard>
          </div>
        </section>

        {/* Infinite Menu Section */}
        <section className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xl text-rose-600 font-light">MGA TAO TALAGA MAGALING SA CALOOCAN</p>
          </div>
          <div className="h-[600px] w-full rounded-3xl overflow-hidden bg-black/5">
            <InfiniteMenu items={MENU_ITEMS} />
          </div>
        </section>

        {/* Carousel Section */}
        <section className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-rose-600 bg-clip-text text-transparent mb-4">
              HASGAHAHAHA
            </h2>
            <p className="text-xl text-rose-600 font-light">basta mga ano,,, di ko malagay iba ; (</p>
          </div>
          <ImageCarousel images={CAROUSEL_IMAGES} autoPlay={true} />
        </section>

        {/* Footer */}
        <footer className="text-center py-12 px-4">
          <div className="space-y-4">
            <img 
              src={image2}
              alt="Love" 
              className="w-200 h-50 mx-auto"
            />
            <p className="text-2xl text-pink-700 font-light">Happy Valentine's Day!!!</p>
        
          </div>
        </footer>
      </div>

      {/* Photo Gallery Modal */}
      {showGallery && <PhotoGalleryModal images={GALLERY_IMAGES} onClose={() => setShowGallery(false)} />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');

        * {
          font-family: 'Lato', sans-serif;
        }

        h1, h2, h3, h4 {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default App;
