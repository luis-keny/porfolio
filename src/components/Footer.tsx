import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-2 dark:text-gray-400/80 flex gap-10 items-center justify-between pt-12">
      <div className="flex gap-1 items-center">
        <span>Inspired by</span>
        <Link 
          href="https://porfolio.dev/"
          target="_blank" 
          className="relative font-semibold hover:underline dark:text-gray-400 flex gap-1 w-fit items-center" 
        >
          porfolio.dev
          <ExternalLink className="" size={16}/>
        </Link>
      </div>
      <div className="dark:text-gray-400/80">
        <a id="contacto" href="mailto:miduga@gmail.com" className="hover:underline">Contact</a>
      </div>
    </footer>
  )
}