import { FC } from "react";
import { Url } from "url";

interface ArticleProps {
  title: string,
  description: string,
  image: string | Url,
  link?: Url | string
}
const ArticleData: ArticleProps[] = [
  {
    title: 'Summer Lunch Menu By Mark Best',
    description: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`,
    image: '',
    link: '#'
  },
  {
    title: 'A Traditional Christmas Eve, Mark Best Style',
    description: `One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.`,
    image: '',
    link: '#'
  },
  {
    title: 'Taking Taste Further',
    description: `This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.`,
    image: '',
    link: '#'
  },
]


const Article: FC<{ data: ArticleProps }> = ({ data }) => {
  return (<div className="flex gap-2 flex-col">
    <img
      className="aspect-auto w-full"
      sizes=""
      src={'/assets/component-01/Image-02.jpg'} alt={""} />
    <h3>
      {data.title}
    </h3>
    <p>{data.description}</p>

  </div>)
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full justify-center max-w-[1440px] flex-col gap-64 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-auto">
            <img
              className="aspect-auto w-full"
              sizes=""
              src={'/assets/component-01/Image-01.jpg'} alt={""} />
          </div>
          <div className="flex flex-col justify-between w-auto ">
            <img
              className="aspect-auto w-full"
              sizes=""
              src={'/assets/component-01/Image-02.jpg'} alt={""} />
            <img
              className="aspect-auto"
              sizes=""
              src={'/assets/component-01/Image-03.jpg'} alt={""} />
          </div>
          <div className="flex md:col-span-2 lg:col-span-1 flex-col gap-[6vw] w-auto">
            <div className="flex gap-[2vw] flex-col">
              <h1 className="text-[1.8vw] border-b-2 pb-[1vw] border-white">
                ANSWER YOUR BODY'S NEEDS
              </h1>
              <p className="text-[1.38vw] xl:text-[18px]">
                The way <span className="text-indigo-300">ingredients are sourced affects the way we</span> nourish our bodies. Author Mark
                Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-red-600">
                BE MINDFUL
              </h3>
              <p className="font-bold text-[1.4vw] xl:text-[px]">
                Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-24 w-full">

          <h1 className="text-[4vw]">
            ALL THE LATEST FROM AEG
          </h1>
          <div className="flex w-full justify-center flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ArticleData.map(data => <Article data={data} />)}
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
