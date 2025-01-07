import { Suspense } from 'react'

import FormAuth from '@/components/autenticacao/FormAuth'
import Processando from '@/components/shared/Processando'

export default function Page() {
  return (
    <Suspense fallback={<Processando />}>
      <FormAuth />
    </Suspense>
  )
}
