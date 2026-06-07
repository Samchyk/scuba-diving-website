import type { Metadata } from 'next'
import { TopicView } from '@/components/topic-view'
import { topicPages } from '@/lib/content/topics'

const topic = topicPages['kezdo-utmutato']

export const metadata: Metadata = {
  title: topic.title,
  description: topic.intro,
}

export default function Page() {
  return (
    <TopicView
      topic={topic}
      related={[
        { label: 'A merülés típusai', href: '/merules-tipusai' },
        { label: 'Technika és tanulás', href: '/technika' },
        { label: 'Felszerelés és alapok', href: '/felszereles' },
      ]}
    />
  )
}
