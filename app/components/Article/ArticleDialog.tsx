import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";


const ArticleDialog = ({ dialogImage, src }: { src: string | undefined, dialogImage: string | undefined }) => {
    return (<Dialog>
        <DialogTrigger asChild>
            <img
                className="aspect-auto w-full border-b-4 border-b-red-600"
                sizes=""
                src={src} alt={""} />
        </DialogTrigger>
        <DialogContent className="p-[0px] border-none sm:max-w-[425px] md:max-w-[780px]">
            <img
                className="aspect-auto w-full"
                sizes=""
                src={dialogImage} alt={""} />
        </DialogContent>
    </Dialog>)
}
export default ArticleDialog