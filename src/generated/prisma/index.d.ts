
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserCredential
 * 
 */
export type UserCredential = $Result.DefaultSelection<Prisma.$UserCredentialPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model ResumeVersion
 * 
 */
export type ResumeVersion = $Result.DefaultSelection<Prisma.$ResumeVersionPayload>
/**
 * Model AnalysisReport
 * 
 */
export type AnalysisReport = $Result.DefaultSelection<Prisma.$AnalysisReportPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model ResumeSkill
 * 
 */
export type ResumeSkill = $Result.DefaultSelection<Prisma.$ResumeSkillPayload>
/**
 * Model JobDescription
 * 
 */
export type JobDescription = $Result.DefaultSelection<Prisma.$JobDescriptionPayload>
/**
 * Model JdMatch
 * 
 */
export type JdMatch = $Result.DefaultSelection<Prisma.$JdMatchPayload>
/**
 * Model Suggestion
 * 
 */
export type Suggestion = $Result.DefaultSelection<Prisma.$SuggestionPayload>
/**
 * Model UserLlmConfig
 * 
 */
export type UserLlmConfig = $Result.DefaultSelection<Prisma.$UserLlmConfigPayload>
/**
 * Model LlmUsageLog
 * 
 */
export type LlmUsageLog = $Result.DefaultSelection<Prisma.$LlmUsageLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ResumeStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ResumeStatus = (typeof ResumeStatus)[keyof typeof ResumeStatus]


export const AnalysisStatus: {
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus]


export const SuggestionSource: {
  RULE_BASED: 'RULE_BASED',
  AI: 'AI'
};

export type SuggestionSource = (typeof SuggestionSource)[keyof typeof SuggestionSource]


export const LlmProvider: {
  OPENAI: 'OPENAI',
  GEMINI: 'GEMINI',
  ANTHROPIC: 'ANTHROPIC',
  OLLAMA: 'OLLAMA',
  MISTRAL: 'MISTRAL',
  GROQ: 'GROQ'
};

export type LlmProvider = (typeof LlmProvider)[keyof typeof LlmProvider]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ResumeStatus = $Enums.ResumeStatus

export const ResumeStatus: typeof $Enums.ResumeStatus

export type AnalysisStatus = $Enums.AnalysisStatus

export const AnalysisStatus: typeof $Enums.AnalysisStatus

export type SuggestionSource = $Enums.SuggestionSource

export const SuggestionSource: typeof $Enums.SuggestionSource

export type LlmProvider = $Enums.LlmProvider

