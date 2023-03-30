import Head from "next/head"

export default function IndexPage() {
  return (
    <main>
      <Head>
        <title>Intrepyd software</title>
        <meta name="description" content="Building the future, now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative">
          <div className="flex h-screen items-center justify-center">
            <div className="relative">
              <div className="mx-auto mb-20 text-center">
                <div className="intrepyd-green text-[256px] font-bold leading-[200px] ">
                  Σ
                </div>
                <h1 className="intrepyd-blue text-[128px] font-bold text-gray-900 dark:text-white">
                  INTR
                  <span className="intrepyd-green">Σ</span>
                  PYD{" "}
                </h1>
                <span className="text-primary intrepyd-pink text-[64px] leading-none dark:text-white">
                  SOFTWARE
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  )
}
