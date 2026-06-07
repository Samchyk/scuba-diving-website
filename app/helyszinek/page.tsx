import type { Metadata } from 'next'
import { TopicView } from '@/components/topic-view'
import { topicPages } from '@/lib/content/topics'

const topic = topicPages['helyszinek']

export const metadata: Metadata = {
  title: topic.title,
  description: topic.intro,
}

export default function Page() {
  return (
    <TopicView
      topic={topic}
      related={[
        { label: 'Biztonság és tudatosság', href: '/biztonsag' },
        { label: 'Érdekességek', href: '/erdekessegek' },
        { label: 'Felszerelés és alapok', href: '/felszereles' },
      ]}
    />
  )
}
