import Image from "next/image"

const Hero = () => {
  return (
    <>

          <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center mt-5">
              <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                  <div className="lg:w-1/2">
                      <div className="h-64 bg-cover lg:rounded-lg lg:h-full">
                            <Image src='/images/brand/hero.jpg' alt="Count Crafts" height={400} width={600}/>
                      </div>
                  </div>

                  <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Build Your New <span className="text-blue-600 dark:text-blue-400">Idea</span> with us</h2>
                      <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Make your Dream Into A Reality 
                      .</p>

                      <div className="mt-8">
                          <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Start Now</a>
                      </div>
                  </div>
              </div>
          </section> 
    </>
  )
}

export default Hero