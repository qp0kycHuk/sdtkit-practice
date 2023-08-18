import { Button } from '@features/ui'
import { useState } from 'react'

export function AuthTabs() {
  const [tab, setTab] = useState<'student' | 'admin'>('student')
  return (
    <div className="grid grid-cols-2 rounded-lg  border border-gray border-opacity-20">
      <Button
        onClick={() => setTab('student')}
        className="rounded-e-none"
        variant={tab === 'student' ? 'fill' : 'none'}
        tabIndex={-1}
      >
        Студент
      </Button>
      <Button
        onClick={() => setTab('admin')}
        className="rounded-s-none"
        variant={tab === 'admin' ? 'fill' : 'none'}
        tabIndex={-1}
      >
        Куратор
      </Button>
    </div>
  )
}
