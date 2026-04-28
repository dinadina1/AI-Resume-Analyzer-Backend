import IORedis from 'ioredis';
import { env } from './env';
import { logger } from '../utils/logger';

let redisClient: IORedis | null = null;

export function getRedisClient(): IORedis {
  if (redisClient) return redisClient;

  redisClient = new IORedis(env.redis.url, {
    maxRetriesPerRequest: null, // required for BullMQ

    enableReadyCheck: false,

    // 🔥 IMPORTANT FIX
    tls: {},

    retryStrategy: (times: number) => {
      // if (times > 5) {
      //   logger.error('Redis: Max retry attempts reached');
      //   return null;
      // }
      return Math.min(times * 500, 5000);
    },

    reconnectOnError: (err) => {
      const targetError = 'READONLY';
      if (err.message.includes(targetError)) {
        return true;
      }
      return false;
    },
  });

  redisClient.on('connect', () => logger.info('✅ Redis connected'));
  redisClient.on('ready', () => logger.info('🔥 Redis ready'));
  redisClient.on('error', (err) => logger.error('Redis error', { err }));
  redisClient.on('close', () => logger.warn('Redis connection closed'));
  redisClient.on('reconnecting', () => logger.warn('Redis reconnecting...'));

  return redisClient;
}

// import IORedis from 'ioredis';
// import { env } from './env';
// import { logger } from '../utils/logger';

// let redisClient: IORedis | null = null;

// export function getRedisClient(): IORedis {
//   if (redisClient) return redisClient;

//   redisClient = new IORedis(env.redis.url, {
//     maxRetriesPerRequest: null, // Required for BullMQ
//     enableReadyCheck: false,
//     retryStrategy: (times: number) => {
//       if (times > 10) {
//         logger.error('Redis: Max retry attempts reached');
//         return null;
//       }
//       return Math.min(times * 200, 2000);
//     },
//   });

//   redisClient.on('connect', () => logger.info('✅ Redis connected'));
//   redisClient.on('error', (err) => logger.error('Redis error', { err }));
//   redisClient.on('reconnecting', () => logger.warn('Redis reconnecting...'));

//   return redisClient;
// }

export async function disconnectRedis(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
    logger.info('Redis disconnected');
  }
}
