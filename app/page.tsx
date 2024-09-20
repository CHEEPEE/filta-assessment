import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { ArticleProps } from "./components/Article/Article.types";
import Article from "./components/Article/Article";



const ArticleData: ArticleProps[] = [
  {
    title: 'Summer Lunch Menu By Mark Best',
    description: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`,
    image: '/assets/component-02/Image-01.jpg',
    link: '#',
    dialogImage: '/assets/component-02/Image-01@2x.jpg',
  },
  {
    title: 'A Traditional Christmas Eve, Mark Best Style',
    description: `One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.`,
    image: '/assets/component-02/Image-02.jpg',
    link: '#',
    dialogImage: '/assets/component-02/Image-02@2x.jpg',
  },
  {
    title: 'Taking Taste Further',
    description: `This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.`,
    image: '/assets/component-02/Image-03.jpg',
    link: '#',
    dialogImage: '/assets/component-02/Image-03@2x.jpg',
  },
]

const ImageDialog = ({ src, dialogImage }: { src: string, dialogImage: string }) => {
  return (<Dialog>
    <DialogTrigger asChild>
      <img
        className="aspect-auto w-full"
        sizes=""
        src={src} alt={""} />
    </DialogTrigger>
    <DialogContent className="p-[0px] border-none sm:max-w-[425px] md:max-w-[680px]">
      <img
        className="aspect-auto w-full"
        sizes=""
        src={dialogImage} alt={""} />
    </DialogContent>
  </Dialog>)
}

export default function Home() {
  return (
    <div className="grid font-openSans grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-4 lg:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full justify-center max-w-[1440px] flex-col gap-24 lg:gap-64 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-auto">
            <ImageDialog
              src={'/assets/component-01/Image-01.jpg'}
              dialogImage={'/assets/component-01/Image-01@2x.jpg'}
            />
          </div>
          <div className="flex flex-col justify-between w-auto ">
            <ImageDialog
              src={'/assets/component-01/Image-02.jpg'}
              dialogImage={'/assets/component-01/Image-02@2x.jpg'}
            />
            <ImageDialog
              src={'/assets/component-01/Image-03.jpg'}
              dialogImage={'/assets/component-01/Image-03@2x.jpg'}
            />
          </div>
          <div className="flex col-span-2 lg:col-span-1 flex-col gap-[6vw] w-auto">
            <div className="flex gap-[2vw] flex-col">
              <h1 className="md:text-[32px] font-openSansSemiCondensed font-[300] lg:text-[1.8vw] border-b-2 pb-[1vw] border-white">
                ANSWER YOUR BODY'S NEEDS
              </h1>
              <p className="md:text-[18px] lg:text-[1.38vw] xl:text-[18px]">
                The way <span className="text-indigo-300">ingredients are sourced affects the way we</span> nourish our bodies. Author Mark
                Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="md:text-[32px] text-red-600">
                BE MINDFUL
              </h3>
              <p className="md:text-[18px] font-bold lg:text-[1.4vw] xl:text-[px]">
                Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 md:gap-24 w-full">
          <h1 className="font-openSans font-[300] md:text-[4vw]">
            ALL THE LATEST FROM AEG
          </h1>
          <div className="flex w-full justify-center flex-col">
            <div className="grid font-openSansSemiCondensed grid-cols-1 md:grid-cols-3 gap-4">
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
