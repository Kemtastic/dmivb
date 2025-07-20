
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Watched
 * 
 */
export type Watched = $Result.DefaultSelection<Prisma.$WatchedPayload>
/**
 * Model List
 * 
 */
export type List = $Result.DefaultSelection<Prisma.$ListPayload>
/**
 * Model ListItem
 * 
 */
export type ListItem = $Result.DefaultSelection<Prisma.$ListItemPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model CommentLike
 * 
 */
export type CommentLike = $Result.DefaultSelection<Prisma.$CommentLikePayload>
/**
 * Model CommentReport
 * 
 */
export type CommentReport = $Result.DefaultSelection<Prisma.$CommentReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ContentType: {
  FILM: 'FILM',
  DIZI: 'DIZI'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const Platform: {
  NETFLIX: 'NETFLIX',
  PRIME: 'PRIME',
  HBO: 'HBO',
  DISNEY: 'DISNEY'
};

export type Platform = (typeof Platform)[keyof typeof Platform]

}

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watched`: Exposes CRUD operations for the **Watched** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watcheds
    * const watcheds = await prisma.watched.findMany()
    * ```
    */
  get watched(): Prisma.WatchedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.list`: Exposes CRUD operations for the **List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.list.findMany()
    * ```
    */
  get list(): Prisma.ListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listItem`: Exposes CRUD operations for the **ListItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListItems
    * const listItems = await prisma.listItem.findMany()
    * ```
    */
  get listItem(): Prisma.ListItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentLike`: Exposes CRUD operations for the **CommentLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentLikes
    * const commentLikes = await prisma.commentLike.findMany()
    * ```
    */
  get commentLike(): Prisma.CommentLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentReport`: Exposes CRUD operations for the **CommentReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentReports
    * const commentReports = await prisma.commentReport.findMany()
    * ```
    */
  get commentReport(): Prisma.CommentReportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Content: 'Content',
    Favorite: 'Favorite',
    Watched: 'Watched',
    List: 'List',
    ListItem: 'ListItem',
    Rating: 'Rating',
    Comment: 'Comment',
    CommentLike: 'CommentLike',
    CommentReport: 'CommentReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "content" | "favorite" | "watched" | "list" | "listItem" | "rating" | "comment" | "commentLike" | "commentReport"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Watched: {
        payload: Prisma.$WatchedPayload<ExtArgs>
        fields: Prisma.WatchedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          findFirst: {
            args: Prisma.WatchedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          findMany: {
            args: Prisma.WatchedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>[]
          }
          create: {
            args: Prisma.WatchedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          createMany: {
            args: Prisma.WatchedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>[]
          }
          delete: {
            args: Prisma.WatchedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          update: {
            args: Prisma.WatchedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          deleteMany: {
            args: Prisma.WatchedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>[]
          }
          upsert: {
            args: Prisma.WatchedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          aggregate: {
            args: Prisma.WatchedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatched>
          }
          groupBy: {
            args: Prisma.WatchedGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchedGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchedCountArgs<ExtArgs>
            result: $Utils.Optional<WatchedCountAggregateOutputType> | number
          }
        }
      }
      List: {
        payload: Prisma.$ListPayload<ExtArgs>
        fields: Prisma.ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findFirst: {
            args: Prisma.ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findMany: {
            args: Prisma.ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          create: {
            args: Prisma.ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          createMany: {
            args: Prisma.ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          delete: {
            args: Prisma.ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          update: {
            args: Prisma.ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          deleteMany: {
            args: Prisma.ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          upsert: {
            args: Prisma.ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          aggregate: {
            args: Prisma.ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateList>
          }
          groupBy: {
            args: Prisma.ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListCountArgs<ExtArgs>
            result: $Utils.Optional<ListCountAggregateOutputType> | number
          }
        }
      }
      ListItem: {
        payload: Prisma.$ListItemPayload<ExtArgs>
        fields: Prisma.ListItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          findFirst: {
            args: Prisma.ListItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          findMany: {
            args: Prisma.ListItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>[]
          }
          create: {
            args: Prisma.ListItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          createMany: {
            args: Prisma.ListItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>[]
          }
          delete: {
            args: Prisma.ListItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          update: {
            args: Prisma.ListItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          deleteMany: {
            args: Prisma.ListItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>[]
          }
          upsert: {
            args: Prisma.ListItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          aggregate: {
            args: Prisma.ListItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListItem>
          }
          groupBy: {
            args: Prisma.ListItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListItemCountArgs<ExtArgs>
            result: $Utils.Optional<ListItemCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      CommentLike: {
        payload: Prisma.$CommentLikePayload<ExtArgs>
        fields: Prisma.CommentLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          findFirst: {
            args: Prisma.CommentLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          findMany: {
            args: Prisma.CommentLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>[]
          }
          create: {
            args: Prisma.CommentLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          createMany: {
            args: Prisma.CommentLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>[]
          }
          delete: {
            args: Prisma.CommentLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          update: {
            args: Prisma.CommentLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          deleteMany: {
            args: Prisma.CommentLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>[]
          }
          upsert: {
            args: Prisma.CommentLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          aggregate: {
            args: Prisma.CommentLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentLike>
          }
          groupBy: {
            args: Prisma.CommentLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentLikeCountArgs<ExtArgs>
            result: $Utils.Optional<CommentLikeCountAggregateOutputType> | number
          }
        }
      }
      CommentReport: {
        payload: Prisma.$CommentReportPayload<ExtArgs>
        fields: Prisma.CommentReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload>
          }
          findFirst: {
            args: Prisma.CommentReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload>
          }
          findMany: {
            args: Prisma.CommentReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload>[]
          }
          create: {
            args: Prisma.CommentReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload>
          }
          createMany: {
            args: Prisma.CommentReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload>[]
          }
          delete: {
            args: Prisma.CommentReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload>
          }
          update: {
            args: Prisma.CommentReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload>
          }
          deleteMany: {
            args: Prisma.CommentReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload>[]
          }
          upsert: {
            args: Prisma.CommentReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReportPayload>
          }
          aggregate: {
            args: Prisma.CommentReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentReport>
          }
          groupBy: {
            args: Prisma.CommentReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentReportCountArgs<ExtArgs>
            result: $Utils.Optional<CommentReportCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    content?: ContentOmit
    favorite?: FavoriteOmit
    watched?: WatchedOmit
    list?: ListOmit
    listItem?: ListItemOmit
    rating?: RatingOmit
    comment?: CommentOmit
    commentLike?: CommentLikeOmit
    commentReport?: CommentReportOmit
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
    | 'updateManyAndReturn'
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
    accounts: number
    contents: number
    favorites: number
    lists: number
    watched: number
    ratings: number
    comments: number
    commentLikes: number
    commentReports: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    contents?: boolean | UserCountOutputTypeCountContentsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    lists?: boolean | UserCountOutputTypeCountListsArgs
    watched?: boolean | UserCountOutputTypeCountWatchedArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    commentLikes?: boolean | UserCountOutputTypeCountCommentLikesArgs
    commentReports?: boolean | UserCountOutputTypeCountCommentReportsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReportWhereInput
  }


  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    favorites: number
    listItems: number
    watched: number
    ratings: number
    comments: number
  }

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | ContentCountOutputTypeCountFavoritesArgs
    listItems?: boolean | ContentCountOutputTypeCountListItemsArgs
    watched?: boolean | ContentCountOutputTypeCountWatchedArgs
    ratings?: boolean | ContentCountOutputTypeCountRatingsArgs
    comments?: boolean | ContentCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountWatchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type ListCountOutputType
   */

  export type ListCountOutputType = {
    listItems: number
  }

  export type ListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listItems?: boolean | ListCountOutputTypeCountListItemsArgs
  }

  // Custom InputTypes
  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCountOutputType
     */
    select?: ListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
    commentLikes: number
    reports: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
    commentLikes?: boolean | CommentCountOutputTypeCountCommentLikesArgs
    reports?: boolean | CommentCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountCommentLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentLikeWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReportWhereInput
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
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bio: string | null
    location: string | null
    twitter: string | null
    instagram: string | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bio: string | null
    location: string | null
    twitter: string | null
    instagram: string | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    bio: number
    location: number
    twitter: number
    instagram: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    bio?: true
    location?: true
    twitter?: true
    instagram?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    bio?: true
    location?: true
    twitter?: true
    instagram?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    bio?: true
    location?: true
    twitter?: true
    instagram?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
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
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    bio: string | null
    location: string | null
    twitter: string | null
    instagram: string | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
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
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    location?: boolean
    twitter?: boolean
    instagram?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    contents?: boolean | User$contentsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    lists?: boolean | User$listsArgs<ExtArgs>
    watched?: boolean | User$watchedArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    commentLikes?: boolean | User$commentLikesArgs<ExtArgs>
    commentReports?: boolean | User$commentReportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    location?: boolean
    twitter?: boolean
    instagram?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    location?: boolean
    twitter?: boolean
    instagram?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    location?: boolean
    twitter?: boolean
    instagram?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "bio" | "location" | "twitter" | "instagram" | "role" | "banned" | "banReason" | "banExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    contents?: boolean | User$contentsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    lists?: boolean | User$listsArgs<ExtArgs>
    watched?: boolean | User$watchedArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    commentLikes?: boolean | User$commentLikesArgs<ExtArgs>
    commentReports?: boolean | User$commentReportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      contents: Prisma.$ContentPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      lists: Prisma.$ListPayload<ExtArgs>[]
      watched: Prisma.$WatchedPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      commentLikes: Prisma.$CommentLikePayload<ExtArgs>[]
      commentReports: Prisma.$CommentReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      bio: string | null
      location: string | null
      twitter: string | null
      instagram: string | null
      role: string | null
      banned: boolean | null
      banReason: string | null
      banExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contents<T extends User$contentsArgs<ExtArgs> = {}>(args?: Subset<T, User$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lists<T extends User$listsArgs<ExtArgs> = {}>(args?: Subset<T, User$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watched<T extends User$watchedArgs<ExtArgs> = {}>(args?: Subset<T, User$watchedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentLikes<T extends User$commentLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$commentLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentReports<T extends User$commentReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly bio: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly twitter: FieldRef<"User", 'String'>
    readonly instagram: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly banReason: FieldRef<"User", 'String'>
    readonly banExpires: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.contents
   */
  export type User$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.lists
   */
  export type User$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    cursor?: ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * User.watched
   */
  export type User$watchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    where?: WatchedWhereInput
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    cursor?: WatchedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.commentLikes
   */
  export type User$commentLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    where?: CommentLikeWhereInput
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    cursor?: CommentLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * User.commentReports
   */
  export type User$commentReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    where?: CommentReportWhereInput
    orderBy?: CommentReportOrderByWithRelationInput | CommentReportOrderByWithRelationInput[]
    cursor?: CommentReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentReportScalarFieldEnum | CommentReportScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    impersonatedBy: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
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
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    impersonatedBy: string | null
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
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId" | "impersonatedBy", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
      impersonatedBy: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly impersonatedBy: FieldRef<"Session", 'String'>
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    releaseYear: number | null
  }

  export type ContentSumAggregateOutputType = {
    releaseYear: number | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    type: $Enums.ContentType | null
    releaseYear: number | null
    trailerUrl: string | null
    image: string | null
    director: string | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    updatedAt: Date | null
    addedById: string | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    type: $Enums.ContentType | null
    releaseYear: number | null
    trailerUrl: string | null
    image: string | null
    director: string | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    updatedAt: Date | null
    addedById: string | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    title: number
    summary: number
    type: number
    releaseYear: number
    trailerUrl: number
    image: number
    director: number
    actors: number
    genres: number
    platform: number
    createdAt: number
    updatedAt: number
    addedById: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    releaseYear?: true
  }

  export type ContentSumAggregateInputType = {
    releaseYear?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    type?: true
    releaseYear?: true
    trailerUrl?: true
    image?: true
    director?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
    addedById?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    type?: true
    releaseYear?: true
    trailerUrl?: true
    image?: true
    director?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
    addedById?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    type?: true
    releaseYear?: true
    trailerUrl?: true
    image?: true
    director?: true
    actors?: true
    genres?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
    addedById?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl: string | null
    image: string | null
    director: string
    actors: string[]
    genres: string[]
    platform: $Enums.Platform
    createdAt: Date
    updatedAt: Date
    addedById: string
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    type?: boolean
    releaseYear?: boolean
    trailerUrl?: boolean
    image?: boolean
    director?: boolean
    actors?: boolean
    genres?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedById?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | Content$favoritesArgs<ExtArgs>
    listItems?: boolean | Content$listItemsArgs<ExtArgs>
    watched?: boolean | Content$watchedArgs<ExtArgs>
    ratings?: boolean | Content$ratingsArgs<ExtArgs>
    comments?: boolean | Content$commentsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    type?: boolean
    releaseYear?: boolean
    trailerUrl?: boolean
    image?: boolean
    director?: boolean
    actors?: boolean
    genres?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedById?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    type?: boolean
    releaseYear?: boolean
    trailerUrl?: boolean
    image?: boolean
    director?: boolean
    actors?: boolean
    genres?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedById?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectScalar = {
    id?: boolean
    title?: boolean
    summary?: boolean
    type?: boolean
    releaseYear?: boolean
    trailerUrl?: boolean
    image?: boolean
    director?: boolean
    actors?: boolean
    genres?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedById?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "summary" | "type" | "releaseYear" | "trailerUrl" | "image" | "director" | "actors" | "genres" | "platform" | "createdAt" | "updatedAt" | "addedById", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | Content$favoritesArgs<ExtArgs>
    listItems?: boolean | Content$listItemsArgs<ExtArgs>
    watched?: boolean | Content$watchedArgs<ExtArgs>
    ratings?: boolean | Content$ratingsArgs<ExtArgs>
    comments?: boolean | Content$commentsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      addedBy: Prisma.$UserPayload<ExtArgs>
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      listItems: Prisma.$ListItemPayload<ExtArgs>[]
      watched: Prisma.$WatchedPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      summary: string
      type: $Enums.ContentType
      releaseYear: number
      trailerUrl: string | null
      image: string | null
      director: string
      actors: string[]
      genres: string[]
      platform: $Enums.Platform
      createdAt: Date
      updatedAt: Date
      addedById: string
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
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
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favorites<T extends Content$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Content$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listItems<T extends Content$listItemsArgs<ExtArgs> = {}>(args?: Subset<T, Content$listItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watched<T extends Content$watchedArgs<ExtArgs> = {}>(args?: Subset<T, Content$watchedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Content$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Content$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Content$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Content$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly title: FieldRef<"Content", 'String'>
    readonly summary: FieldRef<"Content", 'String'>
    readonly type: FieldRef<"Content", 'ContentType'>
    readonly releaseYear: FieldRef<"Content", 'Int'>
    readonly trailerUrl: FieldRef<"Content", 'String'>
    readonly image: FieldRef<"Content", 'String'>
    readonly director: FieldRef<"Content", 'String'>
    readonly actors: FieldRef<"Content", 'String[]'>
    readonly genres: FieldRef<"Content", 'String[]'>
    readonly platform: FieldRef<"Content", 'Platform'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
    readonly addedById: FieldRef<"Content", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content createManyAndReturn
   */
  export type ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content updateManyAndReturn
   */
  export type ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.favorites
   */
  export type Content$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Content.listItems
   */
  export type Content$listItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    where?: ListItemWhereInput
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    cursor?: ListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * Content.watched
   */
  export type Content$watchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    where?: WatchedWhereInput
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    cursor?: WatchedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * Content.ratings
   */
  export type Content$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Content.comments
   */
  export type Content$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    contentId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    contentId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contentId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contentId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly contentId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Watched
   */

  export type AggregateWatched = {
    _count: WatchedCountAggregateOutputType | null
    _min: WatchedMinAggregateOutputType | null
    _max: WatchedMaxAggregateOutputType | null
  }

  export type WatchedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type WatchedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type WatchedCountAggregateOutputType = {
    id: number
    userId: number
    contentId: number
    createdAt: number
    _all: number
  }


  export type WatchedMinAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type WatchedMaxAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type WatchedCountAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
    _all?: true
  }

  export type WatchedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watched to aggregate.
     */
    where?: WatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watcheds to fetch.
     */
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watcheds
    **/
    _count?: true | WatchedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchedMaxAggregateInputType
  }

  export type GetWatchedAggregateType<T extends WatchedAggregateArgs> = {
        [P in keyof T & keyof AggregateWatched]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatched[P]>
      : GetScalarType<T[P], AggregateWatched[P]>
  }




  export type WatchedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedWhereInput
    orderBy?: WatchedOrderByWithAggregationInput | WatchedOrderByWithAggregationInput[]
    by: WatchedScalarFieldEnum[] | WatchedScalarFieldEnum
    having?: WatchedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchedCountAggregateInputType | true
    _min?: WatchedMinAggregateInputType
    _max?: WatchedMaxAggregateInputType
  }

  export type WatchedGroupByOutputType = {
    id: string
    userId: string
    contentId: string
    createdAt: Date
    _count: WatchedCountAggregateOutputType | null
    _min: WatchedMinAggregateOutputType | null
    _max: WatchedMaxAggregateOutputType | null
  }

  type GetWatchedGroupByPayload<T extends WatchedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchedGroupByOutputType[P]>
            : GetScalarType<T[P], WatchedGroupByOutputType[P]>
        }
      >
    >


  export type WatchedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watched"]>

  export type WatchedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watched"]>

  export type WatchedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watched"]>

  export type WatchedSelectScalar = {
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
  }

  export type WatchedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contentId" | "createdAt", ExtArgs["result"]["watched"]>
  export type WatchedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type WatchedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type WatchedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $WatchedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watched"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contentId: string
      createdAt: Date
    }, ExtArgs["result"]["watched"]>
    composites: {}
  }

  type WatchedGetPayload<S extends boolean | null | undefined | WatchedDefaultArgs> = $Result.GetResult<Prisma.$WatchedPayload, S>

  type WatchedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchedCountAggregateInputType | true
    }

  export interface WatchedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watched'], meta: { name: 'Watched' } }
    /**
     * Find zero or one Watched that matches the filter.
     * @param {WatchedFindUniqueArgs} args - Arguments to find a Watched
     * @example
     * // Get one Watched
     * const watched = await prisma.watched.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchedFindUniqueArgs>(args: SelectSubset<T, WatchedFindUniqueArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watched that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchedFindUniqueOrThrowArgs} args - Arguments to find a Watched
     * @example
     * // Get one Watched
     * const watched = await prisma.watched.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchedFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watched that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedFindFirstArgs} args - Arguments to find a Watched
     * @example
     * // Get one Watched
     * const watched = await prisma.watched.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchedFindFirstArgs>(args?: SelectSubset<T, WatchedFindFirstArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watched that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedFindFirstOrThrowArgs} args - Arguments to find a Watched
     * @example
     * // Get one Watched
     * const watched = await prisma.watched.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchedFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchedFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watcheds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watcheds
     * const watcheds = await prisma.watched.findMany()
     * 
     * // Get first 10 Watcheds
     * const watcheds = await prisma.watched.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchedWithIdOnly = await prisma.watched.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchedFindManyArgs>(args?: SelectSubset<T, WatchedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watched.
     * @param {WatchedCreateArgs} args - Arguments to create a Watched.
     * @example
     * // Create one Watched
     * const Watched = await prisma.watched.create({
     *   data: {
     *     // ... data to create a Watched
     *   }
     * })
     * 
     */
    create<T extends WatchedCreateArgs>(args: SelectSubset<T, WatchedCreateArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watcheds.
     * @param {WatchedCreateManyArgs} args - Arguments to create many Watcheds.
     * @example
     * // Create many Watcheds
     * const watched = await prisma.watched.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchedCreateManyArgs>(args?: SelectSubset<T, WatchedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watcheds and returns the data saved in the database.
     * @param {WatchedCreateManyAndReturnArgs} args - Arguments to create many Watcheds.
     * @example
     * // Create many Watcheds
     * const watched = await prisma.watched.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watcheds and only return the `id`
     * const watchedWithIdOnly = await prisma.watched.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchedCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watched.
     * @param {WatchedDeleteArgs} args - Arguments to delete one Watched.
     * @example
     * // Delete one Watched
     * const Watched = await prisma.watched.delete({
     *   where: {
     *     // ... filter to delete one Watched
     *   }
     * })
     * 
     */
    delete<T extends WatchedDeleteArgs>(args: SelectSubset<T, WatchedDeleteArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watched.
     * @param {WatchedUpdateArgs} args - Arguments to update one Watched.
     * @example
     * // Update one Watched
     * const watched = await prisma.watched.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchedUpdateArgs>(args: SelectSubset<T, WatchedUpdateArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watcheds.
     * @param {WatchedDeleteManyArgs} args - Arguments to filter Watcheds to delete.
     * @example
     * // Delete a few Watcheds
     * const { count } = await prisma.watched.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchedDeleteManyArgs>(args?: SelectSubset<T, WatchedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watcheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watcheds
     * const watched = await prisma.watched.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchedUpdateManyArgs>(args: SelectSubset<T, WatchedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watcheds and returns the data updated in the database.
     * @param {WatchedUpdateManyAndReturnArgs} args - Arguments to update many Watcheds.
     * @example
     * // Update many Watcheds
     * const watched = await prisma.watched.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watcheds and only return the `id`
     * const watchedWithIdOnly = await prisma.watched.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchedUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watched.
     * @param {WatchedUpsertArgs} args - Arguments to update or create a Watched.
     * @example
     * // Update or create a Watched
     * const watched = await prisma.watched.upsert({
     *   create: {
     *     // ... data to create a Watched
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watched we want to update
     *   }
     * })
     */
    upsert<T extends WatchedUpsertArgs>(args: SelectSubset<T, WatchedUpsertArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watcheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedCountArgs} args - Arguments to filter Watcheds to count.
     * @example
     * // Count the number of Watcheds
     * const count = await prisma.watched.count({
     *   where: {
     *     // ... the filter for the Watcheds we want to count
     *   }
     * })
    **/
    count<T extends WatchedCountArgs>(
      args?: Subset<T, WatchedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watched.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchedAggregateArgs>(args: Subset<T, WatchedAggregateArgs>): Prisma.PrismaPromise<GetWatchedAggregateType<T>>

    /**
     * Group by Watched.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedGroupByArgs} args - Group by arguments.
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
      T extends WatchedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchedGroupByArgs['orderBy'] }
        : { orderBy?: WatchedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watched model
   */
  readonly fields: WatchedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watched.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Watched model
   */
  interface WatchedFieldRefs {
    readonly id: FieldRef<"Watched", 'String'>
    readonly userId: FieldRef<"Watched", 'String'>
    readonly contentId: FieldRef<"Watched", 'String'>
    readonly createdAt: FieldRef<"Watched", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Watched findUnique
   */
  export type WatchedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watched to fetch.
     */
    where: WatchedWhereUniqueInput
  }

  /**
   * Watched findUniqueOrThrow
   */
  export type WatchedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watched to fetch.
     */
    where: WatchedWhereUniqueInput
  }

  /**
   * Watched findFirst
   */
  export type WatchedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watched to fetch.
     */
    where?: WatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watcheds to fetch.
     */
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watcheds.
     */
    cursor?: WatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watcheds.
     */
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * Watched findFirstOrThrow
   */
  export type WatchedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watched to fetch.
     */
    where?: WatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watcheds to fetch.
     */
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watcheds.
     */
    cursor?: WatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watcheds.
     */
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * Watched findMany
   */
  export type WatchedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watcheds to fetch.
     */
    where?: WatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watcheds to fetch.
     */
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watcheds.
     */
    cursor?: WatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watcheds.
     */
    skip?: number
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * Watched create
   */
  export type WatchedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * The data needed to create a Watched.
     */
    data: XOR<WatchedCreateInput, WatchedUncheckedCreateInput>
  }

  /**
   * Watched createMany
   */
  export type WatchedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watcheds.
     */
    data: WatchedCreateManyInput | WatchedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watched createManyAndReturn
   */
  export type WatchedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * The data used to create many Watcheds.
     */
    data: WatchedCreateManyInput | WatchedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watched update
   */
  export type WatchedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * The data needed to update a Watched.
     */
    data: XOR<WatchedUpdateInput, WatchedUncheckedUpdateInput>
    /**
     * Choose, which Watched to update.
     */
    where: WatchedWhereUniqueInput
  }

  /**
   * Watched updateMany
   */
  export type WatchedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watcheds.
     */
    data: XOR<WatchedUpdateManyMutationInput, WatchedUncheckedUpdateManyInput>
    /**
     * Filter which Watcheds to update
     */
    where?: WatchedWhereInput
    /**
     * Limit how many Watcheds to update.
     */
    limit?: number
  }

  /**
   * Watched updateManyAndReturn
   */
  export type WatchedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * The data used to update Watcheds.
     */
    data: XOR<WatchedUpdateManyMutationInput, WatchedUncheckedUpdateManyInput>
    /**
     * Filter which Watcheds to update
     */
    where?: WatchedWhereInput
    /**
     * Limit how many Watcheds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watched upsert
   */
  export type WatchedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * The filter to search for the Watched to update in case it exists.
     */
    where: WatchedWhereUniqueInput
    /**
     * In case the Watched found by the `where` argument doesn't exist, create a new Watched with this data.
     */
    create: XOR<WatchedCreateInput, WatchedUncheckedCreateInput>
    /**
     * In case the Watched was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchedUpdateInput, WatchedUncheckedUpdateInput>
  }

  /**
   * Watched delete
   */
  export type WatchedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter which Watched to delete.
     */
    where: WatchedWhereUniqueInput
  }

  /**
   * Watched deleteMany
   */
  export type WatchedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watcheds to delete
     */
    where?: WatchedWhereInput
    /**
     * Limit how many Watcheds to delete.
     */
    limit?: number
  }

  /**
   * Watched without action
   */
  export type WatchedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
  }


  /**
   * Model List
   */

  export type AggregateList = {
    _count: ListCountAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  export type ListMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublic: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublic: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isPublic: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List to aggregate.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListMaxAggregateInputType
  }

  export type GetListAggregateType<T extends ListAggregateArgs> = {
        [P in keyof T & keyof AggregateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList[P]>
      : GetScalarType<T[P], AggregateList[P]>
  }




  export type ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
    orderBy?: ListOrderByWithAggregationInput | ListOrderByWithAggregationInput[]
    by: ListScalarFieldEnum[] | ListScalarFieldEnum
    having?: ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCountAggregateInputType | true
    _min?: ListMinAggregateInputType
    _max?: ListMaxAggregateInputType
  }

  export type ListGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isPublic: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ListCountAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  type GetListGroupByPayload<T extends ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListGroupByOutputType[P]>
            : GetScalarType<T[P], ListGroupByOutputType[P]>
        }
      >
    >


  export type ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listItems?: boolean | List$listItemsArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isPublic" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["list"]>
  export type ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listItems?: boolean | List$listItemsArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      listItems: Prisma.$ListItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isPublic: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["list"]>
    composites: {}
  }

  type ListGetPayload<S extends boolean | null | undefined | ListDefaultArgs> = $Result.GetResult<Prisma.$ListPayload, S>

  type ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListCountAggregateInputType | true
    }

  export interface ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List'], meta: { name: 'List' } }
    /**
     * Find zero or one List that matches the filter.
     * @param {ListFindUniqueArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListFindUniqueArgs>(args: SelectSubset<T, ListFindUniqueArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one List that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListFindUniqueOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListFindUniqueOrThrowArgs>(args: SelectSubset<T, ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListFindFirstArgs>(args?: SelectSubset<T, ListFindFirstArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListFindFirstOrThrowArgs>(args?: SelectSubset<T, ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.list.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listWithIdOnly = await prisma.list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListFindManyArgs>(args?: SelectSubset<T, ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a List.
     * @param {ListCreateArgs} args - Arguments to create a List.
     * @example
     * // Create one List
     * const List = await prisma.list.create({
     *   data: {
     *     // ... data to create a List
     *   }
     * })
     * 
     */
    create<T extends ListCreateArgs>(args: SelectSubset<T, ListCreateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lists.
     * @param {ListCreateManyArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListCreateManyArgs>(args?: SelectSubset<T, ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lists and returns the data saved in the database.
     * @param {ListCreateManyAndReturnArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListCreateManyAndReturnArgs>(args?: SelectSubset<T, ListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a List.
     * @param {ListDeleteArgs} args - Arguments to delete one List.
     * @example
     * // Delete one List
     * const List = await prisma.list.delete({
     *   where: {
     *     // ... filter to delete one List
     *   }
     * })
     * 
     */
    delete<T extends ListDeleteArgs>(args: SelectSubset<T, ListDeleteArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one List.
     * @param {ListUpdateArgs} args - Arguments to update one List.
     * @example
     * // Update one List
     * const list = await prisma.list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListUpdateArgs>(args: SelectSubset<T, ListUpdateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lists.
     * @param {ListDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListDeleteManyArgs>(args?: SelectSubset<T, ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListUpdateManyArgs>(args: SelectSubset<T, ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists and returns the data updated in the database.
     * @param {ListUpdateManyAndReturnArgs} args - Arguments to update many Lists.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListUpdateManyAndReturnArgs>(args: SelectSubset<T, ListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one List.
     * @param {ListUpsertArgs} args - Arguments to update or create a List.
     * @example
     * // Update or create a List
     * const list = await prisma.list.upsert({
     *   create: {
     *     // ... data to create a List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List we want to update
     *   }
     * })
     */
    upsert<T extends ListUpsertArgs>(args: SelectSubset<T, ListUpsertArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.list.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListCountArgs>(
      args?: Subset<T, ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListAggregateArgs>(args: Subset<T, ListAggregateArgs>): Prisma.PrismaPromise<GetListAggregateType<T>>

    /**
     * Group by List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListGroupByArgs} args - Group by arguments.
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
      T extends ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListGroupByArgs['orderBy'] }
        : { orderBy?: ListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List model
   */
  readonly fields: ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listItems<T extends List$listItemsArgs<ExtArgs> = {}>(args?: Subset<T, List$listItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the List model
   */
  interface ListFieldRefs {
    readonly id: FieldRef<"List", 'String'>
    readonly name: FieldRef<"List", 'String'>
    readonly description: FieldRef<"List", 'String'>
    readonly isPublic: FieldRef<"List", 'Boolean'>
    readonly userId: FieldRef<"List", 'String'>
    readonly createdAt: FieldRef<"List", 'DateTime'>
    readonly updatedAt: FieldRef<"List", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * List findUnique
   */
  export type ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findUniqueOrThrow
   */
  export type ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findFirst
   */
  export type ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findFirstOrThrow
   */
  export type ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findMany
   */
  export type ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List create
   */
  export type ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to create a List.
     */
    data: XOR<ListCreateInput, ListUncheckedCreateInput>
  }

  /**
   * List createMany
   */
  export type ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * List createManyAndReturn
   */
  export type ListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * List update
   */
  export type ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to update a List.
     */
    data: XOR<ListUpdateInput, ListUncheckedUpdateInput>
    /**
     * Choose, which List to update.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List updateMany
   */
  export type ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
  }

  /**
   * List updateManyAndReturn
   */
  export type ListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * List upsert
   */
  export type ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The filter to search for the List to update in case it exists.
     */
    where: ListWhereUniqueInput
    /**
     * In case the List found by the `where` argument doesn't exist, create a new List with this data.
     */
    create: XOR<ListCreateInput, ListUncheckedCreateInput>
    /**
     * In case the List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListUpdateInput, ListUncheckedUpdateInput>
  }

  /**
   * List delete
   */
  export type ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter which List to delete.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List deleteMany
   */
  export type ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to delete
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to delete.
     */
    limit?: number
  }

  /**
   * List.listItems
   */
  export type List$listItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    where?: ListItemWhereInput
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    cursor?: ListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * List without action
   */
  export type ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
  }


  /**
   * Model ListItem
   */

  export type AggregateListItem = {
    _count: ListItemCountAggregateOutputType | null
    _min: ListItemMinAggregateOutputType | null
    _max: ListItemMaxAggregateOutputType | null
  }

  export type ListItemMinAggregateOutputType = {
    id: string | null
    listId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type ListItemMaxAggregateOutputType = {
    id: string | null
    listId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type ListItemCountAggregateOutputType = {
    id: number
    listId: number
    contentId: number
    createdAt: number
    _all: number
  }


  export type ListItemMinAggregateInputType = {
    id?: true
    listId?: true
    contentId?: true
    createdAt?: true
  }

  export type ListItemMaxAggregateInputType = {
    id?: true
    listId?: true
    contentId?: true
    createdAt?: true
  }

  export type ListItemCountAggregateInputType = {
    id?: true
    listId?: true
    contentId?: true
    createdAt?: true
    _all?: true
  }

  export type ListItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListItem to aggregate.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListItems
    **/
    _count?: true | ListItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListItemMaxAggregateInputType
  }

  export type GetListItemAggregateType<T extends ListItemAggregateArgs> = {
        [P in keyof T & keyof AggregateListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListItem[P]>
      : GetScalarType<T[P], AggregateListItem[P]>
  }




  export type ListItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemWhereInput
    orderBy?: ListItemOrderByWithAggregationInput | ListItemOrderByWithAggregationInput[]
    by: ListItemScalarFieldEnum[] | ListItemScalarFieldEnum
    having?: ListItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListItemCountAggregateInputType | true
    _min?: ListItemMinAggregateInputType
    _max?: ListItemMaxAggregateInputType
  }

  export type ListItemGroupByOutputType = {
    id: string
    listId: string
    contentId: string
    createdAt: Date
    _count: ListItemCountAggregateOutputType | null
    _min: ListItemMinAggregateOutputType | null
    _max: ListItemMaxAggregateOutputType | null
  }

  type GetListItemGroupByPayload<T extends ListItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListItemGroupByOutputType[P]>
            : GetScalarType<T[P], ListItemGroupByOutputType[P]>
        }
      >
    >


  export type ListItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    contentId?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listItem"]>

  export type ListItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    contentId?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listItem"]>

  export type ListItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    contentId?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listItem"]>

  export type ListItemSelectScalar = {
    id?: boolean
    listId?: boolean
    contentId?: boolean
    createdAt?: boolean
  }

  export type ListItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listId" | "contentId" | "createdAt", ExtArgs["result"]["listItem"]>
  export type ListItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type ListItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type ListItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $ListItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListItem"
    objects: {
      list: Prisma.$ListPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listId: string
      contentId: string
      createdAt: Date
    }, ExtArgs["result"]["listItem"]>
    composites: {}
  }

  type ListItemGetPayload<S extends boolean | null | undefined | ListItemDefaultArgs> = $Result.GetResult<Prisma.$ListItemPayload, S>

  type ListItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListItemCountAggregateInputType | true
    }

  export interface ListItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListItem'], meta: { name: 'ListItem' } }
    /**
     * Find zero or one ListItem that matches the filter.
     * @param {ListItemFindUniqueArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListItemFindUniqueArgs>(args: SelectSubset<T, ListItemFindUniqueArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListItemFindUniqueOrThrowArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ListItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemFindFirstArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListItemFindFirstArgs>(args?: SelectSubset<T, ListItemFindFirstArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemFindFirstOrThrowArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ListItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListItems
     * const listItems = await prisma.listItem.findMany()
     * 
     * // Get first 10 ListItems
     * const listItems = await prisma.listItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listItemWithIdOnly = await prisma.listItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListItemFindManyArgs>(args?: SelectSubset<T, ListItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListItem.
     * @param {ListItemCreateArgs} args - Arguments to create a ListItem.
     * @example
     * // Create one ListItem
     * const ListItem = await prisma.listItem.create({
     *   data: {
     *     // ... data to create a ListItem
     *   }
     * })
     * 
     */
    create<T extends ListItemCreateArgs>(args: SelectSubset<T, ListItemCreateArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListItems.
     * @param {ListItemCreateManyArgs} args - Arguments to create many ListItems.
     * @example
     * // Create many ListItems
     * const listItem = await prisma.listItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListItemCreateManyArgs>(args?: SelectSubset<T, ListItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListItems and returns the data saved in the database.
     * @param {ListItemCreateManyAndReturnArgs} args - Arguments to create many ListItems.
     * @example
     * // Create many ListItems
     * const listItem = await prisma.listItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListItems and only return the `id`
     * const listItemWithIdOnly = await prisma.listItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ListItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListItem.
     * @param {ListItemDeleteArgs} args - Arguments to delete one ListItem.
     * @example
     * // Delete one ListItem
     * const ListItem = await prisma.listItem.delete({
     *   where: {
     *     // ... filter to delete one ListItem
     *   }
     * })
     * 
     */
    delete<T extends ListItemDeleteArgs>(args: SelectSubset<T, ListItemDeleteArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListItem.
     * @param {ListItemUpdateArgs} args - Arguments to update one ListItem.
     * @example
     * // Update one ListItem
     * const listItem = await prisma.listItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListItemUpdateArgs>(args: SelectSubset<T, ListItemUpdateArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListItems.
     * @param {ListItemDeleteManyArgs} args - Arguments to filter ListItems to delete.
     * @example
     * // Delete a few ListItems
     * const { count } = await prisma.listItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListItemDeleteManyArgs>(args?: SelectSubset<T, ListItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListItems
     * const listItem = await prisma.listItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListItemUpdateManyArgs>(args: SelectSubset<T, ListItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListItems and returns the data updated in the database.
     * @param {ListItemUpdateManyAndReturnArgs} args - Arguments to update many ListItems.
     * @example
     * // Update many ListItems
     * const listItem = await prisma.listItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListItems and only return the `id`
     * const listItemWithIdOnly = await prisma.listItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ListItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListItem.
     * @param {ListItemUpsertArgs} args - Arguments to update or create a ListItem.
     * @example
     * // Update or create a ListItem
     * const listItem = await prisma.listItem.upsert({
     *   create: {
     *     // ... data to create a ListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListItem we want to update
     *   }
     * })
     */
    upsert<T extends ListItemUpsertArgs>(args: SelectSubset<T, ListItemUpsertArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemCountArgs} args - Arguments to filter ListItems to count.
     * @example
     * // Count the number of ListItems
     * const count = await prisma.listItem.count({
     *   where: {
     *     // ... the filter for the ListItems we want to count
     *   }
     * })
    **/
    count<T extends ListItemCountArgs>(
      args?: Subset<T, ListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListItemAggregateArgs>(args: Subset<T, ListItemAggregateArgs>): Prisma.PrismaPromise<GetListItemAggregateType<T>>

    /**
     * Group by ListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemGroupByArgs} args - Group by arguments.
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
      T extends ListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListItemGroupByArgs['orderBy'] }
        : { orderBy?: ListItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListItem model
   */
  readonly fields: ListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListItem model
   */
  interface ListItemFieldRefs {
    readonly id: FieldRef<"ListItem", 'String'>
    readonly listId: FieldRef<"ListItem", 'String'>
    readonly contentId: FieldRef<"ListItem", 'String'>
    readonly createdAt: FieldRef<"ListItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListItem findUnique
   */
  export type ListItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem findUniqueOrThrow
   */
  export type ListItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem findFirst
   */
  export type ListItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListItems.
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListItems.
     */
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ListItem findFirstOrThrow
   */
  export type ListItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListItems.
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListItems.
     */
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ListItem findMany
   */
  export type ListItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItems to fetch.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListItems.
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ListItem create
   */
  export type ListItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ListItem.
     */
    data: XOR<ListItemCreateInput, ListItemUncheckedCreateInput>
  }

  /**
   * ListItem createMany
   */
  export type ListItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListItems.
     */
    data: ListItemCreateManyInput | ListItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListItem createManyAndReturn
   */
  export type ListItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * The data used to create many ListItems.
     */
    data: ListItemCreateManyInput | ListItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListItem update
   */
  export type ListItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ListItem.
     */
    data: XOR<ListItemUpdateInput, ListItemUncheckedUpdateInput>
    /**
     * Choose, which ListItem to update.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem updateMany
   */
  export type ListItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListItems.
     */
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyInput>
    /**
     * Filter which ListItems to update
     */
    where?: ListItemWhereInput
    /**
     * Limit how many ListItems to update.
     */
    limit?: number
  }

  /**
   * ListItem updateManyAndReturn
   */
  export type ListItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * The data used to update ListItems.
     */
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyInput>
    /**
     * Filter which ListItems to update
     */
    where?: ListItemWhereInput
    /**
     * Limit how many ListItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListItem upsert
   */
  export type ListItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ListItem to update in case it exists.
     */
    where: ListItemWhereUniqueInput
    /**
     * In case the ListItem found by the `where` argument doesn't exist, create a new ListItem with this data.
     */
    create: XOR<ListItemCreateInput, ListItemUncheckedCreateInput>
    /**
     * In case the ListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListItemUpdateInput, ListItemUncheckedUpdateInput>
  }

  /**
   * ListItem delete
   */
  export type ListItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter which ListItem to delete.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem deleteMany
   */
  export type ListItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListItems to delete
     */
    where?: ListItemWhereInput
    /**
     * Limit how many ListItems to delete.
     */
    limit?: number
  }

  /**
   * ListItem without action
   */
  export type ListItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type RatingSumAggregateOutputType = {
    rating: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    rating: number | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    rating: number
    userId: number
    contentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    rating?: true
  }

  export type RatingSumAggregateInputType = {
    rating?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    contentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    contentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    contentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    rating: number
    userId: string
    contentId: string
    createdAt: Date
    updatedAt: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    rating?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "userId" | "contentId" | "createdAt" | "updatedAt", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      userId: string
      contentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly rating: FieldRef<"Rating", 'Int'>
    readonly userId: FieldRef<"Rating", 'String'>
    readonly contentId: FieldRef<"Rating", 'String'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly updatedAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    text: string | null
    userId: string | null
    contentId: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    text: string | null
    userId: string | null
    contentId: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    userId: number
    contentId: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    contentId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    contentId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    contentId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    text: string
    userId: string
    contentId: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    contentId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    commentLikes?: boolean | Comment$commentLikesArgs<ExtArgs>
    reports?: boolean | Comment$reportsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    contentId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    contentId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
    userId?: boolean
    contentId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "userId" | "contentId" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    commentLikes?: boolean | Comment$commentLikesArgs<ExtArgs>
    reports?: boolean | Comment$reportsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
      commentLikes: Prisma.$CommentLikePayload<ExtArgs>[]
      reports: Prisma.$CommentReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      userId: string
      contentId: string
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentLikes<T extends Comment$commentLikesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$commentLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Comment$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Comment$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly contentId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment.commentLikes
   */
  export type Comment$commentLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    where?: CommentLikeWhereInput
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    cursor?: CommentLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * Comment.reports
   */
  export type Comment$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    where?: CommentReportWhereInput
    orderBy?: CommentReportOrderByWithRelationInput | CommentReportOrderByWithRelationInput[]
    cursor?: CommentReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentReportScalarFieldEnum | CommentReportScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model CommentLike
   */

  export type AggregateCommentLike = {
    _count: CommentLikeCountAggregateOutputType | null
    _min: CommentLikeMinAggregateOutputType | null
    _max: CommentLikeMaxAggregateOutputType | null
  }

  export type CommentLikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    commentId: string | null
    isLike: boolean | null
    createdAt: Date | null
  }

  export type CommentLikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    commentId: string | null
    isLike: boolean | null
    createdAt: Date | null
  }

  export type CommentLikeCountAggregateOutputType = {
    id: number
    userId: number
    commentId: number
    isLike: number
    createdAt: number
    _all: number
  }


  export type CommentLikeMinAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
    isLike?: true
    createdAt?: true
  }

  export type CommentLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
    isLike?: true
    createdAt?: true
  }

  export type CommentLikeCountAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
    isLike?: true
    createdAt?: true
    _all?: true
  }

  export type CommentLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentLike to aggregate.
     */
    where?: CommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentLikes
    **/
    _count?: true | CommentLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentLikeMaxAggregateInputType
  }

  export type GetCommentLikeAggregateType<T extends CommentLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentLike[P]>
      : GetScalarType<T[P], AggregateCommentLike[P]>
  }




  export type CommentLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentLikeWhereInput
    orderBy?: CommentLikeOrderByWithAggregationInput | CommentLikeOrderByWithAggregationInput[]
    by: CommentLikeScalarFieldEnum[] | CommentLikeScalarFieldEnum
    having?: CommentLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentLikeCountAggregateInputType | true
    _min?: CommentLikeMinAggregateInputType
    _max?: CommentLikeMaxAggregateInputType
  }

  export type CommentLikeGroupByOutputType = {
    id: string
    userId: string
    commentId: string
    isLike: boolean
    createdAt: Date
    _count: CommentLikeCountAggregateOutputType | null
    _min: CommentLikeMinAggregateOutputType | null
    _max: CommentLikeMaxAggregateOutputType | null
  }

  type GetCommentLikeGroupByPayload<T extends CommentLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentLikeGroupByOutputType[P]>
            : GetScalarType<T[P], CommentLikeGroupByOutputType[P]>
        }
      >
    >


  export type CommentLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    isLike?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentLike"]>

  export type CommentLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    isLike?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentLike"]>

  export type CommentLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    isLike?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentLike"]>

  export type CommentLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    commentId?: boolean
    isLike?: boolean
    createdAt?: boolean
  }

  export type CommentLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "commentId" | "isLike" | "createdAt", ExtArgs["result"]["commentLike"]>
  export type CommentLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $CommentLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      commentId: string
      isLike: boolean
      createdAt: Date
    }, ExtArgs["result"]["commentLike"]>
    composites: {}
  }

  type CommentLikeGetPayload<S extends boolean | null | undefined | CommentLikeDefaultArgs> = $Result.GetResult<Prisma.$CommentLikePayload, S>

  type CommentLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentLikeCountAggregateInputType | true
    }

  export interface CommentLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentLike'], meta: { name: 'CommentLike' } }
    /**
     * Find zero or one CommentLike that matches the filter.
     * @param {CommentLikeFindUniqueArgs} args - Arguments to find a CommentLike
     * @example
     * // Get one CommentLike
     * const commentLike = await prisma.commentLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentLikeFindUniqueArgs>(args: SelectSubset<T, CommentLikeFindUniqueArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentLikeFindUniqueOrThrowArgs} args - Arguments to find a CommentLike
     * @example
     * // Get one CommentLike
     * const commentLike = await prisma.commentLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeFindFirstArgs} args - Arguments to find a CommentLike
     * @example
     * // Get one CommentLike
     * const commentLike = await prisma.commentLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentLikeFindFirstArgs>(args?: SelectSubset<T, CommentLikeFindFirstArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeFindFirstOrThrowArgs} args - Arguments to find a CommentLike
     * @example
     * // Get one CommentLike
     * const commentLike = await prisma.commentLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentLikes
     * const commentLikes = await prisma.commentLike.findMany()
     * 
     * // Get first 10 CommentLikes
     * const commentLikes = await prisma.commentLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentLikeWithIdOnly = await prisma.commentLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentLikeFindManyArgs>(args?: SelectSubset<T, CommentLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentLike.
     * @param {CommentLikeCreateArgs} args - Arguments to create a CommentLike.
     * @example
     * // Create one CommentLike
     * const CommentLike = await prisma.commentLike.create({
     *   data: {
     *     // ... data to create a CommentLike
     *   }
     * })
     * 
     */
    create<T extends CommentLikeCreateArgs>(args: SelectSubset<T, CommentLikeCreateArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentLikes.
     * @param {CommentLikeCreateManyArgs} args - Arguments to create many CommentLikes.
     * @example
     * // Create many CommentLikes
     * const commentLike = await prisma.commentLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentLikeCreateManyArgs>(args?: SelectSubset<T, CommentLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentLikes and returns the data saved in the database.
     * @param {CommentLikeCreateManyAndReturnArgs} args - Arguments to create many CommentLikes.
     * @example
     * // Create many CommentLikes
     * const commentLike = await prisma.commentLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentLikes and only return the `id`
     * const commentLikeWithIdOnly = await prisma.commentLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentLike.
     * @param {CommentLikeDeleteArgs} args - Arguments to delete one CommentLike.
     * @example
     * // Delete one CommentLike
     * const CommentLike = await prisma.commentLike.delete({
     *   where: {
     *     // ... filter to delete one CommentLike
     *   }
     * })
     * 
     */
    delete<T extends CommentLikeDeleteArgs>(args: SelectSubset<T, CommentLikeDeleteArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentLike.
     * @param {CommentLikeUpdateArgs} args - Arguments to update one CommentLike.
     * @example
     * // Update one CommentLike
     * const commentLike = await prisma.commentLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentLikeUpdateArgs>(args: SelectSubset<T, CommentLikeUpdateArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentLikes.
     * @param {CommentLikeDeleteManyArgs} args - Arguments to filter CommentLikes to delete.
     * @example
     * // Delete a few CommentLikes
     * const { count } = await prisma.commentLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentLikeDeleteManyArgs>(args?: SelectSubset<T, CommentLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentLikes
     * const commentLike = await prisma.commentLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentLikeUpdateManyArgs>(args: SelectSubset<T, CommentLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentLikes and returns the data updated in the database.
     * @param {CommentLikeUpdateManyAndReturnArgs} args - Arguments to update many CommentLikes.
     * @example
     * // Update many CommentLikes
     * const commentLike = await prisma.commentLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentLikes and only return the `id`
     * const commentLikeWithIdOnly = await prisma.commentLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentLike.
     * @param {CommentLikeUpsertArgs} args - Arguments to update or create a CommentLike.
     * @example
     * // Update or create a CommentLike
     * const commentLike = await prisma.commentLike.upsert({
     *   create: {
     *     // ... data to create a CommentLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentLike we want to update
     *   }
     * })
     */
    upsert<T extends CommentLikeUpsertArgs>(args: SelectSubset<T, CommentLikeUpsertArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeCountArgs} args - Arguments to filter CommentLikes to count.
     * @example
     * // Count the number of CommentLikes
     * const count = await prisma.commentLike.count({
     *   where: {
     *     // ... the filter for the CommentLikes we want to count
     *   }
     * })
    **/
    count<T extends CommentLikeCountArgs>(
      args?: Subset<T, CommentLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentLikeAggregateArgs>(args: Subset<T, CommentLikeAggregateArgs>): Prisma.PrismaPromise<GetCommentLikeAggregateType<T>>

    /**
     * Group by CommentLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeGroupByArgs} args - Group by arguments.
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
      T extends CommentLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentLikeGroupByArgs['orderBy'] }
        : { orderBy?: CommentLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentLike model
   */
  readonly fields: CommentLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommentLike model
   */
  interface CommentLikeFieldRefs {
    readonly id: FieldRef<"CommentLike", 'String'>
    readonly userId: FieldRef<"CommentLike", 'String'>
    readonly commentId: FieldRef<"CommentLike", 'String'>
    readonly isLike: FieldRef<"CommentLike", 'Boolean'>
    readonly createdAt: FieldRef<"CommentLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommentLike findUnique
   */
  export type CommentLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLike to fetch.
     */
    where: CommentLikeWhereUniqueInput
  }

  /**
   * CommentLike findUniqueOrThrow
   */
  export type CommentLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLike to fetch.
     */
    where: CommentLikeWhereUniqueInput
  }

  /**
   * CommentLike findFirst
   */
  export type CommentLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLike to fetch.
     */
    where?: CommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentLikes.
     */
    cursor?: CommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentLikes.
     */
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * CommentLike findFirstOrThrow
   */
  export type CommentLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLike to fetch.
     */
    where?: CommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentLikes.
     */
    cursor?: CommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentLikes.
     */
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * CommentLike findMany
   */
  export type CommentLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLikes to fetch.
     */
    where?: CommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentLikes.
     */
    cursor?: CommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentLikes.
     */
    skip?: number
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * CommentLike create
   */
  export type CommentLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentLike.
     */
    data: XOR<CommentLikeCreateInput, CommentLikeUncheckedCreateInput>
  }

  /**
   * CommentLike createMany
   */
  export type CommentLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentLikes.
     */
    data: CommentLikeCreateManyInput | CommentLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentLike createManyAndReturn
   */
  export type CommentLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * The data used to create many CommentLikes.
     */
    data: CommentLikeCreateManyInput | CommentLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentLike update
   */
  export type CommentLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentLike.
     */
    data: XOR<CommentLikeUpdateInput, CommentLikeUncheckedUpdateInput>
    /**
     * Choose, which CommentLike to update.
     */
    where: CommentLikeWhereUniqueInput
  }

  /**
   * CommentLike updateMany
   */
  export type CommentLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentLikes.
     */
    data: XOR<CommentLikeUpdateManyMutationInput, CommentLikeUncheckedUpdateManyInput>
    /**
     * Filter which CommentLikes to update
     */
    where?: CommentLikeWhereInput
    /**
     * Limit how many CommentLikes to update.
     */
    limit?: number
  }

  /**
   * CommentLike updateManyAndReturn
   */
  export type CommentLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * The data used to update CommentLikes.
     */
    data: XOR<CommentLikeUpdateManyMutationInput, CommentLikeUncheckedUpdateManyInput>
    /**
     * Filter which CommentLikes to update
     */
    where?: CommentLikeWhereInput
    /**
     * Limit how many CommentLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentLike upsert
   */
  export type CommentLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentLike to update in case it exists.
     */
    where: CommentLikeWhereUniqueInput
    /**
     * In case the CommentLike found by the `where` argument doesn't exist, create a new CommentLike with this data.
     */
    create: XOR<CommentLikeCreateInput, CommentLikeUncheckedCreateInput>
    /**
     * In case the CommentLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentLikeUpdateInput, CommentLikeUncheckedUpdateInput>
  }

  /**
   * CommentLike delete
   */
  export type CommentLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter which CommentLike to delete.
     */
    where: CommentLikeWhereUniqueInput
  }

  /**
   * CommentLike deleteMany
   */
  export type CommentLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentLikes to delete
     */
    where?: CommentLikeWhereInput
    /**
     * Limit how many CommentLikes to delete.
     */
    limit?: number
  }

  /**
   * CommentLike without action
   */
  export type CommentLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
  }


  /**
   * Model CommentReport
   */

  export type AggregateCommentReport = {
    _count: CommentReportCountAggregateOutputType | null
    _min: CommentReportMinAggregateOutputType | null
    _max: CommentReportMaxAggregateOutputType | null
  }

  export type CommentReportMinAggregateOutputType = {
    id: string | null
    reason: string | null
    details: string | null
    userId: string | null
    commentId: string | null
    status: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentReportMaxAggregateOutputType = {
    id: string | null
    reason: string | null
    details: string | null
    userId: string | null
    commentId: string | null
    status: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentReportCountAggregateOutputType = {
    id: number
    reason: number
    details: number
    userId: number
    commentId: number
    status: number
    reviewedBy: number
    reviewedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentReportMinAggregateInputType = {
    id?: true
    reason?: true
    details?: true
    userId?: true
    commentId?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentReportMaxAggregateInputType = {
    id?: true
    reason?: true
    details?: true
    userId?: true
    commentId?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentReportCountAggregateInputType = {
    id?: true
    reason?: true
    details?: true
    userId?: true
    commentId?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReport to aggregate.
     */
    where?: CommentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReports to fetch.
     */
    orderBy?: CommentReportOrderByWithRelationInput | CommentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentReports
    **/
    _count?: true | CommentReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentReportMaxAggregateInputType
  }

  export type GetCommentReportAggregateType<T extends CommentReportAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentReport[P]>
      : GetScalarType<T[P], AggregateCommentReport[P]>
  }




  export type CommentReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReportWhereInput
    orderBy?: CommentReportOrderByWithAggregationInput | CommentReportOrderByWithAggregationInput[]
    by: CommentReportScalarFieldEnum[] | CommentReportScalarFieldEnum
    having?: CommentReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentReportCountAggregateInputType | true
    _min?: CommentReportMinAggregateInputType
    _max?: CommentReportMaxAggregateInputType
  }

  export type CommentReportGroupByOutputType = {
    id: string
    reason: string
    details: string | null
    userId: string
    commentId: string
    status: string
    reviewedBy: string | null
    reviewedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CommentReportCountAggregateOutputType | null
    _min: CommentReportMinAggregateOutputType | null
    _max: CommentReportMaxAggregateOutputType | null
  }

  type GetCommentReportGroupByPayload<T extends CommentReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentReportGroupByOutputType[P]>
            : GetScalarType<T[P], CommentReportGroupByOutputType[P]>
        }
      >
    >


  export type CommentReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    details?: boolean
    userId?: boolean
    commentId?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReport"]>

  export type CommentReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    details?: boolean
    userId?: boolean
    commentId?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReport"]>

  export type CommentReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    details?: boolean
    userId?: boolean
    commentId?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReport"]>

  export type CommentReportSelectScalar = {
    id?: boolean
    reason?: boolean
    details?: boolean
    userId?: boolean
    commentId?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reason" | "details" | "userId" | "commentId" | "status" | "reviewedBy" | "reviewedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["commentReport"]>
  export type CommentReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $CommentReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reason: string
      details: string | null
      userId: string
      commentId: string
      status: string
      reviewedBy: string | null
      reviewedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["commentReport"]>
    composites: {}
  }

  type CommentReportGetPayload<S extends boolean | null | undefined | CommentReportDefaultArgs> = $Result.GetResult<Prisma.$CommentReportPayload, S>

  type CommentReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentReportCountAggregateInputType | true
    }

  export interface CommentReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentReport'], meta: { name: 'CommentReport' } }
    /**
     * Find zero or one CommentReport that matches the filter.
     * @param {CommentReportFindUniqueArgs} args - Arguments to find a CommentReport
     * @example
     * // Get one CommentReport
     * const commentReport = await prisma.commentReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentReportFindUniqueArgs>(args: SelectSubset<T, CommentReportFindUniqueArgs<ExtArgs>>): Prisma__CommentReportClient<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentReportFindUniqueOrThrowArgs} args - Arguments to find a CommentReport
     * @example
     * // Get one CommentReport
     * const commentReport = await prisma.commentReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentReportFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentReportClient<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReportFindFirstArgs} args - Arguments to find a CommentReport
     * @example
     * // Get one CommentReport
     * const commentReport = await prisma.commentReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentReportFindFirstArgs>(args?: SelectSubset<T, CommentReportFindFirstArgs<ExtArgs>>): Prisma__CommentReportClient<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReportFindFirstOrThrowArgs} args - Arguments to find a CommentReport
     * @example
     * // Get one CommentReport
     * const commentReport = await prisma.commentReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentReportFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentReportClient<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentReports
     * const commentReports = await prisma.commentReport.findMany()
     * 
     * // Get first 10 CommentReports
     * const commentReports = await prisma.commentReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentReportWithIdOnly = await prisma.commentReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentReportFindManyArgs>(args?: SelectSubset<T, CommentReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentReport.
     * @param {CommentReportCreateArgs} args - Arguments to create a CommentReport.
     * @example
     * // Create one CommentReport
     * const CommentReport = await prisma.commentReport.create({
     *   data: {
     *     // ... data to create a CommentReport
     *   }
     * })
     * 
     */
    create<T extends CommentReportCreateArgs>(args: SelectSubset<T, CommentReportCreateArgs<ExtArgs>>): Prisma__CommentReportClient<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentReports.
     * @param {CommentReportCreateManyArgs} args - Arguments to create many CommentReports.
     * @example
     * // Create many CommentReports
     * const commentReport = await prisma.commentReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentReportCreateManyArgs>(args?: SelectSubset<T, CommentReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentReports and returns the data saved in the database.
     * @param {CommentReportCreateManyAndReturnArgs} args - Arguments to create many CommentReports.
     * @example
     * // Create many CommentReports
     * const commentReport = await prisma.commentReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentReports and only return the `id`
     * const commentReportWithIdOnly = await prisma.commentReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentReportCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentReport.
     * @param {CommentReportDeleteArgs} args - Arguments to delete one CommentReport.
     * @example
     * // Delete one CommentReport
     * const CommentReport = await prisma.commentReport.delete({
     *   where: {
     *     // ... filter to delete one CommentReport
     *   }
     * })
     * 
     */
    delete<T extends CommentReportDeleteArgs>(args: SelectSubset<T, CommentReportDeleteArgs<ExtArgs>>): Prisma__CommentReportClient<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentReport.
     * @param {CommentReportUpdateArgs} args - Arguments to update one CommentReport.
     * @example
     * // Update one CommentReport
     * const commentReport = await prisma.commentReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentReportUpdateArgs>(args: SelectSubset<T, CommentReportUpdateArgs<ExtArgs>>): Prisma__CommentReportClient<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentReports.
     * @param {CommentReportDeleteManyArgs} args - Arguments to filter CommentReports to delete.
     * @example
     * // Delete a few CommentReports
     * const { count } = await prisma.commentReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentReportDeleteManyArgs>(args?: SelectSubset<T, CommentReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentReports
     * const commentReport = await prisma.commentReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentReportUpdateManyArgs>(args: SelectSubset<T, CommentReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentReports and returns the data updated in the database.
     * @param {CommentReportUpdateManyAndReturnArgs} args - Arguments to update many CommentReports.
     * @example
     * // Update many CommentReports
     * const commentReport = await prisma.commentReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentReports and only return the `id`
     * const commentReportWithIdOnly = await prisma.commentReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentReportUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentReport.
     * @param {CommentReportUpsertArgs} args - Arguments to update or create a CommentReport.
     * @example
     * // Update or create a CommentReport
     * const commentReport = await prisma.commentReport.upsert({
     *   create: {
     *     // ... data to create a CommentReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentReport we want to update
     *   }
     * })
     */
    upsert<T extends CommentReportUpsertArgs>(args: SelectSubset<T, CommentReportUpsertArgs<ExtArgs>>): Prisma__CommentReportClient<$Result.GetResult<Prisma.$CommentReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReportCountArgs} args - Arguments to filter CommentReports to count.
     * @example
     * // Count the number of CommentReports
     * const count = await prisma.commentReport.count({
     *   where: {
     *     // ... the filter for the CommentReports we want to count
     *   }
     * })
    **/
    count<T extends CommentReportCountArgs>(
      args?: Subset<T, CommentReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentReportAggregateArgs>(args: Subset<T, CommentReportAggregateArgs>): Prisma.PrismaPromise<GetCommentReportAggregateType<T>>

    /**
     * Group by CommentReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReportGroupByArgs} args - Group by arguments.
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
      T extends CommentReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentReportGroupByArgs['orderBy'] }
        : { orderBy?: CommentReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentReport model
   */
  readonly fields: CommentReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommentReport model
   */
  interface CommentReportFieldRefs {
    readonly id: FieldRef<"CommentReport", 'String'>
    readonly reason: FieldRef<"CommentReport", 'String'>
    readonly details: FieldRef<"CommentReport", 'String'>
    readonly userId: FieldRef<"CommentReport", 'String'>
    readonly commentId: FieldRef<"CommentReport", 'String'>
    readonly status: FieldRef<"CommentReport", 'String'>
    readonly reviewedBy: FieldRef<"CommentReport", 'String'>
    readonly reviewedAt: FieldRef<"CommentReport", 'DateTime'>
    readonly createdAt: FieldRef<"CommentReport", 'DateTime'>
    readonly updatedAt: FieldRef<"CommentReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommentReport findUnique
   */
  export type CommentReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    /**
     * Filter, which CommentReport to fetch.
     */
    where: CommentReportWhereUniqueInput
  }

  /**
   * CommentReport findUniqueOrThrow
   */
  export type CommentReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    /**
     * Filter, which CommentReport to fetch.
     */
    where: CommentReportWhereUniqueInput
  }

  /**
   * CommentReport findFirst
   */
  export type CommentReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    /**
     * Filter, which CommentReport to fetch.
     */
    where?: CommentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReports to fetch.
     */
    orderBy?: CommentReportOrderByWithRelationInput | CommentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentReports.
     */
    cursor?: CommentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentReports.
     */
    distinct?: CommentReportScalarFieldEnum | CommentReportScalarFieldEnum[]
  }

  /**
   * CommentReport findFirstOrThrow
   */
  export type CommentReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    /**
     * Filter, which CommentReport to fetch.
     */
    where?: CommentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReports to fetch.
     */
    orderBy?: CommentReportOrderByWithRelationInput | CommentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentReports.
     */
    cursor?: CommentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentReports.
     */
    distinct?: CommentReportScalarFieldEnum | CommentReportScalarFieldEnum[]
  }

  /**
   * CommentReport findMany
   */
  export type CommentReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    /**
     * Filter, which CommentReports to fetch.
     */
    where?: CommentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReports to fetch.
     */
    orderBy?: CommentReportOrderByWithRelationInput | CommentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentReports.
     */
    cursor?: CommentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReports.
     */
    skip?: number
    distinct?: CommentReportScalarFieldEnum | CommentReportScalarFieldEnum[]
  }

  /**
   * CommentReport create
   */
  export type CommentReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentReport.
     */
    data: XOR<CommentReportCreateInput, CommentReportUncheckedCreateInput>
  }

  /**
   * CommentReport createMany
   */
  export type CommentReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentReports.
     */
    data: CommentReportCreateManyInput | CommentReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentReport createManyAndReturn
   */
  export type CommentReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * The data used to create many CommentReports.
     */
    data: CommentReportCreateManyInput | CommentReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentReport update
   */
  export type CommentReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentReport.
     */
    data: XOR<CommentReportUpdateInput, CommentReportUncheckedUpdateInput>
    /**
     * Choose, which CommentReport to update.
     */
    where: CommentReportWhereUniqueInput
  }

  /**
   * CommentReport updateMany
   */
  export type CommentReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentReports.
     */
    data: XOR<CommentReportUpdateManyMutationInput, CommentReportUncheckedUpdateManyInput>
    /**
     * Filter which CommentReports to update
     */
    where?: CommentReportWhereInput
    /**
     * Limit how many CommentReports to update.
     */
    limit?: number
  }

  /**
   * CommentReport updateManyAndReturn
   */
  export type CommentReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * The data used to update CommentReports.
     */
    data: XOR<CommentReportUpdateManyMutationInput, CommentReportUncheckedUpdateManyInput>
    /**
     * Filter which CommentReports to update
     */
    where?: CommentReportWhereInput
    /**
     * Limit how many CommentReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentReport upsert
   */
  export type CommentReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentReport to update in case it exists.
     */
    where: CommentReportWhereUniqueInput
    /**
     * In case the CommentReport found by the `where` argument doesn't exist, create a new CommentReport with this data.
     */
    create: XOR<CommentReportCreateInput, CommentReportUncheckedCreateInput>
    /**
     * In case the CommentReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentReportUpdateInput, CommentReportUncheckedUpdateInput>
  }

  /**
   * CommentReport delete
   */
  export type CommentReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
    /**
     * Filter which CommentReport to delete.
     */
    where: CommentReportWhereUniqueInput
  }

  /**
   * CommentReport deleteMany
   */
  export type CommentReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReports to delete
     */
    where?: CommentReportWhereInput
    /**
     * Limit how many CommentReports to delete.
     */
    limit?: number
  }

  /**
   * CommentReport without action
   */
  export type CommentReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReport
     */
    select?: CommentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReport
     */
    omit?: CommentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReportInclude<ExtArgs> | null
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
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bio: 'bio',
    location: 'location',
    twitter: 'twitter',
    instagram: 'instagram',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    impersonatedBy: 'impersonatedBy'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    summary: 'summary',
    type: 'type',
    releaseYear: 'releaseYear',
    trailerUrl: 'trailerUrl',
    image: 'image',
    director: 'director',
    actors: 'actors',
    genres: 'genres',
    platform: 'platform',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    addedById: 'addedById'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const WatchedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId',
    createdAt: 'createdAt'
  };

  export type WatchedScalarFieldEnum = (typeof WatchedScalarFieldEnum)[keyof typeof WatchedScalarFieldEnum]


  export const ListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isPublic: 'isPublic',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListScalarFieldEnum = (typeof ListScalarFieldEnum)[keyof typeof ListScalarFieldEnum]


  export const ListItemScalarFieldEnum: {
    id: 'id',
    listId: 'listId',
    contentId: 'contentId',
    createdAt: 'createdAt'
  };

  export type ListItemScalarFieldEnum = (typeof ListItemScalarFieldEnum)[keyof typeof ListItemScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    userId: 'userId',
    contentId: 'contentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    userId: 'userId',
    contentId: 'contentId',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const CommentLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    commentId: 'commentId',
    isLike: 'isLike',
    createdAt: 'createdAt'
  };

  export type CommentLikeScalarFieldEnum = (typeof CommentLikeScalarFieldEnum)[keyof typeof CommentLikeScalarFieldEnum]


  export const CommentReportScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    details: 'details',
    userId: 'userId',
    commentId: 'commentId',
    status: 'status',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentReportScalarFieldEnum = (typeof CommentReportScalarFieldEnum)[keyof typeof CommentReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    contents?: ContentListRelationFilter
    favorites?: FavoriteListRelationFilter
    lists?: ListListRelationFilter
    watched?: WatchedListRelationFilter
    ratings?: RatingListRelationFilter
    comments?: CommentListRelationFilter
    commentLikes?: CommentLikeListRelationFilter
    commentReports?: CommentReportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    contents?: ContentOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    lists?: ListOrderByRelationAggregateInput
    watched?: WatchedOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    commentLikes?: CommentLikeOrderByRelationAggregateInput
    commentReports?: CommentReportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    contents?: ContentListRelationFilter
    favorites?: FavoriteListRelationFilter
    lists?: ListListRelationFilter
    watched?: WatchedListRelationFilter
    ratings?: RatingListRelationFilter
    comments?: CommentListRelationFilter
    commentLikes?: CommentLikeListRelationFilter
    commentReports?: CommentReportListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
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
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    banned?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    summary?: StringFilter<"Content"> | string
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    releaseYear?: IntFilter<"Content"> | number
    trailerUrl?: StringNullableFilter<"Content"> | string | null
    image?: StringNullableFilter<"Content"> | string | null
    director?: StringFilter<"Content"> | string
    actors?: StringNullableListFilter<"Content">
    genres?: StringNullableListFilter<"Content">
    platform?: EnumPlatformFilter<"Content"> | $Enums.Platform
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    addedById?: StringFilter<"Content"> | string
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    favorites?: FavoriteListRelationFilter
    listItems?: ListItemListRelationFilter
    watched?: WatchedListRelationFilter
    ratings?: RatingListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    releaseYear?: SortOrder
    trailerUrl?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    director?: SortOrder
    actors?: SortOrder
    genres?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedById?: SortOrder
    addedBy?: UserOrderByWithRelationInput
    favorites?: FavoriteOrderByRelationAggregateInput
    listItems?: ListItemOrderByRelationAggregateInput
    watched?: WatchedOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    title?: StringFilter<"Content"> | string
    summary?: StringFilter<"Content"> | string
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    releaseYear?: IntFilter<"Content"> | number
    trailerUrl?: StringNullableFilter<"Content"> | string | null
    image?: StringNullableFilter<"Content"> | string | null
    director?: StringFilter<"Content"> | string
    actors?: StringNullableListFilter<"Content">
    genres?: StringNullableListFilter<"Content">
    platform?: EnumPlatformFilter<"Content"> | $Enums.Platform
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    addedById?: StringFilter<"Content"> | string
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    favorites?: FavoriteListRelationFilter
    listItems?: ListItemListRelationFilter
    watched?: WatchedListRelationFilter
    ratings?: RatingListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    releaseYear?: SortOrder
    trailerUrl?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    director?: SortOrder
    actors?: SortOrder
    genres?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedById?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    title?: StringWithAggregatesFilter<"Content"> | string
    summary?: StringWithAggregatesFilter<"Content"> | string
    type?: EnumContentTypeWithAggregatesFilter<"Content"> | $Enums.ContentType
    releaseYear?: IntWithAggregatesFilter<"Content"> | number
    trailerUrl?: StringNullableWithAggregatesFilter<"Content"> | string | null
    image?: StringNullableWithAggregatesFilter<"Content"> | string | null
    director?: StringWithAggregatesFilter<"Content"> | string
    actors?: StringNullableListFilter<"Content">
    genres?: StringNullableListFilter<"Content">
    platform?: EnumPlatformWithAggregatesFilter<"Content"> | $Enums.Platform
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    addedById?: StringWithAggregatesFilter<"Content"> | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    contentId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_contentId?: FavoriteUserIdContentIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    contentId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id" | "userId_contentId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    contentId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type WatchedWhereInput = {
    AND?: WatchedWhereInput | WatchedWhereInput[]
    OR?: WatchedWhereInput[]
    NOT?: WatchedWhereInput | WatchedWhereInput[]
    id?: StringFilter<"Watched"> | string
    userId?: StringFilter<"Watched"> | string
    contentId?: StringFilter<"Watched"> | string
    createdAt?: DateTimeFilter<"Watched"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type WatchedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
  }

  export type WatchedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_contentId?: WatchedUserIdContentIdCompoundUniqueInput
    AND?: WatchedWhereInput | WatchedWhereInput[]
    OR?: WatchedWhereInput[]
    NOT?: WatchedWhereInput | WatchedWhereInput[]
    userId?: StringFilter<"Watched"> | string
    contentId?: StringFilter<"Watched"> | string
    createdAt?: DateTimeFilter<"Watched"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id" | "userId_contentId">

  export type WatchedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    _count?: WatchedCountOrderByAggregateInput
    _max?: WatchedMaxOrderByAggregateInput
    _min?: WatchedMinOrderByAggregateInput
  }

  export type WatchedScalarWhereWithAggregatesInput = {
    AND?: WatchedScalarWhereWithAggregatesInput | WatchedScalarWhereWithAggregatesInput[]
    OR?: WatchedScalarWhereWithAggregatesInput[]
    NOT?: WatchedScalarWhereWithAggregatesInput | WatchedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watched"> | string
    userId?: StringWithAggregatesFilter<"Watched"> | string
    contentId?: StringWithAggregatesFilter<"Watched"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Watched"> | Date | string
  }

  export type ListWhereInput = {
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    id?: StringFilter<"List"> | string
    name?: StringFilter<"List"> | string
    description?: StringNullableFilter<"List"> | string | null
    isPublic?: BoolFilter<"List"> | boolean
    userId?: StringFilter<"List"> | string
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listItems?: ListItemListRelationFilter
  }

  export type ListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    listItems?: ListItemOrderByRelationAggregateInput
  }

  export type ListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    name?: StringFilter<"List"> | string
    description?: StringNullableFilter<"List"> | string | null
    isPublic?: BoolFilter<"List"> | boolean
    userId?: StringFilter<"List"> | string
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listItems?: ListItemListRelationFilter
  }, "id">

  export type ListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListCountOrderByAggregateInput
    _max?: ListMaxOrderByAggregateInput
    _min?: ListMinOrderByAggregateInput
  }

  export type ListScalarWhereWithAggregatesInput = {
    AND?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    OR?: ListScalarWhereWithAggregatesInput[]
    NOT?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"List"> | string
    name?: StringWithAggregatesFilter<"List"> | string
    description?: StringNullableWithAggregatesFilter<"List"> | string | null
    isPublic?: BoolWithAggregatesFilter<"List"> | boolean
    userId?: StringWithAggregatesFilter<"List"> | string
    createdAt?: DateTimeWithAggregatesFilter<"List"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"List"> | Date | string
  }

  export type ListItemWhereInput = {
    AND?: ListItemWhereInput | ListItemWhereInput[]
    OR?: ListItemWhereInput[]
    NOT?: ListItemWhereInput | ListItemWhereInput[]
    id?: StringFilter<"ListItem"> | string
    listId?: StringFilter<"ListItem"> | string
    contentId?: StringFilter<"ListItem"> | string
    createdAt?: DateTimeFilter<"ListItem"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type ListItemOrderByWithRelationInput = {
    id?: SortOrder
    listId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    list?: ListOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
  }

  export type ListItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    listId_contentId?: ListItemListIdContentIdCompoundUniqueInput
    AND?: ListItemWhereInput | ListItemWhereInput[]
    OR?: ListItemWhereInput[]
    NOT?: ListItemWhereInput | ListItemWhereInput[]
    listId?: StringFilter<"ListItem"> | string
    contentId?: StringFilter<"ListItem"> | string
    createdAt?: DateTimeFilter<"ListItem"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id" | "listId_contentId">

  export type ListItemOrderByWithAggregationInput = {
    id?: SortOrder
    listId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    _count?: ListItemCountOrderByAggregateInput
    _max?: ListItemMaxOrderByAggregateInput
    _min?: ListItemMinOrderByAggregateInput
  }

  export type ListItemScalarWhereWithAggregatesInput = {
    AND?: ListItemScalarWhereWithAggregatesInput | ListItemScalarWhereWithAggregatesInput[]
    OR?: ListItemScalarWhereWithAggregatesInput[]
    NOT?: ListItemScalarWhereWithAggregatesInput | ListItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ListItem"> | string
    listId?: StringWithAggregatesFilter<"ListItem"> | string
    contentId?: StringWithAggregatesFilter<"ListItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ListItem"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: StringFilter<"Rating"> | string
    rating?: IntFilter<"Rating"> | number
    userId?: StringFilter<"Rating"> | string
    contentId?: StringFilter<"Rating"> | string
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_contentId?: RatingUserIdContentIdCompoundUniqueInput
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    rating?: IntFilter<"Rating"> | number
    userId?: StringFilter<"Rating"> | string
    contentId?: StringFilter<"Rating"> | string
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id" | "userId_contentId">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rating"> | string
    rating?: IntWithAggregatesFilter<"Rating"> | number
    userId?: StringWithAggregatesFilter<"Rating"> | string
    contentId?: StringWithAggregatesFilter<"Rating"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    contentId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    commentLikes?: CommentLikeListRelationFilter
    reports?: CommentReportListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    commentLikes?: CommentLikeOrderByRelationAggregateInput
    reports?: CommentReportOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    contentId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    commentLikes?: CommentLikeListRelationFilter
    reports?: CommentReportListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    text?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    contentId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type CommentLikeWhereInput = {
    AND?: CommentLikeWhereInput | CommentLikeWhereInput[]
    OR?: CommentLikeWhereInput[]
    NOT?: CommentLikeWhereInput | CommentLikeWhereInput[]
    id?: StringFilter<"CommentLike"> | string
    userId?: StringFilter<"CommentLike"> | string
    commentId?: StringFilter<"CommentLike"> | string
    isLike?: BoolFilter<"CommentLike"> | boolean
    createdAt?: DateTimeFilter<"CommentLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type CommentLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    isLike?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type CommentLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_commentId?: CommentLikeUserIdCommentIdCompoundUniqueInput
    AND?: CommentLikeWhereInput | CommentLikeWhereInput[]
    OR?: CommentLikeWhereInput[]
    NOT?: CommentLikeWhereInput | CommentLikeWhereInput[]
    userId?: StringFilter<"CommentLike"> | string
    commentId?: StringFilter<"CommentLike"> | string
    isLike?: BoolFilter<"CommentLike"> | boolean
    createdAt?: DateTimeFilter<"CommentLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "id" | "userId_commentId">

  export type CommentLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    isLike?: SortOrder
    createdAt?: SortOrder
    _count?: CommentLikeCountOrderByAggregateInput
    _max?: CommentLikeMaxOrderByAggregateInput
    _min?: CommentLikeMinOrderByAggregateInput
  }

  export type CommentLikeScalarWhereWithAggregatesInput = {
    AND?: CommentLikeScalarWhereWithAggregatesInput | CommentLikeScalarWhereWithAggregatesInput[]
    OR?: CommentLikeScalarWhereWithAggregatesInput[]
    NOT?: CommentLikeScalarWhereWithAggregatesInput | CommentLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommentLike"> | string
    userId?: StringWithAggregatesFilter<"CommentLike"> | string
    commentId?: StringWithAggregatesFilter<"CommentLike"> | string
    isLike?: BoolWithAggregatesFilter<"CommentLike"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CommentLike"> | Date | string
  }

  export type CommentReportWhereInput = {
    AND?: CommentReportWhereInput | CommentReportWhereInput[]
    OR?: CommentReportWhereInput[]
    NOT?: CommentReportWhereInput | CommentReportWhereInput[]
    id?: StringFilter<"CommentReport"> | string
    reason?: StringFilter<"CommentReport"> | string
    details?: StringNullableFilter<"CommentReport"> | string | null
    userId?: StringFilter<"CommentReport"> | string
    commentId?: StringFilter<"CommentReport"> | string
    status?: StringFilter<"CommentReport"> | string
    reviewedBy?: StringNullableFilter<"CommentReport"> | string | null
    reviewedAt?: DateTimeNullableFilter<"CommentReport"> | Date | string | null
    createdAt?: DateTimeFilter<"CommentReport"> | Date | string
    updatedAt?: DateTimeFilter<"CommentReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type CommentReportOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    details?: SortOrderInput | SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type CommentReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_commentId?: CommentReportUserIdCommentIdCompoundUniqueInput
    AND?: CommentReportWhereInput | CommentReportWhereInput[]
    OR?: CommentReportWhereInput[]
    NOT?: CommentReportWhereInput | CommentReportWhereInput[]
    reason?: StringFilter<"CommentReport"> | string
    details?: StringNullableFilter<"CommentReport"> | string | null
    userId?: StringFilter<"CommentReport"> | string
    commentId?: StringFilter<"CommentReport"> | string
    status?: StringFilter<"CommentReport"> | string
    reviewedBy?: StringNullableFilter<"CommentReport"> | string | null
    reviewedAt?: DateTimeNullableFilter<"CommentReport"> | Date | string | null
    createdAt?: DateTimeFilter<"CommentReport"> | Date | string
    updatedAt?: DateTimeFilter<"CommentReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "id" | "userId_commentId">

  export type CommentReportOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    details?: SortOrderInput | SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentReportCountOrderByAggregateInput
    _max?: CommentReportMaxOrderByAggregateInput
    _min?: CommentReportMinOrderByAggregateInput
  }

  export type CommentReportScalarWhereWithAggregatesInput = {
    AND?: CommentReportScalarWhereWithAggregatesInput | CommentReportScalarWhereWithAggregatesInput[]
    OR?: CommentReportScalarWhereWithAggregatesInput[]
    NOT?: CommentReportScalarWhereWithAggregatesInput | CommentReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommentReport"> | string
    reason?: StringWithAggregatesFilter<"CommentReport"> | string
    details?: StringNullableWithAggregatesFilter<"CommentReport"> | string | null
    userId?: StringWithAggregatesFilter<"CommentReport"> | string
    commentId?: StringWithAggregatesFilter<"CommentReport"> | string
    status?: StringWithAggregatesFilter<"CommentReport"> | string
    reviewedBy?: StringNullableWithAggregatesFilter<"CommentReport"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"CommentReport"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommentReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommentReport"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    lists?: ListCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContentCreateInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutContentsInput
    favorites?: FavoriteCreateNestedManyWithoutContentInput
    listItems?: ListItemCreateNestedManyWithoutContentInput
    watched?: WatchedCreateNestedManyWithoutContentInput
    ratings?: RatingCreateNestedManyWithoutContentInput
    comments?: CommentCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedById: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutContentInput
    listItems?: ListItemUncheckedCreateNestedManyWithoutContentInput
    watched?: WatchedUncheckedCreateNestedManyWithoutContentInput
    ratings?: RatingUncheckedCreateNestedManyWithoutContentInput
    comments?: CommentUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutContentsNestedInput
    favorites?: FavoriteUpdateManyWithoutContentNestedInput
    listItems?: ListItemUpdateManyWithoutContentNestedInput
    watched?: WatchedUpdateManyWithoutContentNestedInput
    ratings?: RatingUpdateManyWithoutContentNestedInput
    comments?: CommentUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedById?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutContentNestedInput
    listItems?: ListItemUncheckedUpdateManyWithoutContentNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutContentNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutContentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentCreateManyInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedById: string
  }

  export type ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedById?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    content: ContentCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    contentId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    content?: ContentUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    contentId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchedInput
    content: ContentCreateNestedOneWithoutWatchedInput
  }

  export type WatchedUncheckedCreateInput = {
    id?: string
    userId: string
    contentId: string
    createdAt?: Date | string
  }

  export type WatchedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchedNestedInput
    content?: ContentUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type WatchedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedCreateManyInput = {
    id?: string
    userId: string
    contentId: string
    createdAt?: Date | string
  }

  export type WatchedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListCreateInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutListsInput
    listItems?: ListItemCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listItems?: ListItemUncheckedCreateNestedManyWithoutListInput
  }

  export type ListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListsNestedInput
    listItems?: ListItemUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listItems?: ListItemUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListItemCreateInput = {
    id?: string
    createdAt?: Date | string
    list: ListCreateNestedOneWithoutListItemsInput
    content: ContentCreateNestedOneWithoutListItemsInput
  }

  export type ListItemUncheckedCreateInput = {
    id?: string
    listId: string
    contentId: string
    createdAt?: Date | string
  }

  export type ListItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutListItemsNestedInput
    content?: ContentUpdateOneRequiredWithoutListItemsNestedInput
  }

  export type ListItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListItemCreateManyInput = {
    id?: string
    listId: string
    contentId: string
    createdAt?: Date | string
  }

  export type ListItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    id?: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
    content: ContentCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    rating: number
    userId: string
    contentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
    content?: ContentUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    id?: string
    rating: number
    userId: string
    contentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    content: ContentCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeCreateNestedManyWithoutCommentInput
    reports?: CommentReportCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    text: string
    userId: string
    contentId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput
    reports?: CommentReportUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    content?: ContentUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    text: string
    userId: string
    contentId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentLikeCreateInput = {
    id?: string
    isLike: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentLikesInput
    comment: CommentCreateNestedOneWithoutCommentLikesInput
  }

  export type CommentLikeUncheckedCreateInput = {
    id?: string
    userId: string
    commentId: string
    isLike: boolean
    createdAt?: Date | string
  }

  export type CommentLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentLikesNestedInput
    comment?: CommentUpdateOneRequiredWithoutCommentLikesNestedInput
  }

  export type CommentLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentLikeCreateManyInput = {
    id?: string
    userId: string
    commentId: string
    isLike: boolean
    createdAt?: Date | string
  }

  export type CommentLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReportCreateInput = {
    id?: string
    reason: string
    details?: string | null
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentReportsInput
    comment: CommentCreateNestedOneWithoutReportsInput
  }

  export type CommentReportUncheckedCreateInput = {
    id?: string
    reason: string
    details?: string | null
    userId: string
    commentId: string
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentReportsNestedInput
    comment?: CommentUpdateOneRequiredWithoutReportsNestedInput
  }

  export type CommentReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReportCreateManyInput = {
    id?: string
    reason: string
    details?: string | null
    userId: string
    commentId: string
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type ListListRelationFilter = {
    every?: ListWhereInput
    some?: ListWhereInput
    none?: ListWhereInput
  }

  export type WatchedListRelationFilter = {
    every?: WatchedWhereInput
    some?: WatchedWhereInput
    none?: WatchedWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CommentLikeListRelationFilter = {
    every?: CommentLikeWhereInput
    some?: CommentLikeWhereInput
    none?: CommentLikeWhereInput
  }

  export type CommentReportListRelationFilter = {
    every?: CommentReportWhereInput
    some?: CommentReportWhereInput
    none?: CommentReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    twitter?: SortOrder
    instagram?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    twitter?: SortOrder
    instagram?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    twitter?: SortOrder
    instagram?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type ListItemListRelationFilter = {
    every?: ListItemWhereInput
    some?: ListItemWhereInput
    none?: ListItemWhereInput
  }

  export type ListItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    releaseYear?: SortOrder
    trailerUrl?: SortOrder
    image?: SortOrder
    director?: SortOrder
    actors?: SortOrder
    genres?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedById?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    releaseYear?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    releaseYear?: SortOrder
    trailerUrl?: SortOrder
    image?: SortOrder
    director?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedById?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    releaseYear?: SortOrder
    trailerUrl?: SortOrder
    image?: SortOrder
    director?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedById?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    releaseYear?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
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

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type ContentScalarRelationFilter = {
    is?: ContentWhereInput
    isNot?: ContentWhereInput
  }

  export type FavoriteUserIdContentIdCompoundUniqueInput = {
    userId: string
    contentId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchedUserIdContentIdCompoundUniqueInput = {
    userId: string
    contentId: string
  }

  export type WatchedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListScalarRelationFilter = {
    is?: ListWhereInput
    isNot?: ListWhereInput
  }

  export type ListItemListIdContentIdCompoundUniqueInput = {
    listId: string
    contentId: string
  }

  export type ListItemCountOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ListItemMaxOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ListItemMinOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingUserIdContentIdCompoundUniqueInput = {
    userId: string
    contentId: string
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type CommentLikeUserIdCommentIdCompoundUniqueInput = {
    userId: string
    commentId: string
  }

  export type CommentLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    isLike?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    isLike?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    isLike?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentReportUserIdCommentIdCompoundUniqueInput = {
    userId: string
    commentId: string
  }

  export type CommentReportCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    details?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentReportMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    details?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentReportMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    details?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ContentCreateNestedManyWithoutAddedByInput = {
    create?: XOR<ContentCreateWithoutAddedByInput, ContentUncheckedCreateWithoutAddedByInput> | ContentCreateWithoutAddedByInput[] | ContentUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutAddedByInput | ContentCreateOrConnectWithoutAddedByInput[]
    createMany?: ContentCreateManyAddedByInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ListCreateNestedManyWithoutUserInput = {
    create?: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput> | ListCreateWithoutUserInput[] | ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCreateOrConnectWithoutUserInput | ListCreateOrConnectWithoutUserInput[]
    createMany?: ListCreateManyUserInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type WatchedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput> | WatchedCreateWithoutUserInput[] | WatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutUserInput | WatchedCreateOrConnectWithoutUserInput[]
    createMany?: WatchedCreateManyUserInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput> | CommentLikeCreateWithoutUserInput[] | CommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput | CommentLikeCreateOrConnectWithoutUserInput[]
    createMany?: CommentLikeCreateManyUserInputEnvelope
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
  }

  export type CommentReportCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentReportCreateWithoutUserInput, CommentReportUncheckedCreateWithoutUserInput> | CommentReportCreateWithoutUserInput[] | CommentReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReportCreateOrConnectWithoutUserInput | CommentReportCreateOrConnectWithoutUserInput[]
    createMany?: CommentReportCreateManyUserInputEnvelope
    connect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutAddedByInput = {
    create?: XOR<ContentCreateWithoutAddedByInput, ContentUncheckedCreateWithoutAddedByInput> | ContentCreateWithoutAddedByInput[] | ContentUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutAddedByInput | ContentCreateOrConnectWithoutAddedByInput[]
    createMany?: ContentCreateManyAddedByInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput> | ListCreateWithoutUserInput[] | ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCreateOrConnectWithoutUserInput | ListCreateOrConnectWithoutUserInput[]
    createMany?: ListCreateManyUserInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type WatchedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput> | WatchedCreateWithoutUserInput[] | WatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutUserInput | WatchedCreateOrConnectWithoutUserInput[]
    createMany?: WatchedCreateManyUserInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput> | CommentLikeCreateWithoutUserInput[] | CommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput | CommentLikeCreateOrConnectWithoutUserInput[]
    createMany?: CommentLikeCreateManyUserInputEnvelope
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
  }

  export type CommentReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentReportCreateWithoutUserInput, CommentReportUncheckedCreateWithoutUserInput> | CommentReportCreateWithoutUserInput[] | CommentReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReportCreateOrConnectWithoutUserInput | CommentReportCreateOrConnectWithoutUserInput[]
    createMany?: CommentReportCreateManyUserInputEnvelope
    connect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ContentUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<ContentCreateWithoutAddedByInput, ContentUncheckedCreateWithoutAddedByInput> | ContentCreateWithoutAddedByInput[] | ContentUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutAddedByInput | ContentCreateOrConnectWithoutAddedByInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutAddedByInput | ContentUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: ContentCreateManyAddedByInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutAddedByInput | ContentUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutAddedByInput | ContentUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ListUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput> | ListCreateWithoutUserInput[] | ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCreateOrConnectWithoutUserInput | ListCreateOrConnectWithoutUserInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutUserInput | ListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListCreateManyUserInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutUserInput | ListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListUpdateManyWithWhereWithoutUserInput | ListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type WatchedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput> | WatchedCreateWithoutUserInput[] | WatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutUserInput | WatchedCreateOrConnectWithoutUserInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutUserInput | WatchedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchedCreateManyUserInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutUserInput | WatchedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutUserInput | WatchedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput> | CommentLikeCreateWithoutUserInput[] | CommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput | CommentLikeCreateOrConnectWithoutUserInput[]
    upsert?: CommentLikeUpsertWithWhereUniqueWithoutUserInput | CommentLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentLikeCreateManyUserInputEnvelope
    set?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    disconnect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    delete?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    update?: CommentLikeUpdateWithWhereUniqueWithoutUserInput | CommentLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentLikeUpdateManyWithWhereWithoutUserInput | CommentLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
  }

  export type CommentReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentReportCreateWithoutUserInput, CommentReportUncheckedCreateWithoutUserInput> | CommentReportCreateWithoutUserInput[] | CommentReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReportCreateOrConnectWithoutUserInput | CommentReportCreateOrConnectWithoutUserInput[]
    upsert?: CommentReportUpsertWithWhereUniqueWithoutUserInput | CommentReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentReportCreateManyUserInputEnvelope
    set?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    disconnect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    delete?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    connect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    update?: CommentReportUpdateWithWhereUniqueWithoutUserInput | CommentReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentReportUpdateManyWithWhereWithoutUserInput | CommentReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentReportScalarWhereInput | CommentReportScalarWhereInput[]
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

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<ContentCreateWithoutAddedByInput, ContentUncheckedCreateWithoutAddedByInput> | ContentCreateWithoutAddedByInput[] | ContentUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutAddedByInput | ContentCreateOrConnectWithoutAddedByInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutAddedByInput | ContentUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: ContentCreateManyAddedByInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutAddedByInput | ContentUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutAddedByInput | ContentUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput> | ListCreateWithoutUserInput[] | ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCreateOrConnectWithoutUserInput | ListCreateOrConnectWithoutUserInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutUserInput | ListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListCreateManyUserInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutUserInput | ListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListUpdateManyWithWhereWithoutUserInput | ListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type WatchedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput> | WatchedCreateWithoutUserInput[] | WatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutUserInput | WatchedCreateOrConnectWithoutUserInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutUserInput | WatchedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchedCreateManyUserInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutUserInput | WatchedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutUserInput | WatchedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput> | CommentLikeCreateWithoutUserInput[] | CommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput | CommentLikeCreateOrConnectWithoutUserInput[]
    upsert?: CommentLikeUpsertWithWhereUniqueWithoutUserInput | CommentLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentLikeCreateManyUserInputEnvelope
    set?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    disconnect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    delete?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    update?: CommentLikeUpdateWithWhereUniqueWithoutUserInput | CommentLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentLikeUpdateManyWithWhereWithoutUserInput | CommentLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
  }

  export type CommentReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentReportCreateWithoutUserInput, CommentReportUncheckedCreateWithoutUserInput> | CommentReportCreateWithoutUserInput[] | CommentReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReportCreateOrConnectWithoutUserInput | CommentReportCreateOrConnectWithoutUserInput[]
    upsert?: CommentReportUpsertWithWhereUniqueWithoutUserInput | CommentReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentReportCreateManyUserInputEnvelope
    set?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    disconnect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    delete?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    connect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    update?: CommentReportUpdateWithWhereUniqueWithoutUserInput | CommentReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentReportUpdateManyWithWhereWithoutUserInput | CommentReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentReportScalarWhereInput | CommentReportScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type ContentCreateactorsInput = {
    set: string[]
  }

  export type ContentCreategenresInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutContentsInput = {
    create?: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentsInput
    connect?: UserWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutContentInput = {
    create?: XOR<FavoriteCreateWithoutContentInput, FavoriteUncheckedCreateWithoutContentInput> | FavoriteCreateWithoutContentInput[] | FavoriteUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutContentInput | FavoriteCreateOrConnectWithoutContentInput[]
    createMany?: FavoriteCreateManyContentInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ListItemCreateNestedManyWithoutContentInput = {
    create?: XOR<ListItemCreateWithoutContentInput, ListItemUncheckedCreateWithoutContentInput> | ListItemCreateWithoutContentInput[] | ListItemUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutContentInput | ListItemCreateOrConnectWithoutContentInput[]
    createMany?: ListItemCreateManyContentInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type WatchedCreateNestedManyWithoutContentInput = {
    create?: XOR<WatchedCreateWithoutContentInput, WatchedUncheckedCreateWithoutContentInput> | WatchedCreateWithoutContentInput[] | WatchedUncheckedCreateWithoutContentInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutContentInput | WatchedCreateOrConnectWithoutContentInput[]
    createMany?: WatchedCreateManyContentInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutContentInput = {
    create?: XOR<RatingCreateWithoutContentInput, RatingUncheckedCreateWithoutContentInput> | RatingCreateWithoutContentInput[] | RatingUncheckedCreateWithoutContentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutContentInput | RatingCreateOrConnectWithoutContentInput[]
    createMany?: RatingCreateManyContentInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutContentInput = {
    create?: XOR<CommentCreateWithoutContentInput, CommentUncheckedCreateWithoutContentInput> | CommentCreateWithoutContentInput[] | CommentUncheckedCreateWithoutContentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutContentInput | CommentCreateOrConnectWithoutContentInput[]
    createMany?: CommentCreateManyContentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<FavoriteCreateWithoutContentInput, FavoriteUncheckedCreateWithoutContentInput> | FavoriteCreateWithoutContentInput[] | FavoriteUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutContentInput | FavoriteCreateOrConnectWithoutContentInput[]
    createMany?: FavoriteCreateManyContentInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ListItemUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<ListItemCreateWithoutContentInput, ListItemUncheckedCreateWithoutContentInput> | ListItemCreateWithoutContentInput[] | ListItemUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutContentInput | ListItemCreateOrConnectWithoutContentInput[]
    createMany?: ListItemCreateManyContentInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type WatchedUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<WatchedCreateWithoutContentInput, WatchedUncheckedCreateWithoutContentInput> | WatchedCreateWithoutContentInput[] | WatchedUncheckedCreateWithoutContentInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutContentInput | WatchedCreateOrConnectWithoutContentInput[]
    createMany?: WatchedCreateManyContentInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<RatingCreateWithoutContentInput, RatingUncheckedCreateWithoutContentInput> | RatingCreateWithoutContentInput[] | RatingUncheckedCreateWithoutContentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutContentInput | RatingCreateOrConnectWithoutContentInput[]
    createMany?: RatingCreateManyContentInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<CommentCreateWithoutContentInput, CommentUncheckedCreateWithoutContentInput> | CommentCreateWithoutContentInput[] | CommentUncheckedCreateWithoutContentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutContentInput | CommentCreateOrConnectWithoutContentInput[]
    createMany?: CommentCreateManyContentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContentUpdateactorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContentUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type UserUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentsInput
    upsert?: UserUpsertWithoutContentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentsInput, UserUpdateWithoutContentsInput>, UserUncheckedUpdateWithoutContentsInput>
  }

  export type FavoriteUpdateManyWithoutContentNestedInput = {
    create?: XOR<FavoriteCreateWithoutContentInput, FavoriteUncheckedCreateWithoutContentInput> | FavoriteCreateWithoutContentInput[] | FavoriteUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutContentInput | FavoriteCreateOrConnectWithoutContentInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutContentInput | FavoriteUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: FavoriteCreateManyContentInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutContentInput | FavoriteUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutContentInput | FavoriteUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ListItemUpdateManyWithoutContentNestedInput = {
    create?: XOR<ListItemCreateWithoutContentInput, ListItemUncheckedCreateWithoutContentInput> | ListItemCreateWithoutContentInput[] | ListItemUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutContentInput | ListItemCreateOrConnectWithoutContentInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutContentInput | ListItemUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ListItemCreateManyContentInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutContentInput | ListItemUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutContentInput | ListItemUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type WatchedUpdateManyWithoutContentNestedInput = {
    create?: XOR<WatchedCreateWithoutContentInput, WatchedUncheckedCreateWithoutContentInput> | WatchedCreateWithoutContentInput[] | WatchedUncheckedCreateWithoutContentInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutContentInput | WatchedCreateOrConnectWithoutContentInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutContentInput | WatchedUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: WatchedCreateManyContentInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutContentInput | WatchedUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutContentInput | WatchedUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutContentNestedInput = {
    create?: XOR<RatingCreateWithoutContentInput, RatingUncheckedCreateWithoutContentInput> | RatingCreateWithoutContentInput[] | RatingUncheckedCreateWithoutContentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutContentInput | RatingCreateOrConnectWithoutContentInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutContentInput | RatingUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: RatingCreateManyContentInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutContentInput | RatingUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutContentInput | RatingUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutContentNestedInput = {
    create?: XOR<CommentCreateWithoutContentInput, CommentUncheckedCreateWithoutContentInput> | CommentCreateWithoutContentInput[] | CommentUncheckedCreateWithoutContentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutContentInput | CommentCreateOrConnectWithoutContentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutContentInput | CommentUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: CommentCreateManyContentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutContentInput | CommentUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutContentInput | CommentUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<FavoriteCreateWithoutContentInput, FavoriteUncheckedCreateWithoutContentInput> | FavoriteCreateWithoutContentInput[] | FavoriteUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutContentInput | FavoriteCreateOrConnectWithoutContentInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutContentInput | FavoriteUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: FavoriteCreateManyContentInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutContentInput | FavoriteUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutContentInput | FavoriteUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ListItemUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<ListItemCreateWithoutContentInput, ListItemUncheckedCreateWithoutContentInput> | ListItemCreateWithoutContentInput[] | ListItemUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutContentInput | ListItemCreateOrConnectWithoutContentInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutContentInput | ListItemUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ListItemCreateManyContentInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutContentInput | ListItemUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutContentInput | ListItemUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type WatchedUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<WatchedCreateWithoutContentInput, WatchedUncheckedCreateWithoutContentInput> | WatchedCreateWithoutContentInput[] | WatchedUncheckedCreateWithoutContentInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutContentInput | WatchedCreateOrConnectWithoutContentInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutContentInput | WatchedUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: WatchedCreateManyContentInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutContentInput | WatchedUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutContentInput | WatchedUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<RatingCreateWithoutContentInput, RatingUncheckedCreateWithoutContentInput> | RatingCreateWithoutContentInput[] | RatingUncheckedCreateWithoutContentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutContentInput | RatingCreateOrConnectWithoutContentInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutContentInput | RatingUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: RatingCreateManyContentInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutContentInput | RatingUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutContentInput | RatingUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<CommentCreateWithoutContentInput, CommentUncheckedCreateWithoutContentInput> | CommentCreateWithoutContentInput[] | CommentUncheckedCreateWithoutContentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutContentInput | CommentCreateOrConnectWithoutContentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutContentInput | CommentUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: CommentCreateManyContentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutContentInput | CommentUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutContentInput | CommentUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ContentCreateWithoutFavoritesInput, ContentUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutFavoritesInput
    connect?: ContentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type ContentUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<ContentCreateWithoutFavoritesInput, ContentUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutFavoritesInput
    upsert?: ContentUpsertWithoutFavoritesInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutFavoritesInput, ContentUpdateWithoutFavoritesInput>, ContentUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutWatchedInput = {
    create?: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchedInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutWatchedInput = {
    create?: XOR<ContentCreateWithoutWatchedInput, ContentUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: ContentCreateOrConnectWithoutWatchedInput
    connect?: ContentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchedNestedInput = {
    create?: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchedInput
    upsert?: UserUpsertWithoutWatchedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchedInput, UserUpdateWithoutWatchedInput>, UserUncheckedUpdateWithoutWatchedInput>
  }

  export type ContentUpdateOneRequiredWithoutWatchedNestedInput = {
    create?: XOR<ContentCreateWithoutWatchedInput, ContentUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: ContentCreateOrConnectWithoutWatchedInput
    upsert?: ContentUpsertWithoutWatchedInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutWatchedInput, ContentUpdateWithoutWatchedInput>, ContentUncheckedUpdateWithoutWatchedInput>
  }

  export type UserCreateNestedOneWithoutListsInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    connect?: UserWhereUniqueInput
  }

  export type ListItemCreateNestedManyWithoutListInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type ListItemUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    upsert?: UserUpsertWithoutListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListsInput, UserUpdateWithoutListsInput>, UserUncheckedUpdateWithoutListsInput>
  }

  export type ListItemUpdateManyWithoutListNestedInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutListInput | ListItemUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutListInput | ListItemUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutListInput | ListItemUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ListItemUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutListInput | ListItemUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutListInput | ListItemUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutListInput | ListItemUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ListCreateNestedOneWithoutListItemsInput = {
    create?: XOR<ListCreateWithoutListItemsInput, ListUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: ListCreateOrConnectWithoutListItemsInput
    connect?: ListWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutListItemsInput = {
    create?: XOR<ContentCreateWithoutListItemsInput, ContentUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutListItemsInput
    connect?: ContentWhereUniqueInput
  }

  export type ListUpdateOneRequiredWithoutListItemsNestedInput = {
    create?: XOR<ListCreateWithoutListItemsInput, ListUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: ListCreateOrConnectWithoutListItemsInput
    upsert?: ListUpsertWithoutListItemsInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutListItemsInput, ListUpdateWithoutListItemsInput>, ListUncheckedUpdateWithoutListItemsInput>
  }

  export type ContentUpdateOneRequiredWithoutListItemsNestedInput = {
    create?: XOR<ContentCreateWithoutListItemsInput, ContentUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutListItemsInput
    upsert?: ContentUpsertWithoutListItemsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutListItemsInput, ContentUpdateWithoutListItemsInput>, ContentUncheckedUpdateWithoutListItemsInput>
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutRatingsInput = {
    create?: XOR<ContentCreateWithoutRatingsInput, ContentUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutRatingsInput
    connect?: ContentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type ContentUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<ContentCreateWithoutRatingsInput, ContentUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutRatingsInput
    upsert?: ContentUpsertWithoutRatingsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutRatingsInput, ContentUpdateWithoutRatingsInput>, ContentUncheckedUpdateWithoutRatingsInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ContentCreateWithoutCommentsInput, ContentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutCommentsInput
    connect?: ContentWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentLikeCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput> | CommentLikeCreateWithoutCommentInput[] | CommentLikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput | CommentLikeCreateOrConnectWithoutCommentInput[]
    createMany?: CommentLikeCreateManyCommentInputEnvelope
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
  }

  export type CommentReportCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentReportCreateWithoutCommentInput, CommentReportUncheckedCreateWithoutCommentInput> | CommentReportCreateWithoutCommentInput[] | CommentReportUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReportCreateOrConnectWithoutCommentInput | CommentReportCreateOrConnectWithoutCommentInput[]
    createMany?: CommentReportCreateManyCommentInputEnvelope
    connect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentLikeUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput> | CommentLikeCreateWithoutCommentInput[] | CommentLikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput | CommentLikeCreateOrConnectWithoutCommentInput[]
    createMany?: CommentLikeCreateManyCommentInputEnvelope
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
  }

  export type CommentReportUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentReportCreateWithoutCommentInput, CommentReportUncheckedCreateWithoutCommentInput> | CommentReportCreateWithoutCommentInput[] | CommentReportUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReportCreateOrConnectWithoutCommentInput | CommentReportCreateOrConnectWithoutCommentInput[]
    createMany?: CommentReportCreateManyCommentInputEnvelope
    connect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type ContentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ContentCreateWithoutCommentsInput, ContentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutCommentsInput
    upsert?: ContentUpsertWithoutCommentsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutCommentsInput, ContentUpdateWithoutCommentsInput>, ContentUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentLikeUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput> | CommentLikeCreateWithoutCommentInput[] | CommentLikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput | CommentLikeCreateOrConnectWithoutCommentInput[]
    upsert?: CommentLikeUpsertWithWhereUniqueWithoutCommentInput | CommentLikeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentLikeCreateManyCommentInputEnvelope
    set?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    disconnect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    delete?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    update?: CommentLikeUpdateWithWhereUniqueWithoutCommentInput | CommentLikeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentLikeUpdateManyWithWhereWithoutCommentInput | CommentLikeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
  }

  export type CommentReportUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentReportCreateWithoutCommentInput, CommentReportUncheckedCreateWithoutCommentInput> | CommentReportCreateWithoutCommentInput[] | CommentReportUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReportCreateOrConnectWithoutCommentInput | CommentReportCreateOrConnectWithoutCommentInput[]
    upsert?: CommentReportUpsertWithWhereUniqueWithoutCommentInput | CommentReportUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentReportCreateManyCommentInputEnvelope
    set?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    disconnect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    delete?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    connect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    update?: CommentReportUpdateWithWhereUniqueWithoutCommentInput | CommentReportUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentReportUpdateManyWithWhereWithoutCommentInput | CommentReportUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentReportScalarWhereInput | CommentReportScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentLikeUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput> | CommentLikeCreateWithoutCommentInput[] | CommentLikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput | CommentLikeCreateOrConnectWithoutCommentInput[]
    upsert?: CommentLikeUpsertWithWhereUniqueWithoutCommentInput | CommentLikeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentLikeCreateManyCommentInputEnvelope
    set?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    disconnect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    delete?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    update?: CommentLikeUpdateWithWhereUniqueWithoutCommentInput | CommentLikeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentLikeUpdateManyWithWhereWithoutCommentInput | CommentLikeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
  }

  export type CommentReportUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentReportCreateWithoutCommentInput, CommentReportUncheckedCreateWithoutCommentInput> | CommentReportCreateWithoutCommentInput[] | CommentReportUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReportCreateOrConnectWithoutCommentInput | CommentReportCreateOrConnectWithoutCommentInput[]
    upsert?: CommentReportUpsertWithWhereUniqueWithoutCommentInput | CommentReportUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentReportCreateManyCommentInputEnvelope
    set?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    disconnect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    delete?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    connect?: CommentReportWhereUniqueInput | CommentReportWhereUniqueInput[]
    update?: CommentReportUpdateWithWhereUniqueWithoutCommentInput | CommentReportUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentReportUpdateManyWithWhereWithoutCommentInput | CommentReportUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentReportScalarWhereInput | CommentReportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentLikesInput = {
    create?: XOR<UserCreateWithoutCommentLikesInput, UserUncheckedCreateWithoutCommentLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentLikesInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutCommentLikesInput = {
    create?: XOR<CommentCreateWithoutCommentLikesInput, CommentUncheckedCreateWithoutCommentLikesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentLikesInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentLikesNestedInput = {
    create?: XOR<UserCreateWithoutCommentLikesInput, UserUncheckedCreateWithoutCommentLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentLikesInput
    upsert?: UserUpsertWithoutCommentLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentLikesInput, UserUpdateWithoutCommentLikesInput>, UserUncheckedUpdateWithoutCommentLikesInput>
  }

  export type CommentUpdateOneRequiredWithoutCommentLikesNestedInput = {
    create?: XOR<CommentCreateWithoutCommentLikesInput, CommentUncheckedCreateWithoutCommentLikesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentLikesInput
    upsert?: CommentUpsertWithoutCommentLikesInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutCommentLikesInput, CommentUpdateWithoutCommentLikesInput>, CommentUncheckedUpdateWithoutCommentLikesInput>
  }

  export type UserCreateNestedOneWithoutCommentReportsInput = {
    create?: XOR<UserCreateWithoutCommentReportsInput, UserUncheckedCreateWithoutCommentReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentReportsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutReportsInput = {
    create?: XOR<CommentCreateWithoutReportsInput, CommentUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutReportsInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentReportsNestedInput = {
    create?: XOR<UserCreateWithoutCommentReportsInput, UserUncheckedCreateWithoutCommentReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentReportsInput
    upsert?: UserUpsertWithoutCommentReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentReportsInput, UserUpdateWithoutCommentReportsInput>, UserUncheckedUpdateWithoutCommentReportsInput>
  }

  export type CommentUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<CommentCreateWithoutReportsInput, CommentUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutReportsInput
    upsert?: CommentUpsertWithoutReportsInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutReportsInput, CommentUpdateWithoutReportsInput>, CommentUncheckedUpdateWithoutReportsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
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

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContentCreateWithoutAddedByInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteCreateNestedManyWithoutContentInput
    listItems?: ListItemCreateNestedManyWithoutContentInput
    watched?: WatchedCreateNestedManyWithoutContentInput
    ratings?: RatingCreateNestedManyWithoutContentInput
    comments?: CommentCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutAddedByInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutContentInput
    listItems?: ListItemUncheckedCreateNestedManyWithoutContentInput
    watched?: WatchedUncheckedCreateNestedManyWithoutContentInput
    ratings?: RatingUncheckedCreateNestedManyWithoutContentInput
    comments?: CommentUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutAddedByInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutAddedByInput, ContentUncheckedCreateWithoutAddedByInput>
  }

  export type ContentCreateManyAddedByInputEnvelope = {
    data: ContentCreateManyAddedByInput | ContentCreateManyAddedByInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    listItems?: ListItemCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    listItems?: ListItemUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutUserInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput>
  }

  export type ListCreateManyUserInputEnvelope = {
    data: ListCreateManyUserInput | ListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutWatchedInput
  }

  export type WatchedUncheckedCreateWithoutUserInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type WatchedCreateOrConnectWithoutUserInput = {
    where: WatchedWhereUniqueInput
    create: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput>
  }

  export type WatchedCreateManyUserInputEnvelope = {
    data: WatchedCreateManyUserInput | WatchedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutUserInput = {
    id?: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    content: ContentCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    contentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingCreateManyUserInputEnvelope = {
    data: RatingCreateManyUserInput | RatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: ContentCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeCreateNestedManyWithoutCommentInput
    reports?: CommentReportCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    text: string
    contentId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput
    reports?: CommentReportUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentLikeCreateWithoutUserInput = {
    id?: string
    isLike: boolean
    createdAt?: Date | string
    comment: CommentCreateNestedOneWithoutCommentLikesInput
  }

  export type CommentLikeUncheckedCreateWithoutUserInput = {
    id?: string
    commentId: string
    isLike: boolean
    createdAt?: Date | string
  }

  export type CommentLikeCreateOrConnectWithoutUserInput = {
    where: CommentLikeWhereUniqueInput
    create: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput>
  }

  export type CommentLikeCreateManyUserInputEnvelope = {
    data: CommentLikeCreateManyUserInput | CommentLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentReportCreateWithoutUserInput = {
    id?: string
    reason: string
    details?: string | null
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: CommentCreateNestedOneWithoutReportsInput
  }

  export type CommentReportUncheckedCreateWithoutUserInput = {
    id?: string
    reason: string
    details?: string | null
    commentId: string
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentReportCreateOrConnectWithoutUserInput = {
    where: CommentReportWhereUniqueInput
    create: XOR<CommentReportCreateWithoutUserInput, CommentReportUncheckedCreateWithoutUserInput>
  }

  export type CommentReportCreateManyUserInputEnvelope = {
    data: CommentReportCreateManyUserInput | CommentReportCreateManyUserInput[]
    skipDuplicates?: boolean
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
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type ContentUpsertWithWhereUniqueWithoutAddedByInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutAddedByInput, ContentUncheckedUpdateWithoutAddedByInput>
    create: XOR<ContentCreateWithoutAddedByInput, ContentUncheckedCreateWithoutAddedByInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutAddedByInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutAddedByInput, ContentUncheckedUpdateWithoutAddedByInput>
  }

  export type ContentUpdateManyWithWhereWithoutAddedByInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutAddedByInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    summary?: StringFilter<"Content"> | string
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    releaseYear?: IntFilter<"Content"> | number
    trailerUrl?: StringNullableFilter<"Content"> | string | null
    image?: StringNullableFilter<"Content"> | string | null
    director?: StringFilter<"Content"> | string
    actors?: StringNullableListFilter<"Content">
    genres?: StringNullableListFilter<"Content">
    platform?: EnumPlatformFilter<"Content"> | $Enums.Platform
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    addedById?: StringFilter<"Content"> | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    contentId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type ListUpsertWithWhereUniqueWithoutUserInput = {
    where: ListWhereUniqueInput
    update: XOR<ListUpdateWithoutUserInput, ListUncheckedUpdateWithoutUserInput>
    create: XOR<ListCreateWithoutUserInput, ListUncheckedCreateWithoutUserInput>
  }

  export type ListUpdateWithWhereUniqueWithoutUserInput = {
    where: ListWhereUniqueInput
    data: XOR<ListUpdateWithoutUserInput, ListUncheckedUpdateWithoutUserInput>
  }

  export type ListUpdateManyWithWhereWithoutUserInput = {
    where: ListScalarWhereInput
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyWithoutUserInput>
  }

  export type ListScalarWhereInput = {
    AND?: ListScalarWhereInput | ListScalarWhereInput[]
    OR?: ListScalarWhereInput[]
    NOT?: ListScalarWhereInput | ListScalarWhereInput[]
    id?: StringFilter<"List"> | string
    name?: StringFilter<"List"> | string
    description?: StringNullableFilter<"List"> | string | null
    isPublic?: BoolFilter<"List"> | boolean
    userId?: StringFilter<"List"> | string
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
  }

  export type WatchedUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchedWhereUniqueInput
    update: XOR<WatchedUpdateWithoutUserInput, WatchedUncheckedUpdateWithoutUserInput>
    create: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput>
  }

  export type WatchedUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchedWhereUniqueInput
    data: XOR<WatchedUpdateWithoutUserInput, WatchedUncheckedUpdateWithoutUserInput>
  }

  export type WatchedUpdateManyWithWhereWithoutUserInput = {
    where: WatchedScalarWhereInput
    data: XOR<WatchedUpdateManyMutationInput, WatchedUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchedScalarWhereInput = {
    AND?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
    OR?: WatchedScalarWhereInput[]
    NOT?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
    id?: StringFilter<"Watched"> | string
    userId?: StringFilter<"Watched"> | string
    contentId?: StringFilter<"Watched"> | string
    createdAt?: DateTimeFilter<"Watched"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutUserInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: StringFilter<"Rating"> | string
    rating?: IntFilter<"Rating"> | number
    userId?: StringFilter<"Rating"> | string
    contentId?: StringFilter<"Rating"> | string
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    contentId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type CommentLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentLikeWhereUniqueInput
    update: XOR<CommentLikeUpdateWithoutUserInput, CommentLikeUncheckedUpdateWithoutUserInput>
    create: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput>
  }

  export type CommentLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentLikeWhereUniqueInput
    data: XOR<CommentLikeUpdateWithoutUserInput, CommentLikeUncheckedUpdateWithoutUserInput>
  }

  export type CommentLikeUpdateManyWithWhereWithoutUserInput = {
    where: CommentLikeScalarWhereInput
    data: XOR<CommentLikeUpdateManyMutationInput, CommentLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentLikeScalarWhereInput = {
    AND?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
    OR?: CommentLikeScalarWhereInput[]
    NOT?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
    id?: StringFilter<"CommentLike"> | string
    userId?: StringFilter<"CommentLike"> | string
    commentId?: StringFilter<"CommentLike"> | string
    isLike?: BoolFilter<"CommentLike"> | boolean
    createdAt?: DateTimeFilter<"CommentLike"> | Date | string
  }

  export type CommentReportUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentReportWhereUniqueInput
    update: XOR<CommentReportUpdateWithoutUserInput, CommentReportUncheckedUpdateWithoutUserInput>
    create: XOR<CommentReportCreateWithoutUserInput, CommentReportUncheckedCreateWithoutUserInput>
  }

  export type CommentReportUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentReportWhereUniqueInput
    data: XOR<CommentReportUpdateWithoutUserInput, CommentReportUncheckedUpdateWithoutUserInput>
  }

  export type CommentReportUpdateManyWithWhereWithoutUserInput = {
    where: CommentReportScalarWhereInput
    data: XOR<CommentReportUpdateManyMutationInput, CommentReportUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentReportScalarWhereInput = {
    AND?: CommentReportScalarWhereInput | CommentReportScalarWhereInput[]
    OR?: CommentReportScalarWhereInput[]
    NOT?: CommentReportScalarWhereInput | CommentReportScalarWhereInput[]
    id?: StringFilter<"CommentReport"> | string
    reason?: StringFilter<"CommentReport"> | string
    details?: StringNullableFilter<"CommentReport"> | string | null
    userId?: StringFilter<"CommentReport"> | string
    commentId?: StringFilter<"CommentReport"> | string
    status?: StringFilter<"CommentReport"> | string
    reviewedBy?: StringNullableFilter<"CommentReport"> | string | null
    reviewedAt?: DateTimeNullableFilter<"CommentReport"> | Date | string | null
    createdAt?: DateTimeFilter<"CommentReport"> | Date | string
    updatedAt?: DateTimeFilter<"CommentReport"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    lists?: ListCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
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
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    lists?: ListCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutContentsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    lists?: ListCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContentsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
  }

  export type FavoriteCreateWithoutContentInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutContentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutContentInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutContentInput, FavoriteUncheckedCreateWithoutContentInput>
  }

  export type FavoriteCreateManyContentInputEnvelope = {
    data: FavoriteCreateManyContentInput | FavoriteCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type ListItemCreateWithoutContentInput = {
    id?: string
    createdAt?: Date | string
    list: ListCreateNestedOneWithoutListItemsInput
  }

  export type ListItemUncheckedCreateWithoutContentInput = {
    id?: string
    listId: string
    createdAt?: Date | string
  }

  export type ListItemCreateOrConnectWithoutContentInput = {
    where: ListItemWhereUniqueInput
    create: XOR<ListItemCreateWithoutContentInput, ListItemUncheckedCreateWithoutContentInput>
  }

  export type ListItemCreateManyContentInputEnvelope = {
    data: ListItemCreateManyContentInput | ListItemCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type WatchedCreateWithoutContentInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchedInput
  }

  export type WatchedUncheckedCreateWithoutContentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type WatchedCreateOrConnectWithoutContentInput = {
    where: WatchedWhereUniqueInput
    create: XOR<WatchedCreateWithoutContentInput, WatchedUncheckedCreateWithoutContentInput>
  }

  export type WatchedCreateManyContentInputEnvelope = {
    data: WatchedCreateManyContentInput | WatchedCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutContentInput = {
    id?: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutContentInput = {
    id?: string
    rating: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutContentInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutContentInput, RatingUncheckedCreateWithoutContentInput>
  }

  export type RatingCreateManyContentInputEnvelope = {
    data: RatingCreateManyContentInput | RatingCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutContentInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeCreateNestedManyWithoutCommentInput
    reports?: CommentReportCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutContentInput = {
    id?: string
    text: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput
    reports?: CommentReportUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutContentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutContentInput, CommentUncheckedCreateWithoutContentInput>
  }

  export type CommentCreateManyContentInputEnvelope = {
    data: CommentCreateManyContentInput | CommentCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContentsInput = {
    update: XOR<UserUpdateWithoutContentsInput, UserUncheckedUpdateWithoutContentsInput>
    create: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentsInput, UserUncheckedUpdateWithoutContentsInput>
  }

  export type UserUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FavoriteUpsertWithWhereUniqueWithoutContentInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutContentInput, FavoriteUncheckedUpdateWithoutContentInput>
    create: XOR<FavoriteCreateWithoutContentInput, FavoriteUncheckedCreateWithoutContentInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutContentInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutContentInput, FavoriteUncheckedUpdateWithoutContentInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutContentInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutContentInput>
  }

  export type ListItemUpsertWithWhereUniqueWithoutContentInput = {
    where: ListItemWhereUniqueInput
    update: XOR<ListItemUpdateWithoutContentInput, ListItemUncheckedUpdateWithoutContentInput>
    create: XOR<ListItemCreateWithoutContentInput, ListItemUncheckedCreateWithoutContentInput>
  }

  export type ListItemUpdateWithWhereUniqueWithoutContentInput = {
    where: ListItemWhereUniqueInput
    data: XOR<ListItemUpdateWithoutContentInput, ListItemUncheckedUpdateWithoutContentInput>
  }

  export type ListItemUpdateManyWithWhereWithoutContentInput = {
    where: ListItemScalarWhereInput
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyWithoutContentInput>
  }

  export type ListItemScalarWhereInput = {
    AND?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
    OR?: ListItemScalarWhereInput[]
    NOT?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
    id?: StringFilter<"ListItem"> | string
    listId?: StringFilter<"ListItem"> | string
    contentId?: StringFilter<"ListItem"> | string
    createdAt?: DateTimeFilter<"ListItem"> | Date | string
  }

  export type WatchedUpsertWithWhereUniqueWithoutContentInput = {
    where: WatchedWhereUniqueInput
    update: XOR<WatchedUpdateWithoutContentInput, WatchedUncheckedUpdateWithoutContentInput>
    create: XOR<WatchedCreateWithoutContentInput, WatchedUncheckedCreateWithoutContentInput>
  }

  export type WatchedUpdateWithWhereUniqueWithoutContentInput = {
    where: WatchedWhereUniqueInput
    data: XOR<WatchedUpdateWithoutContentInput, WatchedUncheckedUpdateWithoutContentInput>
  }

  export type WatchedUpdateManyWithWhereWithoutContentInput = {
    where: WatchedScalarWhereInput
    data: XOR<WatchedUpdateManyMutationInput, WatchedUncheckedUpdateManyWithoutContentInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutContentInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutContentInput, RatingUncheckedUpdateWithoutContentInput>
    create: XOR<RatingCreateWithoutContentInput, RatingUncheckedCreateWithoutContentInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutContentInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutContentInput, RatingUncheckedUpdateWithoutContentInput>
  }

  export type RatingUpdateManyWithWhereWithoutContentInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutContentInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutContentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutContentInput, CommentUncheckedUpdateWithoutContentInput>
    create: XOR<CommentCreateWithoutContentInput, CommentUncheckedCreateWithoutContentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutContentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutContentInput, CommentUncheckedUpdateWithoutContentInput>
  }

  export type CommentUpdateManyWithWhereWithoutContentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutContentInput>
  }

  export type UserCreateWithoutFavoritesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    lists?: ListCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ContentCreateWithoutFavoritesInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutContentsInput
    listItems?: ListItemCreateNestedManyWithoutContentInput
    watched?: WatchedCreateNestedManyWithoutContentInput
    ratings?: RatingCreateNestedManyWithoutContentInput
    comments?: CommentCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutFavoritesInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedById: string
    listItems?: ListItemUncheckedCreateNestedManyWithoutContentInput
    watched?: WatchedUncheckedCreateNestedManyWithoutContentInput
    ratings?: RatingUncheckedCreateNestedManyWithoutContentInput
    comments?: CommentUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutFavoritesInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutFavoritesInput, ContentUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentUpsertWithoutFavoritesInput = {
    update: XOR<ContentUpdateWithoutFavoritesInput, ContentUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ContentCreateWithoutFavoritesInput, ContentUncheckedCreateWithoutFavoritesInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutFavoritesInput, ContentUncheckedUpdateWithoutFavoritesInput>
  }

  export type ContentUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutContentsNestedInput
    listItems?: ListItemUpdateManyWithoutContentNestedInput
    watched?: WatchedUpdateManyWithoutContentNestedInput
    ratings?: RatingUpdateManyWithoutContentNestedInput
    comments?: CommentUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedById?: StringFieldUpdateOperationsInput | string
    listItems?: ListItemUncheckedUpdateManyWithoutContentNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutContentNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutContentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutContentNestedInput
  }

  export type UserCreateWithoutWatchedInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    lists?: ListCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchedInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
  }

  export type ContentCreateWithoutWatchedInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutContentsInput
    favorites?: FavoriteCreateNestedManyWithoutContentInput
    listItems?: ListItemCreateNestedManyWithoutContentInput
    ratings?: RatingCreateNestedManyWithoutContentInput
    comments?: CommentCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutWatchedInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedById: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutContentInput
    listItems?: ListItemUncheckedCreateNestedManyWithoutContentInput
    ratings?: RatingUncheckedCreateNestedManyWithoutContentInput
    comments?: CommentUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutWatchedInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutWatchedInput, ContentUncheckedCreateWithoutWatchedInput>
  }

  export type UserUpsertWithoutWatchedInput = {
    update: XOR<UserUpdateWithoutWatchedInput, UserUncheckedUpdateWithoutWatchedInput>
    create: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchedInput, UserUncheckedUpdateWithoutWatchedInput>
  }

  export type UserUpdateWithoutWatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentUpsertWithoutWatchedInput = {
    update: XOR<ContentUpdateWithoutWatchedInput, ContentUncheckedUpdateWithoutWatchedInput>
    create: XOR<ContentCreateWithoutWatchedInput, ContentUncheckedCreateWithoutWatchedInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutWatchedInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutWatchedInput, ContentUncheckedUpdateWithoutWatchedInput>
  }

  export type ContentUpdateWithoutWatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutContentsNestedInput
    favorites?: FavoriteUpdateManyWithoutContentNestedInput
    listItems?: ListItemUpdateManyWithoutContentNestedInput
    ratings?: RatingUpdateManyWithoutContentNestedInput
    comments?: CommentUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutWatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedById?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutContentNestedInput
    listItems?: ListItemUncheckedUpdateManyWithoutContentNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutContentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutContentNestedInput
  }

  export type UserCreateWithoutListsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
  }

  export type ListItemCreateWithoutListInput = {
    id?: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutListItemsInput
  }

  export type ListItemUncheckedCreateWithoutListInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type ListItemCreateOrConnectWithoutListInput = {
    where: ListItemWhereUniqueInput
    create: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput>
  }

  export type ListItemCreateManyListInputEnvelope = {
    data: ListItemCreateManyListInput | ListItemCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListsInput = {
    update: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
  }

  export type UserUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ListItemUpsertWithWhereUniqueWithoutListInput = {
    where: ListItemWhereUniqueInput
    update: XOR<ListItemUpdateWithoutListInput, ListItemUncheckedUpdateWithoutListInput>
    create: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput>
  }

  export type ListItemUpdateWithWhereUniqueWithoutListInput = {
    where: ListItemWhereUniqueInput
    data: XOR<ListItemUpdateWithoutListInput, ListItemUncheckedUpdateWithoutListInput>
  }

  export type ListItemUpdateManyWithWhereWithoutListInput = {
    where: ListItemScalarWhereInput
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyWithoutListInput>
  }

  export type ListCreateWithoutListItemsInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutListsInput
  }

  export type ListUncheckedCreateWithoutListItemsInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListCreateOrConnectWithoutListItemsInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutListItemsInput, ListUncheckedCreateWithoutListItemsInput>
  }

  export type ContentCreateWithoutListItemsInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutContentsInput
    favorites?: FavoriteCreateNestedManyWithoutContentInput
    watched?: WatchedCreateNestedManyWithoutContentInput
    ratings?: RatingCreateNestedManyWithoutContentInput
    comments?: CommentCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutListItemsInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedById: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutContentInput
    watched?: WatchedUncheckedCreateNestedManyWithoutContentInput
    ratings?: RatingUncheckedCreateNestedManyWithoutContentInput
    comments?: CommentUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutListItemsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutListItemsInput, ContentUncheckedCreateWithoutListItemsInput>
  }

  export type ListUpsertWithoutListItemsInput = {
    update: XOR<ListUpdateWithoutListItemsInput, ListUncheckedUpdateWithoutListItemsInput>
    create: XOR<ListCreateWithoutListItemsInput, ListUncheckedCreateWithoutListItemsInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutListItemsInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutListItemsInput, ListUncheckedUpdateWithoutListItemsInput>
  }

  export type ListUpdateWithoutListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListsNestedInput
  }

  export type ListUncheckedUpdateWithoutListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUpsertWithoutListItemsInput = {
    update: XOR<ContentUpdateWithoutListItemsInput, ContentUncheckedUpdateWithoutListItemsInput>
    create: XOR<ContentCreateWithoutListItemsInput, ContentUncheckedCreateWithoutListItemsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutListItemsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutListItemsInput, ContentUncheckedUpdateWithoutListItemsInput>
  }

  export type ContentUpdateWithoutListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutContentsNestedInput
    favorites?: FavoriteUpdateManyWithoutContentNestedInput
    watched?: WatchedUpdateManyWithoutContentNestedInput
    ratings?: RatingUpdateManyWithoutContentNestedInput
    comments?: CommentUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedById?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutContentNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutContentNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutContentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutContentNestedInput
  }

  export type UserCreateWithoutRatingsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    lists?: ListCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type ContentCreateWithoutRatingsInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutContentsInput
    favorites?: FavoriteCreateNestedManyWithoutContentInput
    listItems?: ListItemCreateNestedManyWithoutContentInput
    watched?: WatchedCreateNestedManyWithoutContentInput
    comments?: CommentCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutRatingsInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedById: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutContentInput
    listItems?: ListItemUncheckedCreateNestedManyWithoutContentInput
    watched?: WatchedUncheckedCreateNestedManyWithoutContentInput
    comments?: CommentUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutRatingsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutRatingsInput, ContentUncheckedCreateWithoutRatingsInput>
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentUpsertWithoutRatingsInput = {
    update: XOR<ContentUpdateWithoutRatingsInput, ContentUncheckedUpdateWithoutRatingsInput>
    create: XOR<ContentCreateWithoutRatingsInput, ContentUncheckedCreateWithoutRatingsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutRatingsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutRatingsInput, ContentUncheckedUpdateWithoutRatingsInput>
  }

  export type ContentUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutContentsNestedInput
    favorites?: FavoriteUpdateManyWithoutContentNestedInput
    listItems?: ListItemUpdateManyWithoutContentNestedInput
    watched?: WatchedUpdateManyWithoutContentNestedInput
    comments?: CommentUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedById?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutContentNestedInput
    listItems?: ListItemUncheckedUpdateManyWithoutContentNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutContentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutContentNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    lists?: ListCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ContentCreateWithoutCommentsInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutContentsInput
    favorites?: FavoriteCreateNestedManyWithoutContentInput
    listItems?: ListItemCreateNestedManyWithoutContentInput
    watched?: WatchedCreateNestedManyWithoutContentInput
    ratings?: RatingCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    addedById: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutContentInput
    listItems?: ListItemUncheckedCreateNestedManyWithoutContentInput
    watched?: WatchedUncheckedCreateNestedManyWithoutContentInput
    ratings?: RatingUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutCommentsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutCommentsInput, ContentUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    content: ContentCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    commentLikes?: CommentLikeCreateNestedManyWithoutCommentInput
    reports?: CommentReportCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    text: string
    userId: string
    contentId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput
    reports?: CommentReportUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    content: ContentCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeCreateNestedManyWithoutCommentInput
    reports?: CommentReportCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    text: string
    userId: string
    contentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput
    reports?: CommentReportUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type CommentLikeCreateWithoutCommentInput = {
    id?: string
    isLike: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentLikesInput
  }

  export type CommentLikeUncheckedCreateWithoutCommentInput = {
    id?: string
    userId: string
    isLike: boolean
    createdAt?: Date | string
  }

  export type CommentLikeCreateOrConnectWithoutCommentInput = {
    where: CommentLikeWhereUniqueInput
    create: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput>
  }

  export type CommentLikeCreateManyCommentInputEnvelope = {
    data: CommentLikeCreateManyCommentInput | CommentLikeCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type CommentReportCreateWithoutCommentInput = {
    id?: string
    reason: string
    details?: string | null
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentReportsInput
  }

  export type CommentReportUncheckedCreateWithoutCommentInput = {
    id?: string
    reason: string
    details?: string | null
    userId: string
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentReportCreateOrConnectWithoutCommentInput = {
    where: CommentReportWhereUniqueInput
    create: XOR<CommentReportCreateWithoutCommentInput, CommentReportUncheckedCreateWithoutCommentInput>
  }

  export type CommentReportCreateManyCommentInputEnvelope = {
    data: CommentReportCreateManyCommentInput | CommentReportCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentUpsertWithoutCommentsInput = {
    update: XOR<ContentUpdateWithoutCommentsInput, ContentUncheckedUpdateWithoutCommentsInput>
    create: XOR<ContentCreateWithoutCommentsInput, ContentUncheckedCreateWithoutCommentsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutCommentsInput, ContentUncheckedUpdateWithoutCommentsInput>
  }

  export type ContentUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutContentsNestedInput
    favorites?: FavoriteUpdateManyWithoutContentNestedInput
    listItems?: ListItemUpdateManyWithoutContentNestedInput
    watched?: WatchedUpdateManyWithoutContentNestedInput
    ratings?: RatingUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedById?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutContentNestedInput
    listItems?: ListItemUncheckedUpdateManyWithoutContentNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutContentNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutContentNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    content?: ContentUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type CommentLikeUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentLikeWhereUniqueInput
    update: XOR<CommentLikeUpdateWithoutCommentInput, CommentLikeUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput>
  }

  export type CommentLikeUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentLikeWhereUniqueInput
    data: XOR<CommentLikeUpdateWithoutCommentInput, CommentLikeUncheckedUpdateWithoutCommentInput>
  }

  export type CommentLikeUpdateManyWithWhereWithoutCommentInput = {
    where: CommentLikeScalarWhereInput
    data: XOR<CommentLikeUpdateManyMutationInput, CommentLikeUncheckedUpdateManyWithoutCommentInput>
  }

  export type CommentReportUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentReportWhereUniqueInput
    update: XOR<CommentReportUpdateWithoutCommentInput, CommentReportUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentReportCreateWithoutCommentInput, CommentReportUncheckedCreateWithoutCommentInput>
  }

  export type CommentReportUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentReportWhereUniqueInput
    data: XOR<CommentReportUpdateWithoutCommentInput, CommentReportUncheckedUpdateWithoutCommentInput>
  }

  export type CommentReportUpdateManyWithWhereWithoutCommentInput = {
    where: CommentReportScalarWhereInput
    data: XOR<CommentReportUpdateManyMutationInput, CommentReportUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutCommentLikesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    lists?: ListCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentReports?: CommentReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentLikesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentReports?: CommentReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentLikesInput, UserUncheckedCreateWithoutCommentLikesInput>
  }

  export type CommentCreateWithoutCommentLikesInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    content: ContentCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    reports?: CommentReportCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutCommentLikesInput = {
    id?: string
    text: string
    userId: string
    contentId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    reports?: CommentReportUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutCommentLikesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentLikesInput, CommentUncheckedCreateWithoutCommentLikesInput>
  }

  export type UserUpsertWithoutCommentLikesInput = {
    update: XOR<UserUpdateWithoutCommentLikesInput, UserUncheckedUpdateWithoutCommentLikesInput>
    create: XOR<UserCreateWithoutCommentLikesInput, UserUncheckedCreateWithoutCommentLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentLikesInput, UserUncheckedUpdateWithoutCommentLikesInput>
  }

  export type UserUpdateWithoutCommentLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentReports?: CommentReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutCommentLikesInput = {
    update: XOR<CommentUpdateWithoutCommentLikesInput, CommentUncheckedUpdateWithoutCommentLikesInput>
    create: XOR<CommentCreateWithoutCommentLikesInput, CommentUncheckedCreateWithoutCommentLikesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutCommentLikesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutCommentLikesInput, CommentUncheckedUpdateWithoutCommentLikesInput>
  }

  export type CommentUpdateWithoutCommentLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    content?: ContentUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    reports?: CommentReportUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutCommentLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    reports?: CommentReportUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type UserCreateWithoutCommentReportsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    lists?: ListCreateNestedManyWithoutUserInput
    watched?: WatchedCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentReportsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    bio?: string | null
    location?: string | null
    twitter?: string | null
    instagram?: string | null
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutAddedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    lists?: ListUncheckedCreateNestedManyWithoutUserInput
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentReportsInput, UserUncheckedCreateWithoutCommentReportsInput>
  }

  export type CommentCreateWithoutReportsInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    content: ContentCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutReportsInput = {
    id?: string
    text: string
    userId: string
    contentId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    commentLikes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutReportsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutReportsInput, CommentUncheckedCreateWithoutReportsInput>
  }

  export type UserUpsertWithoutCommentReportsInput = {
    update: XOR<UserUpdateWithoutCommentReportsInput, UserUncheckedUpdateWithoutCommentReportsInput>
    create: XOR<UserCreateWithoutCommentReportsInput, UserUncheckedCreateWithoutCommentReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentReportsInput, UserUncheckedUpdateWithoutCommentReportsInput>
  }

  export type UserUpdateWithoutCommentReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    lists?: ListUpdateManyWithoutUserNestedInput
    watched?: WatchedUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutAddedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutReportsInput = {
    update: XOR<CommentUpdateWithoutReportsInput, CommentUncheckedUpdateWithoutReportsInput>
    create: XOR<CommentCreateWithoutReportsInput, CommentUncheckedCreateWithoutReportsInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutReportsInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutReportsInput, CommentUncheckedUpdateWithoutReportsInput>
  }

  export type CommentUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    content?: ContentUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ContentCreateManyAddedByInput = {
    id?: string
    title: string
    summary: string
    type: $Enums.ContentType
    releaseYear: number
    trailerUrl?: string | null
    image?: string | null
    director: string
    actors?: ContentCreateactorsInput | string[]
    genres?: ContentCreategenresInput | string[]
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type ListCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchedCreateManyUserInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type RatingCreateManyUserInput = {
    id?: string
    rating: number
    contentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    text: string
    contentId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentLikeCreateManyUserInput = {
    id?: string
    commentId: string
    isLike: boolean
    createdAt?: Date | string
  }

  export type CommentReportCreateManyUserInput = {
    id?: string
    reason: string
    details?: string | null
    commentId: string
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUpdateManyWithoutContentNestedInput
    listItems?: ListItemUpdateManyWithoutContentNestedInput
    watched?: WatchedUpdateManyWithoutContentNestedInput
    ratings?: RatingUpdateManyWithoutContentNestedInput
    comments?: CommentUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutContentNestedInput
    listItems?: ListItemUncheckedUpdateManyWithoutContentNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutContentNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutContentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    releaseYear?: IntFieldUpdateOperationsInput | number
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    director?: StringFieldUpdateOperationsInput | string
    actors?: ContentUpdateactorsInput | string[]
    genres?: ContentUpdategenresInput | string[]
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listItems?: ListItemUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listItems?: ListItemUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type WatchedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateOneRequiredWithoutCommentLikesNestedInput
  }

  export type CommentLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateOneRequiredWithoutReportsNestedInput
  }

  export type CommentReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyContentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ListItemCreateManyContentInput = {
    id?: string
    listId: string
    createdAt?: Date | string
  }

  export type WatchedCreateManyContentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type RatingCreateManyContentInput = {
    id?: string
    rating: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyContentInput = {
    id?: string
    text: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListItemUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutListItemsNestedInput
  }

  export type ListItemUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListItemUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type WatchedUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListItemCreateManyListInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type ListItemUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutListItemsNestedInput
  }

  export type ListItemUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListItemUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentInput = {
    id?: string
    text: string
    userId: string
    contentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentLikeCreateManyCommentInput = {
    id?: string
    userId: string
    isLike: boolean
    createdAt?: Date | string
  }

  export type CommentReportCreateManyCommentInput = {
    id?: string
    reason: string
    details?: string | null
    userId: string
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    content?: ContentUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    commentLikes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput
    reports?: CommentReportUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentLikeUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentLikesNestedInput
  }

  export type CommentLikeUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentLikeUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReportUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentReportsNestedInput
  }

  export type CommentReportUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReportUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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