export const LlmProvider: typeof $Enums.LlmProvider

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userCredential`: Exposes CRUD operations for the **UserCredential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCredentials
    * const userCredentials = await prisma.userCredential.findMany()
    * ```
    */
  get userCredential(): Prisma.UserCredentialDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs>;

  /**
   * `prisma.resumeVersion`: Exposes CRUD operations for the **ResumeVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumeVersions
    * const resumeVersions = await prisma.resumeVersion.findMany()
    * ```
    */
  get resumeVersion(): Prisma.ResumeVersionDelegate<ExtArgs>;

  /**
   * `prisma.analysisReport`: Exposes CRUD operations for the **AnalysisReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisReports
    * const analysisReports = await prisma.analysisReport.findMany()
    * ```
    */
  get analysisReport(): Prisma.AnalysisReportDelegate<ExtArgs>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs>;

  /**
   * `prisma.resumeSkill`: Exposes CRUD operations for the **ResumeSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumeSkills
    * const resumeSkills = await prisma.resumeSkill.findMany()
    * ```
    */
  get resumeSkill(): Prisma.ResumeSkillDelegate<ExtArgs>;

  /**
   * `prisma.jobDescription`: Exposes CRUD operations for the **JobDescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobDescriptions
    * const jobDescriptions = await prisma.jobDescription.findMany()
    * ```
    */
  get jobDescription(): Prisma.JobDescriptionDelegate<ExtArgs>;

  /**
   * `prisma.jdMatch`: Exposes CRUD operations for the **JdMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JdMatches
    * const jdMatches = await prisma.jdMatch.findMany()
    * ```
    */
  get jdMatch(): Prisma.JdMatchDelegate<ExtArgs>;

  /**
   * `prisma.suggestion`: Exposes CRUD operations for the **Suggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suggestions
    * const suggestions = await prisma.suggestion.findMany()
    * ```
    */
  get suggestion(): Prisma.SuggestionDelegate<ExtArgs>;

  /**
   * `prisma.userLlmConfig`: Exposes CRUD operations for the **UserLlmConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLlmConfigs
    * const userLlmConfigs = await prisma.userLlmConfig.findMany()
    * ```
    */
  get userLlmConfig(): Prisma.UserLlmConfigDelegate<ExtArgs>;

  /**
   * `prisma.llmUsageLog`: Exposes CRUD operations for the **LlmUsageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LlmUsageLogs
    * const llmUsageLogs = await prisma.llmUsageLog.findMany()
    * ```
    */
  get llmUsageLog(): Prisma.LlmUsageLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserCredential: 'UserCredential',
    Session: 'Session',
    Resume: 'Resume',
    ResumeVersion: 'ResumeVersion',
    AnalysisReport: 'AnalysisReport',
    Skill: 'Skill',
    ResumeSkill: 'ResumeSkill',
    JobDescription: 'JobDescription',
    JdMatch: 'JdMatch',
    Suggestion: 'Suggestion',
    UserLlmConfig: 'UserLlmConfig',
    LlmUsageLog: 'LlmUsageLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "userCredential" | "session" | "resume" | "resumeVersion" | "analysisReport" | "skill" | "resumeSkill" | "jobDescription" | "jdMatch" | "suggestion" | "userLlmConfig" | "llmUsageLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserCredential: {
        payload: Prisma.$UserCredentialPayload<ExtArgs>
        fields: Prisma.UserCredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          findFirst: {
            args: Prisma.UserCredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          findMany: {
            args: Prisma.UserCredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>[]
          }
          create: {
            args: Prisma.UserCredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          createMany: {
            args: Prisma.UserCredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>[]
          }
          delete: {
            args: Prisma.UserCredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          update: {
            args: Prisma.UserCredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          deleteMany: {
            args: Prisma.UserCredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          aggregate: {
            args: Prisma.UserCredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCredential>
          }
          groupBy: {
            args: Prisma.UserCredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCredentialCountArgs<ExtArgs>
            result: $Utils.Optional<UserCredentialCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      ResumeVersion: {
        payload: Prisma.$ResumeVersionPayload<ExtArgs>
        fields: Prisma.ResumeVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          findFirst: {
            args: Prisma.ResumeVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          findMany: {
            args: Prisma.ResumeVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>[]
          }
          create: {
            args: Prisma.ResumeVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          createMany: {
            args: Prisma.ResumeVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>[]
          }
          delete: {
            args: Prisma.ResumeVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          update: {
            args: Prisma.ResumeVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          deleteMany: {
            args: Prisma.ResumeVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResumeVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          aggregate: {
            args: Prisma.ResumeVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumeVersion>
          }
          groupBy: {
            args: Prisma.ResumeVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeVersionCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeVersionCountAggregateOutputType> | number
          }
        }
      }
      AnalysisReport: {
        payload: Prisma.$AnalysisReportPayload<ExtArgs>
        fields: Prisma.AnalysisReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          findFirst: {
            args: Prisma.AnalysisReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          findMany: {
            args: Prisma.AnalysisReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>[]
          }
          create: {
            args: Prisma.AnalysisReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          createMany: {
            args: Prisma.AnalysisReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>[]
          }
          delete: {
            args: Prisma.AnalysisReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          update: {
            args: Prisma.AnalysisReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalysisReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          aggregate: {
            args: Prisma.AnalysisReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisReport>
          }
          groupBy: {
            args: Prisma.AnalysisReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisReportCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisReportCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      ResumeSkill: {
        payload: Prisma.$ResumeSkillPayload<ExtArgs>
        fields: Prisma.ResumeSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload>
          }
          findFirst: {
            args: Prisma.ResumeSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload>
          }
          findMany: {
            args: Prisma.ResumeSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload>[]
          }
          create: {
            args: Prisma.ResumeSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload>
          }
          createMany: {
            args: Prisma.ResumeSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload>[]
          }
          delete: {
            args: Prisma.ResumeSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload>
          }
          update: {
            args: Prisma.ResumeSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload>
          }
          deleteMany: {
            args: Prisma.ResumeSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResumeSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSkillPayload>
          }
          aggregate: {
            args: Prisma.ResumeSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumeSkill>
          }
          groupBy: {
            args: Prisma.ResumeSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeSkillCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeSkillCountAggregateOutputType> | number
          }
        }
      }
      JobDescription: {
        payload: Prisma.$JobDescriptionPayload<ExtArgs>
        fields: Prisma.JobDescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobDescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobDescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload>
          }
          findFirst: {
            args: Prisma.JobDescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobDescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload>
          }
          findMany: {
            args: Prisma.JobDescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload>[]
          }
          create: {
            args: Prisma.JobDescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload>
          }
          createMany: {
            args: Prisma.JobDescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobDescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload>[]
          }
          delete: {
            args: Prisma.JobDescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload>
          }
          update: {
            args: Prisma.JobDescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload>
          }
          deleteMany: {
            args: Prisma.JobDescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobDescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobDescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobDescriptionPayload>
          }
          aggregate: {
            args: Prisma.JobDescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobDescription>
          }
          groupBy: {
            args: Prisma.JobDescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobDescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobDescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<JobDescriptionCountAggregateOutputType> | number
          }
        }
      }
      JdMatch: {
        payload: Prisma.$JdMatchPayload<ExtArgs>
        fields: Prisma.JdMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JdMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JdMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload>
          }
          findFirst: {
            args: Prisma.JdMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JdMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload>
          }
          findMany: {
            args: Prisma.JdMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload>[]
          }
          create: {
            args: Prisma.JdMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload>
          }
          createMany: {
            args: Prisma.JdMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JdMatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload>[]
          }
          delete: {
            args: Prisma.JdMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload>
          }
          update: {
            args: Prisma.JdMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload>
          }
          deleteMany: {
            args: Prisma.JdMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JdMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JdMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JdMatchPayload>
          }
          aggregate: {
            args: Prisma.JdMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJdMatch>
          }
          groupBy: {
            args: Prisma.JdMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<JdMatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.JdMatchCountArgs<ExtArgs>
            result: $Utils.Optional<JdMatchCountAggregateOutputType> | number
          }
        }
      }
      Suggestion: {
        payload: Prisma.$SuggestionPayload<ExtArgs>
        fields: Prisma.SuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findFirst: {
            args: Prisma.SuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findMany: {
            args: Prisma.SuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          create: {
            args: Prisma.SuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          createMany: {
            args: Prisma.SuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          delete: {
            args: Prisma.SuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          update: {
            args: Prisma.SuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          deleteMany: {
            args: Prisma.SuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          aggregate: {
            args: Prisma.SuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuggestion>
          }
          groupBy: {
            args: Prisma.SuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<SuggestionCountAggregateOutputType> | number
          }
        }
      }
      UserLlmConfig: {
        payload: Prisma.$UserLlmConfigPayload<ExtArgs>
        fields: Prisma.UserLlmConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLlmConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLlmConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload>
          }
          findFirst: {
            args: Prisma.UserLlmConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLlmConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload>
          }
          findMany: {
            args: Prisma.UserLlmConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload>[]
          }
          create: {
            args: Prisma.UserLlmConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload>
          }
          createMany: {
            args: Prisma.UserLlmConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLlmConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload>[]
          }
          delete: {
            args: Prisma.UserLlmConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload>
          }
          update: {
            args: Prisma.UserLlmConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload>
          }
          deleteMany: {
            args: Prisma.UserLlmConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLlmConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLlmConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLlmConfigPayload>
          }
          aggregate: {
            args: Prisma.UserLlmConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLlmConfig>
          }
          groupBy: {
            args: Prisma.UserLlmConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLlmConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLlmConfigCountArgs<ExtArgs>
            result: $Utils.Optional<UserLlmConfigCountAggregateOutputType> | number
          }
        }
      }
      LlmUsageLog: {
        payload: Prisma.$LlmUsageLogPayload<ExtArgs>
        fields: Prisma.LlmUsageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LlmUsageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LlmUsageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload>
          }
          findFirst: {
            args: Prisma.LlmUsageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LlmUsageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload>
          }
          findMany: {
            args: Prisma.LlmUsageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload>[]
          }
          create: {
            args: Prisma.LlmUsageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload>
          }
          createMany: {
            args: Prisma.LlmUsageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LlmUsageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload>[]
          }
          delete: {
            args: Prisma.LlmUsageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload>
          }
          update: {
            args: Prisma.LlmUsageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload>
          }
          deleteMany: {
            args: Prisma.LlmUsageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LlmUsageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LlmUsageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmUsageLogPayload>
          }
          aggregate: {
            args: Prisma.LlmUsageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLlmUsageLog>
          }
          groupBy: {
            args: Prisma.LlmUsageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LlmUsageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LlmUsageLogCountArgs<ExtArgs>
            result: $Utils.Optional<LlmUsageLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    resumes: number
    jobDescriptions: number
    llmUsageLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    resumes?: boolean | UserCountOutputTypeCountResumesArgs
    jobDescriptions?: boolean | UserCountOutputTypeCountJobDescriptionsArgs
    llmUsageLogs?: boolean | UserCountOutputTypeCountLlmUsageLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobDescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobDescriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLlmUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LlmUsageLogWhereInput
  }


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    versions: number
    analysisReports: number
    resumeSkills: number
    jdMatches: number
    suggestions: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | ResumeCountOutputTypeCountVersionsArgs
    analysisReports?: boolean | ResumeCountOutputTypeCountAnalysisReportsArgs
    resumeSkills?: boolean | ResumeCountOutputTypeCountResumeSkillsArgs
    jdMatches?: boolean | ResumeCountOutputTypeCountJdMatchesArgs
    suggestions?: boolean | ResumeCountOutputTypeCountSuggestionsArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeVersionWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountAnalysisReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisReportWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountResumeSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeSkillWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountJdMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JdMatchWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
  }


  /**
   * Count Type AnalysisReportCountOutputType
   */

  export type AnalysisReportCountOutputType = {
    suggestions: number
  }

  export type AnalysisReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestions?: boolean | AnalysisReportCountOutputTypeCountSuggestionsArgs
  }

  // Custom InputTypes
  /**
   * AnalysisReportCountOutputType without action
   */
  export type AnalysisReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReportCountOutputType
     */
    select?: AnalysisReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalysisReportCountOutputType without action
   */
  export type AnalysisReportCountOutputTypeCountSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    resumeSkills: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumeSkills?: boolean | SkillCountOutputTypeCountResumeSkillsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountResumeSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeSkillWhereInput
  }


  /**
   * Count Type JobDescriptionCountOutputType
   */

  export type JobDescriptionCountOutputType = {
    matches: number
  }

  export type JobDescriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | JobDescriptionCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * JobDescriptionCountOutputType without action
   */
  export type JobDescriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescriptionCountOutputType
     */
    select?: JobDescriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobDescriptionCountOutputType without action
   */
  export type JobDescriptionCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JdMatchWhereInput
  }


  /**
   * Count Type UserLlmConfigCountOutputType
   */

  export type UserLlmConfigCountOutputType = {
    usageLogs: number
  }

  export type UserLlmConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usageLogs?: boolean | UserLlmConfigCountOutputTypeCountUsageLogsArgs
  }

  // Custom InputTypes
  /**
   * UserLlmConfigCountOutputType without action
   */
  export type UserLlmConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfigCountOutputType
     */
    select?: UserLlmConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserLlmConfigCountOutputType without action
   */
  export type UserLlmConfigCountOutputTypeCountUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LlmUsageLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    resumes?: boolean | User$resumesArgs<ExtArgs>
    jobDescriptions?: boolean | User$jobDescriptionsArgs<ExtArgs>
    llmConfig?: boolean | User$llmConfigArgs<ExtArgs>
    llmUsageLogs?: boolean | User$llmUsageLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    resumes?: boolean | User$resumesArgs<ExtArgs>
    jobDescriptions?: boolean | User$jobDescriptionsArgs<ExtArgs>
    llmConfig?: boolean | User$llmConfigArgs<ExtArgs>
    llmUsageLogs?: boolean | User$llmUsageLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      credentials: Prisma.$UserCredentialPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      resumes: Prisma.$ResumePayload<ExtArgs>[]
      jobDescriptions: Prisma.$JobDescriptionPayload<ExtArgs>[]
      llmConfig: Prisma.$UserLlmConfigPayload<ExtArgs> | null
      llmUsageLogs: Prisma.$LlmUsageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credentials<T extends User$credentialsArgs<ExtArgs> = {}>(args?: Subset<T, User$credentialsArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    resumes<T extends User$resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany"> | Null>
    jobDescriptions<T extends User$jobDescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobDescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "findMany"> | Null>
    llmConfig<T extends User$llmConfigArgs<ExtArgs> = {}>(args?: Subset<T, User$llmConfigArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    llmUsageLogs<T extends User$llmUsageLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$llmUsageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.credentials
   */
  export type User$credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    where?: UserCredentialWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.resumes
   */
  export type User$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * User.jobDescriptions
   */
  export type User$jobDescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    where?: JobDescriptionWhereInput
    orderBy?: JobDescriptionOrderByWithRelationInput | JobDescriptionOrderByWithRelationInput[]
    cursor?: JobDescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobDescriptionScalarFieldEnum | JobDescriptionScalarFieldEnum[]
  }

  /**
   * User.llmConfig
   */
  export type User$llmConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    where?: UserLlmConfigWhereInput
  }

  /**
   * User.llmUsageLogs
   */
  export type User$llmUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    where?: LlmUsageLogWhereInput
    orderBy?: LlmUsageLogOrderByWithRelationInput | LlmUsageLogOrderByWithRelationInput[]
    cursor?: LlmUsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LlmUsageLogScalarFieldEnum | LlmUsageLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserCredential
   */

  export type AggregateUserCredential = {
    _count: UserCredentialCountAggregateOutputType | null
    _min: UserCredentialMinAggregateOutputType | null
    _max: UserCredentialMaxAggregateOutputType | null
  }

  export type UserCredentialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCredentialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCredentialCountAggregateOutputType = {
    id: number
    userId: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCredentialMinAggregateInputType = {
    id?: true
    userId?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCredentialMaxAggregateInputType = {
    id?: true
    userId?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCredentialCountAggregateInputType = {
    id?: true
    userId?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCredential to aggregate.
     */
    where?: UserCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCredentials to fetch.
     */
    orderBy?: UserCredentialOrderByWithRelationInput | UserCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCredentials
    **/
    _count?: true | UserCredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCredentialMaxAggregateInputType
  }

  export type GetUserCredentialAggregateType<T extends UserCredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCredential[P]>
      : GetScalarType<T[P], AggregateUserCredential[P]>
  }




  export type UserCredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCredentialWhereInput
    orderBy?: UserCredentialOrderByWithAggregationInput | UserCredentialOrderByWithAggregationInput[]
    by: UserCredentialScalarFieldEnum[] | UserCredentialScalarFieldEnum
    having?: UserCredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCredentialCountAggregateInputType | true
    _min?: UserCredentialMinAggregateInputType
    _max?: UserCredentialMaxAggregateInputType
  }

  export type UserCredentialGroupByOutputType = {
    id: string
    userId: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCredentialCountAggregateOutputType | null
    _min: UserCredentialMinAggregateOutputType | null
    _max: UserCredentialMaxAggregateOutputType | null
  }

  type GetUserCredentialGroupByPayload<T extends UserCredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCredentialGroupByOutputType[P]>
            : GetScalarType<T[P], UserCredentialGroupByOutputType[P]>
        }
      >
    >


  export type UserCredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCredential"]>

  export type UserCredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCredential"]>

  export type UserCredentialSelectScalar = {
    id?: boolean
    userId?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCredentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCredentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserCredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCredential"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCredential"]>
    composites: {}
  }

  type UserCredentialGetPayload<S extends boolean | null | undefined | UserCredentialDefaultArgs> = $Result.GetResult<Prisma.$UserCredentialPayload, S>

  type UserCredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCredentialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCredentialCountAggregateInputType | true
    }

  export interface UserCredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCredential'], meta: { name: 'UserCredential' } }
    /**
     * Find zero or one UserCredential that matches the filter.
     * @param {UserCredentialFindUniqueArgs} args - Arguments to find a UserCredential
     * @example
     * // Get one UserCredential
     * const userCredential = await prisma.userCredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCredentialFindUniqueArgs>(args: SelectSubset<T, UserCredentialFindUniqueArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserCredential that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserCredentialFindUniqueOrThrowArgs} args - Arguments to find a UserCredential
     * @example
     * // Get one UserCredential
     * const userCredential = await prisma.userCredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserCredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialFindFirstArgs} args - Arguments to find a UserCredential
     * @example
     * // Get one UserCredential
     * const userCredential = await prisma.userCredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCredentialFindFirstArgs>(args?: SelectSubset<T, UserCredentialFindFirstArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserCredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialFindFirstOrThrowArgs} args - Arguments to find a UserCredential
     * @example
     * // Get one UserCredential
     * const userCredential = await prisma.userCredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCredentials
     * const userCredentials = await prisma.userCredential.findMany()
     * 
     * // Get first 10 UserCredentials
     * const userCredentials = await prisma.userCredential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCredentialWithIdOnly = await prisma.userCredential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCredentialFindManyArgs>(args?: SelectSubset<T, UserCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserCredential.
     * @param {UserCredentialCreateArgs} args - Arguments to create a UserCredential.
     * @example
     * // Create one UserCredential
     * const UserCredential = await prisma.userCredential.create({
     *   data: {
     *     // ... data to create a UserCredential
     *   }
     * })
     * 
     */
    create<T extends UserCredentialCreateArgs>(args: SelectSubset<T, UserCredentialCreateArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserCredentials.
     * @param {UserCredentialCreateManyArgs} args - Arguments to create many UserCredentials.
     * @example
     * // Create many UserCredentials
     * const userCredential = await prisma.userCredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCredentialCreateManyArgs>(args?: SelectSubset<T, UserCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCredentials and returns the data saved in the database.
     * @param {UserCredentialCreateManyAndReturnArgs} args - Arguments to create many UserCredentials.
     * @example
     * // Create many UserCredentials
     * const userCredential = await prisma.userCredential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCredentials and only return the `id`
     * const userCredentialWithIdOnly = await prisma.userCredential.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserCredential.
     * @param {UserCredentialDeleteArgs} args - Arguments to delete one UserCredential.
     * @example
     * // Delete one UserCredential
     * const UserCredential = await prisma.userCredential.delete({
     *   where: {
     *     // ... filter to delete one UserCredential
     *   }
     * })
     * 
     */
    delete<T extends UserCredentialDeleteArgs>(args: SelectSubset<T, UserCredentialDeleteArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserCredential.
     * @param {UserCredentialUpdateArgs} args - Arguments to update one UserCredential.
     * @example
     * // Update one UserCredential
     * const userCredential = await prisma.userCredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCredentialUpdateArgs>(args: SelectSubset<T, UserCredentialUpdateArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserCredentials.
     * @param {UserCredentialDeleteManyArgs} args - Arguments to filter UserCredentials to delete.
     * @example
     * // Delete a few UserCredentials
     * const { count } = await prisma.userCredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCredentialDeleteManyArgs>(args?: SelectSubset<T, UserCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCredentials
     * const userCredential = await prisma.userCredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCredentialUpdateManyArgs>(args: SelectSubset<T, UserCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCredential.
     * @param {UserCredentialUpsertArgs} args - Arguments to update or create a UserCredential.
     * @example
     * // Update or create a UserCredential
     * const userCredential = await prisma.userCredential.upsert({
     *   create: {
     *     // ... data to create a UserCredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCredential we want to update
     *   }
     * })
     */
    upsert<T extends UserCredentialUpsertArgs>(args: SelectSubset<T, UserCredentialUpsertArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialCountArgs} args - Arguments to filter UserCredentials to count.
     * @example
     * // Count the number of UserCredentials
     * const count = await prisma.userCredential.count({
     *   where: {
     *     // ... the filter for the UserCredentials we want to count
     *   }
     * })
    **/
    count<T extends UserCredentialCountArgs>(
      args?: Subset<T, UserCredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCredentialAggregateArgs>(args: Subset<T, UserCredentialAggregateArgs>): Prisma.PrismaPromise<GetUserCredentialAggregateType<T>>

    /**
     * Group by UserCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCredentialGroupByArgs['orderBy'] }
        : { orderBy?: UserCredentialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCredential model
   */
  readonly fields: UserCredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCredential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCredential model
   */ 
  interface UserCredentialFieldRefs {
    readonly id: FieldRef<"UserCredential", 'String'>
    readonly userId: FieldRef<"UserCredential", 'String'>
    readonly passwordHash: FieldRef<"UserCredential", 'String'>
    readonly createdAt: FieldRef<"UserCredential", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCredential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCredential findUnique
   */
  export type UserCredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredential to fetch.
     */
    where: UserCredentialWhereUniqueInput
  }

  /**
   * UserCredential findUniqueOrThrow
   */
  export type UserCredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredential to fetch.
     */
    where: UserCredentialWhereUniqueInput
  }

  /**
   * UserCredential findFirst
   */
  export type UserCredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredential to fetch.
     */
    where?: UserCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCredentials to fetch.
     */
    orderBy?: UserCredentialOrderByWithRelationInput | UserCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCredentials.
     */
    cursor?: UserCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCredentials.
     */
    distinct?: UserCredentialScalarFieldEnum | UserCredentialScalarFieldEnum[]
  }

  /**
   * UserCredential findFirstOrThrow
   */
  export type UserCredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredential to fetch.
     */
    where?: UserCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCredentials to fetch.
     */
    orderBy?: UserCredentialOrderByWithRelationInput | UserCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCredentials.
     */
    cursor?: UserCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCredentials.
     */
    distinct?: UserCredentialScalarFieldEnum | UserCredentialScalarFieldEnum[]
  }

  /**
   * UserCredential findMany
   */
  export type UserCredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredentials to fetch.
     */
    where?: UserCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCredentials to fetch.
     */
    orderBy?: UserCredentialOrderByWithRelationInput | UserCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCredentials.
     */
    cursor?: UserCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCredentials.
     */
    skip?: number
    distinct?: UserCredentialScalarFieldEnum | UserCredentialScalarFieldEnum[]
  }

  /**
   * UserCredential create
   */
  export type UserCredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCredential.
     */
    data: XOR<UserCredentialCreateInput, UserCredentialUncheckedCreateInput>
  }

  /**
   * UserCredential createMany
   */
  export type UserCredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCredentials.
     */
    data: UserCredentialCreateManyInput | UserCredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCredential createManyAndReturn
   */
  export type UserCredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserCredentials.
     */
    data: UserCredentialCreateManyInput | UserCredentialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCredential update
   */
  export type UserCredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCredential.
     */
    data: XOR<UserCredentialUpdateInput, UserCredentialUncheckedUpdateInput>
    /**
     * Choose, which UserCredential to update.
     */
    where: UserCredentialWhereUniqueInput
  }

  /**
   * UserCredential updateMany
   */
  export type UserCredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCredentials.
     */
    data: XOR<UserCredentialUpdateManyMutationInput, UserCredentialUncheckedUpdateManyInput>
    /**
     * Filter which UserCredentials to update
     */
    where?: UserCredentialWhereInput
  }

  /**
   * UserCredential upsert
   */
  export type UserCredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCredential to update in case it exists.
     */
    where: UserCredentialWhereUniqueInput
    /**
     * In case the UserCredential found by the `where` argument doesn't exist, create a new UserCredential with this data.
     */
    create: XOR<UserCredentialCreateInput, UserCredentialUncheckedCreateInput>
    /**
     * In case the UserCredential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCredentialUpdateInput, UserCredentialUncheckedUpdateInput>
  }

  /**
   * UserCredential delete
   */
  export type UserCredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter which UserCredential to delete.
     */
    where: UserCredentialWhereUniqueInput
  }

  /**
   * UserCredential deleteMany
   */
  export type UserCredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCredentials to delete
     */
    where?: UserCredentialWhereInput
  }

  /**
   * UserCredential without action
   */
  export type UserCredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    refreshToken: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    refreshToken: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      refreshToken: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly refreshToken: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type ResumeSumAggregateOutputType = {
    fileSize: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    originalName: string | null
    fileName: string | null
    filePath: string | null
    mimeType: string | null
    fileSize: number | null
    status: $Enums.ResumeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    originalName: string | null
    fileName: string | null
    filePath: string | null
    mimeType: string | null
    fileSize: number | null
    status: $Enums.ResumeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    userId: number
    originalName: number
    fileName: number
    filePath: number
    mimeType: number
    fileSize: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    fileSize?: true
  }

  export type ResumeSumAggregateInputType = {
    fileSize?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    userId?: true
    originalName?: true
    fileName?: true
    filePath?: true
    mimeType?: true
    fileSize?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    userId?: true
    originalName?: true
    fileName?: true
    filePath?: true
    mimeType?: true
    fileSize?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    userId?: true
    originalName?: true
    fileName?: true
    filePath?: true
    mimeType?: true
    fileSize?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    userId: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status: $Enums.ResumeStatus
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalName?: boolean
    fileName?: boolean
    filePath?: boolean
    mimeType?: boolean
    fileSize?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Resume$versionsArgs<ExtArgs>
    analysisReports?: boolean | Resume$analysisReportsArgs<ExtArgs>
    resumeSkills?: boolean | Resume$resumeSkillsArgs<ExtArgs>
    jdMatches?: boolean | Resume$jdMatchesArgs<ExtArgs>
    suggestions?: boolean | Resume$suggestionsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalName?: boolean
    fileName?: boolean
    filePath?: boolean
    mimeType?: boolean
    fileSize?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    userId?: boolean
    originalName?: boolean
    fileName?: boolean
    filePath?: boolean
    mimeType?: boolean
    fileSize?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Resume$versionsArgs<ExtArgs>
    analysisReports?: boolean | Resume$analysisReportsArgs<ExtArgs>
    resumeSkills?: boolean | Resume$resumeSkillsArgs<ExtArgs>
    jdMatches?: boolean | Resume$jdMatchesArgs<ExtArgs>
    suggestions?: boolean | Resume$suggestionsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      versions: Prisma.$ResumeVersionPayload<ExtArgs>[]
      analysisReports: Prisma.$AnalysisReportPayload<ExtArgs>[]
      resumeSkills: Prisma.$ResumeSkillPayload<ExtArgs>[]
      jdMatches: Prisma.$JdMatchPayload<ExtArgs>[]
      suggestions: Prisma.$SuggestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      originalName: string
      fileName: string
      filePath: string
      mimeType: string
      fileSize: number
      status: $Enums.ResumeStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    versions<T extends Resume$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findMany"> | Null>
    analysisReports<T extends Resume$analysisReportsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$analysisReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findMany"> | Null>
    resumeSkills<T extends Resume$resumeSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$resumeSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findMany"> | Null>
    jdMatches<T extends Resume$jdMatchesArgs<ExtArgs> = {}>(args?: Subset<T, Resume$jdMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "findMany"> | Null>
    suggestions<T extends Resume$suggestionsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$suggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */ 
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly originalName: FieldRef<"Resume", 'String'>
    readonly fileName: FieldRef<"Resume", 'String'>
    readonly filePath: FieldRef<"Resume", 'String'>
    readonly mimeType: FieldRef<"Resume", 'String'>
    readonly fileSize: FieldRef<"Resume", 'Int'>
    readonly status: FieldRef<"Resume", 'ResumeStatus'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
  }

  /**
   * Resume.versions
   */
  export type Resume$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    where?: ResumeVersionWhereInput
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    cursor?: ResumeVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeVersionScalarFieldEnum | ResumeVersionScalarFieldEnum[]
  }

  /**
   * Resume.analysisReports
   */
  export type Resume$analysisReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    where?: AnalysisReportWhereInput
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    cursor?: AnalysisReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * Resume.resumeSkills
   */
  export type Resume$resumeSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    where?: ResumeSkillWhereInput
    orderBy?: ResumeSkillOrderByWithRelationInput | ResumeSkillOrderByWithRelationInput[]
    cursor?: ResumeSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeSkillScalarFieldEnum | ResumeSkillScalarFieldEnum[]
  }

  /**
   * Resume.jdMatches
   */
  export type Resume$jdMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    where?: JdMatchWhereInput
    orderBy?: JdMatchOrderByWithRelationInput | JdMatchOrderByWithRelationInput[]
    cursor?: JdMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JdMatchScalarFieldEnum | JdMatchScalarFieldEnum[]
  }

  /**
   * Resume.suggestions
   */
  export type Resume$suggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    cursor?: SuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model ResumeVersion
   */

  export type AggregateResumeVersion = {
    _count: ResumeVersionCountAggregateOutputType | null
    _avg: ResumeVersionAvgAggregateOutputType | null
    _sum: ResumeVersionSumAggregateOutputType | null
    _min: ResumeVersionMinAggregateOutputType | null
    _max: ResumeVersionMaxAggregateOutputType | null
  }

  export type ResumeVersionAvgAggregateOutputType = {
    version: number | null
  }

  export type ResumeVersionSumAggregateOutputType = {
    version: number | null
  }

  export type ResumeVersionMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    version: number | null
    fileName: string | null
    filePath: string | null
    createdAt: Date | null
  }

  export type ResumeVersionMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    version: number | null
    fileName: string | null
    filePath: string | null
    createdAt: Date | null
  }

  export type ResumeVersionCountAggregateOutputType = {
    id: number
    resumeId: number
    version: number
    fileName: number
    filePath: number
    createdAt: number
    _all: number
  }


  export type ResumeVersionAvgAggregateInputType = {
    version?: true
  }

  export type ResumeVersionSumAggregateInputType = {
    version?: true
  }

  export type ResumeVersionMinAggregateInputType = {
    id?: true
    resumeId?: true
    version?: true
    fileName?: true
    filePath?: true
    createdAt?: true
  }

  export type ResumeVersionMaxAggregateInputType = {
    id?: true
    resumeId?: true
    version?: true
    fileName?: true
    filePath?: true
    createdAt?: true
  }

  export type ResumeVersionCountAggregateInputType = {
    id?: true
    resumeId?: true
    version?: true
    fileName?: true
    filePath?: true
    createdAt?: true
    _all?: true
  }

  export type ResumeVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeVersion to aggregate.
     */
    where?: ResumeVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeVersions to fetch.
     */
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumeVersions
    **/
    _count?: true | ResumeVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeVersionMaxAggregateInputType
  }

  export type GetResumeVersionAggregateType<T extends ResumeVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateResumeVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumeVersion[P]>
      : GetScalarType<T[P], AggregateResumeVersion[P]>
  }




  export type ResumeVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeVersionWhereInput
    orderBy?: ResumeVersionOrderByWithAggregationInput | ResumeVersionOrderByWithAggregationInput[]
    by: ResumeVersionScalarFieldEnum[] | ResumeVersionScalarFieldEnum
    having?: ResumeVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeVersionCountAggregateInputType | true
    _avg?: ResumeVersionAvgAggregateInputType
    _sum?: ResumeVersionSumAggregateInputType
    _min?: ResumeVersionMinAggregateInputType
    _max?: ResumeVersionMaxAggregateInputType
  }

  export type ResumeVersionGroupByOutputType = {
    id: string
    resumeId: string
    version: number
    fileName: string
    filePath: string
    createdAt: Date
    _count: ResumeVersionCountAggregateOutputType | null
    _avg: ResumeVersionAvgAggregateOutputType | null
    _sum: ResumeVersionSumAggregateOutputType | null
    _min: ResumeVersionMinAggregateOutputType | null
    _max: ResumeVersionMaxAggregateOutputType | null
  }

  type GetResumeVersionGroupByPayload<T extends ResumeVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeVersionGroupByOutputType[P]>
        }
      >
    >


  export type ResumeVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    version?: boolean
    fileName?: boolean
    filePath?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeVersion"]>

  export type ResumeVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    version?: boolean
    fileName?: boolean
    filePath?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeVersion"]>

  export type ResumeVersionSelectScalar = {
    id?: boolean
    resumeId?: boolean
    version?: boolean
    fileName?: boolean
    filePath?: boolean
    createdAt?: boolean
  }

  export type ResumeVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ResumeVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ResumeVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumeVersion"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      version: number
      fileName: string
      filePath: string
      createdAt: Date
    }, ExtArgs["result"]["resumeVersion"]>
    composites: {}
  }

  type ResumeVersionGetPayload<S extends boolean | null | undefined | ResumeVersionDefaultArgs> = $Result.GetResult<Prisma.$ResumeVersionPayload, S>

  type ResumeVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResumeVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResumeVersionCountAggregateInputType | true
    }

  export interface ResumeVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumeVersion'], meta: { name: 'ResumeVersion' } }
    /**
     * Find zero or one ResumeVersion that matches the filter.
     * @param {ResumeVersionFindUniqueArgs} args - Arguments to find a ResumeVersion
     * @example
     * // Get one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeVersionFindUniqueArgs>(args: SelectSubset<T, ResumeVersionFindUniqueArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResumeVersion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResumeVersionFindUniqueOrThrowArgs} args - Arguments to find a ResumeVersion
     * @example
     * // Get one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResumeVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionFindFirstArgs} args - Arguments to find a ResumeVersion
     * @example
     * // Get one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeVersionFindFirstArgs>(args?: SelectSubset<T, ResumeVersionFindFirstArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResumeVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionFindFirstOrThrowArgs} args - Arguments to find a ResumeVersion
     * @example
     * // Get one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResumeVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeVersions
     * const resumeVersions = await prisma.resumeVersion.findMany()
     * 
     * // Get first 10 ResumeVersions
     * const resumeVersions = await prisma.resumeVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeVersionWithIdOnly = await prisma.resumeVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeVersionFindManyArgs>(args?: SelectSubset<T, ResumeVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResumeVersion.
     * @param {ResumeVersionCreateArgs} args - Arguments to create a ResumeVersion.
     * @example
     * // Create one ResumeVersion
     * const ResumeVersion = await prisma.resumeVersion.create({
     *   data: {
     *     // ... data to create a ResumeVersion
     *   }
     * })
     * 
     */
    create<T extends ResumeVersionCreateArgs>(args: SelectSubset<T, ResumeVersionCreateArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResumeVersions.
     * @param {ResumeVersionCreateManyArgs} args - Arguments to create many ResumeVersions.
     * @example
     * // Create many ResumeVersions
     * const resumeVersion = await prisma.resumeVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeVersionCreateManyArgs>(args?: SelectSubset<T, ResumeVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResumeVersions and returns the data saved in the database.
     * @param {ResumeVersionCreateManyAndReturnArgs} args - Arguments to create many ResumeVersions.
     * @example
     * // Create many ResumeVersions
     * const resumeVersion = await prisma.resumeVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResumeVersions and only return the `id`
     * const resumeVersionWithIdOnly = await prisma.resumeVersion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ResumeVersion.
     * @param {ResumeVersionDeleteArgs} args - Arguments to delete one ResumeVersion.
     * @example
     * // Delete one ResumeVersion
     * const ResumeVersion = await prisma.resumeVersion.delete({
     *   where: {
     *     // ... filter to delete one ResumeVersion
     *   }
     * })
     * 
     */
    delete<T extends ResumeVersionDeleteArgs>(args: SelectSubset<T, ResumeVersionDeleteArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResumeVersion.
     * @param {ResumeVersionUpdateArgs} args - Arguments to update one ResumeVersion.
     * @example
     * // Update one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeVersionUpdateArgs>(args: SelectSubset<T, ResumeVersionUpdateArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResumeVersions.
     * @param {ResumeVersionDeleteManyArgs} args - Arguments to filter ResumeVersions to delete.
     * @example
     * // Delete a few ResumeVersions
     * const { count } = await prisma.resumeVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeVersionDeleteManyArgs>(args?: SelectSubset<T, ResumeVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeVersions
     * const resumeVersion = await prisma.resumeVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeVersionUpdateManyArgs>(args: SelectSubset<T, ResumeVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResumeVersion.
     * @param {ResumeVersionUpsertArgs} args - Arguments to update or create a ResumeVersion.
     * @example
     * // Update or create a ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.upsert({
     *   create: {
     *     // ... data to create a ResumeVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeVersion we want to update
     *   }
     * })
     */
    upsert<T extends ResumeVersionUpsertArgs>(args: SelectSubset<T, ResumeVersionUpsertArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResumeVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionCountArgs} args - Arguments to filter ResumeVersions to count.
     * @example
     * // Count the number of ResumeVersions
     * const count = await prisma.resumeVersion.count({
     *   where: {
     *     // ... the filter for the ResumeVersions we want to count
     *   }
     * })
    **/
    count<T extends ResumeVersionCountArgs>(
      args?: Subset<T, ResumeVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumeVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeVersionAggregateArgs>(args: Subset<T, ResumeVersionAggregateArgs>): Prisma.PrismaPromise<GetResumeVersionAggregateType<T>>

    /**
     * Group by ResumeVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeVersionGroupByArgs['orderBy'] }
        : { orderBy?: ResumeVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumeVersion model
   */
  readonly fields: ResumeVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumeVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResumeVersion model
   */ 
  interface ResumeVersionFieldRefs {
    readonly id: FieldRef<"ResumeVersion", 'String'>
    readonly resumeId: FieldRef<"ResumeVersion", 'String'>
    readonly version: FieldRef<"ResumeVersion", 'Int'>
    readonly fileName: FieldRef<"ResumeVersion", 'String'>
    readonly filePath: FieldRef<"ResumeVersion", 'String'>
    readonly createdAt: FieldRef<"ResumeVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResumeVersion findUnique
   */
  export type ResumeVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersion to fetch.
     */
    where: ResumeVersionWhereUniqueInput
  }

  /**
   * ResumeVersion findUniqueOrThrow
   */
  export type ResumeVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersion to fetch.
     */
    where: ResumeVersionWhereUniqueInput
  }

  /**
   * ResumeVersion findFirst
   */
  export type ResumeVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersion to fetch.
     */
    where?: ResumeVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeVersions to fetch.
     */
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeVersions.
     */
    cursor?: ResumeVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeVersions.
     */
    distinct?: ResumeVersionScalarFieldEnum | ResumeVersionScalarFieldEnum[]
  }

  /**
   * ResumeVersion findFirstOrThrow
   */
  export type ResumeVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersion to fetch.
     */
    where?: ResumeVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeVersions to fetch.
     */
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeVersions.
     */
    cursor?: ResumeVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeVersions.
     */
    distinct?: ResumeVersionScalarFieldEnum | ResumeVersionScalarFieldEnum[]
  }

  /**
   * ResumeVersion findMany
   */
  export type ResumeVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersions to fetch.
     */
    where?: ResumeVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeVersions to fetch.
     */
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumeVersions.
     */
    cursor?: ResumeVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeVersions.
     */
    skip?: number
    distinct?: ResumeVersionScalarFieldEnum | ResumeVersionScalarFieldEnum[]
  }

  /**
   * ResumeVersion create
   */
  export type ResumeVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ResumeVersion.
     */
    data: XOR<ResumeVersionCreateInput, ResumeVersionUncheckedCreateInput>
  }

  /**
   * ResumeVersion createMany
   */
  export type ResumeVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeVersions.
     */
    data: ResumeVersionCreateManyInput | ResumeVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResumeVersion createManyAndReturn
   */
  export type ResumeVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ResumeVersions.
     */
    data: ResumeVersionCreateManyInput | ResumeVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeVersion update
   */
  export type ResumeVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ResumeVersion.
     */
    data: XOR<ResumeVersionUpdateInput, ResumeVersionUncheckedUpdateInput>
    /**
     * Choose, which ResumeVersion to update.
     */
    where: ResumeVersionWhereUniqueInput
  }

  /**
   * ResumeVersion updateMany
   */
  export type ResumeVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeVersions.
     */
    data: XOR<ResumeVersionUpdateManyMutationInput, ResumeVersionUncheckedUpdateManyInput>
    /**
     * Filter which ResumeVersions to update
     */
    where?: ResumeVersionWhereInput
  }

  /**
   * ResumeVersion upsert
   */
  export type ResumeVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ResumeVersion to update in case it exists.
     */
    where: ResumeVersionWhereUniqueInput
    /**
     * In case the ResumeVersion found by the `where` argument doesn't exist, create a new ResumeVersion with this data.
     */
    create: XOR<ResumeVersionCreateInput, ResumeVersionUncheckedCreateInput>
    /**
     * In case the ResumeVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeVersionUpdateInput, ResumeVersionUncheckedUpdateInput>
  }

  /**
   * ResumeVersion delete
   */
  export type ResumeVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter which ResumeVersion to delete.
     */
    where: ResumeVersionWhereUniqueInput
  }

  /**
   * ResumeVersion deleteMany
   */
  export type ResumeVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeVersions to delete
     */
    where?: ResumeVersionWhereInput
  }

  /**
   * ResumeVersion without action
   */
  export type ResumeVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisReport
   */

  export type AggregateAnalysisReport = {
    _count: AnalysisReportCountAggregateOutputType | null
    _avg: AnalysisReportAvgAggregateOutputType | null
    _sum: AnalysisReportSumAggregateOutputType | null
    _min: AnalysisReportMinAggregateOutputType | null
    _max: AnalysisReportMaxAggregateOutputType | null
  }

  export type AnalysisReportAvgAggregateOutputType = {
    overallScore: number | null
    skillsScore: number | null
    keywordsScore: number | null
    experienceScore: number | null
    formattingScore: number | null
  }

  export type AnalysisReportSumAggregateOutputType = {
    overallScore: number | null
    skillsScore: number | null
    keywordsScore: number | null
    experienceScore: number | null
    formattingScore: number | null
  }

  export type AnalysisReportMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    status: $Enums.AnalysisStatus | null
    overallScore: number | null
    skillsScore: number | null
    keywordsScore: number | null
    experienceScore: number | null
    formattingScore: number | null
    rawText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalysisReportMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    status: $Enums.AnalysisStatus | null
    overallScore: number | null
    skillsScore: number | null
    keywordsScore: number | null
    experienceScore: number | null
    formattingScore: number | null
    rawText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalysisReportCountAggregateOutputType = {
    id: number
    resumeId: number
    status: number
    overallScore: number
    skillsScore: number
    keywordsScore: number
    experienceScore: number
    formattingScore: number
    rawText: number
    extractedSkills: number
    feedback: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnalysisReportAvgAggregateInputType = {
    overallScore?: true
    skillsScore?: true
    keywordsScore?: true
    experienceScore?: true
    formattingScore?: true
  }

  export type AnalysisReportSumAggregateInputType = {
    overallScore?: true
    skillsScore?: true
    keywordsScore?: true
    experienceScore?: true
    formattingScore?: true
  }

  export type AnalysisReportMinAggregateInputType = {
    id?: true
    resumeId?: true
    status?: true
    overallScore?: true
    skillsScore?: true
    keywordsScore?: true
    experienceScore?: true
    formattingScore?: true
    rawText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalysisReportMaxAggregateInputType = {
    id?: true
    resumeId?: true
    status?: true
    overallScore?: true
    skillsScore?: true
    keywordsScore?: true
    experienceScore?: true
    formattingScore?: true
    rawText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalysisReportCountAggregateInputType = {
    id?: true
    resumeId?: true
    status?: true
    overallScore?: true
    skillsScore?: true
    keywordsScore?: true
    experienceScore?: true
    formattingScore?: true
    rawText?: true
    extractedSkills?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnalysisReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisReport to aggregate.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisReports
    **/
    _count?: true | AnalysisReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisReportMaxAggregateInputType
  }

  export type GetAnalysisReportAggregateType<T extends AnalysisReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisReport[P]>
      : GetScalarType<T[P], AggregateAnalysisReport[P]>
  }




  export type AnalysisReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisReportWhereInput
    orderBy?: AnalysisReportOrderByWithAggregationInput | AnalysisReportOrderByWithAggregationInput[]
    by: AnalysisReportScalarFieldEnum[] | AnalysisReportScalarFieldEnum
    having?: AnalysisReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisReportCountAggregateInputType | true
    _avg?: AnalysisReportAvgAggregateInputType
    _sum?: AnalysisReportSumAggregateInputType
    _min?: AnalysisReportMinAggregateInputType
    _max?: AnalysisReportMaxAggregateInputType
  }

  export type AnalysisReportGroupByOutputType = {
    id: string
    resumeId: string
    status: $Enums.AnalysisStatus
    overallScore: number
    skillsScore: number
    keywordsScore: number
    experienceScore: number
    formattingScore: number
    rawText: string
    extractedSkills: string[]
    feedback: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AnalysisReportCountAggregateOutputType | null
    _avg: AnalysisReportAvgAggregateOutputType | null
    _sum: AnalysisReportSumAggregateOutputType | null
    _min: AnalysisReportMinAggregateOutputType | null
    _max: AnalysisReportMaxAggregateOutputType | null
  }

  type GetAnalysisReportGroupByPayload<T extends AnalysisReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisReportGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisReportGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    status?: boolean
    overallScore?: boolean
    skillsScore?: boolean
    keywordsScore?: boolean
    experienceScore?: boolean
    formattingScore?: boolean
    rawText?: boolean
    extractedSkills?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    suggestions?: boolean | AnalysisReport$suggestionsArgs<ExtArgs>
    _count?: boolean | AnalysisReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisReport"]>

  export type AnalysisReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    status?: boolean
    overallScore?: boolean
    skillsScore?: boolean
    keywordsScore?: boolean
    experienceScore?: boolean
    formattingScore?: boolean
    rawText?: boolean
    extractedSkills?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisReport"]>

  export type AnalysisReportSelectScalar = {
    id?: boolean
    resumeId?: boolean
    status?: boolean
    overallScore?: boolean
    skillsScore?: boolean
    keywordsScore?: boolean
    experienceScore?: boolean
    formattingScore?: boolean
    rawText?: boolean
    extractedSkills?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnalysisReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    suggestions?: boolean | AnalysisReport$suggestionsArgs<ExtArgs>
    _count?: boolean | AnalysisReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnalysisReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $AnalysisReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisReport"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
      suggestions: Prisma.$SuggestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      status: $Enums.AnalysisStatus
      overallScore: number
      skillsScore: number
      keywordsScore: number
      experienceScore: number
      formattingScore: number
      rawText: string
      extractedSkills: string[]
      feedback: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["analysisReport"]>
    composites: {}
  }

  type AnalysisReportGetPayload<S extends boolean | null | undefined | AnalysisReportDefaultArgs> = $Result.GetResult<Prisma.$AnalysisReportPayload, S>

  type AnalysisReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnalysisReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnalysisReportCountAggregateInputType | true
    }

  export interface AnalysisReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisReport'], meta: { name: 'AnalysisReport' } }
    /**
     * Find zero or one AnalysisReport that matches the filter.
     * @param {AnalysisReportFindUniqueArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisReportFindUniqueArgs>(args: SelectSubset<T, AnalysisReportFindUniqueArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AnalysisReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnalysisReportFindUniqueOrThrowArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AnalysisReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportFindFirstArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisReportFindFirstArgs>(args?: SelectSubset<T, AnalysisReportFindFirstArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AnalysisReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportFindFirstOrThrowArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AnalysisReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisReports
     * const analysisReports = await prisma.analysisReport.findMany()
     * 
     * // Get first 10 AnalysisReports
     * const analysisReports = await prisma.analysisReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisReportWithIdOnly = await prisma.analysisReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisReportFindManyArgs>(args?: SelectSubset<T, AnalysisReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AnalysisReport.
     * @param {AnalysisReportCreateArgs} args - Arguments to create a AnalysisReport.
     * @example
     * // Create one AnalysisReport
     * const AnalysisReport = await prisma.analysisReport.create({
     *   data: {
     *     // ... data to create a AnalysisReport
     *   }
     * })
     * 
     */
    create<T extends AnalysisReportCreateArgs>(args: SelectSubset<T, AnalysisReportCreateArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AnalysisReports.
     * @param {AnalysisReportCreateManyArgs} args - Arguments to create many AnalysisReports.
     * @example
     * // Create many AnalysisReports
     * const analysisReport = await prisma.analysisReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisReportCreateManyArgs>(args?: SelectSubset<T, AnalysisReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisReports and returns the data saved in the database.
     * @param {AnalysisReportCreateManyAndReturnArgs} args - Arguments to create many AnalysisReports.
     * @example
     * // Create many AnalysisReports
     * const analysisReport = await prisma.analysisReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisReports and only return the `id`
     * const analysisReportWithIdOnly = await prisma.analysisReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisReportCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AnalysisReport.
     * @param {AnalysisReportDeleteArgs} args - Arguments to delete one AnalysisReport.
     * @example
     * // Delete one AnalysisReport
     * const AnalysisReport = await prisma.analysisReport.delete({
     *   where: {
     *     // ... filter to delete one AnalysisReport
     *   }
     * })
     * 
     */
    delete<T extends AnalysisReportDeleteArgs>(args: SelectSubset<T, AnalysisReportDeleteArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AnalysisReport.
     * @param {AnalysisReportUpdateArgs} args - Arguments to update one AnalysisReport.
     * @example
     * // Update one AnalysisReport
     * const analysisReport = await prisma.analysisReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisReportUpdateArgs>(args: SelectSubset<T, AnalysisReportUpdateArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AnalysisReports.
     * @param {AnalysisReportDeleteManyArgs} args - Arguments to filter AnalysisReports to delete.
     * @example
     * // Delete a few AnalysisReports
     * const { count } = await prisma.analysisReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisReportDeleteManyArgs>(args?: SelectSubset<T, AnalysisReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisReports
     * const analysisReport = await prisma.analysisReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisReportUpdateManyArgs>(args: SelectSubset<T, AnalysisReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnalysisReport.
     * @param {AnalysisReportUpsertArgs} args - Arguments to update or create a AnalysisReport.
     * @example
     * // Update or create a AnalysisReport
     * const analysisReport = await prisma.analysisReport.upsert({
     *   create: {
     *     // ... data to create a AnalysisReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisReport we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisReportUpsertArgs>(args: SelectSubset<T, AnalysisReportUpsertArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AnalysisReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportCountArgs} args - Arguments to filter AnalysisReports to count.
     * @example
     * // Count the number of AnalysisReports
     * const count = await prisma.analysisReport.count({
     *   where: {
     *     // ... the filter for the AnalysisReports we want to count
     *   }
     * })
    **/
    count<T extends AnalysisReportCountArgs>(
      args?: Subset<T, AnalysisReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalysisReportAggregateArgs>(args: Subset<T, AnalysisReportAggregateArgs>): Prisma.PrismaPromise<GetAnalysisReportAggregateType<T>>

    /**
     * Group by AnalysisReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalysisReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisReportGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalysisReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisReport model
   */
  readonly fields: AnalysisReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    suggestions<T extends AnalysisReport$suggestionsArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisReport$suggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalysisReport model
   */ 
  interface AnalysisReportFieldRefs {
    readonly id: FieldRef<"AnalysisReport", 'String'>
    readonly resumeId: FieldRef<"AnalysisReport", 'String'>
    readonly status: FieldRef<"AnalysisReport", 'AnalysisStatus'>
    readonly overallScore: FieldRef<"AnalysisReport", 'Float'>
    readonly skillsScore: FieldRef<"AnalysisReport", 'Float'>
    readonly keywordsScore: FieldRef<"AnalysisReport", 'Float'>
    readonly experienceScore: FieldRef<"AnalysisReport", 'Float'>
    readonly formattingScore: FieldRef<"AnalysisReport", 'Float'>
    readonly rawText: FieldRef<"AnalysisReport", 'String'>
    readonly extractedSkills: FieldRef<"AnalysisReport", 'String[]'>
    readonly feedback: FieldRef<"AnalysisReport", 'Json'>
    readonly createdAt: FieldRef<"AnalysisReport", 'DateTime'>
    readonly updatedAt: FieldRef<"AnalysisReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisReport findUnique
   */
  export type AnalysisReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport findUniqueOrThrow
   */
  export type AnalysisReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport findFirst
   */
  export type AnalysisReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisReports.
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisReports.
     */
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * AnalysisReport findFirstOrThrow
   */
  export type AnalysisReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisReports.
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisReports.
     */
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * AnalysisReport findMany
   */
  export type AnalysisReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReports to fetch.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisReports.
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * AnalysisReport create
   */
  export type AnalysisReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisReport.
     */
    data: XOR<AnalysisReportCreateInput, AnalysisReportUncheckedCreateInput>
  }

  /**
   * AnalysisReport createMany
   */
  export type AnalysisReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisReports.
     */
    data: AnalysisReportCreateManyInput | AnalysisReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisReport createManyAndReturn
   */
  export type AnalysisReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnalysisReports.
     */
    data: AnalysisReportCreateManyInput | AnalysisReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisReport update
   */
  export type AnalysisReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisReport.
     */
    data: XOR<AnalysisReportUpdateInput, AnalysisReportUncheckedUpdateInput>
    /**
     * Choose, which AnalysisReport to update.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport updateMany
   */
  export type AnalysisReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisReports.
     */
    data: XOR<AnalysisReportUpdateManyMutationInput, AnalysisReportUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisReports to update
     */
    where?: AnalysisReportWhereInput
  }

  /**
   * AnalysisReport upsert
   */
  export type AnalysisReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisReport to update in case it exists.
     */
    where: AnalysisReportWhereUniqueInput
    /**
     * In case the AnalysisReport found by the `where` argument doesn't exist, create a new AnalysisReport with this data.
     */
    create: XOR<AnalysisReportCreateInput, AnalysisReportUncheckedCreateInput>
    /**
     * In case the AnalysisReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisReportUpdateInput, AnalysisReportUncheckedUpdateInput>
  }

  /**
   * AnalysisReport delete
   */
  export type AnalysisReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter which AnalysisReport to delete.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport deleteMany
   */
  export type AnalysisReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisReports to delete
     */
    where?: AnalysisReportWhereInput
  }

  /**
   * AnalysisReport.suggestions
   */
  export type AnalysisReport$suggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    cursor?: SuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * AnalysisReport without action
   */
  export type AnalysisReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    resumeSkills?: boolean | Skill$resumeSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumeSkills?: boolean | Skill$resumeSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      resumeSkills: Prisma.$ResumeSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resumeSkills<T extends Skill$resumeSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$resumeSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */ 
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
  }

  /**
   * Skill.resumeSkills
   */
  export type Skill$resumeSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    where?: ResumeSkillWhereInput
    orderBy?: ResumeSkillOrderByWithRelationInput | ResumeSkillOrderByWithRelationInput[]
    cursor?: ResumeSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeSkillScalarFieldEnum | ResumeSkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model ResumeSkill
   */

  export type AggregateResumeSkill = {
    _count: ResumeSkillCountAggregateOutputType | null
    _min: ResumeSkillMinAggregateOutputType | null
    _max: ResumeSkillMaxAggregateOutputType | null
  }

  export type ResumeSkillMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    skillId: string | null
  }

  export type ResumeSkillMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    skillId: string | null
  }

  export type ResumeSkillCountAggregateOutputType = {
    id: number
    resumeId: number
    skillId: number
    _all: number
  }


  export type ResumeSkillMinAggregateInputType = {
    id?: true
    resumeId?: true
    skillId?: true
  }

  export type ResumeSkillMaxAggregateInputType = {
    id?: true
    resumeId?: true
    skillId?: true
  }

  export type ResumeSkillCountAggregateInputType = {
    id?: true
    resumeId?: true
    skillId?: true
    _all?: true
  }

  export type ResumeSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeSkill to aggregate.
     */
    where?: ResumeSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeSkills to fetch.
     */
    orderBy?: ResumeSkillOrderByWithRelationInput | ResumeSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumeSkills
    **/
    _count?: true | ResumeSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeSkillMaxAggregateInputType
  }

  export type GetResumeSkillAggregateType<T extends ResumeSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateResumeSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumeSkill[P]>
      : GetScalarType<T[P], AggregateResumeSkill[P]>
  }




  export type ResumeSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeSkillWhereInput
    orderBy?: ResumeSkillOrderByWithAggregationInput | ResumeSkillOrderByWithAggregationInput[]
    by: ResumeSkillScalarFieldEnum[] | ResumeSkillScalarFieldEnum
    having?: ResumeSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeSkillCountAggregateInputType | true
    _min?: ResumeSkillMinAggregateInputType
    _max?: ResumeSkillMaxAggregateInputType
  }

  export type ResumeSkillGroupByOutputType = {
    id: string
    resumeId: string
    skillId: string
    _count: ResumeSkillCountAggregateOutputType | null
    _min: ResumeSkillMinAggregateOutputType | null
    _max: ResumeSkillMaxAggregateOutputType | null
  }

  type GetResumeSkillGroupByPayload<T extends ResumeSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeSkillGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeSkillGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    skillId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeSkill"]>

  export type ResumeSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    skillId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeSkill"]>

  export type ResumeSkillSelectScalar = {
    id?: boolean
    resumeId?: boolean
    skillId?: boolean
  }

  export type ResumeSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type ResumeSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $ResumeSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumeSkill"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      skillId: string
    }, ExtArgs["result"]["resumeSkill"]>
    composites: {}
  }

  type ResumeSkillGetPayload<S extends boolean | null | undefined | ResumeSkillDefaultArgs> = $Result.GetResult<Prisma.$ResumeSkillPayload, S>

  type ResumeSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResumeSkillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResumeSkillCountAggregateInputType | true
    }

  export interface ResumeSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumeSkill'], meta: { name: 'ResumeSkill' } }
    /**
     * Find zero or one ResumeSkill that matches the filter.
     * @param {ResumeSkillFindUniqueArgs} args - Arguments to find a ResumeSkill
     * @example
     * // Get one ResumeSkill
     * const resumeSkill = await prisma.resumeSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeSkillFindUniqueArgs>(args: SelectSubset<T, ResumeSkillFindUniqueArgs<ExtArgs>>): Prisma__ResumeSkillClient<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResumeSkill that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResumeSkillFindUniqueOrThrowArgs} args - Arguments to find a ResumeSkill
     * @example
     * // Get one ResumeSkill
     * const resumeSkill = await prisma.resumeSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeSkillClient<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResumeSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSkillFindFirstArgs} args - Arguments to find a ResumeSkill
     * @example
     * // Get one ResumeSkill
     * const resumeSkill = await prisma.resumeSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeSkillFindFirstArgs>(args?: SelectSubset<T, ResumeSkillFindFirstArgs<ExtArgs>>): Prisma__ResumeSkillClient<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResumeSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSkillFindFirstOrThrowArgs} args - Arguments to find a ResumeSkill
     * @example
     * // Get one ResumeSkill
     * const resumeSkill = await prisma.resumeSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeSkillClient<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResumeSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeSkills
     * const resumeSkills = await prisma.resumeSkill.findMany()
     * 
     * // Get first 10 ResumeSkills
     * const resumeSkills = await prisma.resumeSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeSkillWithIdOnly = await prisma.resumeSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeSkillFindManyArgs>(args?: SelectSubset<T, ResumeSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResumeSkill.
     * @param {ResumeSkillCreateArgs} args - Arguments to create a ResumeSkill.
     * @example
     * // Create one ResumeSkill
     * const ResumeSkill = await prisma.resumeSkill.create({
     *   data: {
     *     // ... data to create a ResumeSkill
     *   }
     * })
     * 
     */
    create<T extends ResumeSkillCreateArgs>(args: SelectSubset<T, ResumeSkillCreateArgs<ExtArgs>>): Prisma__ResumeSkillClient<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResumeSkills.
     * @param {ResumeSkillCreateManyArgs} args - Arguments to create many ResumeSkills.
     * @example
     * // Create many ResumeSkills
     * const resumeSkill = await prisma.resumeSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeSkillCreateManyArgs>(args?: SelectSubset<T, ResumeSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResumeSkills and returns the data saved in the database.
     * @param {ResumeSkillCreateManyAndReturnArgs} args - Arguments to create many ResumeSkills.
     * @example
     * // Create many ResumeSkills
     * const resumeSkill = await prisma.resumeSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResumeSkills and only return the `id`
     * const resumeSkillWithIdOnly = await prisma.resumeSkill.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ResumeSkill.
     * @param {ResumeSkillDeleteArgs} args - Arguments to delete one ResumeSkill.
     * @example
     * // Delete one ResumeSkill
     * const ResumeSkill = await prisma.resumeSkill.delete({
     *   where: {
     *     // ... filter to delete one ResumeSkill
     *   }
     * })
     * 
     */
    delete<T extends ResumeSkillDeleteArgs>(args: SelectSubset<T, ResumeSkillDeleteArgs<ExtArgs>>): Prisma__ResumeSkillClient<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResumeSkill.
     * @param {ResumeSkillUpdateArgs} args - Arguments to update one ResumeSkill.
     * @example
     * // Update one ResumeSkill
     * const resumeSkill = await prisma.resumeSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeSkillUpdateArgs>(args: SelectSubset<T, ResumeSkillUpdateArgs<ExtArgs>>): Prisma__ResumeSkillClient<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResumeSkills.
     * @param {ResumeSkillDeleteManyArgs} args - Arguments to filter ResumeSkills to delete.
     * @example
     * // Delete a few ResumeSkills
     * const { count } = await prisma.resumeSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeSkillDeleteManyArgs>(args?: SelectSubset<T, ResumeSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeSkills
     * const resumeSkill = await prisma.resumeSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeSkillUpdateManyArgs>(args: SelectSubset<T, ResumeSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResumeSkill.
     * @param {ResumeSkillUpsertArgs} args - Arguments to update or create a ResumeSkill.
     * @example
     * // Update or create a ResumeSkill
     * const resumeSkill = await prisma.resumeSkill.upsert({
     *   create: {
     *     // ... data to create a ResumeSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeSkill we want to update
     *   }
     * })
     */
    upsert<T extends ResumeSkillUpsertArgs>(args: SelectSubset<T, ResumeSkillUpsertArgs<ExtArgs>>): Prisma__ResumeSkillClient<$Result.GetResult<Prisma.$ResumeSkillPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResumeSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSkillCountArgs} args - Arguments to filter ResumeSkills to count.
     * @example
     * // Count the number of ResumeSkills
     * const count = await prisma.resumeSkill.count({
     *   where: {
     *     // ... the filter for the ResumeSkills we want to count
     *   }
     * })
    **/
    count<T extends ResumeSkillCountArgs>(
      args?: Subset<T, ResumeSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumeSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeSkillAggregateArgs>(args: Subset<T, ResumeSkillAggregateArgs>): Prisma.PrismaPromise<GetResumeSkillAggregateType<T>>

    /**
     * Group by ResumeSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeSkillGroupByArgs['orderBy'] }
        : { orderBy?: ResumeSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumeSkill model
   */
  readonly fields: ResumeSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumeSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResumeSkill model
   */ 
  interface ResumeSkillFieldRefs {
    readonly id: FieldRef<"ResumeSkill", 'String'>
    readonly resumeId: FieldRef<"ResumeSkill", 'String'>
    readonly skillId: FieldRef<"ResumeSkill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResumeSkill findUnique
   */
  export type ResumeSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSkill to fetch.
     */
    where: ResumeSkillWhereUniqueInput
  }

  /**
   * ResumeSkill findUniqueOrThrow
   */
  export type ResumeSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSkill to fetch.
     */
    where: ResumeSkillWhereUniqueInput
  }

  /**
   * ResumeSkill findFirst
   */
  export type ResumeSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSkill to fetch.
     */
    where?: ResumeSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeSkills to fetch.
     */
    orderBy?: ResumeSkillOrderByWithRelationInput | ResumeSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeSkills.
     */
    cursor?: ResumeSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeSkills.
     */
    distinct?: ResumeSkillScalarFieldEnum | ResumeSkillScalarFieldEnum[]
  }

  /**
   * ResumeSkill findFirstOrThrow
   */
  export type ResumeSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSkill to fetch.
     */
    where?: ResumeSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeSkills to fetch.
     */
    orderBy?: ResumeSkillOrderByWithRelationInput | ResumeSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeSkills.
     */
    cursor?: ResumeSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeSkills.
     */
    distinct?: ResumeSkillScalarFieldEnum | ResumeSkillScalarFieldEnum[]
  }

  /**
   * ResumeSkill findMany
   */
  export type ResumeSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSkills to fetch.
     */
    where?: ResumeSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeSkills to fetch.
     */
    orderBy?: ResumeSkillOrderByWithRelationInput | ResumeSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumeSkills.
     */
    cursor?: ResumeSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeSkills.
     */
    skip?: number
    distinct?: ResumeSkillScalarFieldEnum | ResumeSkillScalarFieldEnum[]
  }

  /**
   * ResumeSkill create
   */
  export type ResumeSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a ResumeSkill.
     */
    data: XOR<ResumeSkillCreateInput, ResumeSkillUncheckedCreateInput>
  }

  /**
   * ResumeSkill createMany
   */
  export type ResumeSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeSkills.
     */
    data: ResumeSkillCreateManyInput | ResumeSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResumeSkill createManyAndReturn
   */
  export type ResumeSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ResumeSkills.
     */
    data: ResumeSkillCreateManyInput | ResumeSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeSkill update
   */
  export type ResumeSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a ResumeSkill.
     */
    data: XOR<ResumeSkillUpdateInput, ResumeSkillUncheckedUpdateInput>
    /**
     * Choose, which ResumeSkill to update.
     */
    where: ResumeSkillWhereUniqueInput
  }

  /**
   * ResumeSkill updateMany
   */
  export type ResumeSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeSkills.
     */
    data: XOR<ResumeSkillUpdateManyMutationInput, ResumeSkillUncheckedUpdateManyInput>
    /**
     * Filter which ResumeSkills to update
     */
    where?: ResumeSkillWhereInput
  }

  /**
   * ResumeSkill upsert
   */
  export type ResumeSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the ResumeSkill to update in case it exists.
     */
    where: ResumeSkillWhereUniqueInput
    /**
     * In case the ResumeSkill found by the `where` argument doesn't exist, create a new ResumeSkill with this data.
     */
    create: XOR<ResumeSkillCreateInput, ResumeSkillUncheckedCreateInput>
    /**
     * In case the ResumeSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeSkillUpdateInput, ResumeSkillUncheckedUpdateInput>
  }

  /**
   * ResumeSkill delete
   */
  export type ResumeSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
    /**
     * Filter which ResumeSkill to delete.
     */
    where: ResumeSkillWhereUniqueInput
  }

  /**
   * ResumeSkill deleteMany
   */
  export type ResumeSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeSkills to delete
     */
    where?: ResumeSkillWhereInput
  }

  /**
   * ResumeSkill without action
   */
  export type ResumeSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSkill
     */
    select?: ResumeSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSkillInclude<ExtArgs> | null
  }


  /**
   * Model JobDescription
   */

  export type AggregateJobDescription = {
    _count: JobDescriptionCountAggregateOutputType | null
    _min: JobDescriptionMinAggregateOutputType | null
    _max: JobDescriptionMaxAggregateOutputType | null
  }

  export type JobDescriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type JobDescriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type JobDescriptionCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    extractedSkills: number
    createdAt: number
    _all: number
  }


  export type JobDescriptionMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type JobDescriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type JobDescriptionCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    extractedSkills?: true
    createdAt?: true
    _all?: true
  }

  export type JobDescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobDescription to aggregate.
     */
    where?: JobDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobDescriptions to fetch.
     */
    orderBy?: JobDescriptionOrderByWithRelationInput | JobDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobDescriptions
    **/
    _count?: true | JobDescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobDescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobDescriptionMaxAggregateInputType
  }

  export type GetJobDescriptionAggregateType<T extends JobDescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateJobDescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobDescription[P]>
      : GetScalarType<T[P], AggregateJobDescription[P]>
  }




  export type JobDescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobDescriptionWhereInput
    orderBy?: JobDescriptionOrderByWithAggregationInput | JobDescriptionOrderByWithAggregationInput[]
    by: JobDescriptionScalarFieldEnum[] | JobDescriptionScalarFieldEnum
    having?: JobDescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobDescriptionCountAggregateInputType | true
    _min?: JobDescriptionMinAggregateInputType
    _max?: JobDescriptionMaxAggregateInputType
  }

  export type JobDescriptionGroupByOutputType = {
    id: string
    userId: string
    title: string
    content: string
    extractedSkills: string[]
    createdAt: Date
    _count: JobDescriptionCountAggregateOutputType | null
    _min: JobDescriptionMinAggregateOutputType | null
    _max: JobDescriptionMaxAggregateOutputType | null
  }

  type GetJobDescriptionGroupByPayload<T extends JobDescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobDescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobDescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobDescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], JobDescriptionGroupByOutputType[P]>
        }
      >
    >


  export type JobDescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    extractedSkills?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matches?: boolean | JobDescription$matchesArgs<ExtArgs>
    _count?: boolean | JobDescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobDescription"]>

  export type JobDescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    extractedSkills?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobDescription"]>

  export type JobDescriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    extractedSkills?: boolean
    createdAt?: boolean
  }

  export type JobDescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matches?: boolean | JobDescription$matchesArgs<ExtArgs>
    _count?: boolean | JobDescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobDescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobDescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobDescription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      matches: Prisma.$JdMatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      content: string
      extractedSkills: string[]
      createdAt: Date
    }, ExtArgs["result"]["jobDescription"]>
    composites: {}
  }

  type JobDescriptionGetPayload<S extends boolean | null | undefined | JobDescriptionDefaultArgs> = $Result.GetResult<Prisma.$JobDescriptionPayload, S>

  type JobDescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobDescriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobDescriptionCountAggregateInputType | true
    }

  export interface JobDescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobDescription'], meta: { name: 'JobDescription' } }
    /**
     * Find zero or one JobDescription that matches the filter.
     * @param {JobDescriptionFindUniqueArgs} args - Arguments to find a JobDescription
     * @example
     * // Get one JobDescription
     * const jobDescription = await prisma.jobDescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobDescriptionFindUniqueArgs>(args: SelectSubset<T, JobDescriptionFindUniqueArgs<ExtArgs>>): Prisma__JobDescriptionClient<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JobDescription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobDescriptionFindUniqueOrThrowArgs} args - Arguments to find a JobDescription
     * @example
     * // Get one JobDescription
     * const jobDescription = await prisma.jobDescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobDescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, JobDescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobDescriptionClient<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JobDescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobDescriptionFindFirstArgs} args - Arguments to find a JobDescription
     * @example
     * // Get one JobDescription
     * const jobDescription = await prisma.jobDescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobDescriptionFindFirstArgs>(args?: SelectSubset<T, JobDescriptionFindFirstArgs<ExtArgs>>): Prisma__JobDescriptionClient<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JobDescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobDescriptionFindFirstOrThrowArgs} args - Arguments to find a JobDescription
     * @example
     * // Get one JobDescription
     * const jobDescription = await prisma.jobDescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobDescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, JobDescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobDescriptionClient<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JobDescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobDescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobDescriptions
     * const jobDescriptions = await prisma.jobDescription.findMany()
     * 
     * // Get first 10 JobDescriptions
     * const jobDescriptions = await prisma.jobDescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobDescriptionWithIdOnly = await prisma.jobDescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobDescriptionFindManyArgs>(args?: SelectSubset<T, JobDescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JobDescription.
     * @param {JobDescriptionCreateArgs} args - Arguments to create a JobDescription.
     * @example
     * // Create one JobDescription
     * const JobDescription = await prisma.jobDescription.create({
     *   data: {
     *     // ... data to create a JobDescription
     *   }
     * })
     * 
     */
    create<T extends JobDescriptionCreateArgs>(args: SelectSubset<T, JobDescriptionCreateArgs<ExtArgs>>): Prisma__JobDescriptionClient<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JobDescriptions.
     * @param {JobDescriptionCreateManyArgs} args - Arguments to create many JobDescriptions.
     * @example
     * // Create many JobDescriptions
     * const jobDescription = await prisma.jobDescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobDescriptionCreateManyArgs>(args?: SelectSubset<T, JobDescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobDescriptions and returns the data saved in the database.
     * @param {JobDescriptionCreateManyAndReturnArgs} args - Arguments to create many JobDescriptions.
     * @example
     * // Create many JobDescriptions
     * const jobDescription = await prisma.jobDescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobDescriptions and only return the `id`
     * const jobDescriptionWithIdOnly = await prisma.jobDescription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobDescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, JobDescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a JobDescription.
     * @param {JobDescriptionDeleteArgs} args - Arguments to delete one JobDescription.
     * @example
     * // Delete one JobDescription
     * const JobDescription = await prisma.jobDescription.delete({
     *   where: {
     *     // ... filter to delete one JobDescription
     *   }
     * })
     * 
     */
    delete<T extends JobDescriptionDeleteArgs>(args: SelectSubset<T, JobDescriptionDeleteArgs<ExtArgs>>): Prisma__JobDescriptionClient<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JobDescription.
     * @param {JobDescriptionUpdateArgs} args - Arguments to update one JobDescription.
     * @example
     * // Update one JobDescription
     * const jobDescription = await prisma.jobDescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobDescriptionUpdateArgs>(args: SelectSubset<T, JobDescriptionUpdateArgs<ExtArgs>>): Prisma__JobDescriptionClient<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JobDescriptions.
     * @param {JobDescriptionDeleteManyArgs} args - Arguments to filter JobDescriptions to delete.
     * @example
     * // Delete a few JobDescriptions
     * const { count } = await prisma.jobDescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDescriptionDeleteManyArgs>(args?: SelectSubset<T, JobDescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobDescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobDescriptions
     * const jobDescription = await prisma.jobDescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobDescriptionUpdateManyArgs>(args: SelectSubset<T, JobDescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobDescription.
     * @param {JobDescriptionUpsertArgs} args - Arguments to update or create a JobDescription.
     * @example
     * // Update or create a JobDescription
     * const jobDescription = await prisma.jobDescription.upsert({
     *   create: {
     *     // ... data to create a JobDescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobDescription we want to update
     *   }
     * })
     */
    upsert<T extends JobDescriptionUpsertArgs>(args: SelectSubset<T, JobDescriptionUpsertArgs<ExtArgs>>): Prisma__JobDescriptionClient<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JobDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobDescriptionCountArgs} args - Arguments to filter JobDescriptions to count.
     * @example
     * // Count the number of JobDescriptions
     * const count = await prisma.jobDescription.count({
     *   where: {
     *     // ... the filter for the JobDescriptions we want to count
     *   }
     * })
    **/
    count<T extends JobDescriptionCountArgs>(
      args?: Subset<T, JobDescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobDescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobDescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobDescriptionAggregateArgs>(args: Subset<T, JobDescriptionAggregateArgs>): Prisma.PrismaPromise<GetJobDescriptionAggregateType<T>>

    /**
     * Group by JobDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobDescriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobDescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobDescriptionGroupByArgs['orderBy'] }
        : { orderBy?: JobDescriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobDescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobDescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobDescription model
   */
  readonly fields: JobDescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobDescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobDescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    matches<T extends JobDescription$matchesArgs<ExtArgs> = {}>(args?: Subset<T, JobDescription$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobDescription model
   */ 
  interface JobDescriptionFieldRefs {
    readonly id: FieldRef<"JobDescription", 'String'>
    readonly userId: FieldRef<"JobDescription", 'String'>
    readonly title: FieldRef<"JobDescription", 'String'>
    readonly content: FieldRef<"JobDescription", 'String'>
    readonly extractedSkills: FieldRef<"JobDescription", 'String[]'>
    readonly createdAt: FieldRef<"JobDescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobDescription findUnique
   */
  export type JobDescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which JobDescription to fetch.
     */
    where: JobDescriptionWhereUniqueInput
  }

  /**
   * JobDescription findUniqueOrThrow
   */
  export type JobDescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which JobDescription to fetch.
     */
    where: JobDescriptionWhereUniqueInput
  }

  /**
   * JobDescription findFirst
   */
  export type JobDescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which JobDescription to fetch.
     */
    where?: JobDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobDescriptions to fetch.
     */
    orderBy?: JobDescriptionOrderByWithRelationInput | JobDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobDescriptions.
     */
    cursor?: JobDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobDescriptions.
     */
    distinct?: JobDescriptionScalarFieldEnum | JobDescriptionScalarFieldEnum[]
  }

  /**
   * JobDescription findFirstOrThrow
   */
  export type JobDescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which JobDescription to fetch.
     */
    where?: JobDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobDescriptions to fetch.
     */
    orderBy?: JobDescriptionOrderByWithRelationInput | JobDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobDescriptions.
     */
    cursor?: JobDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobDescriptions.
     */
    distinct?: JobDescriptionScalarFieldEnum | JobDescriptionScalarFieldEnum[]
  }

  /**
   * JobDescription findMany
   */
  export type JobDescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which JobDescriptions to fetch.
     */
    where?: JobDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobDescriptions to fetch.
     */
    orderBy?: JobDescriptionOrderByWithRelationInput | JobDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobDescriptions.
     */
    cursor?: JobDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobDescriptions.
     */
    skip?: number
    distinct?: JobDescriptionScalarFieldEnum | JobDescriptionScalarFieldEnum[]
  }

  /**
   * JobDescription create
   */
  export type JobDescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a JobDescription.
     */
    data: XOR<JobDescriptionCreateInput, JobDescriptionUncheckedCreateInput>
  }

  /**
   * JobDescription createMany
   */
  export type JobDescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobDescriptions.
     */
    data: JobDescriptionCreateManyInput | JobDescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobDescription createManyAndReturn
   */
  export type JobDescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JobDescriptions.
     */
    data: JobDescriptionCreateManyInput | JobDescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobDescription update
   */
  export type JobDescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a JobDescription.
     */
    data: XOR<JobDescriptionUpdateInput, JobDescriptionUncheckedUpdateInput>
    /**
     * Choose, which JobDescription to update.
     */
    where: JobDescriptionWhereUniqueInput
  }

  /**
   * JobDescription updateMany
   */
  export type JobDescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobDescriptions.
     */
    data: XOR<JobDescriptionUpdateManyMutationInput, JobDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which JobDescriptions to update
     */
    where?: JobDescriptionWhereInput
  }

  /**
   * JobDescription upsert
   */
  export type JobDescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the JobDescription to update in case it exists.
     */
    where: JobDescriptionWhereUniqueInput
    /**
     * In case the JobDescription found by the `where` argument doesn't exist, create a new JobDescription with this data.
     */
    create: XOR<JobDescriptionCreateInput, JobDescriptionUncheckedCreateInput>
    /**
     * In case the JobDescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobDescriptionUpdateInput, JobDescriptionUncheckedUpdateInput>
  }

  /**
   * JobDescription delete
   */
  export type JobDescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
    /**
     * Filter which JobDescription to delete.
     */
    where: JobDescriptionWhereUniqueInput
  }

  /**
   * JobDescription deleteMany
   */
  export type JobDescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobDescriptions to delete
     */
    where?: JobDescriptionWhereInput
  }

  /**
   * JobDescription.matches
   */
  export type JobDescription$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    where?: JdMatchWhereInput
    orderBy?: JdMatchOrderByWithRelationInput | JdMatchOrderByWithRelationInput[]
    cursor?: JdMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JdMatchScalarFieldEnum | JdMatchScalarFieldEnum[]
  }

  /**
   * JobDescription without action
   */
  export type JobDescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobDescription
     */
    select?: JobDescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobDescriptionInclude<ExtArgs> | null
  }


  /**
   * Model JdMatch
   */

  export type AggregateJdMatch = {
    _count: JdMatchCountAggregateOutputType | null
    _avg: JdMatchAvgAggregateOutputType | null
    _sum: JdMatchSumAggregateOutputType | null
    _min: JdMatchMinAggregateOutputType | null
    _max: JdMatchMaxAggregateOutputType | null
  }

  export type JdMatchAvgAggregateOutputType = {
    matchPercentage: number | null
  }

  export type JdMatchSumAggregateOutputType = {
    matchPercentage: number | null
  }

  export type JdMatchMinAggregateOutputType = {
    id: string | null
    jobDescriptionId: string | null
    resumeId: string | null
    matchPercentage: number | null
    createdAt: Date | null
  }

  export type JdMatchMaxAggregateOutputType = {
    id: string | null
    jobDescriptionId: string | null
    resumeId: string | null
    matchPercentage: number | null
    createdAt: Date | null
  }

  export type JdMatchCountAggregateOutputType = {
    id: number
    jobDescriptionId: number
    resumeId: number
    matchPercentage: number
    matchedSkills: number
    missingSkills: number
    createdAt: number
    _all: number
  }


  export type JdMatchAvgAggregateInputType = {
    matchPercentage?: true
  }

  export type JdMatchSumAggregateInputType = {
    matchPercentage?: true
  }

  export type JdMatchMinAggregateInputType = {
    id?: true
    jobDescriptionId?: true
    resumeId?: true
    matchPercentage?: true
    createdAt?: true
  }

  export type JdMatchMaxAggregateInputType = {
    id?: true
    jobDescriptionId?: true
    resumeId?: true
    matchPercentage?: true
    createdAt?: true
  }

  export type JdMatchCountAggregateInputType = {
    id?: true
    jobDescriptionId?: true
    resumeId?: true
    matchPercentage?: true
    matchedSkills?: true
    missingSkills?: true
    createdAt?: true
    _all?: true
  }

  export type JdMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JdMatch to aggregate.
     */
    where?: JdMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JdMatches to fetch.
     */
    orderBy?: JdMatchOrderByWithRelationInput | JdMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JdMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JdMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JdMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JdMatches
    **/
    _count?: true | JdMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JdMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JdMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JdMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JdMatchMaxAggregateInputType
  }

  export type GetJdMatchAggregateType<T extends JdMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateJdMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJdMatch[P]>
      : GetScalarType<T[P], AggregateJdMatch[P]>
  }




  export type JdMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JdMatchWhereInput
    orderBy?: JdMatchOrderByWithAggregationInput | JdMatchOrderByWithAggregationInput[]
    by: JdMatchScalarFieldEnum[] | JdMatchScalarFieldEnum
    having?: JdMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JdMatchCountAggregateInputType | true
    _avg?: JdMatchAvgAggregateInputType
    _sum?: JdMatchSumAggregateInputType
    _min?: JdMatchMinAggregateInputType
    _max?: JdMatchMaxAggregateInputType
  }

  export type JdMatchGroupByOutputType = {
    id: string
    jobDescriptionId: string
    resumeId: string
    matchPercentage: number
    matchedSkills: string[]
    missingSkills: string[]
    createdAt: Date
    _count: JdMatchCountAggregateOutputType | null
    _avg: JdMatchAvgAggregateOutputType | null
    _sum: JdMatchSumAggregateOutputType | null
    _min: JdMatchMinAggregateOutputType | null
    _max: JdMatchMaxAggregateOutputType | null
  }

  type GetJdMatchGroupByPayload<T extends JdMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JdMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JdMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JdMatchGroupByOutputType[P]>
            : GetScalarType<T[P], JdMatchGroupByOutputType[P]>
        }
      >
    >


  export type JdMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobDescriptionId?: boolean
    resumeId?: boolean
    matchPercentage?: boolean
    matchedSkills?: boolean
    missingSkills?: boolean
    createdAt?: boolean
    jobDescription?: boolean | JobDescriptionDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jdMatch"]>

  export type JdMatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobDescriptionId?: boolean
    resumeId?: boolean
    matchPercentage?: boolean
    matchedSkills?: boolean
    missingSkills?: boolean
    createdAt?: boolean
    jobDescription?: boolean | JobDescriptionDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jdMatch"]>

  export type JdMatchSelectScalar = {
    id?: boolean
    jobDescriptionId?: boolean
    resumeId?: boolean
    matchPercentage?: boolean
    matchedSkills?: boolean
    missingSkills?: boolean
    createdAt?: boolean
  }

  export type JdMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobDescription?: boolean | JobDescriptionDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type JdMatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobDescription?: boolean | JobDescriptionDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $JdMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JdMatch"
    objects: {
      jobDescription: Prisma.$JobDescriptionPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobDescriptionId: string
      resumeId: string
      matchPercentage: number
      matchedSkills: string[]
      missingSkills: string[]
      createdAt: Date
    }, ExtArgs["result"]["jdMatch"]>
    composites: {}
  }

  type JdMatchGetPayload<S extends boolean | null | undefined | JdMatchDefaultArgs> = $Result.GetResult<Prisma.$JdMatchPayload, S>

  type JdMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JdMatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JdMatchCountAggregateInputType | true
    }

  export interface JdMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JdMatch'], meta: { name: 'JdMatch' } }
    /**
     * Find zero or one JdMatch that matches the filter.
     * @param {JdMatchFindUniqueArgs} args - Arguments to find a JdMatch
     * @example
     * // Get one JdMatch
     * const jdMatch = await prisma.jdMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JdMatchFindUniqueArgs>(args: SelectSubset<T, JdMatchFindUniqueArgs<ExtArgs>>): Prisma__JdMatchClient<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JdMatch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JdMatchFindUniqueOrThrowArgs} args - Arguments to find a JdMatch
     * @example
     * // Get one JdMatch
     * const jdMatch = await prisma.jdMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JdMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, JdMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JdMatchClient<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JdMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JdMatchFindFirstArgs} args - Arguments to find a JdMatch
     * @example
     * // Get one JdMatch
     * const jdMatch = await prisma.jdMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JdMatchFindFirstArgs>(args?: SelectSubset<T, JdMatchFindFirstArgs<ExtArgs>>): Prisma__JdMatchClient<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JdMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JdMatchFindFirstOrThrowArgs} args - Arguments to find a JdMatch
     * @example
     * // Get one JdMatch
     * const jdMatch = await prisma.jdMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JdMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, JdMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__JdMatchClient<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JdMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JdMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JdMatches
     * const jdMatches = await prisma.jdMatch.findMany()
     * 
     * // Get first 10 JdMatches
     * const jdMatches = await prisma.jdMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jdMatchWithIdOnly = await prisma.jdMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JdMatchFindManyArgs>(args?: SelectSubset<T, JdMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JdMatch.
     * @param {JdMatchCreateArgs} args - Arguments to create a JdMatch.
     * @example
     * // Create one JdMatch
     * const JdMatch = await prisma.jdMatch.create({
     *   data: {
     *     // ... data to create a JdMatch
     *   }
     * })
     * 
     */
    create<T extends JdMatchCreateArgs>(args: SelectSubset<T, JdMatchCreateArgs<ExtArgs>>): Prisma__JdMatchClient<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JdMatches.
     * @param {JdMatchCreateManyArgs} args - Arguments to create many JdMatches.
     * @example
     * // Create many JdMatches
     * const jdMatch = await prisma.jdMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JdMatchCreateManyArgs>(args?: SelectSubset<T, JdMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JdMatches and returns the data saved in the database.
     * @param {JdMatchCreateManyAndReturnArgs} args - Arguments to create many JdMatches.
     * @example
     * // Create many JdMatches
     * const jdMatch = await prisma.jdMatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JdMatches and only return the `id`
     * const jdMatchWithIdOnly = await prisma.jdMatch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JdMatchCreateManyAndReturnArgs>(args?: SelectSubset<T, JdMatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a JdMatch.
     * @param {JdMatchDeleteArgs} args - Arguments to delete one JdMatch.
     * @example
     * // Delete one JdMatch
     * const JdMatch = await prisma.jdMatch.delete({
     *   where: {
     *     // ... filter to delete one JdMatch
     *   }
     * })
     * 
     */
    delete<T extends JdMatchDeleteArgs>(args: SelectSubset<T, JdMatchDeleteArgs<ExtArgs>>): Prisma__JdMatchClient<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JdMatch.
     * @param {JdMatchUpdateArgs} args - Arguments to update one JdMatch.
     * @example
     * // Update one JdMatch
     * const jdMatch = await prisma.jdMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JdMatchUpdateArgs>(args: SelectSubset<T, JdMatchUpdateArgs<ExtArgs>>): Prisma__JdMatchClient<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JdMatches.
     * @param {JdMatchDeleteManyArgs} args - Arguments to filter JdMatches to delete.
     * @example
     * // Delete a few JdMatches
     * const { count } = await prisma.jdMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JdMatchDeleteManyArgs>(args?: SelectSubset<T, JdMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JdMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JdMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JdMatches
     * const jdMatch = await prisma.jdMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JdMatchUpdateManyArgs>(args: SelectSubset<T, JdMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JdMatch.
     * @param {JdMatchUpsertArgs} args - Arguments to update or create a JdMatch.
     * @example
     * // Update or create a JdMatch
     * const jdMatch = await prisma.jdMatch.upsert({
     *   create: {
     *     // ... data to create a JdMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JdMatch we want to update
     *   }
     * })
     */
    upsert<T extends JdMatchUpsertArgs>(args: SelectSubset<T, JdMatchUpsertArgs<ExtArgs>>): Prisma__JdMatchClient<$Result.GetResult<Prisma.$JdMatchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JdMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JdMatchCountArgs} args - Arguments to filter JdMatches to count.
     * @example
     * // Count the number of JdMatches
     * const count = await prisma.jdMatch.count({
     *   where: {
     *     // ... the filter for the JdMatches we want to count
     *   }
     * })
    **/
    count<T extends JdMatchCountArgs>(
      args?: Subset<T, JdMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JdMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JdMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JdMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JdMatchAggregateArgs>(args: Subset<T, JdMatchAggregateArgs>): Prisma.PrismaPromise<GetJdMatchAggregateType<T>>

    /**
     * Group by JdMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JdMatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JdMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JdMatchGroupByArgs['orderBy'] }
        : { orderBy?: JdMatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JdMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJdMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JdMatch model
   */
  readonly fields: JdMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JdMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JdMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobDescription<T extends JobDescriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDescriptionDefaultArgs<ExtArgs>>): Prisma__JobDescriptionClient<$Result.GetResult<Prisma.$JobDescriptionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JdMatch model
   */ 
  interface JdMatchFieldRefs {
    readonly id: FieldRef<"JdMatch", 'String'>
    readonly jobDescriptionId: FieldRef<"JdMatch", 'String'>
    readonly resumeId: FieldRef<"JdMatch", 'String'>
    readonly matchPercentage: FieldRef<"JdMatch", 'Float'>
    readonly matchedSkills: FieldRef<"JdMatch", 'String[]'>
    readonly missingSkills: FieldRef<"JdMatch", 'String[]'>
    readonly createdAt: FieldRef<"JdMatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JdMatch findUnique
   */
  export type JdMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    /**
     * Filter, which JdMatch to fetch.
     */
    where: JdMatchWhereUniqueInput
  }

  /**
   * JdMatch findUniqueOrThrow
   */
  export type JdMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    /**
     * Filter, which JdMatch to fetch.
     */
    where: JdMatchWhereUniqueInput
  }

  /**
   * JdMatch findFirst
   */
  export type JdMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    /**
     * Filter, which JdMatch to fetch.
     */
    where?: JdMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JdMatches to fetch.
     */
    orderBy?: JdMatchOrderByWithRelationInput | JdMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JdMatches.
     */
    cursor?: JdMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JdMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JdMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JdMatches.
     */
    distinct?: JdMatchScalarFieldEnum | JdMatchScalarFieldEnum[]
  }

  /**
   * JdMatch findFirstOrThrow
   */
  export type JdMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    /**
     * Filter, which JdMatch to fetch.
     */
    where?: JdMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JdMatches to fetch.
     */
    orderBy?: JdMatchOrderByWithRelationInput | JdMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JdMatches.
     */
    cursor?: JdMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JdMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JdMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JdMatches.
     */
    distinct?: JdMatchScalarFieldEnum | JdMatchScalarFieldEnum[]
  }

  /**
   * JdMatch findMany
   */
  export type JdMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    /**
     * Filter, which JdMatches to fetch.
     */
    where?: JdMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JdMatches to fetch.
     */
    orderBy?: JdMatchOrderByWithRelationInput | JdMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JdMatches.
     */
    cursor?: JdMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JdMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JdMatches.
     */
    skip?: number
    distinct?: JdMatchScalarFieldEnum | JdMatchScalarFieldEnum[]
  }

  /**
   * JdMatch create
   */
  export type JdMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a JdMatch.
     */
    data: XOR<JdMatchCreateInput, JdMatchUncheckedCreateInput>
  }

  /**
   * JdMatch createMany
   */
  export type JdMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JdMatches.
     */
    data: JdMatchCreateManyInput | JdMatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JdMatch createManyAndReturn
   */
  export type JdMatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JdMatches.
     */
    data: JdMatchCreateManyInput | JdMatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JdMatch update
   */
  export type JdMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a JdMatch.
     */
    data: XOR<JdMatchUpdateInput, JdMatchUncheckedUpdateInput>
    /**
     * Choose, which JdMatch to update.
     */
    where: JdMatchWhereUniqueInput
  }

  /**
   * JdMatch updateMany
   */
  export type JdMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JdMatches.
     */
    data: XOR<JdMatchUpdateManyMutationInput, JdMatchUncheckedUpdateManyInput>
    /**
     * Filter which JdMatches to update
     */
    where?: JdMatchWhereInput
  }

  /**
   * JdMatch upsert
   */
  export type JdMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the JdMatch to update in case it exists.
     */
    where: JdMatchWhereUniqueInput
    /**
     * In case the JdMatch found by the `where` argument doesn't exist, create a new JdMatch with this data.
     */
    create: XOR<JdMatchCreateInput, JdMatchUncheckedCreateInput>
    /**
     * In case the JdMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JdMatchUpdateInput, JdMatchUncheckedUpdateInput>
  }

  /**
   * JdMatch delete
   */
  export type JdMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
    /**
     * Filter which JdMatch to delete.
     */
    where: JdMatchWhereUniqueInput
  }

  /**
   * JdMatch deleteMany
   */
  export type JdMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JdMatches to delete
     */
    where?: JdMatchWhereInput
  }

  /**
   * JdMatch without action
   */
  export type JdMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdMatch
     */
    select?: JdMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JdMatchInclude<ExtArgs> | null
  }


  /**
   * Model Suggestion
   */

  export type AggregateSuggestion = {
    _count: SuggestionCountAggregateOutputType | null
    _avg: SuggestionAvgAggregateOutputType | null
    _sum: SuggestionSumAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  export type SuggestionAvgAggregateOutputType = {
    priority: number | null
  }

  export type SuggestionSumAggregateOutputType = {
    priority: number | null
  }

  export type SuggestionMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    analysisReportId: string | null
    category: string | null
    message: string | null
    priority: number | null
    source: $Enums.SuggestionSource | null
    createdAt: Date | null
  }

  export type SuggestionMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    analysisReportId: string | null
    category: string | null
    message: string | null
    priority: number | null
    source: $Enums.SuggestionSource | null
    createdAt: Date | null
  }

  export type SuggestionCountAggregateOutputType = {
    id: number
    resumeId: number
    analysisReportId: number
    category: number
    message: number
    priority: number
    source: number
    createdAt: number
    _all: number
  }


  export type SuggestionAvgAggregateInputType = {
    priority?: true
  }

  export type SuggestionSumAggregateInputType = {
    priority?: true
  }

  export type SuggestionMinAggregateInputType = {
    id?: true
    resumeId?: true
    analysisReportId?: true
    category?: true
    message?: true
    priority?: true
    source?: true
    createdAt?: true
  }

  export type SuggestionMaxAggregateInputType = {
    id?: true
    resumeId?: true
    analysisReportId?: true
    category?: true
    message?: true
    priority?: true
    source?: true
    createdAt?: true
  }

  export type SuggestionCountAggregateInputType = {
    id?: true
    resumeId?: true
    analysisReportId?: true
    category?: true
    message?: true
    priority?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type SuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestion to aggregate.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suggestions
    **/
    _count?: true | SuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuggestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuggestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuggestionMaxAggregateInputType
  }

  export type GetSuggestionAggregateType<T extends SuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuggestion[P]>
      : GetScalarType<T[P], AggregateSuggestion[P]>
  }




  export type SuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithAggregationInput | SuggestionOrderByWithAggregationInput[]
    by: SuggestionScalarFieldEnum[] | SuggestionScalarFieldEnum
    having?: SuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuggestionCountAggregateInputType | true
    _avg?: SuggestionAvgAggregateInputType
    _sum?: SuggestionSumAggregateInputType
    _min?: SuggestionMinAggregateInputType
    _max?: SuggestionMaxAggregateInputType
  }

  export type SuggestionGroupByOutputType = {
    id: string
    resumeId: string
    analysisReportId: string | null
    category: string
    message: string
    priority: number
    source: $Enums.SuggestionSource
    createdAt: Date
    _count: SuggestionCountAggregateOutputType | null
    _avg: SuggestionAvgAggregateOutputType | null
    _sum: SuggestionSumAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  type GetSuggestionGroupByPayload<T extends SuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
        }
      >
    >


  export type SuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    analysisReportId?: boolean
    category?: boolean
    message?: boolean
    priority?: boolean
    source?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    analysisReport?: boolean | Suggestion$analysisReportArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    analysisReportId?: boolean
    category?: boolean
    message?: boolean
    priority?: boolean
    source?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    analysisReport?: boolean | Suggestion$analysisReportArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectScalar = {
    id?: boolean
    resumeId?: boolean
    analysisReportId?: boolean
    category?: boolean
    message?: boolean
    priority?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type SuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    analysisReport?: boolean | Suggestion$analysisReportArgs<ExtArgs>
  }
  export type SuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    analysisReport?: boolean | Suggestion$analysisReportArgs<ExtArgs>
  }

  export type $SuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suggestion"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
      analysisReport: Prisma.$AnalysisReportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      analysisReportId: string | null
      category: string
      message: string
      priority: number
      source: $Enums.SuggestionSource
      createdAt: Date
    }, ExtArgs["result"]["suggestion"]>
    composites: {}
  }

  type SuggestionGetPayload<S extends boolean | null | undefined | SuggestionDefaultArgs> = $Result.GetResult<Prisma.$SuggestionPayload, S>

  type SuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SuggestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SuggestionCountAggregateInputType | true
    }

  export interface SuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suggestion'], meta: { name: 'Suggestion' } }
    /**
     * Find zero or one Suggestion that matches the filter.
     * @param {SuggestionFindUniqueArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuggestionFindUniqueArgs>(args: SelectSubset<T, SuggestionFindUniqueArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Suggestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SuggestionFindUniqueOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, SuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Suggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuggestionFindFirstArgs>(args?: SelectSubset<T, SuggestionFindFirstArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Suggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, SuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Suggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suggestions
     * const suggestions = await prisma.suggestion.findMany()
     * 
     * // Get first 10 Suggestions
     * const suggestions = await prisma.suggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuggestionFindManyArgs>(args?: SelectSubset<T, SuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Suggestion.
     * @param {SuggestionCreateArgs} args - Arguments to create a Suggestion.
     * @example
     * // Create one Suggestion
     * const Suggestion = await prisma.suggestion.create({
     *   data: {
     *     // ... data to create a Suggestion
     *   }
     * })
     * 
     */
    create<T extends SuggestionCreateArgs>(args: SelectSubset<T, SuggestionCreateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Suggestions.
     * @param {SuggestionCreateManyArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuggestionCreateManyArgs>(args?: SelectSubset<T, SuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suggestions and returns the data saved in the database.
     * @param {SuggestionCreateManyAndReturnArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suggestions and only return the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, SuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Suggestion.
     * @param {SuggestionDeleteArgs} args - Arguments to delete one Suggestion.
     * @example
     * // Delete one Suggestion
     * const Suggestion = await prisma.suggestion.delete({
     *   where: {
     *     // ... filter to delete one Suggestion
     *   }
     * })
     * 
     */
    delete<T extends SuggestionDeleteArgs>(args: SelectSubset<T, SuggestionDeleteArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Suggestion.
     * @param {SuggestionUpdateArgs} args - Arguments to update one Suggestion.
     * @example
     * // Update one Suggestion
     * const suggestion = await prisma.suggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuggestionUpdateArgs>(args: SelectSubset<T, SuggestionUpdateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Suggestions.
     * @param {SuggestionDeleteManyArgs} args - Arguments to filter Suggestions to delete.
     * @example
     * // Delete a few Suggestions
     * const { count } = await prisma.suggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuggestionDeleteManyArgs>(args?: SelectSubset<T, SuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suggestions
     * const suggestion = await prisma.suggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuggestionUpdateManyArgs>(args: SelectSubset<T, SuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Suggestion.
     * @param {SuggestionUpsertArgs} args - Arguments to update or create a Suggestion.
     * @example
     * // Update or create a Suggestion
     * const suggestion = await prisma.suggestion.upsert({
     *   create: {
     *     // ... data to create a Suggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suggestion we want to update
     *   }
     * })
     */
    upsert<T extends SuggestionUpsertArgs>(args: SelectSubset<T, SuggestionUpsertArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionCountArgs} args - Arguments to filter Suggestions to count.
     * @example
     * // Count the number of Suggestions
     * const count = await prisma.suggestion.count({
     *   where: {
     *     // ... the filter for the Suggestions we want to count
     *   }
     * })
    **/
    count<T extends SuggestionCountArgs>(
      args?: Subset<T, SuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuggestionAggregateArgs>(args: Subset<T, SuggestionAggregateArgs>): Prisma.PrismaPromise<GetSuggestionAggregateType<T>>

    /**
     * Group by Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuggestionGroupByArgs['orderBy'] }
        : { orderBy?: SuggestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suggestion model
   */
  readonly fields: SuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    analysisReport<T extends Suggestion$analysisReportArgs<ExtArgs> = {}>(args?: Subset<T, Suggestion$analysisReportArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Suggestion model
   */ 
  interface SuggestionFieldRefs {
    readonly id: FieldRef<"Suggestion", 'String'>
    readonly resumeId: FieldRef<"Suggestion", 'String'>
    readonly analysisReportId: FieldRef<"Suggestion", 'String'>
    readonly category: FieldRef<"Suggestion", 'String'>
    readonly message: FieldRef<"Suggestion", 'String'>
    readonly priority: FieldRef<"Suggestion", 'Int'>
    readonly source: FieldRef<"Suggestion", 'SuggestionSource'>
    readonly createdAt: FieldRef<"Suggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Suggestion findUnique
   */
  export type SuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findUniqueOrThrow
   */
  export type SuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findFirst
   */
  export type SuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findFirstOrThrow
   */
  export type SuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findMany
   */
  export type SuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestions to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion create
   */
  export type SuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Suggestion.
     */
    data: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
  }

  /**
   * Suggestion createMany
   */
  export type SuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suggestion createManyAndReturn
   */
  export type SuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suggestion update
   */
  export type SuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Suggestion.
     */
    data: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
    /**
     * Choose, which Suggestion to update.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion updateMany
   */
  export type SuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suggestions.
     */
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyInput>
    /**
     * Filter which Suggestions to update
     */
    where?: SuggestionWhereInput
  }

  /**
   * Suggestion upsert
   */
  export type SuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Suggestion to update in case it exists.
     */
    where: SuggestionWhereUniqueInput
    /**
     * In case the Suggestion found by the `where` argument doesn't exist, create a new Suggestion with this data.
     */
    create: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
    /**
     * In case the Suggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
  }

  /**
   * Suggestion delete
   */
  export type SuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter which Suggestion to delete.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion deleteMany
   */
  export type SuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestions to delete
     */
    where?: SuggestionWhereInput
  }

  /**
   * Suggestion.analysisReport
   */
  export type Suggestion$analysisReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    where?: AnalysisReportWhereInput
  }

  /**
   * Suggestion without action
   */
  export type SuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
  }


  /**
   * Model UserLlmConfig
   */

  export type AggregateUserLlmConfig = {
    _count: UserLlmConfigCountAggregateOutputType | null
    _min: UserLlmConfigMinAggregateOutputType | null
    _max: UserLlmConfigMaxAggregateOutputType | null
  }

  export type UserLlmConfigMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.LlmProvider | null
    model: string | null
    encryptedApiKey: string | null
    baseUrl: string | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLlmConfigMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.LlmProvider | null
    model: string | null
    encryptedApiKey: string | null
    baseUrl: string | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLlmConfigCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    model: number
    encryptedApiKey: number
    baseUrl: number
    isEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserLlmConfigMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    model?: true
    encryptedApiKey?: true
    baseUrl?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLlmConfigMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    model?: true
    encryptedApiKey?: true
    baseUrl?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLlmConfigCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    model?: true
    encryptedApiKey?: true
    baseUrl?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserLlmConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLlmConfig to aggregate.
     */
    where?: UserLlmConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLlmConfigs to fetch.
     */
    orderBy?: UserLlmConfigOrderByWithRelationInput | UserLlmConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLlmConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLlmConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLlmConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLlmConfigs
    **/
    _count?: true | UserLlmConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLlmConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLlmConfigMaxAggregateInputType
  }

  export type GetUserLlmConfigAggregateType<T extends UserLlmConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLlmConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLlmConfig[P]>
      : GetScalarType<T[P], AggregateUserLlmConfig[P]>
  }




  export type UserLlmConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLlmConfigWhereInput
    orderBy?: UserLlmConfigOrderByWithAggregationInput | UserLlmConfigOrderByWithAggregationInput[]
    by: UserLlmConfigScalarFieldEnum[] | UserLlmConfigScalarFieldEnum
    having?: UserLlmConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLlmConfigCountAggregateInputType | true
    _min?: UserLlmConfigMinAggregateInputType
    _max?: UserLlmConfigMaxAggregateInputType
  }

  export type UserLlmConfigGroupByOutputType = {
    id: string
    userId: string
    provider: $Enums.LlmProvider
    model: string
    encryptedApiKey: string
    baseUrl: string | null
    isEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserLlmConfigCountAggregateOutputType | null
    _min: UserLlmConfigMinAggregateOutputType | null
    _max: UserLlmConfigMaxAggregateOutputType | null
  }

  type GetUserLlmConfigGroupByPayload<T extends UserLlmConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLlmConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLlmConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLlmConfigGroupByOutputType[P]>
            : GetScalarType<T[P], UserLlmConfigGroupByOutputType[P]>
        }
      >
    >


  export type UserLlmConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    model?: boolean
    encryptedApiKey?: boolean
    baseUrl?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    usageLogs?: boolean | UserLlmConfig$usageLogsArgs<ExtArgs>
    _count?: boolean | UserLlmConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLlmConfig"]>

  export type UserLlmConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    model?: boolean
    encryptedApiKey?: boolean
    baseUrl?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLlmConfig"]>

  export type UserLlmConfigSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    model?: boolean
    encryptedApiKey?: boolean
    baseUrl?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserLlmConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    usageLogs?: boolean | UserLlmConfig$usageLogsArgs<ExtArgs>
    _count?: boolean | UserLlmConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserLlmConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserLlmConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLlmConfig"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      usageLogs: Prisma.$LlmUsageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: $Enums.LlmProvider
      model: string
      encryptedApiKey: string
      baseUrl: string | null
      isEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userLlmConfig"]>
    composites: {}
  }

  type UserLlmConfigGetPayload<S extends boolean | null | undefined | UserLlmConfigDefaultArgs> = $Result.GetResult<Prisma.$UserLlmConfigPayload, S>

  type UserLlmConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLlmConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserLlmConfigCountAggregateInputType | true
    }

  export interface UserLlmConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLlmConfig'], meta: { name: 'UserLlmConfig' } }
    /**
     * Find zero or one UserLlmConfig that matches the filter.
     * @param {UserLlmConfigFindUniqueArgs} args - Arguments to find a UserLlmConfig
     * @example
     * // Get one UserLlmConfig
     * const userLlmConfig = await prisma.userLlmConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLlmConfigFindUniqueArgs>(args: SelectSubset<T, UserLlmConfigFindUniqueArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserLlmConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserLlmConfigFindUniqueOrThrowArgs} args - Arguments to find a UserLlmConfig
     * @example
     * // Get one UserLlmConfig
     * const userLlmConfig = await prisma.userLlmConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLlmConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLlmConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserLlmConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLlmConfigFindFirstArgs} args - Arguments to find a UserLlmConfig
     * @example
     * // Get one UserLlmConfig
     * const userLlmConfig = await prisma.userLlmConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLlmConfigFindFirstArgs>(args?: SelectSubset<T, UserLlmConfigFindFirstArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserLlmConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLlmConfigFindFirstOrThrowArgs} args - Arguments to find a UserLlmConfig
     * @example
     * // Get one UserLlmConfig
     * const userLlmConfig = await prisma.userLlmConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLlmConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLlmConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserLlmConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLlmConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLlmConfigs
     * const userLlmConfigs = await prisma.userLlmConfig.findMany()
     * 
     * // Get first 10 UserLlmConfigs
     * const userLlmConfigs = await prisma.userLlmConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLlmConfigWithIdOnly = await prisma.userLlmConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLlmConfigFindManyArgs>(args?: SelectSubset<T, UserLlmConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserLlmConfig.
     * @param {UserLlmConfigCreateArgs} args - Arguments to create a UserLlmConfig.
     * @example
     * // Create one UserLlmConfig
     * const UserLlmConfig = await prisma.userLlmConfig.create({
     *   data: {
     *     // ... data to create a UserLlmConfig
     *   }
     * })
     * 
     */
    create<T extends UserLlmConfigCreateArgs>(args: SelectSubset<T, UserLlmConfigCreateArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserLlmConfigs.
     * @param {UserLlmConfigCreateManyArgs} args - Arguments to create many UserLlmConfigs.
     * @example
     * // Create many UserLlmConfigs
     * const userLlmConfig = await prisma.userLlmConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLlmConfigCreateManyArgs>(args?: SelectSubset<T, UserLlmConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLlmConfigs and returns the data saved in the database.
     * @param {UserLlmConfigCreateManyAndReturnArgs} args - Arguments to create many UserLlmConfigs.
     * @example
     * // Create many UserLlmConfigs
     * const userLlmConfig = await prisma.userLlmConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLlmConfigs and only return the `id`
     * const userLlmConfigWithIdOnly = await prisma.userLlmConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLlmConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLlmConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserLlmConfig.
     * @param {UserLlmConfigDeleteArgs} args - Arguments to delete one UserLlmConfig.
     * @example
     * // Delete one UserLlmConfig
     * const UserLlmConfig = await prisma.userLlmConfig.delete({
     *   where: {
     *     // ... filter to delete one UserLlmConfig
     *   }
     * })
     * 
     */
    delete<T extends UserLlmConfigDeleteArgs>(args: SelectSubset<T, UserLlmConfigDeleteArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserLlmConfig.
     * @param {UserLlmConfigUpdateArgs} args - Arguments to update one UserLlmConfig.
     * @example
     * // Update one UserLlmConfig
     * const userLlmConfig = await prisma.userLlmConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLlmConfigUpdateArgs>(args: SelectSubset<T, UserLlmConfigUpdateArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserLlmConfigs.
     * @param {UserLlmConfigDeleteManyArgs} args - Arguments to filter UserLlmConfigs to delete.
     * @example
     * // Delete a few UserLlmConfigs
     * const { count } = await prisma.userLlmConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLlmConfigDeleteManyArgs>(args?: SelectSubset<T, UserLlmConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLlmConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLlmConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLlmConfigs
     * const userLlmConfig = await prisma.userLlmConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLlmConfigUpdateManyArgs>(args: SelectSubset<T, UserLlmConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLlmConfig.
     * @param {UserLlmConfigUpsertArgs} args - Arguments to update or create a UserLlmConfig.
     * @example
     * // Update or create a UserLlmConfig
     * const userLlmConfig = await prisma.userLlmConfig.upsert({
     *   create: {
     *     // ... data to create a UserLlmConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLlmConfig we want to update
     *   }
     * })
     */
    upsert<T extends UserLlmConfigUpsertArgs>(args: SelectSubset<T, UserLlmConfigUpsertArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserLlmConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLlmConfigCountArgs} args - Arguments to filter UserLlmConfigs to count.
     * @example
     * // Count the number of UserLlmConfigs
     * const count = await prisma.userLlmConfig.count({
     *   where: {
     *     // ... the filter for the UserLlmConfigs we want to count
     *   }
     * })
    **/
    count<T extends UserLlmConfigCountArgs>(
      args?: Subset<T, UserLlmConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLlmConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLlmConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLlmConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLlmConfigAggregateArgs>(args: Subset<T, UserLlmConfigAggregateArgs>): Prisma.PrismaPromise<GetUserLlmConfigAggregateType<T>>

    /**
     * Group by UserLlmConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLlmConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLlmConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLlmConfigGroupByArgs['orderBy'] }
        : { orderBy?: UserLlmConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLlmConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLlmConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLlmConfig model
   */
  readonly fields: UserLlmConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLlmConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLlmConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    usageLogs<T extends UserLlmConfig$usageLogsArgs<ExtArgs> = {}>(args?: Subset<T, UserLlmConfig$usageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLlmConfig model
   */ 
  interface UserLlmConfigFieldRefs {
    readonly id: FieldRef<"UserLlmConfig", 'String'>
    readonly userId: FieldRef<"UserLlmConfig", 'String'>
    readonly provider: FieldRef<"UserLlmConfig", 'LlmProvider'>
    readonly model: FieldRef<"UserLlmConfig", 'String'>
    readonly encryptedApiKey: FieldRef<"UserLlmConfig", 'String'>
    readonly baseUrl: FieldRef<"UserLlmConfig", 'String'>
    readonly isEnabled: FieldRef<"UserLlmConfig", 'Boolean'>
    readonly createdAt: FieldRef<"UserLlmConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"UserLlmConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLlmConfig findUnique
   */
  export type UserLlmConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    /**
     * Filter, which UserLlmConfig to fetch.
     */
    where: UserLlmConfigWhereUniqueInput
  }

  /**
   * UserLlmConfig findUniqueOrThrow
   */
  export type UserLlmConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    /**
     * Filter, which UserLlmConfig to fetch.
     */
    where: UserLlmConfigWhereUniqueInput
  }

  /**
   * UserLlmConfig findFirst
   */
  export type UserLlmConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    /**
     * Filter, which UserLlmConfig to fetch.
     */
    where?: UserLlmConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLlmConfigs to fetch.
     */
    orderBy?: UserLlmConfigOrderByWithRelationInput | UserLlmConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLlmConfigs.
     */
    cursor?: UserLlmConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLlmConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLlmConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLlmConfigs.
     */
    distinct?: UserLlmConfigScalarFieldEnum | UserLlmConfigScalarFieldEnum[]
  }

  /**
   * UserLlmConfig findFirstOrThrow
   */
  export type UserLlmConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    /**
     * Filter, which UserLlmConfig to fetch.
     */
    where?: UserLlmConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLlmConfigs to fetch.
     */
    orderBy?: UserLlmConfigOrderByWithRelationInput | UserLlmConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLlmConfigs.
     */
    cursor?: UserLlmConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLlmConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLlmConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLlmConfigs.
     */
    distinct?: UserLlmConfigScalarFieldEnum | UserLlmConfigScalarFieldEnum[]
  }

  /**
   * UserLlmConfig findMany
   */
  export type UserLlmConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    /**
     * Filter, which UserLlmConfigs to fetch.
     */
    where?: UserLlmConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLlmConfigs to fetch.
     */
    orderBy?: UserLlmConfigOrderByWithRelationInput | UserLlmConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLlmConfigs.
     */
    cursor?: UserLlmConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLlmConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLlmConfigs.
     */
    skip?: number
    distinct?: UserLlmConfigScalarFieldEnum | UserLlmConfigScalarFieldEnum[]
  }

  /**
   * UserLlmConfig create
   */
  export type UserLlmConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLlmConfig.
     */
    data: XOR<UserLlmConfigCreateInput, UserLlmConfigUncheckedCreateInput>
  }

  /**
   * UserLlmConfig createMany
   */
  export type UserLlmConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLlmConfigs.
     */
    data: UserLlmConfigCreateManyInput | UserLlmConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLlmConfig createManyAndReturn
   */
  export type UserLlmConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserLlmConfigs.
     */
    data: UserLlmConfigCreateManyInput | UserLlmConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLlmConfig update
   */
  export type UserLlmConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLlmConfig.
     */
    data: XOR<UserLlmConfigUpdateInput, UserLlmConfigUncheckedUpdateInput>
    /**
     * Choose, which UserLlmConfig to update.
     */
    where: UserLlmConfigWhereUniqueInput
  }

  /**
   * UserLlmConfig updateMany
   */
  export type UserLlmConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLlmConfigs.
     */
    data: XOR<UserLlmConfigUpdateManyMutationInput, UserLlmConfigUncheckedUpdateManyInput>
    /**
     * Filter which UserLlmConfigs to update
     */
    where?: UserLlmConfigWhereInput
  }

  /**
   * UserLlmConfig upsert
   */
  export type UserLlmConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLlmConfig to update in case it exists.
     */
    where: UserLlmConfigWhereUniqueInput
    /**
     * In case the UserLlmConfig found by the `where` argument doesn't exist, create a new UserLlmConfig with this data.
     */
    create: XOR<UserLlmConfigCreateInput, UserLlmConfigUncheckedCreateInput>
    /**
     * In case the UserLlmConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLlmConfigUpdateInput, UserLlmConfigUncheckedUpdateInput>
  }

  /**
   * UserLlmConfig delete
   */
  export type UserLlmConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
    /**
     * Filter which UserLlmConfig to delete.
     */
    where: UserLlmConfigWhereUniqueInput
  }

  /**
   * UserLlmConfig deleteMany
   */
  export type UserLlmConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLlmConfigs to delete
     */
    where?: UserLlmConfigWhereInput
  }

  /**
   * UserLlmConfig.usageLogs
   */
  export type UserLlmConfig$usageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    where?: LlmUsageLogWhereInput
    orderBy?: LlmUsageLogOrderByWithRelationInput | LlmUsageLogOrderByWithRelationInput[]
    cursor?: LlmUsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LlmUsageLogScalarFieldEnum | LlmUsageLogScalarFieldEnum[]
  }

  /**
   * UserLlmConfig without action
   */
  export type UserLlmConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLlmConfig
     */
    select?: UserLlmConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLlmConfigInclude<ExtArgs> | null
  }


  /**
   * Model LlmUsageLog
   */

  export type AggregateLlmUsageLog = {
    _count: LlmUsageLogCountAggregateOutputType | null
    _avg: LlmUsageLogAvgAggregateOutputType | null
    _sum: LlmUsageLogSumAggregateOutputType | null
    _min: LlmUsageLogMinAggregateOutputType | null
    _max: LlmUsageLogMaxAggregateOutputType | null
  }

  export type LlmUsageLogAvgAggregateOutputType = {
    tokensUsed: number | null
  }

  export type LlmUsageLogSumAggregateOutputType = {
    tokensUsed: number | null
  }

  export type LlmUsageLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    configId: string | null
    tokensUsed: number | null
    requestType: string | null
    createdAt: Date | null
  }

  export type LlmUsageLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    configId: string | null
    tokensUsed: number | null
    requestType: string | null
    createdAt: Date | null
  }

  export type LlmUsageLogCountAggregateOutputType = {
    id: number
    userId: number
    configId: number
    tokensUsed: number
    requestType: number
    createdAt: number
    _all: number
  }


  export type LlmUsageLogAvgAggregateInputType = {
    tokensUsed?: true
  }

  export type LlmUsageLogSumAggregateInputType = {
    tokensUsed?: true
  }

  export type LlmUsageLogMinAggregateInputType = {
    id?: true
    userId?: true
    configId?: true
    tokensUsed?: true
    requestType?: true
    createdAt?: true
  }

  export type LlmUsageLogMaxAggregateInputType = {
    id?: true
    userId?: true
    configId?: true
    tokensUsed?: true
    requestType?: true
    createdAt?: true
  }

  export type LlmUsageLogCountAggregateInputType = {
    id?: true
    userId?: true
    configId?: true
    tokensUsed?: true
    requestType?: true
    createdAt?: true
    _all?: true
  }

  export type LlmUsageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LlmUsageLog to aggregate.
     */
    where?: LlmUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmUsageLogs to fetch.
     */
    orderBy?: LlmUsageLogOrderByWithRelationInput | LlmUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LlmUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LlmUsageLogs
    **/
    _count?: true | LlmUsageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LlmUsageLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LlmUsageLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LlmUsageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LlmUsageLogMaxAggregateInputType
  }

  export type GetLlmUsageLogAggregateType<T extends LlmUsageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateLlmUsageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLlmUsageLog[P]>
      : GetScalarType<T[P], AggregateLlmUsageLog[P]>
  }




  export type LlmUsageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LlmUsageLogWhereInput
    orderBy?: LlmUsageLogOrderByWithAggregationInput | LlmUsageLogOrderByWithAggregationInput[]
    by: LlmUsageLogScalarFieldEnum[] | LlmUsageLogScalarFieldEnum
    having?: LlmUsageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LlmUsageLogCountAggregateInputType | true
    _avg?: LlmUsageLogAvgAggregateInputType
    _sum?: LlmUsageLogSumAggregateInputType
    _min?: LlmUsageLogMinAggregateInputType
    _max?: LlmUsageLogMaxAggregateInputType
  }

  export type LlmUsageLogGroupByOutputType = {
    id: string
    userId: string
    configId: string
    tokensUsed: number
    requestType: string
    createdAt: Date
    _count: LlmUsageLogCountAggregateOutputType | null
    _avg: LlmUsageLogAvgAggregateOutputType | null
    _sum: LlmUsageLogSumAggregateOutputType | null
    _min: LlmUsageLogMinAggregateOutputType | null
    _max: LlmUsageLogMaxAggregateOutputType | null
  }

  type GetLlmUsageLogGroupByPayload<T extends LlmUsageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LlmUsageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LlmUsageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LlmUsageLogGroupByOutputType[P]>
            : GetScalarType<T[P], LlmUsageLogGroupByOutputType[P]>
        }
      >
    >


  export type LlmUsageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    configId?: boolean
    tokensUsed?: boolean
    requestType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | UserLlmConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["llmUsageLog"]>

  export type LlmUsageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    configId?: boolean
    tokensUsed?: boolean
    requestType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | UserLlmConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["llmUsageLog"]>

  export type LlmUsageLogSelectScalar = {
    id?: boolean
    userId?: boolean
    configId?: boolean
    tokensUsed?: boolean
    requestType?: boolean
    createdAt?: boolean
  }

  export type LlmUsageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | UserLlmConfigDefaultArgs<ExtArgs>
  }
  export type LlmUsageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | UserLlmConfigDefaultArgs<ExtArgs>
  }

  export type $LlmUsageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LlmUsageLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      config: Prisma.$UserLlmConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      configId: string
      tokensUsed: number
      requestType: string
      createdAt: Date
    }, ExtArgs["result"]["llmUsageLog"]>
    composites: {}
  }

  type LlmUsageLogGetPayload<S extends boolean | null | undefined | LlmUsageLogDefaultArgs> = $Result.GetResult<Prisma.$LlmUsageLogPayload, S>

  type LlmUsageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LlmUsageLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LlmUsageLogCountAggregateInputType | true
    }

  export interface LlmUsageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LlmUsageLog'], meta: { name: 'LlmUsageLog' } }
    /**
     * Find zero or one LlmUsageLog that matches the filter.
     * @param {LlmUsageLogFindUniqueArgs} args - Arguments to find a LlmUsageLog
     * @example
     * // Get one LlmUsageLog
     * const llmUsageLog = await prisma.llmUsageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LlmUsageLogFindUniqueArgs>(args: SelectSubset<T, LlmUsageLogFindUniqueArgs<ExtArgs>>): Prisma__LlmUsageLogClient<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LlmUsageLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LlmUsageLogFindUniqueOrThrowArgs} args - Arguments to find a LlmUsageLog
     * @example
     * // Get one LlmUsageLog
     * const llmUsageLog = await prisma.llmUsageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LlmUsageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, LlmUsageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LlmUsageLogClient<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LlmUsageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmUsageLogFindFirstArgs} args - Arguments to find a LlmUsageLog
     * @example
     * // Get one LlmUsageLog
     * const llmUsageLog = await prisma.llmUsageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LlmUsageLogFindFirstArgs>(args?: SelectSubset<T, LlmUsageLogFindFirstArgs<ExtArgs>>): Prisma__LlmUsageLogClient<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LlmUsageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmUsageLogFindFirstOrThrowArgs} args - Arguments to find a LlmUsageLog
     * @example
     * // Get one LlmUsageLog
     * const llmUsageLog = await prisma.llmUsageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LlmUsageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, LlmUsageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LlmUsageLogClient<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LlmUsageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmUsageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LlmUsageLogs
     * const llmUsageLogs = await prisma.llmUsageLog.findMany()
     * 
     * // Get first 10 LlmUsageLogs
     * const llmUsageLogs = await prisma.llmUsageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const llmUsageLogWithIdOnly = await prisma.llmUsageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LlmUsageLogFindManyArgs>(args?: SelectSubset<T, LlmUsageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LlmUsageLog.
     * @param {LlmUsageLogCreateArgs} args - Arguments to create a LlmUsageLog.
     * @example
     * // Create one LlmUsageLog
     * const LlmUsageLog = await prisma.llmUsageLog.create({
     *   data: {
     *     // ... data to create a LlmUsageLog
     *   }
     * })
     * 
     */
    create<T extends LlmUsageLogCreateArgs>(args: SelectSubset<T, LlmUsageLogCreateArgs<ExtArgs>>): Prisma__LlmUsageLogClient<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LlmUsageLogs.
     * @param {LlmUsageLogCreateManyArgs} args - Arguments to create many LlmUsageLogs.
     * @example
     * // Create many LlmUsageLogs
     * const llmUsageLog = await prisma.llmUsageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LlmUsageLogCreateManyArgs>(args?: SelectSubset<T, LlmUsageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LlmUsageLogs and returns the data saved in the database.
     * @param {LlmUsageLogCreateManyAndReturnArgs} args - Arguments to create many LlmUsageLogs.
     * @example
     * // Create many LlmUsageLogs
     * const llmUsageLog = await prisma.llmUsageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LlmUsageLogs and only return the `id`
     * const llmUsageLogWithIdOnly = await prisma.llmUsageLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LlmUsageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, LlmUsageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LlmUsageLog.
     * @param {LlmUsageLogDeleteArgs} args - Arguments to delete one LlmUsageLog.
     * @example
     * // Delete one LlmUsageLog
     * const LlmUsageLog = await prisma.llmUsageLog.delete({
     *   where: {
     *     // ... filter to delete one LlmUsageLog
     *   }
     * })
     * 
     */
    delete<T extends LlmUsageLogDeleteArgs>(args: SelectSubset<T, LlmUsageLogDeleteArgs<ExtArgs>>): Prisma__LlmUsageLogClient<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LlmUsageLog.
     * @param {LlmUsageLogUpdateArgs} args - Arguments to update one LlmUsageLog.
     * @example
     * // Update one LlmUsageLog
     * const llmUsageLog = await prisma.llmUsageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LlmUsageLogUpdateArgs>(args: SelectSubset<T, LlmUsageLogUpdateArgs<ExtArgs>>): Prisma__LlmUsageLogClient<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LlmUsageLogs.
     * @param {LlmUsageLogDeleteManyArgs} args - Arguments to filter LlmUsageLogs to delete.
     * @example
     * // Delete a few LlmUsageLogs
     * const { count } = await prisma.llmUsageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LlmUsageLogDeleteManyArgs>(args?: SelectSubset<T, LlmUsageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LlmUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmUsageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LlmUsageLogs
     * const llmUsageLog = await prisma.llmUsageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LlmUsageLogUpdateManyArgs>(args: SelectSubset<T, LlmUsageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LlmUsageLog.
     * @param {LlmUsageLogUpsertArgs} args - Arguments to update or create a LlmUsageLog.
     * @example
     * // Update or create a LlmUsageLog
     * const llmUsageLog = await prisma.llmUsageLog.upsert({
     *   create: {
     *     // ... data to create a LlmUsageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LlmUsageLog we want to update
     *   }
     * })
     */
    upsert<T extends LlmUsageLogUpsertArgs>(args: SelectSubset<T, LlmUsageLogUpsertArgs<ExtArgs>>): Prisma__LlmUsageLogClient<$Result.GetResult<Prisma.$LlmUsageLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LlmUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmUsageLogCountArgs} args - Arguments to filter LlmUsageLogs to count.
     * @example
     * // Count the number of LlmUsageLogs
     * const count = await prisma.llmUsageLog.count({
     *   where: {
     *     // ... the filter for the LlmUsageLogs we want to count
     *   }
     * })
    **/
    count<T extends LlmUsageLogCountArgs>(
      args?: Subset<T, LlmUsageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LlmUsageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LlmUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmUsageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LlmUsageLogAggregateArgs>(args: Subset<T, LlmUsageLogAggregateArgs>): Prisma.PrismaPromise<GetLlmUsageLogAggregateType<T>>

    /**
     * Group by LlmUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmUsageLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LlmUsageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LlmUsageLogGroupByArgs['orderBy'] }
        : { orderBy?: LlmUsageLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LlmUsageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLlmUsageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LlmUsageLog model
   */
  readonly fields: LlmUsageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LlmUsageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LlmUsageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    config<T extends UserLlmConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserLlmConfigDefaultArgs<ExtArgs>>): Prisma__UserLlmConfigClient<$Result.GetResult<Prisma.$UserLlmConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LlmUsageLog model
   */ 
  interface LlmUsageLogFieldRefs {
    readonly id: FieldRef<"LlmUsageLog", 'String'>
    readonly userId: FieldRef<"LlmUsageLog", 'String'>
    readonly configId: FieldRef<"LlmUsageLog", 'String'>
    readonly tokensUsed: FieldRef<"LlmUsageLog", 'Int'>
    readonly requestType: FieldRef<"LlmUsageLog", 'String'>
    readonly createdAt: FieldRef<"LlmUsageLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LlmUsageLog findUnique
   */
  export type LlmUsageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which LlmUsageLog to fetch.
     */
    where: LlmUsageLogWhereUniqueInput
  }

  /**
   * LlmUsageLog findUniqueOrThrow
   */
  export type LlmUsageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which LlmUsageLog to fetch.
     */
    where: LlmUsageLogWhereUniqueInput
  }

  /**
   * LlmUsageLog findFirst
   */
  export type LlmUsageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which LlmUsageLog to fetch.
     */
    where?: LlmUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmUsageLogs to fetch.
     */
    orderBy?: LlmUsageLogOrderByWithRelationInput | LlmUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LlmUsageLogs.
     */
    cursor?: LlmUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LlmUsageLogs.
     */
    distinct?: LlmUsageLogScalarFieldEnum | LlmUsageLogScalarFieldEnum[]
  }

  /**
   * LlmUsageLog findFirstOrThrow
   */
  export type LlmUsageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which LlmUsageLog to fetch.
     */
    where?: LlmUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmUsageLogs to fetch.
     */
    orderBy?: LlmUsageLogOrderByWithRelationInput | LlmUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LlmUsageLogs.
     */
    cursor?: LlmUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LlmUsageLogs.
     */
    distinct?: LlmUsageLogScalarFieldEnum | LlmUsageLogScalarFieldEnum[]
  }

  /**
   * LlmUsageLog findMany
   */
  export type LlmUsageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    /**
     * Filter, which LlmUsageLogs to fetch.
     */
    where?: LlmUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmUsageLogs to fetch.
     */
    orderBy?: LlmUsageLogOrderByWithRelationInput | LlmUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LlmUsageLogs.
     */
    cursor?: LlmUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmUsageLogs.
     */
    skip?: number
    distinct?: LlmUsageLogScalarFieldEnum | LlmUsageLogScalarFieldEnum[]
  }

  /**
   * LlmUsageLog create
   */
  export type LlmUsageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a LlmUsageLog.
     */
    data: XOR<LlmUsageLogCreateInput, LlmUsageLogUncheckedCreateInput>
  }

  /**
   * LlmUsageLog createMany
   */
  export type LlmUsageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LlmUsageLogs.
     */
    data: LlmUsageLogCreateManyInput | LlmUsageLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LlmUsageLog createManyAndReturn
   */
  export type LlmUsageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LlmUsageLogs.
     */
    data: LlmUsageLogCreateManyInput | LlmUsageLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LlmUsageLog update
   */
  export type LlmUsageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a LlmUsageLog.
     */
    data: XOR<LlmUsageLogUpdateInput, LlmUsageLogUncheckedUpdateInput>
    /**
     * Choose, which LlmUsageLog to update.
     */
    where: LlmUsageLogWhereUniqueInput
  }

  /**
   * LlmUsageLog updateMany
   */
  export type LlmUsageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LlmUsageLogs.
     */
    data: XOR<LlmUsageLogUpdateManyMutationInput, LlmUsageLogUncheckedUpdateManyInput>
    /**
     * Filter which LlmUsageLogs to update
     */
    where?: LlmUsageLogWhereInput
  }

  /**
   * LlmUsageLog upsert
   */
  export type LlmUsageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the LlmUsageLog to update in case it exists.
     */
    where: LlmUsageLogWhereUniqueInput
    /**
     * In case the LlmUsageLog found by the `where` argument doesn't exist, create a new LlmUsageLog with this data.
     */
    create: XOR<LlmUsageLogCreateInput, LlmUsageLogUncheckedCreateInput>
    /**
     * In case the LlmUsageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LlmUsageLogUpdateInput, LlmUsageLogUncheckedUpdateInput>
  }

  /**
   * LlmUsageLog delete
   */
  export type LlmUsageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
    /**
     * Filter which LlmUsageLog to delete.
     */
    where: LlmUsageLogWhereUniqueInput
  }

  /**
   * LlmUsageLog deleteMany
   */
  export type LlmUsageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LlmUsageLogs to delete
     */
    where?: LlmUsageLogWhereInput
  }

  /**
   * LlmUsageLog without action
   */
  export type LlmUsageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmUsageLog
     */
    select?: LlmUsageLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LlmUsageLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserCredentialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCredentialScalarFieldEnum = (typeof UserCredentialScalarFieldEnum)[keyof typeof UserCredentialScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    originalName: 'originalName',
    fileName: 'fileName',
    filePath: 'filePath',
    mimeType: 'mimeType',
    fileSize: 'fileSize',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const ResumeVersionScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    version: 'version',
    fileName: 'fileName',
    filePath: 'filePath',
    createdAt: 'createdAt'
  };

  export type ResumeVersionScalarFieldEnum = (typeof ResumeVersionScalarFieldEnum)[keyof typeof ResumeVersionScalarFieldEnum]


  export const AnalysisReportScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    status: 'status',
    overallScore: 'overallScore',
    skillsScore: 'skillsScore',
    keywordsScore: 'keywordsScore',
    experienceScore: 'experienceScore',
    formattingScore: 'formattingScore',
    rawText: 'rawText',
    extractedSkills: 'extractedSkills',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnalysisReportScalarFieldEnum = (typeof AnalysisReportScalarFieldEnum)[keyof typeof AnalysisReportScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ResumeSkillScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    skillId: 'skillId'
  };

  export type ResumeSkillScalarFieldEnum = (typeof ResumeSkillScalarFieldEnum)[keyof typeof ResumeSkillScalarFieldEnum]


  export const JobDescriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    extractedSkills: 'extractedSkills',
    createdAt: 'createdAt'
  };

  export type JobDescriptionScalarFieldEnum = (typeof JobDescriptionScalarFieldEnum)[keyof typeof JobDescriptionScalarFieldEnum]


  export const JdMatchScalarFieldEnum: {
    id: 'id',
    jobDescriptionId: 'jobDescriptionId',
    resumeId: 'resumeId',
    matchPercentage: 'matchPercentage',
    matchedSkills: 'matchedSkills',
    missingSkills: 'missingSkills',
    createdAt: 'createdAt'
  };

  export type JdMatchScalarFieldEnum = (typeof JdMatchScalarFieldEnum)[keyof typeof JdMatchScalarFieldEnum]


  export const SuggestionScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    analysisReportId: 'analysisReportId',
    category: 'category',
    message: 'message',
    priority: 'priority',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type SuggestionScalarFieldEnum = (typeof SuggestionScalarFieldEnum)[keyof typeof SuggestionScalarFieldEnum]


  export const UserLlmConfigScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    model: 'model',
    encryptedApiKey: 'encryptedApiKey',
    baseUrl: 'baseUrl',
    isEnabled: 'isEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserLlmConfigScalarFieldEnum = (typeof UserLlmConfigScalarFieldEnum)[keyof typeof UserLlmConfigScalarFieldEnum]


  export const LlmUsageLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    configId: 'configId',
    tokensUsed: 'tokensUsed',
    requestType: 'requestType',
    createdAt: 'createdAt'
  };

  export type LlmUsageLogScalarFieldEnum = (typeof LlmUsageLogScalarFieldEnum)[keyof typeof LlmUsageLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ResumeStatus'
   */
  export type EnumResumeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResumeStatus'>
    


  /**
   * Reference to a field of type 'ResumeStatus[]'
   */
  export type ListEnumResumeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResumeStatus[]'>
    


  /**
   * Reference to a field of type 'AnalysisStatus'
   */
  export type EnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus'>
    


  /**
   * Reference to a field of type 'AnalysisStatus[]'
   */
  export type ListEnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'SuggestionSource'
   */
  export type EnumSuggestionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuggestionSource'>
    


  /**
   * Reference to a field of type 'SuggestionSource[]'
   */
  export type ListEnumSuggestionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuggestionSource[]'>
    


  /**
   * Reference to a field of type 'LlmProvider'
   */
  export type EnumLlmProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LlmProvider'>
    


  /**
   * Reference to a field of type 'LlmProvider[]'
   */
  export type ListEnumLlmProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LlmProvider[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    credentials?: XOR<UserCredentialNullableRelationFilter, UserCredentialWhereInput> | null
    sessions?: SessionListRelationFilter
    resumes?: ResumeListRelationFilter
    jobDescriptions?: JobDescriptionListRelationFilter
    llmConfig?: XOR<UserLlmConfigNullableRelationFilter, UserLlmConfigWhereInput> | null
    llmUsageLogs?: LlmUsageLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credentials?: UserCredentialOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    resumes?: ResumeOrderByRelationAggregateInput
    jobDescriptions?: JobDescriptionOrderByRelationAggregateInput
    llmConfig?: UserLlmConfigOrderByWithRelationInput
    llmUsageLogs?: LlmUsageLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    credentials?: XOR<UserCredentialNullableRelationFilter, UserCredentialWhereInput> | null
    sessions?: SessionListRelationFilter
    resumes?: ResumeListRelationFilter
    jobDescriptions?: JobDescriptionListRelationFilter
    llmConfig?: XOR<UserLlmConfigNullableRelationFilter, UserLlmConfigWhereInput> | null
    llmUsageLogs?: LlmUsageLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserCredentialWhereInput = {
    AND?: UserCredentialWhereInput | UserCredentialWhereInput[]
    OR?: UserCredentialWhereInput[]
    NOT?: UserCredentialWhereInput | UserCredentialWhereInput[]
    id?: StringFilter<"UserCredential"> | string
    userId?: StringFilter<"UserCredential"> | string
    passwordHash?: StringFilter<"UserCredential"> | string
    createdAt?: DateTimeFilter<"UserCredential"> | Date | string
    updatedAt?: DateTimeFilter<"UserCredential"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserCredentialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserCredentialWhereInput | UserCredentialWhereInput[]
    OR?: UserCredentialWhereInput[]
    NOT?: UserCredentialWhereInput | UserCredentialWhereInput[]
    passwordHash?: StringFilter<"UserCredential"> | string
    createdAt?: DateTimeFilter<"UserCredential"> | Date | string
    updatedAt?: DateTimeFilter<"UserCredential"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserCredentialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCredentialCountOrderByAggregateInput
    _max?: UserCredentialMaxOrderByAggregateInput
    _min?: UserCredentialMinOrderByAggregateInput
  }

  export type UserCredentialScalarWhereWithAggregatesInput = {
    AND?: UserCredentialScalarWhereWithAggregatesInput | UserCredentialScalarWhereWithAggregatesInput[]
    OR?: UserCredentialScalarWhereWithAggregatesInput[]
    NOT?: UserCredentialScalarWhereWithAggregatesInput | UserCredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCredential"> | string
    userId?: StringWithAggregatesFilter<"UserCredential"> | string
    passwordHash?: StringWithAggregatesFilter<"UserCredential"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCredential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCredential"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    refreshToken?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    refreshToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "refreshToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    refreshToken?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    originalName?: StringFilter<"Resume"> | string
    fileName?: StringFilter<"Resume"> | string
    filePath?: StringFilter<"Resume"> | string
    mimeType?: StringFilter<"Resume"> | string
    fileSize?: IntFilter<"Resume"> | number
    status?: EnumResumeStatusFilter<"Resume"> | $Enums.ResumeStatus
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    versions?: ResumeVersionListRelationFilter
    analysisReports?: AnalysisReportListRelationFilter
    resumeSkills?: ResumeSkillListRelationFilter
    jdMatches?: JdMatchListRelationFilter
    suggestions?: SuggestionListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    versions?: ResumeVersionOrderByRelationAggregateInput
    analysisReports?: AnalysisReportOrderByRelationAggregateInput
    resumeSkills?: ResumeSkillOrderByRelationAggregateInput
    jdMatches?: JdMatchOrderByRelationAggregateInput
    suggestions?: SuggestionOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileName?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    userId?: StringFilter<"Resume"> | string
    originalName?: StringFilter<"Resume"> | string
    filePath?: StringFilter<"Resume"> | string
    mimeType?: StringFilter<"Resume"> | string
    fileSize?: IntFilter<"Resume"> | number
    status?: EnumResumeStatusFilter<"Resume"> | $Enums.ResumeStatus
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    versions?: ResumeVersionListRelationFilter
    analysisReports?: AnalysisReportListRelationFilter
    resumeSkills?: ResumeSkillListRelationFilter
    jdMatches?: JdMatchListRelationFilter
    suggestions?: SuggestionListRelationFilter
  }, "id" | "fileName">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _avg?: ResumeAvgOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
    _sum?: ResumeSumOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    userId?: StringWithAggregatesFilter<"Resume"> | string
    originalName?: StringWithAggregatesFilter<"Resume"> | string
    fileName?: StringWithAggregatesFilter<"Resume"> | string
    filePath?: StringWithAggregatesFilter<"Resume"> | string
    mimeType?: StringWithAggregatesFilter<"Resume"> | string
    fileSize?: IntWithAggregatesFilter<"Resume"> | number
    status?: EnumResumeStatusWithAggregatesFilter<"Resume"> | $Enums.ResumeStatus
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type ResumeVersionWhereInput = {
    AND?: ResumeVersionWhereInput | ResumeVersionWhereInput[]
    OR?: ResumeVersionWhereInput[]
    NOT?: ResumeVersionWhereInput | ResumeVersionWhereInput[]
    id?: StringFilter<"ResumeVersion"> | string
    resumeId?: StringFilter<"ResumeVersion"> | string
    version?: IntFilter<"ResumeVersion"> | number
    fileName?: StringFilter<"ResumeVersion"> | string
    filePath?: StringFilter<"ResumeVersion"> | string
    createdAt?: DateTimeFilter<"ResumeVersion"> | Date | string
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
  }

  export type ResumeVersionOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    version?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type ResumeVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    resumeId_version?: ResumeVersionResumeIdVersionCompoundUniqueInput
    AND?: ResumeVersionWhereInput | ResumeVersionWhereInput[]
    OR?: ResumeVersionWhereInput[]
    NOT?: ResumeVersionWhereInput | ResumeVersionWhereInput[]
    resumeId?: StringFilter<"ResumeVersion"> | string
    version?: IntFilter<"ResumeVersion"> | number
    fileName?: StringFilter<"ResumeVersion"> | string
    filePath?: StringFilter<"ResumeVersion"> | string
    createdAt?: DateTimeFilter<"ResumeVersion"> | Date | string
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
  }, "id" | "resumeId_version">

  export type ResumeVersionOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    version?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    _count?: ResumeVersionCountOrderByAggregateInput
    _avg?: ResumeVersionAvgOrderByAggregateInput
    _max?: ResumeVersionMaxOrderByAggregateInput
    _min?: ResumeVersionMinOrderByAggregateInput
    _sum?: ResumeVersionSumOrderByAggregateInput
  }

  export type ResumeVersionScalarWhereWithAggregatesInput = {
    AND?: ResumeVersionScalarWhereWithAggregatesInput | ResumeVersionScalarWhereWithAggregatesInput[]
    OR?: ResumeVersionScalarWhereWithAggregatesInput[]
    NOT?: ResumeVersionScalarWhereWithAggregatesInput | ResumeVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResumeVersion"> | string
    resumeId?: StringWithAggregatesFilter<"ResumeVersion"> | string
    version?: IntWithAggregatesFilter<"ResumeVersion"> | number
    fileName?: StringWithAggregatesFilter<"ResumeVersion"> | string
    filePath?: StringWithAggregatesFilter<"ResumeVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ResumeVersion"> | Date | string
  }

  export type AnalysisReportWhereInput = {
    AND?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    OR?: AnalysisReportWhereInput[]
    NOT?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    id?: StringFilter<"AnalysisReport"> | string
    resumeId?: StringFilter<"AnalysisReport"> | string
    status?: EnumAnalysisStatusFilter<"AnalysisReport"> | $Enums.AnalysisStatus
    overallScore?: FloatFilter<"AnalysisReport"> | number
    skillsScore?: FloatFilter<"AnalysisReport"> | number
    keywordsScore?: FloatFilter<"AnalysisReport"> | number
    experienceScore?: FloatFilter<"AnalysisReport"> | number
    formattingScore?: FloatFilter<"AnalysisReport"> | number
    rawText?: StringFilter<"AnalysisReport"> | string
    extractedSkills?: StringNullableListFilter<"AnalysisReport">
    feedback?: JsonNullableFilter<"AnalysisReport">
    createdAt?: DateTimeFilter<"AnalysisReport"> | Date | string
    updatedAt?: DateTimeFilter<"AnalysisReport"> | Date | string
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
    suggestions?: SuggestionListRelationFilter
  }

  export type AnalysisReportOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    skillsScore?: SortOrder
    keywordsScore?: SortOrder
    experienceScore?: SortOrder
    formattingScore?: SortOrder
    rawText?: SortOrder
    extractedSkills?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
    suggestions?: SuggestionOrderByRelationAggregateInput
  }

  export type AnalysisReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    OR?: AnalysisReportWhereInput[]
    NOT?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    resumeId?: StringFilter<"AnalysisReport"> | string
    status?: EnumAnalysisStatusFilter<"AnalysisReport"> | $Enums.AnalysisStatus
    overallScore?: FloatFilter<"AnalysisReport"> | number
    skillsScore?: FloatFilter<"AnalysisReport"> | number
    keywordsScore?: FloatFilter<"AnalysisReport"> | number
    experienceScore?: FloatFilter<"AnalysisReport"> | number
    formattingScore?: FloatFilter<"AnalysisReport"> | number
    rawText?: StringFilter<"AnalysisReport"> | string
    extractedSkills?: StringNullableListFilter<"AnalysisReport">
    feedback?: JsonNullableFilter<"AnalysisReport">
    createdAt?: DateTimeFilter<"AnalysisReport"> | Date | string
    updatedAt?: DateTimeFilter<"AnalysisReport"> | Date | string
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
    suggestions?: SuggestionListRelationFilter
  }, "id">

  export type AnalysisReportOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    skillsScore?: SortOrder
    keywordsScore?: SortOrder
    experienceScore?: SortOrder
    formattingScore?: SortOrder
    rawText?: SortOrder
    extractedSkills?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnalysisReportCountOrderByAggregateInput
    _avg?: AnalysisReportAvgOrderByAggregateInput
    _max?: AnalysisReportMaxOrderByAggregateInput
    _min?: AnalysisReportMinOrderByAggregateInput
    _sum?: AnalysisReportSumOrderByAggregateInput
  }

  export type AnalysisReportScalarWhereWithAggregatesInput = {
    AND?: AnalysisReportScalarWhereWithAggregatesInput | AnalysisReportScalarWhereWithAggregatesInput[]
    OR?: AnalysisReportScalarWhereWithAggregatesInput[]
    NOT?: AnalysisReportScalarWhereWithAggregatesInput | AnalysisReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisReport"> | string
    resumeId?: StringWithAggregatesFilter<"AnalysisReport"> | string
    status?: EnumAnalysisStatusWithAggregatesFilter<"AnalysisReport"> | $Enums.AnalysisStatus
    overallScore?: FloatWithAggregatesFilter<"AnalysisReport"> | number
    skillsScore?: FloatWithAggregatesFilter<"AnalysisReport"> | number
    keywordsScore?: FloatWithAggregatesFilter<"AnalysisReport"> | number
    experienceScore?: FloatWithAggregatesFilter<"AnalysisReport"> | number
    formattingScore?: FloatWithAggregatesFilter<"AnalysisReport"> | number
    rawText?: StringWithAggregatesFilter<"AnalysisReport"> | string
    extractedSkills?: StringNullableListFilter<"AnalysisReport">
    feedback?: JsonNullableWithAggregatesFilter<"AnalysisReport">
    createdAt?: DateTimeWithAggregatesFilter<"AnalysisReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnalysisReport"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    resumeSkills?: ResumeSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    resumeSkills?: ResumeSkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    resumeSkills?: ResumeSkillListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type ResumeSkillWhereInput = {
    AND?: ResumeSkillWhereInput | ResumeSkillWhereInput[]
    OR?: ResumeSkillWhereInput[]
    NOT?: ResumeSkillWhereInput | ResumeSkillWhereInput[]
    id?: StringFilter<"ResumeSkill"> | string
    resumeId?: StringFilter<"ResumeSkill"> | string
    skillId?: StringFilter<"ResumeSkill"> | string
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }

  export type ResumeSkillOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    skillId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type ResumeSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    resumeId_skillId?: ResumeSkillResumeIdSkillIdCompoundUniqueInput
    AND?: ResumeSkillWhereInput | ResumeSkillWhereInput[]
    OR?: ResumeSkillWhereInput[]
    NOT?: ResumeSkillWhereInput | ResumeSkillWhereInput[]
    resumeId?: StringFilter<"ResumeSkill"> | string
    skillId?: StringFilter<"ResumeSkill"> | string
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }, "id" | "resumeId_skillId">

  export type ResumeSkillOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    skillId?: SortOrder
    _count?: ResumeSkillCountOrderByAggregateInput
    _max?: ResumeSkillMaxOrderByAggregateInput
    _min?: ResumeSkillMinOrderByAggregateInput
  }

  export type ResumeSkillScalarWhereWithAggregatesInput = {
    AND?: ResumeSkillScalarWhereWithAggregatesInput | ResumeSkillScalarWhereWithAggregatesInput[]
    OR?: ResumeSkillScalarWhereWithAggregatesInput[]
    NOT?: ResumeSkillScalarWhereWithAggregatesInput | ResumeSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResumeSkill"> | string
    resumeId?: StringWithAggregatesFilter<"ResumeSkill"> | string
    skillId?: StringWithAggregatesFilter<"ResumeSkill"> | string
  }

  export type JobDescriptionWhereInput = {
    AND?: JobDescriptionWhereInput | JobDescriptionWhereInput[]
    OR?: JobDescriptionWhereInput[]
    NOT?: JobDescriptionWhereInput | JobDescriptionWhereInput[]
    id?: StringFilter<"JobDescription"> | string
    userId?: StringFilter<"JobDescription"> | string
    title?: StringFilter<"JobDescription"> | string
    content?: StringFilter<"JobDescription"> | string
    extractedSkills?: StringNullableListFilter<"JobDescription">
    createdAt?: DateTimeFilter<"JobDescription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    matches?: JdMatchListRelationFilter
  }

  export type JobDescriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    extractedSkills?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    matches?: JdMatchOrderByRelationAggregateInput
  }

  export type JobDescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobDescriptionWhereInput | JobDescriptionWhereInput[]
    OR?: JobDescriptionWhereInput[]
    NOT?: JobDescriptionWhereInput | JobDescriptionWhereInput[]
    userId?: StringFilter<"JobDescription"> | string
    title?: StringFilter<"JobDescription"> | string
    content?: StringFilter<"JobDescription"> | string
    extractedSkills?: StringNullableListFilter<"JobDescription">
    createdAt?: DateTimeFilter<"JobDescription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    matches?: JdMatchListRelationFilter
  }, "id">

  export type JobDescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    extractedSkills?: SortOrder
    createdAt?: SortOrder
    _count?: JobDescriptionCountOrderByAggregateInput
    _max?: JobDescriptionMaxOrderByAggregateInput
    _min?: JobDescriptionMinOrderByAggregateInput
  }

  export type JobDescriptionScalarWhereWithAggregatesInput = {
    AND?: JobDescriptionScalarWhereWithAggregatesInput | JobDescriptionScalarWhereWithAggregatesInput[]
    OR?: JobDescriptionScalarWhereWithAggregatesInput[]
    NOT?: JobDescriptionScalarWhereWithAggregatesInput | JobDescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobDescription"> | string
    userId?: StringWithAggregatesFilter<"JobDescription"> | string
    title?: StringWithAggregatesFilter<"JobDescription"> | string
    content?: StringWithAggregatesFilter<"JobDescription"> | string
    extractedSkills?: StringNullableListFilter<"JobDescription">
    createdAt?: DateTimeWithAggregatesFilter<"JobDescription"> | Date | string
  }

  export type JdMatchWhereInput = {
    AND?: JdMatchWhereInput | JdMatchWhereInput[]
    OR?: JdMatchWhereInput[]
    NOT?: JdMatchWhereInput | JdMatchWhereInput[]
    id?: StringFilter<"JdMatch"> | string
    jobDescriptionId?: StringFilter<"JdMatch"> | string
    resumeId?: StringFilter<"JdMatch"> | string
    matchPercentage?: FloatFilter<"JdMatch"> | number
    matchedSkills?: StringNullableListFilter<"JdMatch">
    missingSkills?: StringNullableListFilter<"JdMatch">
    createdAt?: DateTimeFilter<"JdMatch"> | Date | string
    jobDescription?: XOR<JobDescriptionRelationFilter, JobDescriptionWhereInput>
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
  }

  export type JdMatchOrderByWithRelationInput = {
    id?: SortOrder
    jobDescriptionId?: SortOrder
    resumeId?: SortOrder
    matchPercentage?: SortOrder
    matchedSkills?: SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
    jobDescription?: JobDescriptionOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type JdMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JdMatchWhereInput | JdMatchWhereInput[]
    OR?: JdMatchWhereInput[]
    NOT?: JdMatchWhereInput | JdMatchWhereInput[]
    jobDescriptionId?: StringFilter<"JdMatch"> | string
    resumeId?: StringFilter<"JdMatch"> | string
    matchPercentage?: FloatFilter<"JdMatch"> | number
    matchedSkills?: StringNullableListFilter<"JdMatch">
    missingSkills?: StringNullableListFilter<"JdMatch">
    createdAt?: DateTimeFilter<"JdMatch"> | Date | string
    jobDescription?: XOR<JobDescriptionRelationFilter, JobDescriptionWhereInput>
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
  }, "id">

  export type JdMatchOrderByWithAggregationInput = {
    id?: SortOrder
    jobDescriptionId?: SortOrder
    resumeId?: SortOrder
    matchPercentage?: SortOrder
    matchedSkills?: SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
    _count?: JdMatchCountOrderByAggregateInput
    _avg?: JdMatchAvgOrderByAggregateInput
    _max?: JdMatchMaxOrderByAggregateInput
    _min?: JdMatchMinOrderByAggregateInput
    _sum?: JdMatchSumOrderByAggregateInput
  }

  export type JdMatchScalarWhereWithAggregatesInput = {
    AND?: JdMatchScalarWhereWithAggregatesInput | JdMatchScalarWhereWithAggregatesInput[]
    OR?: JdMatchScalarWhereWithAggregatesInput[]
    NOT?: JdMatchScalarWhereWithAggregatesInput | JdMatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JdMatch"> | string
    jobDescriptionId?: StringWithAggregatesFilter<"JdMatch"> | string
    resumeId?: StringWithAggregatesFilter<"JdMatch"> | string
    matchPercentage?: FloatWithAggregatesFilter<"JdMatch"> | number
    matchedSkills?: StringNullableListFilter<"JdMatch">
    missingSkills?: StringNullableListFilter<"JdMatch">
    createdAt?: DateTimeWithAggregatesFilter<"JdMatch"> | Date | string
  }

  export type SuggestionWhereInput = {
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    id?: StringFilter<"Suggestion"> | string
    resumeId?: StringFilter<"Suggestion"> | string
    analysisReportId?: StringNullableFilter<"Suggestion"> | string | null
    category?: StringFilter<"Suggestion"> | string
    message?: StringFilter<"Suggestion"> | string
    priority?: IntFilter<"Suggestion"> | number
    source?: EnumSuggestionSourceFilter<"Suggestion"> | $Enums.SuggestionSource
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
    analysisReport?: XOR<AnalysisReportNullableRelationFilter, AnalysisReportWhereInput> | null
  }

  export type SuggestionOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    analysisReportId?: SortOrderInput | SortOrder
    category?: SortOrder
    message?: SortOrder
    priority?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
    analysisReport?: AnalysisReportOrderByWithRelationInput
  }

  export type SuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    resumeId?: StringFilter<"Suggestion"> | string
    analysisReportId?: StringNullableFilter<"Suggestion"> | string | null
    category?: StringFilter<"Suggestion"> | string
    message?: StringFilter<"Suggestion"> | string
    priority?: IntFilter<"Suggestion"> | number
    source?: EnumSuggestionSourceFilter<"Suggestion"> | $Enums.SuggestionSource
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    resume?: XOR<ResumeRelationFilter, ResumeWhereInput>
    analysisReport?: XOR<AnalysisReportNullableRelationFilter, AnalysisReportWhereInput> | null
  }, "id">

  export type SuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    analysisReportId?: SortOrderInput | SortOrder
    category?: SortOrder
    message?: SortOrder
    priority?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: SuggestionCountOrderByAggregateInput
    _avg?: SuggestionAvgOrderByAggregateInput
    _max?: SuggestionMaxOrderByAggregateInput
    _min?: SuggestionMinOrderByAggregateInput
    _sum?: SuggestionSumOrderByAggregateInput
  }

  export type SuggestionScalarWhereWithAggregatesInput = {
    AND?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    OR?: SuggestionScalarWhereWithAggregatesInput[]
    NOT?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Suggestion"> | string
    resumeId?: StringWithAggregatesFilter<"Suggestion"> | string
    analysisReportId?: StringNullableWithAggregatesFilter<"Suggestion"> | string | null
    category?: StringWithAggregatesFilter<"Suggestion"> | string
    message?: StringWithAggregatesFilter<"Suggestion"> | string
    priority?: IntWithAggregatesFilter<"Suggestion"> | number
    source?: EnumSuggestionSourceWithAggregatesFilter<"Suggestion"> | $Enums.SuggestionSource
    createdAt?: DateTimeWithAggregatesFilter<"Suggestion"> | Date | string
  }

  export type UserLlmConfigWhereInput = {
    AND?: UserLlmConfigWhereInput | UserLlmConfigWhereInput[]
    OR?: UserLlmConfigWhereInput[]
    NOT?: UserLlmConfigWhereInput | UserLlmConfigWhereInput[]
    id?: StringFilter<"UserLlmConfig"> | string
    userId?: StringFilter<"UserLlmConfig"> | string
    provider?: EnumLlmProviderFilter<"UserLlmConfig"> | $Enums.LlmProvider
    model?: StringFilter<"UserLlmConfig"> | string
    encryptedApiKey?: StringFilter<"UserLlmConfig"> | string
    baseUrl?: StringNullableFilter<"UserLlmConfig"> | string | null
    isEnabled?: BoolFilter<"UserLlmConfig"> | boolean
    createdAt?: DateTimeFilter<"UserLlmConfig"> | Date | string
    updatedAt?: DateTimeFilter<"UserLlmConfig"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    usageLogs?: LlmUsageLogListRelationFilter
  }

  export type UserLlmConfigOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    encryptedApiKey?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    usageLogs?: LlmUsageLogOrderByRelationAggregateInput
  }

  export type UserLlmConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserLlmConfigWhereInput | UserLlmConfigWhereInput[]
    OR?: UserLlmConfigWhereInput[]
    NOT?: UserLlmConfigWhereInput | UserLlmConfigWhereInput[]
    provider?: EnumLlmProviderFilter<"UserLlmConfig"> | $Enums.LlmProvider
    model?: StringFilter<"UserLlmConfig"> | string
    encryptedApiKey?: StringFilter<"UserLlmConfig"> | string
    baseUrl?: StringNullableFilter<"UserLlmConfig"> | string | null
    isEnabled?: BoolFilter<"UserLlmConfig"> | boolean
    createdAt?: DateTimeFilter<"UserLlmConfig"> | Date | string
    updatedAt?: DateTimeFilter<"UserLlmConfig"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    usageLogs?: LlmUsageLogListRelationFilter
  }, "id" | "userId">

  export type UserLlmConfigOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    encryptedApiKey?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserLlmConfigCountOrderByAggregateInput
    _max?: UserLlmConfigMaxOrderByAggregateInput
    _min?: UserLlmConfigMinOrderByAggregateInput
  }

  export type UserLlmConfigScalarWhereWithAggregatesInput = {
    AND?: UserLlmConfigScalarWhereWithAggregatesInput | UserLlmConfigScalarWhereWithAggregatesInput[]
    OR?: UserLlmConfigScalarWhereWithAggregatesInput[]
    NOT?: UserLlmConfigScalarWhereWithAggregatesInput | UserLlmConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLlmConfig"> | string
    userId?: StringWithAggregatesFilter<"UserLlmConfig"> | string
    provider?: EnumLlmProviderWithAggregatesFilter<"UserLlmConfig"> | $Enums.LlmProvider
    model?: StringWithAggregatesFilter<"UserLlmConfig"> | string
    encryptedApiKey?: StringWithAggregatesFilter<"UserLlmConfig"> | string
    baseUrl?: StringNullableWithAggregatesFilter<"UserLlmConfig"> | string | null
    isEnabled?: BoolWithAggregatesFilter<"UserLlmConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserLlmConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserLlmConfig"> | Date | string
  }

  export type LlmUsageLogWhereInput = {
    AND?: LlmUsageLogWhereInput | LlmUsageLogWhereInput[]
    OR?: LlmUsageLogWhereInput[]
    NOT?: LlmUsageLogWhereInput | LlmUsageLogWhereInput[]
    id?: StringFilter<"LlmUsageLog"> | string
    userId?: StringFilter<"LlmUsageLog"> | string
    configId?: StringFilter<"LlmUsageLog"> | string
    tokensUsed?: IntFilter<"LlmUsageLog"> | number
    requestType?: StringFilter<"LlmUsageLog"> | string
    createdAt?: DateTimeFilter<"LlmUsageLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    config?: XOR<UserLlmConfigRelationFilter, UserLlmConfigWhereInput>
  }

  export type LlmUsageLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    tokensUsed?: SortOrder
    requestType?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    config?: UserLlmConfigOrderByWithRelationInput
  }

  export type LlmUsageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LlmUsageLogWhereInput | LlmUsageLogWhereInput[]
    OR?: LlmUsageLogWhereInput[]
    NOT?: LlmUsageLogWhereInput | LlmUsageLogWhereInput[]
    userId?: StringFilter<"LlmUsageLog"> | string
    configId?: StringFilter<"LlmUsageLog"> | string
    tokensUsed?: IntFilter<"LlmUsageLog"> | number
    requestType?: StringFilter<"LlmUsageLog"> | string
    createdAt?: DateTimeFilter<"LlmUsageLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    config?: XOR<UserLlmConfigRelationFilter, UserLlmConfigWhereInput>
  }, "id">

  export type LlmUsageLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    tokensUsed?: SortOrder
    requestType?: SortOrder
    createdAt?: SortOrder
    _count?: LlmUsageLogCountOrderByAggregateInput
    _avg?: LlmUsageLogAvgOrderByAggregateInput
    _max?: LlmUsageLogMaxOrderByAggregateInput
    _min?: LlmUsageLogMinOrderByAggregateInput
    _sum?: LlmUsageLogSumOrderByAggregateInput
  }

  export type LlmUsageLogScalarWhereWithAggregatesInput = {
    AND?: LlmUsageLogScalarWhereWithAggregatesInput | LlmUsageLogScalarWhereWithAggregatesInput[]
    OR?: LlmUsageLogScalarWhereWithAggregatesInput[]
    NOT?: LlmUsageLogScalarWhereWithAggregatesInput | LlmUsageLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LlmUsageLog"> | string
    userId?: StringWithAggregatesFilter<"LlmUsageLog"> | string
    configId?: StringWithAggregatesFilter<"LlmUsageLog"> | string
    tokensUsed?: IntWithAggregatesFilter<"LlmUsageLog"> | number
    requestType?: StringWithAggregatesFilter<"LlmUsageLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LlmUsageLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionUncheckedCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigUncheckedCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUncheckedUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUncheckedUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialCreateInput = {
    id?: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCredentialsInput
  }

  export type UserCredentialUncheckedCreateInput = {
    id?: string
    userId: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCredentialsNestedInput
  }

  export type UserCredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialCreateManyInput = {
    id?: string
    userId: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    userId: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportUncheckedCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillUncheckedCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchUncheckedCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUncheckedUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUncheckedUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    userId: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionCreateInput = {
    id?: string
    version: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    resume: ResumeCreateNestedOneWithoutVersionsInput
  }

  export type ResumeVersionUncheckedCreateInput = {
    id?: string
    resumeId: string
    version: number
    fileName: string
    filePath: string
    createdAt?: Date | string
  }

  export type ResumeVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type ResumeVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionCreateManyInput = {
    id?: string
    resumeId: string
    version: number
    fileName: string
    filePath: string
    createdAt?: Date | string
  }

  export type ResumeVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisReportCreateInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    overallScore?: number
    skillsScore?: number
    keywordsScore?: number
    experienceScore?: number
    formattingScore?: number
    rawText: string
    extractedSkills?: AnalysisReportCreateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutAnalysisReportsInput
    suggestions?: SuggestionCreateNestedManyWithoutAnalysisReportInput
  }

  export type AnalysisReportUncheckedCreateInput = {
    id?: string
    resumeId: string
    status?: $Enums.AnalysisStatus
    overallScore?: number
    skillsScore?: number
    keywordsScore?: number
    experienceScore?: number
    formattingScore?: number
    rawText: string
    extractedSkills?: AnalysisReportCreateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutAnalysisReportInput
  }

  export type AnalysisReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    overallScore?: FloatFieldUpdateOperationsInput | number
    skillsScore?: FloatFieldUpdateOperationsInput | number
    keywordsScore?: FloatFieldUpdateOperationsInput | number
    experienceScore?: FloatFieldUpdateOperationsInput | number
    formattingScore?: FloatFieldUpdateOperationsInput | number
    rawText?: StringFieldUpdateOperationsInput | string
    extractedSkills?: AnalysisReportUpdateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutAnalysisReportsNestedInput
    suggestions?: SuggestionUpdateManyWithoutAnalysisReportNestedInput
  }

  export type AnalysisReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    overallScore?: FloatFieldUpdateOperationsInput | number
    skillsScore?: FloatFieldUpdateOperationsInput | number
    keywordsScore?: FloatFieldUpdateOperationsInput | number
    experienceScore?: FloatFieldUpdateOperationsInput | number
    formattingScore?: FloatFieldUpdateOperationsInput | number
    rawText?: StringFieldUpdateOperationsInput | string
    extractedSkills?: AnalysisReportUpdateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestions?: SuggestionUncheckedUpdateManyWithoutAnalysisReportNestedInput
  }

  export type AnalysisReportCreateManyInput = {
    id?: string
    resumeId: string
    status?: $Enums.AnalysisStatus
    overallScore?: number
    skillsScore?: number
    keywordsScore?: number
    experienceScore?: number
    formattingScore?: number
    rawText: string
    extractedSkills?: AnalysisReportCreateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    overallScore?: FloatFieldUpdateOperationsInput | number
    skillsScore?: FloatFieldUpdateOperationsInput | number
    keywordsScore?: FloatFieldUpdateOperationsInput | number
    experienceScore?: FloatFieldUpdateOperationsInput | number
    formattingScore?: FloatFieldUpdateOperationsInput | number
    rawText?: StringFieldUpdateOperationsInput | string
    extractedSkills?: AnalysisReportUpdateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    overallScore?: FloatFieldUpdateOperationsInput | number
    skillsScore?: FloatFieldUpdateOperationsInput | number
    keywordsScore?: FloatFieldUpdateOperationsInput | number
    experienceScore?: FloatFieldUpdateOperationsInput | number
    formattingScore?: FloatFieldUpdateOperationsInput | number
    rawText?: StringFieldUpdateOperationsInput | string
    extractedSkills?: AnalysisReportUpdateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    resumeSkills?: ResumeSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    resumeSkills?: ResumeSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeSkills?: ResumeSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeSkills?: ResumeSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeSkillCreateInput = {
    id?: string
    resume: ResumeCreateNestedOneWithoutResumeSkillsInput
    skill: SkillCreateNestedOneWithoutResumeSkillsInput
  }

  export type ResumeSkillUncheckedCreateInput = {
    id?: string
    resumeId: string
    skillId: string
  }

  export type ResumeSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: ResumeUpdateOneRequiredWithoutResumeSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutResumeSkillsNestedInput
  }

  export type ResumeSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeSkillCreateManyInput = {
    id?: string
    resumeId: string
    skillId: string
  }

  export type ResumeSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type JobDescriptionCreateInput = {
    id?: string
    title: string
    content: string
    extractedSkills?: JobDescriptionCreateextractedSkillsInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJobDescriptionsInput
    matches?: JdMatchCreateNestedManyWithoutJobDescriptionInput
  }

  export type JobDescriptionUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    extractedSkills?: JobDescriptionCreateextractedSkillsInput | string[]
    createdAt?: Date | string
    matches?: JdMatchUncheckedCreateNestedManyWithoutJobDescriptionInput
  }

  export type JobDescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    extractedSkills?: JobDescriptionUpdateextractedSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobDescriptionsNestedInput
    matches?: JdMatchUpdateManyWithoutJobDescriptionNestedInput
  }

  export type JobDescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    extractedSkills?: JobDescriptionUpdateextractedSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: JdMatchUncheckedUpdateManyWithoutJobDescriptionNestedInput
  }

  export type JobDescriptionCreateManyInput = {
    id?: string
    userId: string
    title: string
    content: string
    extractedSkills?: JobDescriptionCreateextractedSkillsInput | string[]
    createdAt?: Date | string
  }

  export type JobDescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    extractedSkills?: JobDescriptionUpdateextractedSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobDescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    extractedSkills?: JobDescriptionUpdateextractedSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JdMatchCreateInput = {
    id?: string
    matchPercentage: number
    matchedSkills?: JdMatchCreatematchedSkillsInput | string[]
    missingSkills?: JdMatchCreatemissingSkillsInput | string[]
    createdAt?: Date | string
    jobDescription: JobDescriptionCreateNestedOneWithoutMatchesInput
    resume: ResumeCreateNestedOneWithoutJdMatchesInput
  }

  export type JdMatchUncheckedCreateInput = {
    id?: string
    jobDescriptionId: string
    resumeId: string
    matchPercentage: number
    matchedSkills?: JdMatchCreatematchedSkillsInput | string[]
    missingSkills?: JdMatchCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type JdMatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobDescription?: JobDescriptionUpdateOneRequiredWithoutMatchesNestedInput
    resume?: ResumeUpdateOneRequiredWithoutJdMatchesNestedInput
  }

  export type JdMatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobDescriptionId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JdMatchCreateManyInput = {
    id?: string
    jobDescriptionId: string
    resumeId: string
    matchPercentage: number
    matchedSkills?: JdMatchCreatematchedSkillsInput | string[]
    missingSkills?: JdMatchCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type JdMatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JdMatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobDescriptionId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionCreateInput = {
    id?: string
    category: string
    message: string
    priority?: number
    source?: $Enums.SuggestionSource
    createdAt?: Date | string
    resume: ResumeCreateNestedOneWithoutSuggestionsInput
    analysisReport?: AnalysisReportCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateInput = {
    id?: string
    resumeId: string
    analysisReportId?: string | null
    category: string
    message: string
    priority?: number
    source?: $Enums.SuggestionSource
    createdAt?: Date | string
  }

  export type SuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutSuggestionsNestedInput
    analysisReport?: AnalysisReportUpdateOneWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    analysisReportId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionCreateManyInput = {
    id?: string
    resumeId: string
    analysisReportId?: string | null
    category: string
    message: string
    priority?: number
    source?: $Enums.SuggestionSource
    createdAt?: Date | string
  }

  export type SuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    analysisReportId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLlmConfigCreateInput = {
    id?: string
    provider?: $Enums.LlmProvider
    model?: string
    encryptedApiKey: string
    baseUrl?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLlmConfigInput
    usageLogs?: LlmUsageLogCreateNestedManyWithoutConfigInput
  }

  export type UserLlmConfigUncheckedCreateInput = {
    id?: string
    userId: string
    provider?: $Enums.LlmProvider
    model?: string
    encryptedApiKey: string
    baseUrl?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usageLogs?: LlmUsageLogUncheckedCreateNestedManyWithoutConfigInput
  }

  export type UserLlmConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLlmProviderFieldUpdateOperationsInput | $Enums.LlmProvider
    model?: StringFieldUpdateOperationsInput | string
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLlmConfigNestedInput
    usageLogs?: LlmUsageLogUpdateManyWithoutConfigNestedInput
  }

  export type UserLlmConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumLlmProviderFieldUpdateOperationsInput | $Enums.LlmProvider
    model?: StringFieldUpdateOperationsInput | string
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLogs?: LlmUsageLogUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type UserLlmConfigCreateManyInput = {
    id?: string
    userId: string
    provider?: $Enums.LlmProvider
    model?: string
    encryptedApiKey: string
    baseUrl?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLlmConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLlmProviderFieldUpdateOperationsInput | $Enums.LlmProvider
    model?: StringFieldUpdateOperationsInput | string
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLlmConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumLlmProviderFieldUpdateOperationsInput | $Enums.LlmProvider
    model?: StringFieldUpdateOperationsInput | string
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmUsageLogCreateInput = {
    id?: string
    tokensUsed?: number
    requestType: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLlmUsageLogsInput
    config: UserLlmConfigCreateNestedOneWithoutUsageLogsInput
  }

  export type LlmUsageLogUncheckedCreateInput = {
    id?: string
    userId: string
    configId: string
    tokensUsed?: number
    requestType: string
    createdAt?: Date | string
  }

  export type LlmUsageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLlmUsageLogsNestedInput
    config?: UserLlmConfigUpdateOneRequiredWithoutUsageLogsNestedInput
  }

  export type LlmUsageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmUsageLogCreateManyInput = {
    id?: string
    userId: string
    configId: string
    tokensUsed?: number
    requestType: string
    createdAt?: Date | string
  }

  export type LlmUsageLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmUsageLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCredentialNullableRelationFilter = {
    is?: UserCredentialWhereInput | null
    isNot?: UserCredentialWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type JobDescriptionListRelationFilter = {
    every?: JobDescriptionWhereInput
    some?: JobDescriptionWhereInput
    none?: JobDescriptionWhereInput
  }

  export type UserLlmConfigNullableRelationFilter = {
    is?: UserLlmConfigWhereInput | null
    isNot?: UserLlmConfigWhereInput | null
  }

  export type LlmUsageLogListRelationFilter = {
    every?: LlmUsageLogWhereInput
    some?: LlmUsageLogWhereInput
    none?: LlmUsageLogWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobDescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LlmUsageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserCredentialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCredentialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumResumeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumeStatus | EnumResumeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResumeStatusFilter<$PrismaModel> | $Enums.ResumeStatus
  }

  export type ResumeVersionListRelationFilter = {
    every?: ResumeVersionWhereInput
    some?: ResumeVersionWhereInput
    none?: ResumeVersionWhereInput
  }

  export type AnalysisReportListRelationFilter = {
    every?: AnalysisReportWhereInput
    some?: AnalysisReportWhereInput
    none?: AnalysisReportWhereInput
  }

  export type ResumeSkillListRelationFilter = {
    every?: ResumeSkillWhereInput
    some?: ResumeSkillWhereInput
    none?: ResumeSkillWhereInput
  }

  export type JdMatchListRelationFilter = {
    every?: JdMatchWhereInput
    some?: JdMatchWhereInput
    none?: JdMatchWhereInput
  }

  export type SuggestionListRelationFilter = {
    every?: SuggestionWhereInput
    some?: SuggestionWhereInput
    none?: SuggestionWhereInput
  }

  export type ResumeVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalysisReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JdMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumResumeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumeStatus | EnumResumeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResumeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResumeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResumeStatusFilter<$PrismaModel>
    _max?: NestedEnumResumeStatusFilter<$PrismaModel>
  }

  export type ResumeRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type ResumeVersionResumeIdVersionCompoundUniqueInput = {
    resumeId: string
    version: number
  }

  export type ResumeVersionCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    version?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeVersionAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ResumeVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    version?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeVersionMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    version?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeVersionSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type EnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnalysisReportCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    skillsScore?: SortOrder
    keywordsScore?: SortOrder
    experienceScore?: SortOrder
    formattingScore?: SortOrder
    rawText?: SortOrder
    extractedSkills?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalysisReportAvgOrderByAggregateInput = {
    overallScore?: SortOrder
    skillsScore?: SortOrder
    keywordsScore?: SortOrder
    experienceScore?: SortOrder
    formattingScore?: SortOrder
  }

  export type AnalysisReportMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    skillsScore?: SortOrder
    keywordsScore?: SortOrder
    experienceScore?: SortOrder
    formattingScore?: SortOrder
    rawText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalysisReportMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    skillsScore?: SortOrder
    keywordsScore?: SortOrder
    experienceScore?: SortOrder
    formattingScore?: SortOrder
    rawText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalysisReportSumOrderByAggregateInput = {
    overallScore?: SortOrder
    skillsScore?: SortOrder
    keywordsScore?: SortOrder
    experienceScore?: SortOrder
    formattingScore?: SortOrder
  }

  export type EnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type ResumeSkillResumeIdSkillIdCompoundUniqueInput = {
    resumeId: string
    skillId: string
  }

  export type ResumeSkillCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    skillId?: SortOrder
  }

  export type ResumeSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    skillId?: SortOrder
  }

  export type ResumeSkillMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    skillId?: SortOrder
  }

  export type JobDescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    extractedSkills?: SortOrder
    createdAt?: SortOrder
  }

  export type JobDescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type JobDescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type JobDescriptionRelationFilter = {
    is?: JobDescriptionWhereInput
    isNot?: JobDescriptionWhereInput
  }

  export type JdMatchCountOrderByAggregateInput = {
    id?: SortOrder
    jobDescriptionId?: SortOrder
    resumeId?: SortOrder
    matchPercentage?: SortOrder
    matchedSkills?: SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
  }

  export type JdMatchAvgOrderByAggregateInput = {
    matchPercentage?: SortOrder
  }

  export type JdMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    jobDescriptionId?: SortOrder
    resumeId?: SortOrder
    matchPercentage?: SortOrder
    createdAt?: SortOrder
  }

  export type JdMatchMinOrderByAggregateInput = {
    id?: SortOrder
    jobDescriptionId?: SortOrder
    resumeId?: SortOrder
    matchPercentage?: SortOrder
    createdAt?: SortOrder
  }

  export type JdMatchSumOrderByAggregateInput = {
    matchPercentage?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSuggestionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionSource | EnumSuggestionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionSource[] | ListEnumSuggestionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionSource[] | ListEnumSuggestionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionSourceFilter<$PrismaModel> | $Enums.SuggestionSource
  }

  export type AnalysisReportNullableRelationFilter = {
    is?: AnalysisReportWhereInput | null
    isNot?: AnalysisReportWhereInput | null
  }

  export type SuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    analysisReportId?: SortOrder
    category?: SortOrder
    message?: SortOrder
    priority?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type SuggestionAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type SuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    analysisReportId?: SortOrder
    category?: SortOrder
    message?: SortOrder
    priority?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type SuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    analysisReportId?: SortOrder
    category?: SortOrder
    message?: SortOrder
    priority?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type SuggestionSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSuggestionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionSource | EnumSuggestionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionSource[] | ListEnumSuggestionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionSource[] | ListEnumSuggestionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionSourceWithAggregatesFilter<$PrismaModel> | $Enums.SuggestionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuggestionSourceFilter<$PrismaModel>
    _max?: NestedEnumSuggestionSourceFilter<$PrismaModel>
  }

  export type EnumLlmProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.LlmProvider | EnumLlmProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LlmProvider[] | ListEnumLlmProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LlmProvider[] | ListEnumLlmProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLlmProviderFilter<$PrismaModel> | $Enums.LlmProvider
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserLlmConfigCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    encryptedApiKey?: SortOrder
    baseUrl?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLlmConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    encryptedApiKey?: SortOrder
    baseUrl?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLlmConfigMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    encryptedApiKey?: SortOrder
    baseUrl?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLlmProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LlmProvider | EnumLlmProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LlmProvider[] | ListEnumLlmProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LlmProvider[] | ListEnumLlmProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLlmProviderWithAggregatesFilter<$PrismaModel> | $Enums.LlmProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLlmProviderFilter<$PrismaModel>
    _max?: NestedEnumLlmProviderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserLlmConfigRelationFilter = {
    is?: UserLlmConfigWhereInput
    isNot?: UserLlmConfigWhereInput
  }

  export type LlmUsageLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    tokensUsed?: SortOrder
    requestType?: SortOrder
    createdAt?: SortOrder
  }

  export type LlmUsageLogAvgOrderByAggregateInput = {
    tokensUsed?: SortOrder
  }

  export type LlmUsageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    tokensUsed?: SortOrder
    requestType?: SortOrder
    createdAt?: SortOrder
  }

  export type LlmUsageLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    tokensUsed?: SortOrder
    requestType?: SortOrder
    createdAt?: SortOrder
  }

  export type LlmUsageLogSumOrderByAggregateInput = {
    tokensUsed?: SortOrder
  }

  export type UserCredentialCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCredentialCreateOrConnectWithoutUserInput
    connect?: UserCredentialWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type JobDescriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<JobDescriptionCreateWithoutUserInput, JobDescriptionUncheckedCreateWithoutUserInput> | JobDescriptionCreateWithoutUserInput[] | JobDescriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobDescriptionCreateOrConnectWithoutUserInput | JobDescriptionCreateOrConnectWithoutUserInput[]
    createMany?: JobDescriptionCreateManyUserInputEnvelope
    connect?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
  }

  export type UserLlmConfigCreateNestedOneWithoutUserInput = {
    create?: XOR<UserLlmConfigCreateWithoutUserInput, UserLlmConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserLlmConfigCreateOrConnectWithoutUserInput
    connect?: UserLlmConfigWhereUniqueInput
  }

  export type LlmUsageLogCreateNestedManyWithoutUserInput = {
    create?: XOR<LlmUsageLogCreateWithoutUserInput, LlmUsageLogUncheckedCreateWithoutUserInput> | LlmUsageLogCreateWithoutUserInput[] | LlmUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LlmUsageLogCreateOrConnectWithoutUserInput | LlmUsageLogCreateOrConnectWithoutUserInput[]
    createMany?: LlmUsageLogCreateManyUserInputEnvelope
    connect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
  }

  export type UserCredentialUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCredentialCreateOrConnectWithoutUserInput
    connect?: UserCredentialWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type JobDescriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobDescriptionCreateWithoutUserInput, JobDescriptionUncheckedCreateWithoutUserInput> | JobDescriptionCreateWithoutUserInput[] | JobDescriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobDescriptionCreateOrConnectWithoutUserInput | JobDescriptionCreateOrConnectWithoutUserInput[]
    createMany?: JobDescriptionCreateManyUserInputEnvelope
    connect?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
  }

  export type UserLlmConfigUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserLlmConfigCreateWithoutUserInput, UserLlmConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserLlmConfigCreateOrConnectWithoutUserInput
    connect?: UserLlmConfigWhereUniqueInput
  }

  export type LlmUsageLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LlmUsageLogCreateWithoutUserInput, LlmUsageLogUncheckedCreateWithoutUserInput> | LlmUsageLogCreateWithoutUserInput[] | LlmUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LlmUsageLogCreateOrConnectWithoutUserInput | LlmUsageLogCreateOrConnectWithoutUserInput[]
    createMany?: LlmUsageLogCreateManyUserInputEnvelope
    connect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCredentialUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCredentialCreateOrConnectWithoutUserInput
    upsert?: UserCredentialUpsertWithoutUserInput
    disconnect?: UserCredentialWhereInput | boolean
    delete?: UserCredentialWhereInput | boolean
    connect?: UserCredentialWhereUniqueInput
    update?: XOR<XOR<UserCredentialUpdateToOneWithWhereWithoutUserInput, UserCredentialUpdateWithoutUserInput>, UserCredentialUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type JobDescriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobDescriptionCreateWithoutUserInput, JobDescriptionUncheckedCreateWithoutUserInput> | JobDescriptionCreateWithoutUserInput[] | JobDescriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobDescriptionCreateOrConnectWithoutUserInput | JobDescriptionCreateOrConnectWithoutUserInput[]
    upsert?: JobDescriptionUpsertWithWhereUniqueWithoutUserInput | JobDescriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobDescriptionCreateManyUserInputEnvelope
    set?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
    disconnect?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
    delete?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
    connect?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
    update?: JobDescriptionUpdateWithWhereUniqueWithoutUserInput | JobDescriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobDescriptionUpdateManyWithWhereWithoutUserInput | JobDescriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobDescriptionScalarWhereInput | JobDescriptionScalarWhereInput[]
  }

  export type UserLlmConfigUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserLlmConfigCreateWithoutUserInput, UserLlmConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserLlmConfigCreateOrConnectWithoutUserInput
    upsert?: UserLlmConfigUpsertWithoutUserInput
    disconnect?: UserLlmConfigWhereInput | boolean
    delete?: UserLlmConfigWhereInput | boolean
    connect?: UserLlmConfigWhereUniqueInput
    update?: XOR<XOR<UserLlmConfigUpdateToOneWithWhereWithoutUserInput, UserLlmConfigUpdateWithoutUserInput>, UserLlmConfigUncheckedUpdateWithoutUserInput>
  }

  export type LlmUsageLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LlmUsageLogCreateWithoutUserInput, LlmUsageLogUncheckedCreateWithoutUserInput> | LlmUsageLogCreateWithoutUserInput[] | LlmUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LlmUsageLogCreateOrConnectWithoutUserInput | LlmUsageLogCreateOrConnectWithoutUserInput[]
    upsert?: LlmUsageLogUpsertWithWhereUniqueWithoutUserInput | LlmUsageLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LlmUsageLogCreateManyUserInputEnvelope
    set?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    disconnect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    delete?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    connect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    update?: LlmUsageLogUpdateWithWhereUniqueWithoutUserInput | LlmUsageLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LlmUsageLogUpdateManyWithWhereWithoutUserInput | LlmUsageLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LlmUsageLogScalarWhereInput | LlmUsageLogScalarWhereInput[]
  }

  export type UserCredentialUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCredentialCreateOrConnectWithoutUserInput
    upsert?: UserCredentialUpsertWithoutUserInput
    disconnect?: UserCredentialWhereInput | boolean
    delete?: UserCredentialWhereInput | boolean
    connect?: UserCredentialWhereUniqueInput
    update?: XOR<XOR<UserCredentialUpdateToOneWithWhereWithoutUserInput, UserCredentialUpdateWithoutUserInput>, UserCredentialUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type JobDescriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobDescriptionCreateWithoutUserInput, JobDescriptionUncheckedCreateWithoutUserInput> | JobDescriptionCreateWithoutUserInput[] | JobDescriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobDescriptionCreateOrConnectWithoutUserInput | JobDescriptionCreateOrConnectWithoutUserInput[]
    upsert?: JobDescriptionUpsertWithWhereUniqueWithoutUserInput | JobDescriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobDescriptionCreateManyUserInputEnvelope
    set?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
    disconnect?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
    delete?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
    connect?: JobDescriptionWhereUniqueInput | JobDescriptionWhereUniqueInput[]
    update?: JobDescriptionUpdateWithWhereUniqueWithoutUserInput | JobDescriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobDescriptionUpdateManyWithWhereWithoutUserInput | JobDescriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobDescriptionScalarWhereInput | JobDescriptionScalarWhereInput[]
  }

  export type UserLlmConfigUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserLlmConfigCreateWithoutUserInput, UserLlmConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserLlmConfigCreateOrConnectWithoutUserInput
    upsert?: UserLlmConfigUpsertWithoutUserInput
    disconnect?: UserLlmConfigWhereInput | boolean
    delete?: UserLlmConfigWhereInput | boolean
    connect?: UserLlmConfigWhereUniqueInput
    update?: XOR<XOR<UserLlmConfigUpdateToOneWithWhereWithoutUserInput, UserLlmConfigUpdateWithoutUserInput>, UserLlmConfigUncheckedUpdateWithoutUserInput>
  }

  export type LlmUsageLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LlmUsageLogCreateWithoutUserInput, LlmUsageLogUncheckedCreateWithoutUserInput> | LlmUsageLogCreateWithoutUserInput[] | LlmUsageLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LlmUsageLogCreateOrConnectWithoutUserInput | LlmUsageLogCreateOrConnectWithoutUserInput[]
    upsert?: LlmUsageLogUpsertWithWhereUniqueWithoutUserInput | LlmUsageLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LlmUsageLogCreateManyUserInputEnvelope
    set?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    disconnect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    delete?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    connect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    update?: LlmUsageLogUpdateWithWhereUniqueWithoutUserInput | LlmUsageLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LlmUsageLogUpdateManyWithWhereWithoutUserInput | LlmUsageLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LlmUsageLogScalarWhereInput | LlmUsageLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    upsert?: UserUpsertWithoutCredentialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCredentialsInput, UserUpdateWithoutCredentialsInput>, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeVersionCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput> | ResumeVersionCreateWithoutResumeInput[] | ResumeVersionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeVersionCreateOrConnectWithoutResumeInput | ResumeVersionCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeVersionCreateManyResumeInputEnvelope
    connect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
  }

  export type AnalysisReportCreateNestedManyWithoutResumeInput = {
    create?: XOR<AnalysisReportCreateWithoutResumeInput, AnalysisReportUncheckedCreateWithoutResumeInput> | AnalysisReportCreateWithoutResumeInput[] | AnalysisReportUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutResumeInput | AnalysisReportCreateOrConnectWithoutResumeInput[]
    createMany?: AnalysisReportCreateManyResumeInputEnvelope
    connect?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
  }

  export type ResumeSkillCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeSkillCreateWithoutResumeInput, ResumeSkillUncheckedCreateWithoutResumeInput> | ResumeSkillCreateWithoutResumeInput[] | ResumeSkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeSkillCreateOrConnectWithoutResumeInput | ResumeSkillCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeSkillCreateManyResumeInputEnvelope
    connect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
  }

  export type JdMatchCreateNestedManyWithoutResumeInput = {
    create?: XOR<JdMatchCreateWithoutResumeInput, JdMatchUncheckedCreateWithoutResumeInput> | JdMatchCreateWithoutResumeInput[] | JdMatchUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JdMatchCreateOrConnectWithoutResumeInput | JdMatchCreateOrConnectWithoutResumeInput[]
    createMany?: JdMatchCreateManyResumeInputEnvelope
    connect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
  }

  export type SuggestionCreateNestedManyWithoutResumeInput = {
    create?: XOR<SuggestionCreateWithoutResumeInput, SuggestionUncheckedCreateWithoutResumeInput> | SuggestionCreateWithoutResumeInput[] | SuggestionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutResumeInput | SuggestionCreateOrConnectWithoutResumeInput[]
    createMany?: SuggestionCreateManyResumeInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type ResumeVersionUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput> | ResumeVersionCreateWithoutResumeInput[] | ResumeVersionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeVersionCreateOrConnectWithoutResumeInput | ResumeVersionCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeVersionCreateManyResumeInputEnvelope
    connect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
  }

  export type AnalysisReportUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<AnalysisReportCreateWithoutResumeInput, AnalysisReportUncheckedCreateWithoutResumeInput> | AnalysisReportCreateWithoutResumeInput[] | AnalysisReportUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutResumeInput | AnalysisReportCreateOrConnectWithoutResumeInput[]
    createMany?: AnalysisReportCreateManyResumeInputEnvelope
    connect?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
  }

  export type ResumeSkillUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeSkillCreateWithoutResumeInput, ResumeSkillUncheckedCreateWithoutResumeInput> | ResumeSkillCreateWithoutResumeInput[] | ResumeSkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeSkillCreateOrConnectWithoutResumeInput | ResumeSkillCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeSkillCreateManyResumeInputEnvelope
    connect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
  }

  export type JdMatchUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<JdMatchCreateWithoutResumeInput, JdMatchUncheckedCreateWithoutResumeInput> | JdMatchCreateWithoutResumeInput[] | JdMatchUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JdMatchCreateOrConnectWithoutResumeInput | JdMatchCreateOrConnectWithoutResumeInput[]
    createMany?: JdMatchCreateManyResumeInputEnvelope
    connect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
  }

  export type SuggestionUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<SuggestionCreateWithoutResumeInput, SuggestionUncheckedCreateWithoutResumeInput> | SuggestionCreateWithoutResumeInput[] | SuggestionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutResumeInput | SuggestionCreateOrConnectWithoutResumeInput[]
    createMany?: SuggestionCreateManyResumeInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumResumeStatusFieldUpdateOperationsInput = {
    set?: $Enums.ResumeStatus
  }

  export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    upsert?: UserUpsertWithoutResumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumesInput, UserUpdateWithoutResumesInput>, UserUncheckedUpdateWithoutResumesInput>
  }

  export type ResumeVersionUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput> | ResumeVersionCreateWithoutResumeInput[] | ResumeVersionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeVersionCreateOrConnectWithoutResumeInput | ResumeVersionCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeVersionUpsertWithWhereUniqueWithoutResumeInput | ResumeVersionUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeVersionCreateManyResumeInputEnvelope
    set?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    disconnect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    delete?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    connect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    update?: ResumeVersionUpdateWithWhereUniqueWithoutResumeInput | ResumeVersionUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeVersionUpdateManyWithWhereWithoutResumeInput | ResumeVersionUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeVersionScalarWhereInput | ResumeVersionScalarWhereInput[]
  }

  export type AnalysisReportUpdateManyWithoutResumeNestedInput = {
    create?: XOR<AnalysisReportCreateWithoutResumeInput, AnalysisReportUncheckedCreateWithoutResumeInput> | AnalysisReportCreateWithoutResumeInput[] | AnalysisReportUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutResumeInput | AnalysisReportCreateOrConnectWithoutResumeInput[]
    upsert?: AnalysisReportUpsertWithWhereUniqueWithoutResumeInput | AnalysisReportUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: AnalysisReportCreateManyResumeInputEnvelope
    set?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
    disconnect?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
    delete?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
    connect?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
    update?: AnalysisReportUpdateWithWhereUniqueWithoutResumeInput | AnalysisReportUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: AnalysisReportUpdateManyWithWhereWithoutResumeInput | AnalysisReportUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: AnalysisReportScalarWhereInput | AnalysisReportScalarWhereInput[]
  }

  export type ResumeSkillUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeSkillCreateWithoutResumeInput, ResumeSkillUncheckedCreateWithoutResumeInput> | ResumeSkillCreateWithoutResumeInput[] | ResumeSkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeSkillCreateOrConnectWithoutResumeInput | ResumeSkillCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeSkillUpsertWithWhereUniqueWithoutResumeInput | ResumeSkillUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeSkillCreateManyResumeInputEnvelope
    set?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    disconnect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    delete?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    connect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    update?: ResumeSkillUpdateWithWhereUniqueWithoutResumeInput | ResumeSkillUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeSkillUpdateManyWithWhereWithoutResumeInput | ResumeSkillUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeSkillScalarWhereInput | ResumeSkillScalarWhereInput[]
  }

  export type JdMatchUpdateManyWithoutResumeNestedInput = {
    create?: XOR<JdMatchCreateWithoutResumeInput, JdMatchUncheckedCreateWithoutResumeInput> | JdMatchCreateWithoutResumeInput[] | JdMatchUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JdMatchCreateOrConnectWithoutResumeInput | JdMatchCreateOrConnectWithoutResumeInput[]
    upsert?: JdMatchUpsertWithWhereUniqueWithoutResumeInput | JdMatchUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: JdMatchCreateManyResumeInputEnvelope
    set?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    disconnect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    delete?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    connect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    update?: JdMatchUpdateWithWhereUniqueWithoutResumeInput | JdMatchUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: JdMatchUpdateManyWithWhereWithoutResumeInput | JdMatchUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: JdMatchScalarWhereInput | JdMatchScalarWhereInput[]
  }

  export type SuggestionUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SuggestionCreateWithoutResumeInput, SuggestionUncheckedCreateWithoutResumeInput> | SuggestionCreateWithoutResumeInput[] | SuggestionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutResumeInput | SuggestionCreateOrConnectWithoutResumeInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutResumeInput | SuggestionUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SuggestionCreateManyResumeInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutResumeInput | SuggestionUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutResumeInput | SuggestionUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput> | ResumeVersionCreateWithoutResumeInput[] | ResumeVersionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeVersionCreateOrConnectWithoutResumeInput | ResumeVersionCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeVersionUpsertWithWhereUniqueWithoutResumeInput | ResumeVersionUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeVersionCreateManyResumeInputEnvelope
    set?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    disconnect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    delete?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    connect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    update?: ResumeVersionUpdateWithWhereUniqueWithoutResumeInput | ResumeVersionUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeVersionUpdateManyWithWhereWithoutResumeInput | ResumeVersionUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeVersionScalarWhereInput | ResumeVersionScalarWhereInput[]
  }

  export type AnalysisReportUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<AnalysisReportCreateWithoutResumeInput, AnalysisReportUncheckedCreateWithoutResumeInput> | AnalysisReportCreateWithoutResumeInput[] | AnalysisReportUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutResumeInput | AnalysisReportCreateOrConnectWithoutResumeInput[]
    upsert?: AnalysisReportUpsertWithWhereUniqueWithoutResumeInput | AnalysisReportUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: AnalysisReportCreateManyResumeInputEnvelope
    set?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
    disconnect?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
    delete?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
    connect?: AnalysisReportWhereUniqueInput | AnalysisReportWhereUniqueInput[]
    update?: AnalysisReportUpdateWithWhereUniqueWithoutResumeInput | AnalysisReportUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: AnalysisReportUpdateManyWithWhereWithoutResumeInput | AnalysisReportUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: AnalysisReportScalarWhereInput | AnalysisReportScalarWhereInput[]
  }

  export type ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeSkillCreateWithoutResumeInput, ResumeSkillUncheckedCreateWithoutResumeInput> | ResumeSkillCreateWithoutResumeInput[] | ResumeSkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeSkillCreateOrConnectWithoutResumeInput | ResumeSkillCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeSkillUpsertWithWhereUniqueWithoutResumeInput | ResumeSkillUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeSkillCreateManyResumeInputEnvelope
    set?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    disconnect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    delete?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    connect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    update?: ResumeSkillUpdateWithWhereUniqueWithoutResumeInput | ResumeSkillUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeSkillUpdateManyWithWhereWithoutResumeInput | ResumeSkillUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeSkillScalarWhereInput | ResumeSkillScalarWhereInput[]
  }

  export type JdMatchUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<JdMatchCreateWithoutResumeInput, JdMatchUncheckedCreateWithoutResumeInput> | JdMatchCreateWithoutResumeInput[] | JdMatchUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JdMatchCreateOrConnectWithoutResumeInput | JdMatchCreateOrConnectWithoutResumeInput[]
    upsert?: JdMatchUpsertWithWhereUniqueWithoutResumeInput | JdMatchUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: JdMatchCreateManyResumeInputEnvelope
    set?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    disconnect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    delete?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    connect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    update?: JdMatchUpdateWithWhereUniqueWithoutResumeInput | JdMatchUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: JdMatchUpdateManyWithWhereWithoutResumeInput | JdMatchUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: JdMatchScalarWhereInput | JdMatchScalarWhereInput[]
  }

  export type SuggestionUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SuggestionCreateWithoutResumeInput, SuggestionUncheckedCreateWithoutResumeInput> | SuggestionCreateWithoutResumeInput[] | SuggestionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutResumeInput | SuggestionCreateOrConnectWithoutResumeInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutResumeInput | SuggestionUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SuggestionCreateManyResumeInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutResumeInput | SuggestionUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutResumeInput | SuggestionUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type ResumeCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutVersionsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutVersionsInput
    upsert?: ResumeUpsertWithoutVersionsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutVersionsInput, ResumeUpdateWithoutVersionsInput>, ResumeUncheckedUpdateWithoutVersionsInput>
  }

  export type AnalysisReportCreateextractedSkillsInput = {
    set: string[]
  }

  export type ResumeCreateNestedOneWithoutAnalysisReportsInput = {
    create?: XOR<ResumeCreateWithoutAnalysisReportsInput, ResumeUncheckedCreateWithoutAnalysisReportsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutAnalysisReportsInput
    connect?: ResumeWhereUniqueInput
  }

  export type SuggestionCreateNestedManyWithoutAnalysisReportInput = {
    create?: XOR<SuggestionCreateWithoutAnalysisReportInput, SuggestionUncheckedCreateWithoutAnalysisReportInput> | SuggestionCreateWithoutAnalysisReportInput[] | SuggestionUncheckedCreateWithoutAnalysisReportInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutAnalysisReportInput | SuggestionCreateOrConnectWithoutAnalysisReportInput[]
    createMany?: SuggestionCreateManyAnalysisReportInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type SuggestionUncheckedCreateNestedManyWithoutAnalysisReportInput = {
    create?: XOR<SuggestionCreateWithoutAnalysisReportInput, SuggestionUncheckedCreateWithoutAnalysisReportInput> | SuggestionCreateWithoutAnalysisReportInput[] | SuggestionUncheckedCreateWithoutAnalysisReportInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutAnalysisReportInput | SuggestionCreateOrConnectWithoutAnalysisReportInput[]
    createMany?: SuggestionCreateManyAnalysisReportInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type EnumAnalysisStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnalysisReportUpdateextractedSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ResumeUpdateOneRequiredWithoutAnalysisReportsNestedInput = {
    create?: XOR<ResumeCreateWithoutAnalysisReportsInput, ResumeUncheckedCreateWithoutAnalysisReportsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutAnalysisReportsInput
    upsert?: ResumeUpsertWithoutAnalysisReportsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutAnalysisReportsInput, ResumeUpdateWithoutAnalysisReportsInput>, ResumeUncheckedUpdateWithoutAnalysisReportsInput>
  }

  export type SuggestionUpdateManyWithoutAnalysisReportNestedInput = {
    create?: XOR<SuggestionCreateWithoutAnalysisReportInput, SuggestionUncheckedCreateWithoutAnalysisReportInput> | SuggestionCreateWithoutAnalysisReportInput[] | SuggestionUncheckedCreateWithoutAnalysisReportInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutAnalysisReportInput | SuggestionCreateOrConnectWithoutAnalysisReportInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutAnalysisReportInput | SuggestionUpsertWithWhereUniqueWithoutAnalysisReportInput[]
    createMany?: SuggestionCreateManyAnalysisReportInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutAnalysisReportInput | SuggestionUpdateWithWhereUniqueWithoutAnalysisReportInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutAnalysisReportInput | SuggestionUpdateManyWithWhereWithoutAnalysisReportInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type SuggestionUncheckedUpdateManyWithoutAnalysisReportNestedInput = {
    create?: XOR<SuggestionCreateWithoutAnalysisReportInput, SuggestionUncheckedCreateWithoutAnalysisReportInput> | SuggestionCreateWithoutAnalysisReportInput[] | SuggestionUncheckedCreateWithoutAnalysisReportInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutAnalysisReportInput | SuggestionCreateOrConnectWithoutAnalysisReportInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutAnalysisReportInput | SuggestionUpsertWithWhereUniqueWithoutAnalysisReportInput[]
    createMany?: SuggestionCreateManyAnalysisReportInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutAnalysisReportInput | SuggestionUpdateWithWhereUniqueWithoutAnalysisReportInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutAnalysisReportInput | SuggestionUpdateManyWithWhereWithoutAnalysisReportInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type ResumeSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<ResumeSkillCreateWithoutSkillInput, ResumeSkillUncheckedCreateWithoutSkillInput> | ResumeSkillCreateWithoutSkillInput[] | ResumeSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ResumeSkillCreateOrConnectWithoutSkillInput | ResumeSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ResumeSkillCreateManySkillInputEnvelope
    connect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
  }

  export type ResumeSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<ResumeSkillCreateWithoutSkillInput, ResumeSkillUncheckedCreateWithoutSkillInput> | ResumeSkillCreateWithoutSkillInput[] | ResumeSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ResumeSkillCreateOrConnectWithoutSkillInput | ResumeSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ResumeSkillCreateManySkillInputEnvelope
    connect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
  }

  export type ResumeSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ResumeSkillCreateWithoutSkillInput, ResumeSkillUncheckedCreateWithoutSkillInput> | ResumeSkillCreateWithoutSkillInput[] | ResumeSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ResumeSkillCreateOrConnectWithoutSkillInput | ResumeSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ResumeSkillUpsertWithWhereUniqueWithoutSkillInput | ResumeSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ResumeSkillCreateManySkillInputEnvelope
    set?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    disconnect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    delete?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    connect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    update?: ResumeSkillUpdateWithWhereUniqueWithoutSkillInput | ResumeSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ResumeSkillUpdateManyWithWhereWithoutSkillInput | ResumeSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ResumeSkillScalarWhereInput | ResumeSkillScalarWhereInput[]
  }

  export type ResumeSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ResumeSkillCreateWithoutSkillInput, ResumeSkillUncheckedCreateWithoutSkillInput> | ResumeSkillCreateWithoutSkillInput[] | ResumeSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ResumeSkillCreateOrConnectWithoutSkillInput | ResumeSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ResumeSkillUpsertWithWhereUniqueWithoutSkillInput | ResumeSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ResumeSkillCreateManySkillInputEnvelope
    set?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    disconnect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    delete?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    connect?: ResumeSkillWhereUniqueInput | ResumeSkillWhereUniqueInput[]
    update?: ResumeSkillUpdateWithWhereUniqueWithoutSkillInput | ResumeSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ResumeSkillUpdateManyWithWhereWithoutSkillInput | ResumeSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ResumeSkillScalarWhereInput | ResumeSkillScalarWhereInput[]
  }

  export type ResumeCreateNestedOneWithoutResumeSkillsInput = {
    create?: XOR<ResumeCreateWithoutResumeSkillsInput, ResumeUncheckedCreateWithoutResumeSkillsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutResumeSkillsInput
    connect?: ResumeWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutResumeSkillsInput = {
    create?: XOR<SkillCreateWithoutResumeSkillsInput, SkillUncheckedCreateWithoutResumeSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutResumeSkillsInput
    connect?: SkillWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutResumeSkillsNestedInput = {
    create?: XOR<ResumeCreateWithoutResumeSkillsInput, ResumeUncheckedCreateWithoutResumeSkillsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutResumeSkillsInput
    upsert?: ResumeUpsertWithoutResumeSkillsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutResumeSkillsInput, ResumeUpdateWithoutResumeSkillsInput>, ResumeUncheckedUpdateWithoutResumeSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutResumeSkillsNestedInput = {
    create?: XOR<SkillCreateWithoutResumeSkillsInput, SkillUncheckedCreateWithoutResumeSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutResumeSkillsInput
    upsert?: SkillUpsertWithoutResumeSkillsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutResumeSkillsInput, SkillUpdateWithoutResumeSkillsInput>, SkillUncheckedUpdateWithoutResumeSkillsInput>
  }

  export type JobDescriptionCreateextractedSkillsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutJobDescriptionsInput = {
    create?: XOR<UserCreateWithoutJobDescriptionsInput, UserUncheckedCreateWithoutJobDescriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobDescriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type JdMatchCreateNestedManyWithoutJobDescriptionInput = {
    create?: XOR<JdMatchCreateWithoutJobDescriptionInput, JdMatchUncheckedCreateWithoutJobDescriptionInput> | JdMatchCreateWithoutJobDescriptionInput[] | JdMatchUncheckedCreateWithoutJobDescriptionInput[]
    connectOrCreate?: JdMatchCreateOrConnectWithoutJobDescriptionInput | JdMatchCreateOrConnectWithoutJobDescriptionInput[]
    createMany?: JdMatchCreateManyJobDescriptionInputEnvelope
    connect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
  }

  export type JdMatchUncheckedCreateNestedManyWithoutJobDescriptionInput = {
    create?: XOR<JdMatchCreateWithoutJobDescriptionInput, JdMatchUncheckedCreateWithoutJobDescriptionInput> | JdMatchCreateWithoutJobDescriptionInput[] | JdMatchUncheckedCreateWithoutJobDescriptionInput[]
    connectOrCreate?: JdMatchCreateOrConnectWithoutJobDescriptionInput | JdMatchCreateOrConnectWithoutJobDescriptionInput[]
    createMany?: JdMatchCreateManyJobDescriptionInputEnvelope
    connect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
  }

  export type JobDescriptionUpdateextractedSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutJobDescriptionsNestedInput = {
    create?: XOR<UserCreateWithoutJobDescriptionsInput, UserUncheckedCreateWithoutJobDescriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobDescriptionsInput
    upsert?: UserUpsertWithoutJobDescriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobDescriptionsInput, UserUpdateWithoutJobDescriptionsInput>, UserUncheckedUpdateWithoutJobDescriptionsInput>
  }

  export type JdMatchUpdateManyWithoutJobDescriptionNestedInput = {
    create?: XOR<JdMatchCreateWithoutJobDescriptionInput, JdMatchUncheckedCreateWithoutJobDescriptionInput> | JdMatchCreateWithoutJobDescriptionInput[] | JdMatchUncheckedCreateWithoutJobDescriptionInput[]
    connectOrCreate?: JdMatchCreateOrConnectWithoutJobDescriptionInput | JdMatchCreateOrConnectWithoutJobDescriptionInput[]
    upsert?: JdMatchUpsertWithWhereUniqueWithoutJobDescriptionInput | JdMatchUpsertWithWhereUniqueWithoutJobDescriptionInput[]
    createMany?: JdMatchCreateManyJobDescriptionInputEnvelope
    set?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    disconnect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    delete?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    connect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    update?: JdMatchUpdateWithWhereUniqueWithoutJobDescriptionInput | JdMatchUpdateWithWhereUniqueWithoutJobDescriptionInput[]
    updateMany?: JdMatchUpdateManyWithWhereWithoutJobDescriptionInput | JdMatchUpdateManyWithWhereWithoutJobDescriptionInput[]
    deleteMany?: JdMatchScalarWhereInput | JdMatchScalarWhereInput[]
  }

  export type JdMatchUncheckedUpdateManyWithoutJobDescriptionNestedInput = {
    create?: XOR<JdMatchCreateWithoutJobDescriptionInput, JdMatchUncheckedCreateWithoutJobDescriptionInput> | JdMatchCreateWithoutJobDescriptionInput[] | JdMatchUncheckedCreateWithoutJobDescriptionInput[]
    connectOrCreate?: JdMatchCreateOrConnectWithoutJobDescriptionInput | JdMatchCreateOrConnectWithoutJobDescriptionInput[]
    upsert?: JdMatchUpsertWithWhereUniqueWithoutJobDescriptionInput | JdMatchUpsertWithWhereUniqueWithoutJobDescriptionInput[]
    createMany?: JdMatchCreateManyJobDescriptionInputEnvelope
    set?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    disconnect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    delete?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    connect?: JdMatchWhereUniqueInput | JdMatchWhereUniqueInput[]
    update?: JdMatchUpdateWithWhereUniqueWithoutJobDescriptionInput | JdMatchUpdateWithWhereUniqueWithoutJobDescriptionInput[]
    updateMany?: JdMatchUpdateManyWithWhereWithoutJobDescriptionInput | JdMatchUpdateManyWithWhereWithoutJobDescriptionInput[]
    deleteMany?: JdMatchScalarWhereInput | JdMatchScalarWhereInput[]
  }

  export type JdMatchCreatematchedSkillsInput = {
    set: string[]
  }

  export type JdMatchCreatemissingSkillsInput = {
    set: string[]
  }

  export type JobDescriptionCreateNestedOneWithoutMatchesInput = {
    create?: XOR<JobDescriptionCreateWithoutMatchesInput, JobDescriptionUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: JobDescriptionCreateOrConnectWithoutMatchesInput
    connect?: JobDescriptionWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutJdMatchesInput = {
    create?: XOR<ResumeCreateWithoutJdMatchesInput, ResumeUncheckedCreateWithoutJdMatchesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutJdMatchesInput
    connect?: ResumeWhereUniqueInput
  }

  export type JdMatchUpdatematchedSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JdMatchUpdatemissingSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JobDescriptionUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<JobDescriptionCreateWithoutMatchesInput, JobDescriptionUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: JobDescriptionCreateOrConnectWithoutMatchesInput
    upsert?: JobDescriptionUpsertWithoutMatchesInput
    connect?: JobDescriptionWhereUniqueInput
    update?: XOR<XOR<JobDescriptionUpdateToOneWithWhereWithoutMatchesInput, JobDescriptionUpdateWithoutMatchesInput>, JobDescriptionUncheckedUpdateWithoutMatchesInput>
  }

  export type ResumeUpdateOneRequiredWithoutJdMatchesNestedInput = {
    create?: XOR<ResumeCreateWithoutJdMatchesInput, ResumeUncheckedCreateWithoutJdMatchesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutJdMatchesInput
    upsert?: ResumeUpsertWithoutJdMatchesInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutJdMatchesInput, ResumeUpdateWithoutJdMatchesInput>, ResumeUncheckedUpdateWithoutJdMatchesInput>
  }

  export type ResumeCreateNestedOneWithoutSuggestionsInput = {
    create?: XOR<ResumeCreateWithoutSuggestionsInput, ResumeUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSuggestionsInput
    connect?: ResumeWhereUniqueInput
  }

  export type AnalysisReportCreateNestedOneWithoutSuggestionsInput = {
    create?: XOR<AnalysisReportCreateWithoutSuggestionsInput, AnalysisReportUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutSuggestionsInput
    connect?: AnalysisReportWhereUniqueInput
  }

  export type EnumSuggestionSourceFieldUpdateOperationsInput = {
    set?: $Enums.SuggestionSource
  }

  export type ResumeUpdateOneRequiredWithoutSuggestionsNestedInput = {
    create?: XOR<ResumeCreateWithoutSuggestionsInput, ResumeUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSuggestionsInput
    upsert?: ResumeUpsertWithoutSuggestionsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutSuggestionsInput, ResumeUpdateWithoutSuggestionsInput>, ResumeUncheckedUpdateWithoutSuggestionsInput>
  }

  export type AnalysisReportUpdateOneWithoutSuggestionsNestedInput = {
    create?: XOR<AnalysisReportCreateWithoutSuggestionsInput, AnalysisReportUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutSuggestionsInput
    upsert?: AnalysisReportUpsertWithoutSuggestionsInput
    disconnect?: AnalysisReportWhereInput | boolean
    delete?: AnalysisReportWhereInput | boolean
    connect?: AnalysisReportWhereUniqueInput
    update?: XOR<XOR<AnalysisReportUpdateToOneWithWhereWithoutSuggestionsInput, AnalysisReportUpdateWithoutSuggestionsInput>, AnalysisReportUncheckedUpdateWithoutSuggestionsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutLlmConfigInput = {
    create?: XOR<UserCreateWithoutLlmConfigInput, UserUncheckedCreateWithoutLlmConfigInput>
    connectOrCreate?: UserCreateOrConnectWithoutLlmConfigInput
    connect?: UserWhereUniqueInput
  }

  export type LlmUsageLogCreateNestedManyWithoutConfigInput = {
    create?: XOR<LlmUsageLogCreateWithoutConfigInput, LlmUsageLogUncheckedCreateWithoutConfigInput> | LlmUsageLogCreateWithoutConfigInput[] | LlmUsageLogUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LlmUsageLogCreateOrConnectWithoutConfigInput | LlmUsageLogCreateOrConnectWithoutConfigInput[]
    createMany?: LlmUsageLogCreateManyConfigInputEnvelope
    connect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
  }

  export type LlmUsageLogUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<LlmUsageLogCreateWithoutConfigInput, LlmUsageLogUncheckedCreateWithoutConfigInput> | LlmUsageLogCreateWithoutConfigInput[] | LlmUsageLogUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LlmUsageLogCreateOrConnectWithoutConfigInput | LlmUsageLogCreateOrConnectWithoutConfigInput[]
    createMany?: LlmUsageLogCreateManyConfigInputEnvelope
    connect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
  }

  export type EnumLlmProviderFieldUpdateOperationsInput = {
    set?: $Enums.LlmProvider
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutLlmConfigNestedInput = {
    create?: XOR<UserCreateWithoutLlmConfigInput, UserUncheckedCreateWithoutLlmConfigInput>
    connectOrCreate?: UserCreateOrConnectWithoutLlmConfigInput
    upsert?: UserUpsertWithoutLlmConfigInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLlmConfigInput, UserUpdateWithoutLlmConfigInput>, UserUncheckedUpdateWithoutLlmConfigInput>
  }

  export type LlmUsageLogUpdateManyWithoutConfigNestedInput = {
    create?: XOR<LlmUsageLogCreateWithoutConfigInput, LlmUsageLogUncheckedCreateWithoutConfigInput> | LlmUsageLogCreateWithoutConfigInput[] | LlmUsageLogUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LlmUsageLogCreateOrConnectWithoutConfigInput | LlmUsageLogCreateOrConnectWithoutConfigInput[]
    upsert?: LlmUsageLogUpsertWithWhereUniqueWithoutConfigInput | LlmUsageLogUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: LlmUsageLogCreateManyConfigInputEnvelope
    set?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    disconnect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    delete?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    connect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    update?: LlmUsageLogUpdateWithWhereUniqueWithoutConfigInput | LlmUsageLogUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: LlmUsageLogUpdateManyWithWhereWithoutConfigInput | LlmUsageLogUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: LlmUsageLogScalarWhereInput | LlmUsageLogScalarWhereInput[]
  }

  export type LlmUsageLogUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<LlmUsageLogCreateWithoutConfigInput, LlmUsageLogUncheckedCreateWithoutConfigInput> | LlmUsageLogCreateWithoutConfigInput[] | LlmUsageLogUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LlmUsageLogCreateOrConnectWithoutConfigInput | LlmUsageLogCreateOrConnectWithoutConfigInput[]
    upsert?: LlmUsageLogUpsertWithWhereUniqueWithoutConfigInput | LlmUsageLogUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: LlmUsageLogCreateManyConfigInputEnvelope
    set?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    disconnect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    delete?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    connect?: LlmUsageLogWhereUniqueInput | LlmUsageLogWhereUniqueInput[]
    update?: LlmUsageLogUpdateWithWhereUniqueWithoutConfigInput | LlmUsageLogUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: LlmUsageLogUpdateManyWithWhereWithoutConfigInput | LlmUsageLogUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: LlmUsageLogScalarWhereInput | LlmUsageLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLlmUsageLogsInput = {
    create?: XOR<UserCreateWithoutLlmUsageLogsInput, UserUncheckedCreateWithoutLlmUsageLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLlmUsageLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserLlmConfigCreateNestedOneWithoutUsageLogsInput = {
    create?: XOR<UserLlmConfigCreateWithoutUsageLogsInput, UserLlmConfigUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: UserLlmConfigCreateOrConnectWithoutUsageLogsInput
    connect?: UserLlmConfigWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLlmUsageLogsNestedInput = {
    create?: XOR<UserCreateWithoutLlmUsageLogsInput, UserUncheckedCreateWithoutLlmUsageLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLlmUsageLogsInput
    upsert?: UserUpsertWithoutLlmUsageLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLlmUsageLogsInput, UserUpdateWithoutLlmUsageLogsInput>, UserUncheckedUpdateWithoutLlmUsageLogsInput>
  }

  export type UserLlmConfigUpdateOneRequiredWithoutUsageLogsNestedInput = {
    create?: XOR<UserLlmConfigCreateWithoutUsageLogsInput, UserLlmConfigUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: UserLlmConfigCreateOrConnectWithoutUsageLogsInput
    upsert?: UserLlmConfigUpsertWithoutUsageLogsInput
    connect?: UserLlmConfigWhereUniqueInput
    update?: XOR<XOR<UserLlmConfigUpdateToOneWithWhereWithoutUsageLogsInput, UserLlmConfigUpdateWithoutUsageLogsInput>, UserLlmConfigUncheckedUpdateWithoutUsageLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumResumeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumeStatus | EnumResumeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResumeStatusFilter<$PrismaModel> | $Enums.ResumeStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumResumeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumeStatus | EnumResumeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResumeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResumeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResumeStatusFilter<$PrismaModel>
    _max?: NestedEnumResumeStatusFilter<$PrismaModel>
  }

  export type NestedEnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSuggestionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionSource | EnumSuggestionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionSource[] | ListEnumSuggestionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionSource[] | ListEnumSuggestionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionSourceFilter<$PrismaModel> | $Enums.SuggestionSource
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSuggestionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionSource | EnumSuggestionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionSource[] | ListEnumSuggestionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionSource[] | ListEnumSuggestionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionSourceWithAggregatesFilter<$PrismaModel> | $Enums.SuggestionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuggestionSourceFilter<$PrismaModel>
    _max?: NestedEnumSuggestionSourceFilter<$PrismaModel>
  }

  export type NestedEnumLlmProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.LlmProvider | EnumLlmProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LlmProvider[] | ListEnumLlmProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LlmProvider[] | ListEnumLlmProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLlmProviderFilter<$PrismaModel> | $Enums.LlmProvider
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumLlmProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LlmProvider | EnumLlmProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LlmProvider[] | ListEnumLlmProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LlmProvider[] | ListEnumLlmProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLlmProviderWithAggregatesFilter<$PrismaModel> | $Enums.LlmProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLlmProviderFilter<$PrismaModel>
    _max?: NestedEnumLlmProviderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCredentialCreateWithoutUserInput = {
    id?: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCredentialUncheckedCreateWithoutUserInput = {
    id?: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCredentialCreateOrConnectWithoutUserInput = {
    where: UserCredentialWhereUniqueInput
    create: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportUncheckedCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillUncheckedCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchUncheckedCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: ResumeCreateManyUserInput | ResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JobDescriptionCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    extractedSkills?: JobDescriptionCreateextractedSkillsInput | string[]
    createdAt?: Date | string
    matches?: JdMatchCreateNestedManyWithoutJobDescriptionInput
  }

  export type JobDescriptionUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    extractedSkills?: JobDescriptionCreateextractedSkillsInput | string[]
    createdAt?: Date | string
    matches?: JdMatchUncheckedCreateNestedManyWithoutJobDescriptionInput
  }

  export type JobDescriptionCreateOrConnectWithoutUserInput = {
    where: JobDescriptionWhereUniqueInput
    create: XOR<JobDescriptionCreateWithoutUserInput, JobDescriptionUncheckedCreateWithoutUserInput>
  }

  export type JobDescriptionCreateManyUserInputEnvelope = {
    data: JobDescriptionCreateManyUserInput | JobDescriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLlmConfigCreateWithoutUserInput = {
    id?: string
    provider?: $Enums.LlmProvider
    model?: string
    encryptedApiKey: string
    baseUrl?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usageLogs?: LlmUsageLogCreateNestedManyWithoutConfigInput
  }

  export type UserLlmConfigUncheckedCreateWithoutUserInput = {
    id?: string
    provider?: $Enums.LlmProvider
    model?: string
    encryptedApiKey: string
    baseUrl?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usageLogs?: LlmUsageLogUncheckedCreateNestedManyWithoutConfigInput
  }

  export type UserLlmConfigCreateOrConnectWithoutUserInput = {
    where: UserLlmConfigWhereUniqueInput
    create: XOR<UserLlmConfigCreateWithoutUserInput, UserLlmConfigUncheckedCreateWithoutUserInput>
  }

  export type LlmUsageLogCreateWithoutUserInput = {
    id?: string
    tokensUsed?: number
    requestType: string
    createdAt?: Date | string
    config: UserLlmConfigCreateNestedOneWithoutUsageLogsInput
  }

  export type LlmUsageLogUncheckedCreateWithoutUserInput = {
    id?: string
    configId: string
    tokensUsed?: number
    requestType: string
    createdAt?: Date | string
  }

  export type LlmUsageLogCreateOrConnectWithoutUserInput = {
    where: LlmUsageLogWhereUniqueInput
    create: XOR<LlmUsageLogCreateWithoutUserInput, LlmUsageLogUncheckedCreateWithoutUserInput>
  }

  export type LlmUsageLogCreateManyUserInputEnvelope = {
    data: LlmUsageLogCreateManyUserInput | LlmUsageLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCredentialUpsertWithoutUserInput = {
    update: XOR<UserCredentialUpdateWithoutUserInput, UserCredentialUncheckedUpdateWithoutUserInput>
    create: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput>
    where?: UserCredentialWhereInput
  }

  export type UserCredentialUpdateToOneWithWhereWithoutUserInput = {
    where?: UserCredentialWhereInput
    data: XOR<UserCredentialUpdateWithoutUserInput, UserCredentialUncheckedUpdateWithoutUserInput>
  }

  export type UserCredentialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    refreshToken?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    OR?: ResumeScalarWhereInput[]
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    originalName?: StringFilter<"Resume"> | string
    fileName?: StringFilter<"Resume"> | string
    filePath?: StringFilter<"Resume"> | string
    mimeType?: StringFilter<"Resume"> | string
    fileSize?: IntFilter<"Resume"> | number
    status?: EnumResumeStatusFilter<"Resume"> | $Enums.ResumeStatus
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
  }

  export type JobDescriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: JobDescriptionWhereUniqueInput
    update: XOR<JobDescriptionUpdateWithoutUserInput, JobDescriptionUncheckedUpdateWithoutUserInput>
    create: XOR<JobDescriptionCreateWithoutUserInput, JobDescriptionUncheckedCreateWithoutUserInput>
  }

  export type JobDescriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: JobDescriptionWhereUniqueInput
    data: XOR<JobDescriptionUpdateWithoutUserInput, JobDescriptionUncheckedUpdateWithoutUserInput>
  }

  export type JobDescriptionUpdateManyWithWhereWithoutUserInput = {
    where: JobDescriptionScalarWhereInput
    data: XOR<JobDescriptionUpdateManyMutationInput, JobDescriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type JobDescriptionScalarWhereInput = {
    AND?: JobDescriptionScalarWhereInput | JobDescriptionScalarWhereInput[]
    OR?: JobDescriptionScalarWhereInput[]
    NOT?: JobDescriptionScalarWhereInput | JobDescriptionScalarWhereInput[]
    id?: StringFilter<"JobDescription"> | string
    userId?: StringFilter<"JobDescription"> | string
    title?: StringFilter<"JobDescription"> | string
    content?: StringFilter<"JobDescription"> | string
    extractedSkills?: StringNullableListFilter<"JobDescription">
    createdAt?: DateTimeFilter<"JobDescription"> | Date | string
  }

  export type UserLlmConfigUpsertWithoutUserInput = {
    update: XOR<UserLlmConfigUpdateWithoutUserInput, UserLlmConfigUncheckedUpdateWithoutUserInput>
    create: XOR<UserLlmConfigCreateWithoutUserInput, UserLlmConfigUncheckedCreateWithoutUserInput>
    where?: UserLlmConfigWhereInput
  }

  export type UserLlmConfigUpdateToOneWithWhereWithoutUserInput = {
    where?: UserLlmConfigWhereInput
    data: XOR<UserLlmConfigUpdateWithoutUserInput, UserLlmConfigUncheckedUpdateWithoutUserInput>
  }

  export type UserLlmConfigUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLlmProviderFieldUpdateOperationsInput | $Enums.LlmProvider
    model?: StringFieldUpdateOperationsInput | string
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLogs?: LlmUsageLogUpdateManyWithoutConfigNestedInput
  }

  export type UserLlmConfigUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLlmProviderFieldUpdateOperationsInput | $Enums.LlmProvider
    model?: StringFieldUpdateOperationsInput | string
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLogs?: LlmUsageLogUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type LlmUsageLogUpsertWithWhereUniqueWithoutUserInput = {
    where: LlmUsageLogWhereUniqueInput
    update: XOR<LlmUsageLogUpdateWithoutUserInput, LlmUsageLogUncheckedUpdateWithoutUserInput>
    create: XOR<LlmUsageLogCreateWithoutUserInput, LlmUsageLogUncheckedCreateWithoutUserInput>
  }

  export type LlmUsageLogUpdateWithWhereUniqueWithoutUserInput = {
    where: LlmUsageLogWhereUniqueInput
    data: XOR<LlmUsageLogUpdateWithoutUserInput, LlmUsageLogUncheckedUpdateWithoutUserInput>
  }

  export type LlmUsageLogUpdateManyWithWhereWithoutUserInput = {
    where: LlmUsageLogScalarWhereInput
    data: XOR<LlmUsageLogUpdateManyMutationInput, LlmUsageLogUncheckedUpdateManyWithoutUserInput>
  }

  export type LlmUsageLogScalarWhereInput = {
    AND?: LlmUsageLogScalarWhereInput | LlmUsageLogScalarWhereInput[]
    OR?: LlmUsageLogScalarWhereInput[]
    NOT?: LlmUsageLogScalarWhereInput | LlmUsageLogScalarWhereInput[]
    id?: StringFilter<"LlmUsageLog"> | string
    userId?: StringFilter<"LlmUsageLog"> | string
    configId?: StringFilter<"LlmUsageLog"> | string
    tokensUsed?: IntFilter<"LlmUsageLog"> | number
    requestType?: StringFilter<"LlmUsageLog"> | string
    createdAt?: DateTimeFilter<"LlmUsageLog"> | Date | string
  }

  export type UserCreateWithoutCredentialsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCredentialsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionUncheckedCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigUncheckedCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCredentialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
  }

  export type UserUpsertWithoutCredentialsInput = {
    update: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type UserUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUncheckedUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUncheckedUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialCreateNestedOneWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialUncheckedCreateNestedOneWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionUncheckedCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigUncheckedCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUpdateOneWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUncheckedUpdateOneWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUncheckedUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUncheckedUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutResumesInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumesInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionUncheckedCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigUncheckedCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
  }

  export type ResumeVersionCreateWithoutResumeInput = {
    id?: string
    version: number
    fileName: string
    filePath: string
    createdAt?: Date | string
  }

  export type ResumeVersionUncheckedCreateWithoutResumeInput = {
    id?: string
    version: number
    fileName: string
    filePath: string
    createdAt?: Date | string
  }

  export type ResumeVersionCreateOrConnectWithoutResumeInput = {
    where: ResumeVersionWhereUniqueInput
    create: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput>
  }

  export type ResumeVersionCreateManyResumeInputEnvelope = {
    data: ResumeVersionCreateManyResumeInput | ResumeVersionCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisReportCreateWithoutResumeInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    overallScore?: number
    skillsScore?: number
    keywordsScore?: number
    experienceScore?: number
    formattingScore?: number
    rawText: string
    extractedSkills?: AnalysisReportCreateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestions?: SuggestionCreateNestedManyWithoutAnalysisReportInput
  }

  export type AnalysisReportUncheckedCreateWithoutResumeInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    overallScore?: number
    skillsScore?: number
    keywordsScore?: number
    experienceScore?: number
    formattingScore?: number
    rawText: string
    extractedSkills?: AnalysisReportCreateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutAnalysisReportInput
  }

  export type AnalysisReportCreateOrConnectWithoutResumeInput = {
    where: AnalysisReportWhereUniqueInput
    create: XOR<AnalysisReportCreateWithoutResumeInput, AnalysisReportUncheckedCreateWithoutResumeInput>
  }

  export type AnalysisReportCreateManyResumeInputEnvelope = {
    data: AnalysisReportCreateManyResumeInput | AnalysisReportCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type ResumeSkillCreateWithoutResumeInput = {
    id?: string
    skill: SkillCreateNestedOneWithoutResumeSkillsInput
  }

  export type ResumeSkillUncheckedCreateWithoutResumeInput = {
    id?: string
    skillId: string
  }

  export type ResumeSkillCreateOrConnectWithoutResumeInput = {
    where: ResumeSkillWhereUniqueInput
    create: XOR<ResumeSkillCreateWithoutResumeInput, ResumeSkillUncheckedCreateWithoutResumeInput>
  }

  export type ResumeSkillCreateManyResumeInputEnvelope = {
    data: ResumeSkillCreateManyResumeInput | ResumeSkillCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type JdMatchCreateWithoutResumeInput = {
    id?: string
    matchPercentage: number
    matchedSkills?: JdMatchCreatematchedSkillsInput | string[]
    missingSkills?: JdMatchCreatemissingSkillsInput | string[]
    createdAt?: Date | string
    jobDescription: JobDescriptionCreateNestedOneWithoutMatchesInput
  }

  export type JdMatchUncheckedCreateWithoutResumeInput = {
    id?: string
    jobDescriptionId: string
    matchPercentage: number
    matchedSkills?: JdMatchCreatematchedSkillsInput | string[]
    missingSkills?: JdMatchCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type JdMatchCreateOrConnectWithoutResumeInput = {
    where: JdMatchWhereUniqueInput
    create: XOR<JdMatchCreateWithoutResumeInput, JdMatchUncheckedCreateWithoutResumeInput>
  }

  export type JdMatchCreateManyResumeInputEnvelope = {
    data: JdMatchCreateManyResumeInput | JdMatchCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type SuggestionCreateWithoutResumeInput = {
    id?: string
    category: string
    message: string
    priority?: number
    source?: $Enums.SuggestionSource
    createdAt?: Date | string
    analysisReport?: AnalysisReportCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateWithoutResumeInput = {
    id?: string
    analysisReportId?: string | null
    category: string
    message: string
    priority?: number
    source?: $Enums.SuggestionSource
    createdAt?: Date | string
  }

  export type SuggestionCreateOrConnectWithoutResumeInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutResumeInput, SuggestionUncheckedCreateWithoutResumeInput>
  }

  export type SuggestionCreateManyResumeInputEnvelope = {
    data: SuggestionCreateManyResumeInput | SuggestionCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutResumesInput = {
    update: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
  }

  export type UserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUncheckedUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUncheckedUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeVersionUpsertWithWhereUniqueWithoutResumeInput = {
    where: ResumeVersionWhereUniqueInput
    update: XOR<ResumeVersionUpdateWithoutResumeInput, ResumeVersionUncheckedUpdateWithoutResumeInput>
    create: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput>
  }

  export type ResumeVersionUpdateWithWhereUniqueWithoutResumeInput = {
    where: ResumeVersionWhereUniqueInput
    data: XOR<ResumeVersionUpdateWithoutResumeInput, ResumeVersionUncheckedUpdateWithoutResumeInput>
  }

  export type ResumeVersionUpdateManyWithWhereWithoutResumeInput = {
    where: ResumeVersionScalarWhereInput
    data: XOR<ResumeVersionUpdateManyMutationInput, ResumeVersionUncheckedUpdateManyWithoutResumeInput>
  }

  export type ResumeVersionScalarWhereInput = {
    AND?: ResumeVersionScalarWhereInput | ResumeVersionScalarWhereInput[]
    OR?: ResumeVersionScalarWhereInput[]
    NOT?: ResumeVersionScalarWhereInput | ResumeVersionScalarWhereInput[]
    id?: StringFilter<"ResumeVersion"> | string
    resumeId?: StringFilter<"ResumeVersion"> | string
    version?: IntFilter<"ResumeVersion"> | number
    fileName?: StringFilter<"ResumeVersion"> | string
    filePath?: StringFilter<"ResumeVersion"> | string
    createdAt?: DateTimeFilter<"ResumeVersion"> | Date | string
  }

  export type AnalysisReportUpsertWithWhereUniqueWithoutResumeInput = {
    where: AnalysisReportWhereUniqueInput
    update: XOR<AnalysisReportUpdateWithoutResumeInput, AnalysisReportUncheckedUpdateWithoutResumeInput>
    create: XOR<AnalysisReportCreateWithoutResumeInput, AnalysisReportUncheckedCreateWithoutResumeInput>
  }

  export type AnalysisReportUpdateWithWhereUniqueWithoutResumeInput = {
    where: AnalysisReportWhereUniqueInput
    data: XOR<AnalysisReportUpdateWithoutResumeInput, AnalysisReportUncheckedUpdateWithoutResumeInput>
  }

  export type AnalysisReportUpdateManyWithWhereWithoutResumeInput = {
    where: AnalysisReportScalarWhereInput
    data: XOR<AnalysisReportUpdateManyMutationInput, AnalysisReportUncheckedUpdateManyWithoutResumeInput>
  }

  export type AnalysisReportScalarWhereInput = {
    AND?: AnalysisReportScalarWhereInput | AnalysisReportScalarWhereInput[]
    OR?: AnalysisReportScalarWhereInput[]
    NOT?: AnalysisReportScalarWhereInput | AnalysisReportScalarWhereInput[]
    id?: StringFilter<"AnalysisReport"> | string
    resumeId?: StringFilter<"AnalysisReport"> | string
    status?: EnumAnalysisStatusFilter<"AnalysisReport"> | $Enums.AnalysisStatus
    overallScore?: FloatFilter<"AnalysisReport"> | number
    skillsScore?: FloatFilter<"AnalysisReport"> | number
    keywordsScore?: FloatFilter<"AnalysisReport"> | number
    experienceScore?: FloatFilter<"AnalysisReport"> | number
    formattingScore?: FloatFilter<"AnalysisReport"> | number
    rawText?: StringFilter<"AnalysisReport"> | string
    extractedSkills?: StringNullableListFilter<"AnalysisReport">
    feedback?: JsonNullableFilter<"AnalysisReport">
    createdAt?: DateTimeFilter<"AnalysisReport"> | Date | string
    updatedAt?: DateTimeFilter<"AnalysisReport"> | Date | string
  }

  export type ResumeSkillUpsertWithWhereUniqueWithoutResumeInput = {
    where: ResumeSkillWhereUniqueInput
    update: XOR<ResumeSkillUpdateWithoutResumeInput, ResumeSkillUncheckedUpdateWithoutResumeInput>
    create: XOR<ResumeSkillCreateWithoutResumeInput, ResumeSkillUncheckedCreateWithoutResumeInput>
  }

  export type ResumeSkillUpdateWithWhereUniqueWithoutResumeInput = {
    where: ResumeSkillWhereUniqueInput
    data: XOR<ResumeSkillUpdateWithoutResumeInput, ResumeSkillUncheckedUpdateWithoutResumeInput>
  }

  export type ResumeSkillUpdateManyWithWhereWithoutResumeInput = {
    where: ResumeSkillScalarWhereInput
    data: XOR<ResumeSkillUpdateManyMutationInput, ResumeSkillUncheckedUpdateManyWithoutResumeInput>
  }

  export type ResumeSkillScalarWhereInput = {
    AND?: ResumeSkillScalarWhereInput | ResumeSkillScalarWhereInput[]
    OR?: ResumeSkillScalarWhereInput[]
    NOT?: ResumeSkillScalarWhereInput | ResumeSkillScalarWhereInput[]
    id?: StringFilter<"ResumeSkill"> | string
    resumeId?: StringFilter<"ResumeSkill"> | string
    skillId?: StringFilter<"ResumeSkill"> | string
  }

  export type JdMatchUpsertWithWhereUniqueWithoutResumeInput = {
    where: JdMatchWhereUniqueInput
    update: XOR<JdMatchUpdateWithoutResumeInput, JdMatchUncheckedUpdateWithoutResumeInput>
    create: XOR<JdMatchCreateWithoutResumeInput, JdMatchUncheckedCreateWithoutResumeInput>
  }

  export type JdMatchUpdateWithWhereUniqueWithoutResumeInput = {
    where: JdMatchWhereUniqueInput
    data: XOR<JdMatchUpdateWithoutResumeInput, JdMatchUncheckedUpdateWithoutResumeInput>
  }

  export type JdMatchUpdateManyWithWhereWithoutResumeInput = {
    where: JdMatchScalarWhereInput
    data: XOR<JdMatchUpdateManyMutationInput, JdMatchUncheckedUpdateManyWithoutResumeInput>
  }

  export type JdMatchScalarWhereInput = {
    AND?: JdMatchScalarWhereInput | JdMatchScalarWhereInput[]
    OR?: JdMatchScalarWhereInput[]
    NOT?: JdMatchScalarWhereInput | JdMatchScalarWhereInput[]
    id?: StringFilter<"JdMatch"> | string
    jobDescriptionId?: StringFilter<"JdMatch"> | string
    resumeId?: StringFilter<"JdMatch"> | string
    matchPercentage?: FloatFilter<"JdMatch"> | number
    matchedSkills?: StringNullableListFilter<"JdMatch">
    missingSkills?: StringNullableListFilter<"JdMatch">
    createdAt?: DateTimeFilter<"JdMatch"> | Date | string
  }

  export type SuggestionUpsertWithWhereUniqueWithoutResumeInput = {
    where: SuggestionWhereUniqueInput
    update: XOR<SuggestionUpdateWithoutResumeInput, SuggestionUncheckedUpdateWithoutResumeInput>
    create: XOR<SuggestionCreateWithoutResumeInput, SuggestionUncheckedCreateWithoutResumeInput>
  }

  export type SuggestionUpdateWithWhereUniqueWithoutResumeInput = {
    where: SuggestionWhereUniqueInput
    data: XOR<SuggestionUpdateWithoutResumeInput, SuggestionUncheckedUpdateWithoutResumeInput>
  }

  export type SuggestionUpdateManyWithWhereWithoutResumeInput = {
    where: SuggestionScalarWhereInput
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyWithoutResumeInput>
  }

  export type SuggestionScalarWhereInput = {
    AND?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    OR?: SuggestionScalarWhereInput[]
    NOT?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    id?: StringFilter<"Suggestion"> | string
    resumeId?: StringFilter<"Suggestion"> | string
    analysisReportId?: StringNullableFilter<"Suggestion"> | string | null
    category?: StringFilter<"Suggestion"> | string
    message?: StringFilter<"Suggestion"> | string
    priority?: IntFilter<"Suggestion"> | number
    source?: EnumSuggestionSourceFilter<"Suggestion"> | $Enums.SuggestionSource
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
  }

  export type ResumeCreateWithoutVersionsInput = {
    id?: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    analysisReports?: AnalysisReportCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutVersionsInput = {
    id?: string
    userId: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    analysisReports?: AnalysisReportUncheckedCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillUncheckedCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchUncheckedCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutVersionsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
  }

  export type ResumeUpsertWithoutVersionsInput = {
    update: XOR<ResumeUpdateWithoutVersionsInput, ResumeUncheckedUpdateWithoutVersionsInput>
    create: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutVersionsInput, ResumeUncheckedUpdateWithoutVersionsInput>
  }

  export type ResumeUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    analysisReports?: AnalysisReportUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysisReports?: AnalysisReportUncheckedUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUncheckedUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutAnalysisReportsInput = {
    id?: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutAnalysisReportsInput = {
    id?: string
    userId: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillUncheckedCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchUncheckedCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutAnalysisReportsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutAnalysisReportsInput, ResumeUncheckedCreateWithoutAnalysisReportsInput>
  }

  export type SuggestionCreateWithoutAnalysisReportInput = {
    id?: string
    category: string
    message: string
    priority?: number
    source?: $Enums.SuggestionSource
    createdAt?: Date | string
    resume: ResumeCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateWithoutAnalysisReportInput = {
    id?: string
    resumeId: string
    category: string
    message: string
    priority?: number
    source?: $Enums.SuggestionSource
    createdAt?: Date | string
  }

  export type SuggestionCreateOrConnectWithoutAnalysisReportInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutAnalysisReportInput, SuggestionUncheckedCreateWithoutAnalysisReportInput>
  }

  export type SuggestionCreateManyAnalysisReportInputEnvelope = {
    data: SuggestionCreateManyAnalysisReportInput | SuggestionCreateManyAnalysisReportInput[]
    skipDuplicates?: boolean
  }

  export type ResumeUpsertWithoutAnalysisReportsInput = {
    update: XOR<ResumeUpdateWithoutAnalysisReportsInput, ResumeUncheckedUpdateWithoutAnalysisReportsInput>
    create: XOR<ResumeCreateWithoutAnalysisReportsInput, ResumeUncheckedCreateWithoutAnalysisReportsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutAnalysisReportsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutAnalysisReportsInput, ResumeUncheckedUpdateWithoutAnalysisReportsInput>
  }

  export type ResumeUpdateWithoutAnalysisReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutAnalysisReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUncheckedUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type SuggestionUpsertWithWhereUniqueWithoutAnalysisReportInput = {
    where: SuggestionWhereUniqueInput
    update: XOR<SuggestionUpdateWithoutAnalysisReportInput, SuggestionUncheckedUpdateWithoutAnalysisReportInput>
    create: XOR<SuggestionCreateWithoutAnalysisReportInput, SuggestionUncheckedCreateWithoutAnalysisReportInput>
  }

  export type SuggestionUpdateWithWhereUniqueWithoutAnalysisReportInput = {
    where: SuggestionWhereUniqueInput
    data: XOR<SuggestionUpdateWithoutAnalysisReportInput, SuggestionUncheckedUpdateWithoutAnalysisReportInput>
  }

  export type SuggestionUpdateManyWithWhereWithoutAnalysisReportInput = {
    where: SuggestionScalarWhereInput
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyWithoutAnalysisReportInput>
  }

  export type ResumeSkillCreateWithoutSkillInput = {
    id?: string
    resume: ResumeCreateNestedOneWithoutResumeSkillsInput
  }

  export type ResumeSkillUncheckedCreateWithoutSkillInput = {
    id?: string
    resumeId: string
  }

  export type ResumeSkillCreateOrConnectWithoutSkillInput = {
    where: ResumeSkillWhereUniqueInput
    create: XOR<ResumeSkillCreateWithoutSkillInput, ResumeSkillUncheckedCreateWithoutSkillInput>
  }

  export type ResumeSkillCreateManySkillInputEnvelope = {
    data: ResumeSkillCreateManySkillInput | ResumeSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type ResumeSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: ResumeSkillWhereUniqueInput
    update: XOR<ResumeSkillUpdateWithoutSkillInput, ResumeSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<ResumeSkillCreateWithoutSkillInput, ResumeSkillUncheckedCreateWithoutSkillInput>
  }

  export type ResumeSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: ResumeSkillWhereUniqueInput
    data: XOR<ResumeSkillUpdateWithoutSkillInput, ResumeSkillUncheckedUpdateWithoutSkillInput>
  }

  export type ResumeSkillUpdateManyWithWhereWithoutSkillInput = {
    where: ResumeSkillScalarWhereInput
    data: XOR<ResumeSkillUpdateManyMutationInput, ResumeSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type ResumeCreateWithoutResumeSkillsInput = {
    id?: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutResumeSkillsInput = {
    id?: string
    userId: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportUncheckedCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchUncheckedCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutResumeSkillsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutResumeSkillsInput, ResumeUncheckedCreateWithoutResumeSkillsInput>
  }

  export type SkillCreateWithoutResumeSkillsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type SkillUncheckedCreateWithoutResumeSkillsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type SkillCreateOrConnectWithoutResumeSkillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutResumeSkillsInput, SkillUncheckedCreateWithoutResumeSkillsInput>
  }

  export type ResumeUpsertWithoutResumeSkillsInput = {
    update: XOR<ResumeUpdateWithoutResumeSkillsInput, ResumeUncheckedUpdateWithoutResumeSkillsInput>
    create: XOR<ResumeCreateWithoutResumeSkillsInput, ResumeUncheckedCreateWithoutResumeSkillsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutResumeSkillsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutResumeSkillsInput, ResumeUncheckedUpdateWithoutResumeSkillsInput>
  }

  export type ResumeUpdateWithoutResumeSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutResumeSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUncheckedUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUncheckedUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type SkillUpsertWithoutResumeSkillsInput = {
    update: XOR<SkillUpdateWithoutResumeSkillsInput, SkillUncheckedUpdateWithoutResumeSkillsInput>
    create: XOR<SkillCreateWithoutResumeSkillsInput, SkillUncheckedCreateWithoutResumeSkillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutResumeSkillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutResumeSkillsInput, SkillUncheckedUpdateWithoutResumeSkillsInput>
  }

  export type SkillUpdateWithoutResumeSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateWithoutResumeSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutJobDescriptionsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobDescriptionsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigUncheckedCreateNestedOneWithoutUserInput
    llmUsageLogs?: LlmUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobDescriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobDescriptionsInput, UserUncheckedCreateWithoutJobDescriptionsInput>
  }

  export type JdMatchCreateWithoutJobDescriptionInput = {
    id?: string
    matchPercentage: number
    matchedSkills?: JdMatchCreatematchedSkillsInput | string[]
    missingSkills?: JdMatchCreatemissingSkillsInput | string[]
    createdAt?: Date | string
    resume: ResumeCreateNestedOneWithoutJdMatchesInput
  }

  export type JdMatchUncheckedCreateWithoutJobDescriptionInput = {
    id?: string
    resumeId: string
    matchPercentage: number
    matchedSkills?: JdMatchCreatematchedSkillsInput | string[]
    missingSkills?: JdMatchCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type JdMatchCreateOrConnectWithoutJobDescriptionInput = {
    where: JdMatchWhereUniqueInput
    create: XOR<JdMatchCreateWithoutJobDescriptionInput, JdMatchUncheckedCreateWithoutJobDescriptionInput>
  }

  export type JdMatchCreateManyJobDescriptionInputEnvelope = {
    data: JdMatchCreateManyJobDescriptionInput | JdMatchCreateManyJobDescriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJobDescriptionsInput = {
    update: XOR<UserUpdateWithoutJobDescriptionsInput, UserUncheckedUpdateWithoutJobDescriptionsInput>
    create: XOR<UserCreateWithoutJobDescriptionsInput, UserUncheckedCreateWithoutJobDescriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobDescriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobDescriptionsInput, UserUncheckedUpdateWithoutJobDescriptionsInput>
  }

  export type UserUpdateWithoutJobDescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobDescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUncheckedUpdateOneWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JdMatchUpsertWithWhereUniqueWithoutJobDescriptionInput = {
    where: JdMatchWhereUniqueInput
    update: XOR<JdMatchUpdateWithoutJobDescriptionInput, JdMatchUncheckedUpdateWithoutJobDescriptionInput>
    create: XOR<JdMatchCreateWithoutJobDescriptionInput, JdMatchUncheckedCreateWithoutJobDescriptionInput>
  }

  export type JdMatchUpdateWithWhereUniqueWithoutJobDescriptionInput = {
    where: JdMatchWhereUniqueInput
    data: XOR<JdMatchUpdateWithoutJobDescriptionInput, JdMatchUncheckedUpdateWithoutJobDescriptionInput>
  }

  export type JdMatchUpdateManyWithWhereWithoutJobDescriptionInput = {
    where: JdMatchScalarWhereInput
    data: XOR<JdMatchUpdateManyMutationInput, JdMatchUncheckedUpdateManyWithoutJobDescriptionInput>
  }

  export type JobDescriptionCreateWithoutMatchesInput = {
    id?: string
    title: string
    content: string
    extractedSkills?: JobDescriptionCreateextractedSkillsInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJobDescriptionsInput
  }

  export type JobDescriptionUncheckedCreateWithoutMatchesInput = {
    id?: string
    userId: string
    title: string
    content: string
    extractedSkills?: JobDescriptionCreateextractedSkillsInput | string[]
    createdAt?: Date | string
  }

  export type JobDescriptionCreateOrConnectWithoutMatchesInput = {
    where: JobDescriptionWhereUniqueInput
    create: XOR<JobDescriptionCreateWithoutMatchesInput, JobDescriptionUncheckedCreateWithoutMatchesInput>
  }

  export type ResumeCreateWithoutJdMatchesInput = {
    id?: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutJdMatchesInput = {
    id?: string
    userId: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportUncheckedCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillUncheckedCreateNestedManyWithoutResumeInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutJdMatchesInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutJdMatchesInput, ResumeUncheckedCreateWithoutJdMatchesInput>
  }

  export type JobDescriptionUpsertWithoutMatchesInput = {
    update: XOR<JobDescriptionUpdateWithoutMatchesInput, JobDescriptionUncheckedUpdateWithoutMatchesInput>
    create: XOR<JobDescriptionCreateWithoutMatchesInput, JobDescriptionUncheckedCreateWithoutMatchesInput>
    where?: JobDescriptionWhereInput
  }

  export type JobDescriptionUpdateToOneWithWhereWithoutMatchesInput = {
    where?: JobDescriptionWhereInput
    data: XOR<JobDescriptionUpdateWithoutMatchesInput, JobDescriptionUncheckedUpdateWithoutMatchesInput>
  }

  export type JobDescriptionUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    extractedSkills?: JobDescriptionUpdateextractedSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobDescriptionsNestedInput
  }

  export type JobDescriptionUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    extractedSkills?: JobDescriptionUpdateextractedSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUpsertWithoutJdMatchesInput = {
    update: XOR<ResumeUpdateWithoutJdMatchesInput, ResumeUncheckedUpdateWithoutJdMatchesInput>
    create: XOR<ResumeCreateWithoutJdMatchesInput, ResumeUncheckedCreateWithoutJdMatchesInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutJdMatchesInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutJdMatchesInput, ResumeUncheckedUpdateWithoutJdMatchesInput>
  }

  export type ResumeUpdateWithoutJdMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutJdMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUncheckedUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutSuggestionsInput = {
    id?: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutSuggestionsInput = {
    id?: string
    userId: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    analysisReports?: AnalysisReportUncheckedCreateNestedManyWithoutResumeInput
    resumeSkills?: ResumeSkillUncheckedCreateNestedManyWithoutResumeInput
    jdMatches?: JdMatchUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutSuggestionsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutSuggestionsInput, ResumeUncheckedCreateWithoutSuggestionsInput>
  }

  export type AnalysisReportCreateWithoutSuggestionsInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    overallScore?: number
    skillsScore?: number
    keywordsScore?: number
    experienceScore?: number
    formattingScore?: number
    rawText: string
    extractedSkills?: AnalysisReportCreateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutAnalysisReportsInput
  }

  export type AnalysisReportUncheckedCreateWithoutSuggestionsInput = {
    id?: string
    resumeId: string
    status?: $Enums.AnalysisStatus
    overallScore?: number
    skillsScore?: number
    keywordsScore?: number
    experienceScore?: number
    formattingScore?: number
    rawText: string
    extractedSkills?: AnalysisReportCreateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisReportCreateOrConnectWithoutSuggestionsInput = {
    where: AnalysisReportWhereUniqueInput
    create: XOR<AnalysisReportCreateWithoutSuggestionsInput, AnalysisReportUncheckedCreateWithoutSuggestionsInput>
  }

  export type ResumeUpsertWithoutSuggestionsInput = {
    update: XOR<ResumeUpdateWithoutSuggestionsInput, ResumeUncheckedUpdateWithoutSuggestionsInput>
    create: XOR<ResumeCreateWithoutSuggestionsInput, ResumeUncheckedCreateWithoutSuggestionsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutSuggestionsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutSuggestionsInput, ResumeUncheckedUpdateWithoutSuggestionsInput>
  }

  export type ResumeUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUncheckedUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type AnalysisReportUpsertWithoutSuggestionsInput = {
    update: XOR<AnalysisReportUpdateWithoutSuggestionsInput, AnalysisReportUncheckedUpdateWithoutSuggestionsInput>
    create: XOR<AnalysisReportCreateWithoutSuggestionsInput, AnalysisReportUncheckedCreateWithoutSuggestionsInput>
    where?: AnalysisReportWhereInput
  }

  export type AnalysisReportUpdateToOneWithWhereWithoutSuggestionsInput = {
    where?: AnalysisReportWhereInput
    data: XOR<AnalysisReportUpdateWithoutSuggestionsInput, AnalysisReportUncheckedUpdateWithoutSuggestionsInput>
  }

  export type AnalysisReportUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    overallScore?: FloatFieldUpdateOperationsInput | number
    skillsScore?: FloatFieldUpdateOperationsInput | number
    keywordsScore?: FloatFieldUpdateOperationsInput | number
    experienceScore?: FloatFieldUpdateOperationsInput | number
    formattingScore?: FloatFieldUpdateOperationsInput | number
    rawText?: StringFieldUpdateOperationsInput | string
    extractedSkills?: AnalysisReportUpdateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutAnalysisReportsNestedInput
  }

  export type AnalysisReportUncheckedUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    overallScore?: FloatFieldUpdateOperationsInput | number
    skillsScore?: FloatFieldUpdateOperationsInput | number
    keywordsScore?: FloatFieldUpdateOperationsInput | number
    experienceScore?: FloatFieldUpdateOperationsInput | number
    formattingScore?: FloatFieldUpdateOperationsInput | number
    rawText?: StringFieldUpdateOperationsInput | string
    extractedSkills?: AnalysisReportUpdateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutLlmConfigInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionCreateNestedManyWithoutUserInput
    llmUsageLogs?: LlmUsageLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLlmConfigInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionUncheckedCreateNestedManyWithoutUserInput
    llmUsageLogs?: LlmUsageLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLlmConfigInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLlmConfigInput, UserUncheckedCreateWithoutLlmConfigInput>
  }

  export type LlmUsageLogCreateWithoutConfigInput = {
    id?: string
    tokensUsed?: number
    requestType: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLlmUsageLogsInput
  }

  export type LlmUsageLogUncheckedCreateWithoutConfigInput = {
    id?: string
    userId: string
    tokensUsed?: number
    requestType: string
    createdAt?: Date | string
  }

  export type LlmUsageLogCreateOrConnectWithoutConfigInput = {
    where: LlmUsageLogWhereUniqueInput
    create: XOR<LlmUsageLogCreateWithoutConfigInput, LlmUsageLogUncheckedCreateWithoutConfigInput>
  }

  export type LlmUsageLogCreateManyConfigInputEnvelope = {
    data: LlmUsageLogCreateManyConfigInput | LlmUsageLogCreateManyConfigInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLlmConfigInput = {
    update: XOR<UserUpdateWithoutLlmConfigInput, UserUncheckedUpdateWithoutLlmConfigInput>
    create: XOR<UserCreateWithoutLlmConfigInput, UserUncheckedCreateWithoutLlmConfigInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLlmConfigInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLlmConfigInput, UserUncheckedUpdateWithoutLlmConfigInput>
  }

  export type UserUpdateWithoutLlmConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUpdateManyWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLlmConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUncheckedUpdateManyWithoutUserNestedInput
    llmUsageLogs?: LlmUsageLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LlmUsageLogUpsertWithWhereUniqueWithoutConfigInput = {
    where: LlmUsageLogWhereUniqueInput
    update: XOR<LlmUsageLogUpdateWithoutConfigInput, LlmUsageLogUncheckedUpdateWithoutConfigInput>
    create: XOR<LlmUsageLogCreateWithoutConfigInput, LlmUsageLogUncheckedCreateWithoutConfigInput>
  }

  export type LlmUsageLogUpdateWithWhereUniqueWithoutConfigInput = {
    where: LlmUsageLogWhereUniqueInput
    data: XOR<LlmUsageLogUpdateWithoutConfigInput, LlmUsageLogUncheckedUpdateWithoutConfigInput>
  }

  export type LlmUsageLogUpdateManyWithWhereWithoutConfigInput = {
    where: LlmUsageLogScalarWhereInput
    data: XOR<LlmUsageLogUpdateManyMutationInput, LlmUsageLogUncheckedUpdateManyWithoutConfigInput>
  }

  export type UserCreateWithoutLlmUsageLogsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLlmUsageLogsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: UserCredentialUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    jobDescriptions?: JobDescriptionUncheckedCreateNestedManyWithoutUserInput
    llmConfig?: UserLlmConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLlmUsageLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLlmUsageLogsInput, UserUncheckedCreateWithoutLlmUsageLogsInput>
  }

  export type UserLlmConfigCreateWithoutUsageLogsInput = {
    id?: string
    provider?: $Enums.LlmProvider
    model?: string
    encryptedApiKey: string
    baseUrl?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLlmConfigInput
  }

  export type UserLlmConfigUncheckedCreateWithoutUsageLogsInput = {
    id?: string
    userId: string
    provider?: $Enums.LlmProvider
    model?: string
    encryptedApiKey: string
    baseUrl?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLlmConfigCreateOrConnectWithoutUsageLogsInput = {
    where: UserLlmConfigWhereUniqueInput
    create: XOR<UserLlmConfigCreateWithoutUsageLogsInput, UserLlmConfigUncheckedCreateWithoutUsageLogsInput>
  }

  export type UserUpsertWithoutLlmUsageLogsInput = {
    update: XOR<UserUpdateWithoutLlmUsageLogsInput, UserUncheckedUpdateWithoutLlmUsageLogsInput>
    create: XOR<UserCreateWithoutLlmUsageLogsInput, UserUncheckedCreateWithoutLlmUsageLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLlmUsageLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLlmUsageLogsInput, UserUncheckedUpdateWithoutLlmUsageLogsInput>
  }

  export type UserUpdateWithoutLlmUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLlmUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: UserCredentialUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    jobDescriptions?: JobDescriptionUncheckedUpdateManyWithoutUserNestedInput
    llmConfig?: UserLlmConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserLlmConfigUpsertWithoutUsageLogsInput = {
    update: XOR<UserLlmConfigUpdateWithoutUsageLogsInput, UserLlmConfigUncheckedUpdateWithoutUsageLogsInput>
    create: XOR<UserLlmConfigCreateWithoutUsageLogsInput, UserLlmConfigUncheckedCreateWithoutUsageLogsInput>
    where?: UserLlmConfigWhereInput
  }

  export type UserLlmConfigUpdateToOneWithWhereWithoutUsageLogsInput = {
    where?: UserLlmConfigWhereInput
    data: XOR<UserLlmConfigUpdateWithoutUsageLogsInput, UserLlmConfigUncheckedUpdateWithoutUsageLogsInput>
  }

  export type UserLlmConfigUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLlmProviderFieldUpdateOperationsInput | $Enums.LlmProvider
    model?: StringFieldUpdateOperationsInput | string
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLlmConfigNestedInput
  }

  export type UserLlmConfigUncheckedUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumLlmProviderFieldUpdateOperationsInput | $Enums.LlmProvider
    model?: StringFieldUpdateOperationsInput | string
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeCreateManyUserInput = {
    id?: string
    originalName: string
    fileName: string
    filePath: string
    mimeType: string
    fileSize: number
    status?: $Enums.ResumeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobDescriptionCreateManyUserInput = {
    id?: string
    title: string
    content: string
    extractedSkills?: JobDescriptionCreateextractedSkillsInput | string[]
    createdAt?: Date | string
  }

  export type LlmUsageLogCreateManyUserInput = {
    id?: string
    configId: string
    tokensUsed?: number
    requestType: string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    analysisReports?: AnalysisReportUncheckedUpdateManyWithoutResumeNestedInput
    resumeSkills?: ResumeSkillUncheckedUpdateManyWithoutResumeNestedInput
    jdMatches?: JdMatchUncheckedUpdateManyWithoutResumeNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobDescriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    extractedSkills?: JobDescriptionUpdateextractedSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: JdMatchUpdateManyWithoutJobDescriptionNestedInput
  }

  export type JobDescriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    extractedSkills?: JobDescriptionUpdateextractedSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: JdMatchUncheckedUpdateManyWithoutJobDescriptionNestedInput
  }

  export type JobDescriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    extractedSkills?: JobDescriptionUpdateextractedSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmUsageLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: UserLlmConfigUpdateOneRequiredWithoutUsageLogsNestedInput
  }

  export type LlmUsageLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmUsageLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionCreateManyResumeInput = {
    id?: string
    version: number
    fileName: string
    filePath: string
    createdAt?: Date | string
  }

  export type AnalysisReportCreateManyResumeInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    overallScore?: number
    skillsScore?: number
    keywordsScore?: number
    experienceScore?: number
    formattingScore?: number
    rawText: string
    extractedSkills?: AnalysisReportCreateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeSkillCreateManyResumeInput = {
    id?: string
    skillId: string
  }

  export type JdMatchCreateManyResumeInput = {
    id?: string
    jobDescriptionId: string
    matchPercentage: number
    matchedSkills?: JdMatchCreatematchedSkillsInput | string[]
    missingSkills?: JdMatchCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type SuggestionCreateManyResumeInput = {
    id?: string
    analysisReportId?: string | null
    category: string
    message: string
    priority?: number
    source?: $Enums.SuggestionSource
    createdAt?: Date | string
  }

  export type ResumeVersionUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisReportUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    overallScore?: FloatFieldUpdateOperationsInput | number
    skillsScore?: FloatFieldUpdateOperationsInput | number
    keywordsScore?: FloatFieldUpdateOperationsInput | number
    experienceScore?: FloatFieldUpdateOperationsInput | number
    formattingScore?: FloatFieldUpdateOperationsInput | number
    rawText?: StringFieldUpdateOperationsInput | string
    extractedSkills?: AnalysisReportUpdateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestions?: SuggestionUpdateManyWithoutAnalysisReportNestedInput
  }

  export type AnalysisReportUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    overallScore?: FloatFieldUpdateOperationsInput | number
    skillsScore?: FloatFieldUpdateOperationsInput | number
    keywordsScore?: FloatFieldUpdateOperationsInput | number
    experienceScore?: FloatFieldUpdateOperationsInput | number
    formattingScore?: FloatFieldUpdateOperationsInput | number
    rawText?: StringFieldUpdateOperationsInput | string
    extractedSkills?: AnalysisReportUpdateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestions?: SuggestionUncheckedUpdateManyWithoutAnalysisReportNestedInput
  }

  export type AnalysisReportUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    overallScore?: FloatFieldUpdateOperationsInput | number
    skillsScore?: FloatFieldUpdateOperationsInput | number
    keywordsScore?: FloatFieldUpdateOperationsInput | number
    experienceScore?: FloatFieldUpdateOperationsInput | number
    formattingScore?: FloatFieldUpdateOperationsInput | number
    rawText?: StringFieldUpdateOperationsInput | string
    extractedSkills?: AnalysisReportUpdateextractedSkillsInput | string[]
    feedback?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeSkillUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: SkillUpdateOneRequiredWithoutResumeSkillsNestedInput
  }

  export type ResumeSkillUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeSkillUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type JdMatchUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobDescription?: JobDescriptionUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type JdMatchUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobDescriptionId?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JdMatchUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobDescriptionId?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysisReport?: AnalysisReportUpdateOneWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisReportId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisReportId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionCreateManyAnalysisReportInput = {
    id?: string
    resumeId: string
    category: string
    message: string
    priority?: number
    source?: $Enums.SuggestionSource
    createdAt?: Date | string
  }

  export type SuggestionUpdateWithoutAnalysisReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateWithoutAnalysisReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateManyWithoutAnalysisReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    source?: EnumSuggestionSourceFieldUpdateOperationsInput | $Enums.SuggestionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeSkillCreateManySkillInput = {
    id?: string
    resumeId: string
  }

  export type ResumeSkillUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: ResumeUpdateOneRequiredWithoutResumeSkillsNestedInput
  }

  export type ResumeSkillUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type JdMatchCreateManyJobDescriptionInput = {
    id?: string
    resumeId: string
    matchPercentage: number
    matchedSkills?: JdMatchCreatematchedSkillsInput | string[]
    missingSkills?: JdMatchCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type JdMatchUpdateWithoutJobDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutJdMatchesNestedInput
  }

  export type JdMatchUncheckedUpdateWithoutJobDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JdMatchUncheckedUpdateManyWithoutJobDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    matchPercentage?: FloatFieldUpdateOperationsInput | number
    matchedSkills?: JdMatchUpdatematchedSkillsInput | string[]
    missingSkills?: JdMatchUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmUsageLogCreateManyConfigInput = {
    id?: string
    userId: string
    tokensUsed?: number
    requestType: string
    createdAt?: Date | string
  }

  export type LlmUsageLogUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLlmUsageLogsNestedInput
  }

  export type LlmUsageLogUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LlmUsageLogUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumeCountOutputTypeDefaultArgs instead
     */
    export type ResumeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnalysisReportCountOutputTypeDefaultArgs instead
     */
    export type AnalysisReportCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalysisReportCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillCountOutputTypeDefaultArgs instead
     */
    export type SkillCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDescriptionCountOutputTypeDefaultArgs instead
     */
    export type JobDescriptionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDescriptionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLlmConfigCountOutputTypeDefaultArgs instead
     */
    export type UserLlmConfigCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLlmConfigCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCredentialDefaultArgs instead
     */
    export type UserCredentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCredentialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumeDefaultArgs instead
     */
    export type ResumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumeVersionDefaultArgs instead
     */
    export type ResumeVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumeVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnalysisReportDefaultArgs instead
     */
    export type AnalysisReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalysisReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillDefaultArgs instead
     */
    export type SkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumeSkillDefaultArgs instead
     */
    export type ResumeSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumeSkillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDescriptionDefaultArgs instead
     */
    export type JobDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDescriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JdMatchDefaultArgs instead
     */
    export type JdMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JdMatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuggestionDefaultArgs instead
     */
    export type SuggestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuggestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLlmConfigDefaultArgs instead
     */
    export type UserLlmConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLlmConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LlmUsageLogDefaultArgs instead
     */
    export type LlmUsageLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LlmUsageLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}