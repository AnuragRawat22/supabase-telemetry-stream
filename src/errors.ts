/**
 * Custom error classes for supabase-telemetry-stream.
 */

/**
 * Base error class for all SupabaseTelemetryStream errors.
 */
export class SupabaseTelemetryStreamError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "SUPABASETELEMETRYSTREAM_ERROR") {
    super(message);
    this.name = "SupabaseTelemetryStreamError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends SupabaseTelemetryStreamError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends SupabaseTelemetryStreamError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends SupabaseTelemetryStreamError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
