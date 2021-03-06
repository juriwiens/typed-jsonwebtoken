// Type definitions for jsonwebtoken 0.4.0
// Project: https://github.com/auth0/node-jsonwebtoken
// Definitions by: enriched <https://github.com/enriched>

declare namespace jsonwebtoken {

    export interface SignOptions {
        /**
         * Signature algorithm. Could be one of these values :
         * - HS256:    HMAC using SHA-256 hash algorithm
         * - HS384:    HMAC using SHA-384 hash algorithm
         * - HS512:    HMAC using SHA-512 hash algorithm
         * - RS256:    RSASSA using SHA-256 hash algorithm
         * - RS384:    RSASSA using SHA-384 hash algorithm
         * - RS512:    RSASSA using SHA-512 hash algorithm
         * - ES256:    ECDSA using P-256 curve and SHA-256 hash algorithm
         * - ES384:    ECDSA using P-384 curve and SHA-384 hash algorithm
         * - ES512:    ECDSA using P-521 curve and SHA-512 hash algorithm
         * - none:     No digital signature or MAC value included
         */
        algorithm?: string;
        /** @member {string} - Lifetime for the token expressed in a string describing a time span [rauchg/ms](https://github.com/rauchg/ms.js). Eg: `60`, `"2 days"`, `"10h"`, `"7d"` */
        expiresIn?: string | number;
        notBefore?: string | number;
        audience?: string;
        subject?: string;
        issuer?: string;
        jwtid?: string;
        noTimestamp?: boolean;
        headers?: Object;
    }

    export interface VerifyOptions {
        algorithms?: string[];
        audience?: string;
        issuer?: string;
        ignoreExpiration?: boolean;
        ignoreNotBefore?: boolean;
        subject?: string;
    }

    export interface DecodeOptions {
        json?: boolean;
        complete?: boolean;
    }

    export interface VerifyCallback {
        (err: Error, decoded: any): void;
    }

    export interface SignCallback {
        (encoded: string): void;
    }

    /**
     * Sign the given payload into a JSON Web Token string
     * @param {String|Object|Buffer} payload - Payload to sign, could be an literal, buffer or string
     * @param {String|Buffer} secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
     * @param {SignOptions} [options] - Options for the signature
     * @param {Function} callback - Callback to get the encoded token on
     * @returns {string} the signed token
     */
    export function sign(payload: string | Buffer | Object, secretOrPrivateKey: string | Buffer, options: SignOptions): string;
    export function sign(payload: string | Buffer | Object, secretOrPrivateKey: string | Buffer, options: SignOptions, callback?: SignCallback): void;

    /**
     * Synchronously verify given token using a secret or a public key to get a decoded token
     * @param {String} token - JWT string to verify
     * @param {String|Buffer} secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
     * @param {VerifyOptions} [options] - Options for the verification
     * @returns The decoded token.
     */
    function verify(token: string, secretOrPublicKey: string | Buffer, options?: VerifyOptions): any;

    /**
     * Asynchronously verify given token using a secret or a public key to get a decoded token
     * @param {String} token - JWT string to verify
     * @param {String|Buffer} secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
     * @param {VerifyOptions} [options] - Options for the verification
     * @param {Function} callback - Callback to get the decoded token on
     */
    function verify(token: string, secretOrPublicKey: string | Buffer, callback?: VerifyCallback): void;
    function verify(token: string, secretOrPublicKey: string | Buffer, options?: VerifyOptions, callback?: VerifyCallback): void;

    /**
     * Returns the decoded payload without verifying if the signature is valid.
     * @param {String} token - JWT string to decode
     * @returns {Object} The decoded Token
     */
    function decode(token: string): any;
}

export = jsonwebtoken;
