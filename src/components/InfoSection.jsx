import React from 'react'

function InfoSection() {
  return (
<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://images-porsche.imgix.net/-/media/4238D3FAAC5C4D29A4D36113B4246A1E_C6EA97ABD7A34A4AB7FBBC685BE45046_00---J1---fallback-image?iar=0&w=1299&ar=4%3A3&q=85&auto=format"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          "Publiez votre annonce et trouvez rapidement des acheteurs ou des locations pour votre voiture !"
          </h2>

          <p className="mt-4 text-gray-600">
          Notre plateforme vous permet de publier facilement des annonces pour la vente ou la location de vos voitures. Que vous soyez un particulier ou un professionnel, vous pouvez proposer votre véhicule à un large public, tout en bénéficiant d'une interface simple et intuitive. 
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Rechercher une annonce
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection