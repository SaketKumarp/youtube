import { SignIn } from "@clerk/nextjs";
import { Play } from "lucide-react";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 via-black to-black" />

      {/* Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
        <div className="flex w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          {/* LEFT SECTION */}
          <div className="flex flex-1 flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-red-600/30">
                <Play className="fill-white text-white" size={30} />
              </div>

              <h1 className="text-3xl font-black sm:text-4xl">VID-AI</h1>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Watch.
              <br />
              Create.
              <br />
              Share.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              Dive into a modern ai based video platform experience with
              seamless uploads, ultra-fast streaming, personalized feeds, and a
              creator focused experience built for the next generation.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-sm text-zinc-400">Creators</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">1M+</h3>
                <p className="text-sm text-zinc-400">Views Daily</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">99%</h3>
                <p className="text-sm text-zinc-400">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex w-full items-center justify-center border-t border-white/10 bg-black/40 p-4 sm:p-8 lg:w-[45%] lg:border-l lg:border-t-0">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950/80 p-4 shadow-[0_0_50px_rgba(255,0,0,0.08)] backdrop-blur-2xl sm:p-6">
              {/* Mobile Logo */}
              <div className="mb-6 flex flex-col items-center justify-center lg:hidden">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600">
                  <Play className="fill-white text-white" size={28} />
                </div>

                <h1 className="text-3xl font-black text-white">YT Clone</h1>
              </div>

              <SignIn
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-transparent shadow-none border-none w-full",
                    headerTitle: "text-white text-3xl font-bold tracking-tight",
                    headerSubtitle: "text-zinc-400 text-sm",
                    socialButtonsBlockButton:
                      "bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all duration-300 rounded-xl h-12",
                    socialButtonsBlockButtonText: "text-white font-medium",
                    dividerLine: "bg-zinc-800",
                    dividerText: "text-zinc-500",
                    formFieldLabel: "text-zinc-300 font-medium",
                    formFieldInput:
                      "bg-zinc-900 border border-zinc-800 text-white rounded-xl h-12 focus:border-red-500 focus:ring-red-500",
                    footerActionLink: "text-red-500 hover:text-red-400",
                    formButtonPrimary:
                      "bg-red-600 hover:bg-red-500 text-white rounded-xl h-12 text-sm font-semibold transition-all duration-300 shadow-lg shadow-red-600/20",
                    identityPreviewText: "text-white",
                    identityPreviewEditButton: "text-red-400",
                    formResendCodeLink: "text-red-400 hover:text-red-300",
                    footer: "hidden",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
