/**
 * Configuration options for SupabaseTelemetryStream.
 */
export interface SupabaseTelemetryStreamOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: Zod-validated, typed telemetry event envelopes
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Multi-tenant Postgres schema helpers (RLS-friendly)
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Realtime subscriptions with backpressure-safe batching
   */
  feature3?: Record<string, unknown>;

  /**
   * Configuration for: Time-window rollups (avg/min/max/stddev) for charting
   */
  feature4?: Record<string, unknown>;
}

/**
 * Result returned by SupabaseTelemetryStream operations.
 */
export interface SupabaseTelemetryStreamResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
