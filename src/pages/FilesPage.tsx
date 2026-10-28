import { useEffect } from 'react'
import { FileText } from 'lucide-react'
import { fileGroups, portfolioFiles } from '@/data/content'
import { DocumentDownload } from '@/components/DocumentDownload'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

export function FilesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <article className="min-h-[70svh] py-[140px] pb-20 max-[640px]:pt-[120px]">
      <Container>
        <Text variant="eyebrow">Documents</Text>
        <Heading variant="page">All files.</Heading>
        <Text variant="projectLead">
          Resumes and certificates in one place, each ready to download.
        </Text>
        {fileGroups.map((group, index) => (
          <section className={index === 0 ? 'mt-14' : 'mt-16'} key={group}>
            <Heading variant="skill" className="mt-0 mb-6">
              {group}
            </Heading>
            <div className="border-t border-border">
              {portfolioFiles
                .filter((file) => file.group === group)
                .map((file) => (
                  <div
                    className="grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-border px-2.5 py-5 max-[640px]:grid-cols-1 max-[640px]:items-start"
                    key={file.id}
                  >
                    <FileText className="text-primary max-[640px]:hidden" size={20} />
                    <div>
                      <Heading variant="repo">{file.label}</Heading>
                      <Text variant="repoBody">{file.detail}</Text>
                    </div>
                    <DocumentDownload
                      className="h-10 px-4 max-[640px]:w-full"
                      href={file.href}
                      fileName={file.fileName}
                      label="Download"
                    />
                  </div>
                ))}
            </div>
          </section>
        ))}
      </Container>
    </article>
  )
}
