# TypeScript Glossary

A comprehensive reference of TypeScript terminology used throughout the course.

## A

### Abstract Class
A class that cannot be instantiated directly and may contain abstract methods that must be implemented by derived classes.

```typescript
abstract class Animal {
  abstract makeSound(): void;
}
```

### Any Type
A type that disables type checking, allowing any value. Should be avoided in favor of `unknown`.

```typescript
let value: any = 'hello';
value = 42; // No error
```

### Assertion (Type Assertion)
Telling TypeScript to treat a value as a specific type, overriding its inference.

```typescript
const input = document.getElementById('input') as HTMLInputElement;
```

## B

### Branded Type
A technique to create distinct types from primitives to prevent mixing incompatible values.

```typescript
type UserId = string & { readonly brand: unique symbol };
```

## C

### Conditional Type
A type that selects one of two possible types based on a condition.

```typescript
type IsString<T> = T extends string ? true : false;
```

### Const Assertion
Using `as const` to create readonly, literal types.

```typescript
const colors = ['red', 'green', 'blue'] as const;
```

### Constructor
A special method for initializing class instances.

```typescript
class User {
  constructor(public name: string) {}
}
```

## D

### Declaration File (.d.ts)
A file containing type declarations without implementation, used for typing JavaScript libraries.

### Discriminated Union
A union type with a common property (discriminant) used to narrow types.

```typescript
type Result = 
  | { success: true; data: string }
  | { success: false; error: string };
```

### DTO (Data Transfer Object)
An object that carries data between processes, often with specific type definitions.

## E

### Enum
A way to define a set of named constants.

```typescript
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}
```

### Extends
Keyword used for inheritance (classes) or constraints (generics).

```typescript
interface Admin extends User {
  permissions: string[];
}
```

## F

### Function Overload
Defining multiple function signatures for the same function.

```typescript
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return String(value);
}
```

## G

### Generic
A type parameter that allows creating reusable, type-safe components.

```typescript
function identity<T>(value: T): T {
  return value;
}
```

### Generic Constraint
Restricting what types can be used with a generic parameter.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

## I

### Index Signature
Defining types for object properties with dynamic keys.

```typescript
interface StringMap {
  [key: string]: string;
}
```

### Inference
TypeScript's ability to automatically determine types without explicit annotations.

```typescript
const num = 42; // Inferred as number
```

### Interface
A way to define the shape of an object.

```typescript
interface User {
  id: string;
  name: string;
}
```

### Intersection Type
Combining multiple types into one using `&`.

```typescript
type Admin = User & { permissions: string[] };
```

## K

### Keyof
An operator that produces a union of an object's keys.

```typescript
type UserKeys = keyof User; // 'id' | 'name'
```

## L

### Literal Type
A type that represents a specific value.

```typescript
type Direction = 'north' | 'south' | 'east' | 'west';
```

## M

### Mapped Type
Creating new types by transforming properties of existing types.

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

### Module
A file with its own scope, using import/export for code organization.

## N

### Narrowing
Refining a type to a more specific type through type guards or checks.

```typescript
if (typeof value === 'string') {
  // value is narrowed to string here
}
```

### Never Type
A type representing values that never occur, often used for exhaustive checks.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

### Nominal Typing
Type compatibility based on explicit declarations (opposite of structural typing).

### Null
A value representing the intentional absence of any object value.

### Nullable
A type that can be null or undefined.

```typescript
type Nullable<T> = T | null | undefined;
```

## O

### Optional Property
A property that may or may not exist on an object.

```typescript
interface User {
  name: string;
  email?: string; // Optional
}
```

### Overload (Function Overload)
See Function Overload.

## P

### Parameter Properties
Shorthand for declaring and initializing class properties in the constructor.

```typescript
class User {
  constructor(public name: string, private age: number) {}
}
```

### Partial
A utility type that makes all properties optional.

```typescript
type PartialUser = Partial<User>;
```

### Pick
A utility type that selects specific properties from a type.

```typescript
type UserName = Pick<User, 'name'>;
```

### Predicate (Type Predicate)
A function return type that narrows the type of a parameter.

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
```

### Primitive Types
Basic types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

## R

### Readonly
A modifier that prevents property reassignment.

```typescript
interface User {
  readonly id: string;
}
```

### Record
A utility type for creating an object type with specific keys and value types.

```typescript
type UserMap = Record<string, User>;
```

### Rest Parameters
Collecting multiple function arguments into an array.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

### Return Type
The type of value a function returns.

```typescript
type Result = ReturnType<typeof myFunction>;
```

## S

### Satisfies
An operator that validates a value matches a type without widening it.

```typescript
const config = { port: 3000 } satisfies Config;
```

### Strict Mode
TypeScript compiler options that enable stricter type checking.

### Structural Typing
Type compatibility based on structure rather than explicit declarations.

### Subtype
A type that is more specific than another type.

## T

### Template Literal Type
Creating types using template literal syntax.

```typescript
type EventName = `on${Capitalize<string>}`;
```

### Tuple
An array with a fixed number of elements of specific types.

```typescript
type Point = [number, number];
```

### Type Alias
Creating a new name for a type.

```typescript
type ID = string | number;
```

### Type Assertion
See Assertion.

### Type Guard
A runtime check that narrows types.

```typescript
function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null && 'id' in value;
}
```

### Type Inference
See Inference.

### Type Parameter
A placeholder for a type in generics.

```typescript
function identity<T>(value: T): T {
  return value;
}
```

### Typeof
An operator that gets the type of a value.

```typescript
const user = { name: 'Alice' };
type User = typeof user;
```

## U

### Undefined
A primitive value automatically assigned to uninitialized variables.

### Union Type
A type that can be one of several types, using `|`.

```typescript
type ID = string | number;
```

### Unknown Type
A type-safe alternative to `any` that requires type checking before use.

```typescript
function process(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
}
```

### Utility Type
Built-in TypeScript types for common type transformations (Partial, Pick, Omit, etc.).

## V

### Void
A type representing the absence of a return value.

```typescript
function log(message: string): void {
  console.log(message);
}
```

## W

### Widening
TypeScript's behavior of inferring more general types from literals.

```typescript
let x = 'hello'; // Type: string (widened from 'hello')
```

## Additional Resources

- [Official TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)

---

**Note:** This glossary is a living document. As you progress through the course, refer back to these definitions to reinforce your understanding.
