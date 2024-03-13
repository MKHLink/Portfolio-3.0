/* eslint-disable */
'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function onEmailClick(){
  window.open(`mailto:${'hasanlinkhon@gmail.com'}`);
}

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 py-6">
        <div className="container mx-auto flex flex-col items-center space-y-2">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Linkhon Hasan</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Fullstack Developer</p>
          </div>
          <img
            alt="Avatar"
            className="rounded-full"
            height="300"
            src="/PFP.jpg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hi, I'm Linkhon</h2>
                <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Linkhon Hasan is a software developer with a passion for programming.
                  He is a graduate of the FastTrack program from Cook Systems and holds a bachelor's degree in computer science, as well as a Full Stack Development certificate from Columbia University.
                  Linkhon has worked in multiple diverse teams upon graduation, such as startups and established companies. 
                  He possesses an optimistic and easy-to-get-along characteristic, which adds to the productivity of a team. Linkhon brings along analytical problem-solving skills and a can-do attitude to any project he is a part of.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <button style={{ textAlign: 'left' }} className="text-sm text-gray-500 dark:text-gray-400" onClick={onEmailClick}>
                    Email: hasanlinkhon@gmail.com
      
                    
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    
      
                    Phone: +1 316-300-0123
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Java</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">SpringBoot</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">JavaScript</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">C++</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">mySQL</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">HTML5</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">CSS3</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">TypeScript</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">React</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">AngularJS</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">NextJS</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Node.js</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">MongoDB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
                <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Click on the "View GitHub" button to see more
                  information about each project.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Workflow Management Application</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A workflow management application that allows users to create and manage teams and their projects.
                  </p>
                 <div className="flex flex-wrap gap-2">
                 <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Java</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">SpringBoot</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Angular</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">PostgreSQL</div>
                 </div>
                  <Link
                    className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="https://github.com/MKHLink/Workflow_management_application" target="_blank" rel="noreferrer"
                  >
                    View GitHub
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Twitter API</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Spring Boot based web application that provides CRUD functionality for a Twitter Application
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Java</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">SpringBoot</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">PostgreSQL</div>
                 </div>
                  <Link
                    className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="https://github.com/MKHLink/Twitter_API" target="_blank" rel="noreferrer"
                  >
                    View GitHub
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Music Guessing Game</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is a web game made using the Spotify API. Players can guess the popularity of a song to score points!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Angular</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">TypeScript</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">NodeJS</div>
                 </div>
                  <Link
                    className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="https://github.com/MKHLink/Spotify_WebGame" target="_blank" rel="noreferrer"
                  >
                    View GitHub
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Just Do It</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                 
                    A website that gives new users and existing gym goers a sense of community when they workout.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">NodeJS</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">MongoDB</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">React</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">GraphQL API</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">ExpressJS</div>
                 </div>
                  <Link
                    className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="https://github.com/MKHLink/just-do-it" target="_blank" rel="noreferrer"
                  >
                    View GitHub
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Find Your Pet</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  A website users can utilize to find available pets in their surrounding area based on zip code
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">HTML</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">JavaScript</div>
                    <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">CSS</div>
                 </div>
                  <Link
                    className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="https://github.com/MKHLink/Find_Your_Pet" target="_blank" rel="noreferrer"
                  >
                    View GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Resume</h2>
                <p>Download by resume <Link href={'https://drive.google.com/uc?export=download&id=1hxHxhnhgzwwgxs7imSpgcJ0HFgtltO--'}><span style={{fontSize:30, textDecorationLine: 'underline', fontWeight: 'bold'}}>here</span></Link></p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
                <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Interested in working together? Have a question about one of my projects? Feel free to reach out using
                  the form below.
                </p>
              </div>
              <div className="mx-auto max-w-sm space-y-2">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" required type="text" />
                    <Input placeholder="Last Name" required type="text" />
                  </div>
                  <Input className="w-full" placeholder="Email" required type="email" />
                  <Input className="w-full" placeholder="Subject" required type="text" />
                  <Textarea className="w-full" placeholder="Your Message" required />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/MKHLink"  target="_blank" rel="noreferrer"> 
            GitHub
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="https://www.linkedin.com/in/likhonhasan312/"  target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
        </nav>
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Linkhon Hasan. All rights reserved.</p>
      </footer>
    </div>
  )
}

/* eslint-enable */