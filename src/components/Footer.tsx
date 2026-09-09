import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/content'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'

export function Footer() {
  const onHome = useLocation().pathname === '/'

  return (
    <footer className="bg-footer py-6 font-mono text-[10px] font-normal text-muted-foreground">
      <Container className="flex justify-between max-[640px]:flex-col max-[640px]:gap-2.5 max-[640px]:text-center">
        <Text variant="caption" as="span">
          © {new Date().getFullYear()} {profile.shortName}
        </Text>
        <Text variant="caption" as="span">
          Designed & built with intention.
        </Text>
        {onHome ? (
          <Button variant="link" asChild>
            <a href="#top">Back to top ↑</a>
          </Button>
        ) : (
          <Button variant="link" asChild>
            <Link to="/">Back to home ↑</Link>
          </Button>
        )}
      </Container>
    </footer>
  )
}
