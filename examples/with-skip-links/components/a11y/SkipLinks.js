import styles from './SkipLinks.module.css'
import { useSkipLinksContent } from './WithSkipLinks'

export function SkipLinks() {
  const links = useSkipLinksContent()
  return (
    <div className={styles.SkipLinks}>
      {links.map((skipPoint) => (
        <a key={skipPoint.targetId} href={`#${skipPoint.targetId}`}>
          {skipPoint.label}
        </a>
      ))}
    </div>
  )
}
