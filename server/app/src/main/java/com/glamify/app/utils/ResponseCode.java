package com.glamify.app.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResponseCode {

    // 1xx: Informational
    CONTINUE(100, "Request received, continuing process"),
    SWITCHING_PROTOCOLS(101, "Switching to another protocol"),
    PROCESSING(102, "Request is being processed"),

    // 2xx: Success
    SUCCESS(200, "The request was successful"),
    FOUND_CONTENT(200, "Data Found"),
    CREATED(201, "The resource was successfully created"),
    ACCEPTED(202, "The request has been accepted for processing"),
    NON_AUTHORITATIVE_INFORMATION(203, "Request successful, but returned data may be from a third party"),
    NO_CONTENT(204, "The request was successful but there is no content to return"),
    RESET_CONTENT(205, "The client should reset the document view"),
    PARTIAL_CONTENT(206, "Partial content returned due to range header"),

    // 3xx: Redirection
    MULTIPLE_CHOICES(300, "There are multiple options for the resource"),
    MOVED_PERMANENTLY(301, "The resource has been permanently moved to a new URL"),
    FOUND(302, "The resource has temporarily moved to a different URL"),
    SEE_OTHER(303, "See another resource to complete the request"),
    NOT_MODIFIED(304, "Resource not modified since last request"),
    TEMPORARY_REDIRECT(307, "Temporarily redirected to another URL"),
    PERMANENT_REDIRECT(308, "Permanently redirected to another URL"),

    // 4xx: Client Errors
    BAD_REQUEST(400, "The server could not understand the request due to invalid syntax"),
    UNAUTHORIZED(401, "Authentication is required and has failed or has not been provided"),
    PAYMENT_REQUIRED(402, "Payment is required to access this resource"),
    FORBIDDEN(403, "You do not have permission to access this resource"),
    NOT_FOUND(404, "The requested resource was not found"),
    METHOD_NOT_ALLOWED(405, "The HTTP method is not supported for this resource"),
    NOT_ACCEPTABLE(406, "The server cannot produce a response matching the request headers"),
    REQUEST_TIMEOUT(408, "The server timed out waiting for the request"),
    CONFLICT(409, "The request could not be completed due to a conflict"),
    GONE(410, "The resource is no longer available"),
    LENGTH_REQUIRED(411, "Content-Length header is required"),
    PRECONDITION_FAILED(412, "Preconditions given in the request headers are not met"),
    PAYLOAD_TOO_LARGE(413, "The request payload is too large"),
    URI_TOO_LONG(414, "The URI requested is too long"),
    UNSUPPORTED_MEDIA_TYPE(415, "The media type is not supported"),
    EXPECTATION_FAILED(417, "The server cannot meet the requirements of the Expect request-header field"),
    UNPROCESSABLE_ENTITY(422, "The server understands the content type but was unable to process it"),
    TOO_MANY_REQUESTS(429, "Too many requests have been sent in a given time"),

    // 5xx: Server Errors
    INTERNAL_SERVER_ERROR(500, "The server encountered an internal error"),
    NOT_IMPLEMENTED(501, "The server does not recognize the request method"),
    BAD_GATEWAY(502, "The server received an invalid response from an upstream server"),
    SERVICE_UNAVAILABLE(503, "The server is currently unavailable"),
    GATEWAY_TIMEOUT(504, "The server didn't receive a timely response from an upstream server"),
    HTTP_VERSION_NOT_SUPPORTED(505, "The HTTP version used is not supported");

    private final int code;
    private final String message;
}
