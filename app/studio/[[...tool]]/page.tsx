/**
 * This route mounts the Sanity Studio inside your Next.js app.
 * It handles all /studio/* routes using a catch‑all segment.
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'

// Re-export metadata and viewport from next-sanity/studio
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}
