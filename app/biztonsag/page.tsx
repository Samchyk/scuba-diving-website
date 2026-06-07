import type { Metadata } from 'next'
import { TopicView } from '@/components/topic-view'
import { topicPages } from '@/lib/content/topics'

const topic = topicPages['biztonsag']

export const metadata: Metadata = {
  title: topic.title,
  description: topic.intro,
}

export default function Page() {
  return (
    <TopicView
      topic={topic}
      related={[
        { label: 'Felszerelés és alapok', href: '/felszereles' },
        { label: 'Technika és tanulás', href: '/technika' },
        { label: 'Fizikai felkészülés', href: '/felkeszules' },
      ]}
    />
  )
}
