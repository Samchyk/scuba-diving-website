import { HomeHero } from '@/components/home/home-hero'
import { StoryIntro, DepthBand } from '@/components/home/story-sections'
import { PreviewSections } from '@/components/home/preview-sections'
import { BlogPreview } from '@/components/home/blog-preview'

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <StoryIntro />
      <PreviewSections />
      <DepthBand />
      <BlogPreview />
    </main>
  )
}
