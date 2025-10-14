/* JS Wake Lock API */
/* A browser API to prevent the screen from dimming, sleeping or locking automatically. */

const lock = await navigator.wakeLock.request('screen');// Now the screen will not lock

// ======> To release lock add below line
await lock.release();