import { createFileRoute, Link, useLocation } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/success')({
  component: SuccessPage,
})

function SuccessPage() {
  const location = useLocation()
  const feedback = (location.state as { feedback?: { name: string; email: string; rating: number; comment: string } } | undefined)?.feedback

  return (
    <div className="p-10 max-w-lg mx-auto text-center">
      <div className="bg-green-50 dark:bg-green-950/30 p-8 rounded-lg border-2 border-green-200 dark:border-green-800">
        <h1 className="text-6xl mb-2">🎉</h1>
        <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">Thank You for Your Feedback!</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          We appreciate you taking the time to share your thoughts.
        </p>

        {feedback && (
          <Card className="mt-5 text-left">
            <CardContent className="p-5">
              <h4 className="font-semibold mb-3">Your Feedback Summary:</h4>
              <p><strong>Name:</strong> {feedback.name}</p>
              <p><strong>Email:</strong> {feedback.email}</p>
              <p><strong>Rating:</strong> {'⭐'.repeat(feedback.rating)}</p>
              <p><strong>Comment:</strong> {feedback.comment}</p>
            </CardContent>
          </Card>
        )}

        <div className="mt-5 flex gap-3 justify-center flex-wrap">
          <Button asChild>
            <Link to="/feedback">Submit More Feedback</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}