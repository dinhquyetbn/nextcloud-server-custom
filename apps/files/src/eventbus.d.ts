import type { Node } from '@nextcloud/files'

declare module '@nextcloud/event-bus' {
	export interface NextcloudEvents {
		// mapping of 'event name' => 'event type'
		'files:favorites:removed': Node
		'files:favorites:added': Node
		'files:node:renamed': Node
		'nextcloud:unified-search.search': { query: string }
	}
}

export {}
