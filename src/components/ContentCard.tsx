import { ComponentProps } from 'react'
import Image from 'next/image'

interface ContentCardProps extends ComponentProps<'div'> {
  title: string
  description: string
  imageUrl: string
  author: {
    name: string
    avatarUrl: string
  }
}

export function ContentCard({ title, description, imageUrl, author, className, ...props }: ContentCardProps) {
  return (
    <div 
      className={`flex flex-col rounded-xl overflow-hidden bg-neutral-800 w-full hover:-translate-y-[3px] transition-all duration-200 cursor-pointer h-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] ${className || ''}`} 
      {...props}
    >
      <div className="aspect-[2/1] relative overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 border-b border-l border-r border-neutral-700/50 rounded-b-xl">
        <h2 className="text-xl font-medium text-neutral-100">{title}</h2>
        <p className="text-md text-neutral-400 line-clamp-2 mt-2">{description}</p>
        <div className="flex items-center gap-2 mt-auto pt-2">
          <Image 
            src={author.avatarUrl} 
            alt={author.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-neutral-400">{author.name}</span>
        </div>
      </div>
    </div>
  )
} 