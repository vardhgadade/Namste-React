import { createFileRoute } from '@tanstack/react-router'
import { DemoII } from '../Hooks/usememo/demoII'

export const Route = createFileRoute('/useereff')({
  component: usereff,
})

function usereff() {
  return (
    <>
    <DemoII />
    </>
  )
}
