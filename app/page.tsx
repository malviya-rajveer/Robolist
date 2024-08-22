

import  Container  from "../components/global/container";

import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import Wrapper from "@/components/global/wrapper";
import { features, perks } from "@/components/objects";
import Footer from "@/components/footer";
import { SpotlightPreview } from "@/components/objects/spotlite";
import { SparklesPreview } from "@/components/objects/sparkle";

export default async function Page() {

return <section>
  <Wrapper>
  <div>
        <SpotlightPreview></SpotlightPreview>
  </div>
  <div>
    <Container>
        <SparklesPreview></SparklesPreview>
    </Container>
  </div>
  <div className="hidden lg:block absolute top-[30rem] -right-[16%] bg-primary-pink w-72 h-72 rounded-full z-10 blur-[14rem]"></div>
  <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary-blue w-96 h-72 rounded-full z-100 blur-[14rem]"></div>
  <div className="hidden lg:block absolute -bottom-[40rem] -left-1/4 bg-primary-blue w-96 h-40 rounded-full z-100 blur-[14rem]"></div>
  <Container>

    <div className="md:mt-20 justify-center font-semibold text-center w-full lg:text-4xl bg-gradient-to-b  from-neutral-50 to-neutral-400 inline-block text-transparent bg-clip-text">
      Where <a className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Innovation</a>  Takes Shape: Crafting Robots
    </div>

  <div className="mt-5 p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-50">
        Everything you need to <a className="bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">build</a> your next robot
        </h1>
        <p className="mt-4 pt-2 md:text-2xl font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Talk with professionals, researchers, and hobbyists.
        </p>
      </div>
      <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                            {perks.map((perk) => (
                                <div key={perk.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                    <div className="flex items-center justify-center">
                                        <perk.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {perk.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {perk.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
      <div>

      </div>
      </Container>
      <Footer></Footer>
  </Wrapper>
</section>
}