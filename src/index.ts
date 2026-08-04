/**
 * supabase-telemetry-stream
 * Typed ingestion and realtime aggregation utilities for IoT telemetry on Supabase/Postgres.
 */

export { SupabaseTelemetryStream } from "./zodvalidated-typed-telemetry-e";
export type { SupabaseTelemetryStreamOptions, SupabaseTelemetryStreamResult } from "./types";
export { SupabaseTelemetryStreamError, ConfigurationError, ValidationError } from "./errors";
