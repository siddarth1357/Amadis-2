import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">🎯 Feedback App</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-5">
        Share your feedback with us!
      </p>
      
      <Card className="mt-5">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3">Recent Feedback</h3>
          <p className="text-gray-500 dark:text-gray-400">No feedback yet. Be the first!</p>
        </CardContent>
      </Card>
    </div>
  )
}