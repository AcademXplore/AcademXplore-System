"use client"
import { ProjectList } from "@/components/ProjectList/ProjectList"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function Timeline() {
  const client = new QueryClient()
  return(
      <QueryClientProvider client={client}>
        <main className="container">
          <ProjectList/>
        </main>
      </QueryClientProvider>
  )
}