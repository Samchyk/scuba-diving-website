import type { Metadata } from 'next'
import { TopicView } from '@/components/topic-view'
import { topicPages } from '@/lib/content/topics'

const topic = topicPages['felszereles']

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
        { label: 'Technika és tanulás', href: '/technika' },
        { label: 'Helyszínek', href: '/helyszinek' },
      ]}
    />
  )
}
