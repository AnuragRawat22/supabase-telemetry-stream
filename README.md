# supabase-telemetry-stream

Typed ingestion and realtime aggregation utilities for IoT telemetry on Supabase/Postgres.

## Installation

```bash
npm install supabase-telemetry-stream
```

## Quick Start

```typescript
import { SupabaseTelemetryStream } from "supabase-telemetry-stream";

const instance = new SupabaseTelemetryStream();
const result = await instance.run();
console.log(result);
```

## Features

- Zod-validated, typed telemetry event envelopes
- Multi-tenant Postgres schema helpers (RLS-friendly)
- Realtime subscriptions with backpressure-safe batching
- Time-window rollups (avg/min/max/stddev) for charting

## API Reference

### `SupabaseTelemetryStream`

#### Constructor

```typescript
new SupabaseTelemetryStream(options?: SupabaseTelemetryStreamOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<SupabaseTelemetryStreamResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
