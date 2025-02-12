'use client'

import React from 'react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { 
  BeakerIcon, // Tech & Science
  BanknotesIcon, // Finance
  PaintBrushIcon, // Arts & Culture
  TrophyIcon, // Sports
  FilmIcon // Entertainment
} from '@heroicons/react/24/outline'
import { TabButton } from '@/components/TabButton'
import { useState } from 'react'
import { ContentCard } from '@/components/ContentCard'
import { CARDS, type Category } from '@/data/content'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Category>('Tech & Science')

  // Filter cards by selected category
  const filteredCards = CARDS.filter(card => card.category === selectedTab)

  // Group filtered cards into chunks of 4
  const groupCards = () => {
    const result = [];
    for (let i = 0; i < filteredCards.length; i += 4) {
      const group = filteredCards.slice(i, i + 4);
      result.push(group);
    }
    return result;
  };

  return (
    <main className="relative min-h-screen flex flex-col bg-neutral-900">
      {/* Fixed headers */}
      <div className="fixed w-full top-0 z-10">
        <header className="flex justify-center border-b border-neutral-700 bg-neutral-900">
          <div className="flex w-full max-w-screen-md items-center py-6 px-4 md:px-0">
            <GlobeAltIcon className="mr-2 h-8 w-8" />
            <h1 className="text-3xl font-normal">Discover</h1>
          </div>
        </header>
        <header className="flex justify-center bg-neutral-900/90 backdrop-blur-sm">
          <div className="relative flex w-full max-w-screen-md items-center px-4 md:px-0">
            <div 
              id="tabs-container"
              className="flex gap-2 overflow-x-auto scrollbar-none py-3 pr-12"
            >
              <TabButton 
                icon={BeakerIcon}
                label="Tech & Science"
                isSelected={selectedTab === 'Tech & Science'}
                onClick={() => setSelectedTab('Tech & Science')}
              />
              <TabButton 
                icon={BanknotesIcon} 
                label="Finance" 
                isSelected={selectedTab === 'Finance'}
                onClick={() => setSelectedTab('Finance')}
              />
              <TabButton 
                icon={PaintBrushIcon} 
                label="Arts & Culture" 
                isSelected={selectedTab === 'Arts & Culture'}
                onClick={() => setSelectedTab('Arts & Culture')}
              />
              <TabButton 
                icon={TrophyIcon} 
                label="Sports" 
                isSelected={selectedTab === 'Sports'}
                onClick={() => setSelectedTab('Sports')}
              />
              <TabButton 
                icon={FilmIcon} 
                label="Entertainment" 
                isSelected={selectedTab === 'Entertainment'}
                onClick={() => setSelectedTab('Entertainment')}
              />
            </div>
            {/* <div className="absolute right-4 md:right-0 top-0 bottom-0 flex items-center">
              <div className="absolute right-12 w-12 h-full" />
              <button 
                onClick={scrollTabs}
                className="z-10 p-2 hover:bg-neutral-800 rounded-l"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div> */}
          </div>
        </header>
      </div>
      
      {/* Content area */}
      <div className="pt-[140px] flex-1">
        <div className="max-w-screen-md mx-auto py-6 grid grid-cols-3 gap-4 pl-4 pr-2 md:pl-0">
          {groupCards().map((group, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {/* First card in group is full width */}
              <div className="col-span-3">
                <ContentCard 
                  title={group[0].title}
                  description={group[0].description}
                  imageUrl={group[0].imageUrl}
                  author={group[0].author}
                />
              </div>

              {/* Grid row for the 3 column cards with h-full */}
              <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                {group.slice(1).map((card, index) => (
                  <div key={index} className="h-full">
                    <ContentCard
                      title={card.title}
                      description={card.description}
                      imageUrl={card.imageUrl}
                      author={card.author}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  )
}
