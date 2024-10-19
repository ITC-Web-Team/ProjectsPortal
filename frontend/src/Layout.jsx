import React from 'react'

function Layout({children}) {
  return (
    <div class="bg-black h-screen">
      <div class="navbar">
        <div class="w-full bg-orange-600 flex h-12">
          <div class="text-2xl flex font-bold my-auto ml-2 text-black w-[30%]">Projects Portal</div>
          <div class="flex text-xl text-black my-auto mr-8 w-[70%] justify-evenly">
            <div class="flex">Oppurtunities</div>
            <div class="flex">Projects</div>
            <div class="flex">Sign In</div>
          </div>
        </div>
      </div>

      <div class="children min-h-[80vh]">
        {children}
      </div>

      <div class="footer">
        <div class="w-full text-white text-xl h-10 mb-4 text-center bg-black">Made by the Web Team with ❤️ | Institute Technical Council, 2024</div>
      </div>
    </div>
  )
}

export default Layout