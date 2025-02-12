import { GlobeAltIcon } from '@heroicons/react/24/outline'

export function Header() {
  return (
    <div className="sticky top-0 flex w-full justify-center border-b border-neutral-700 bg-neutral-900 px-4 pb-3 md:px-0">
      <div className="flex w-full max-w-screen-md items-center">
        <GlobeAltIcon className="mr-2 h-8 w-8" />
        <h1 className="text-3xl font-normal">Discover</h1>
      </div>
    </div>
  )
} 